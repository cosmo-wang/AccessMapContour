window.onload = function() {

  const maxCost = 301;
  const breaks = linspace(0, maxCost - 1, 7);
  console.log(breaks);
  const colors = ["#08306b", "#08519c", "#2171b5", "#4292c6", "#6baed6", "#9ecae1", "#c6dbef"];
  const interpolateDist = 0.005;
  const interpolateWeight = 3;
  let marker = null;
  class MyRBush extends rbush {
    toBBox(trig) {
      let bbox = turf.bbox(trig);
      return {
        minX: bbox[0],
        minY: bbox[1],
        maxX: bbox[2],
        maxY: bbox[3]
      };
    }
    compareMinX(a, b) {
      let aMinX = turf.bbox(a)[0];
      let bMinX = turf.bbox(b)[0];
      return aMinX - bMinX; 
    }
    compareMinY(a, b) {
      let aMinY = turf.bbox(a)[1];
      let bMinY = turf.bbox(b)[1];
      return aMinY - bMinY; 
    }
  }
  
  mapboxgl.accessToken = 'pk.eyJ1IjoiY29zbW93YW5nIiwiYSI6ImNqdWl0bG50ODFlZ2w0ZnBnc3VyejZmbWQifQ.5TjxQgPSj6B7VcFkvSfqBA';
  // add the map to the page
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-122.3155224, 47.6583362],
    zoom: 15
  });
  // add a marker on the map when clicked
  // draw the cost contour around the clicked point
  map.on('click', function(loc){
    let lng = loc.lngLat["lng"];
    let lat = loc.lngLat["lat"];
    if (marker != null) {
      marker.remove();
    }
    marker = addMarker(lng, lat);
    let url = "http://localhost:8000/reachable/default.json?lon=" + lng 
              + "&lat=" + lat + "&maxCost=" + maxCost;
    fetch(url)
      .then(res => res.json())
      .then(drawContours);
  });

  let toggleableLayerIds = [ 'routes', 'dataPoints', 'interpolatedPoints', 'triangles', 'hull', 'pointGrid' ];

  for (let i = 0; i < toggleableLayerIds.length; i++) {
    let id = toggleableLayerIds[i];
    
    let link = document.createElement('a');
    link.href = '#';
    link.className = 'inactive';
    link.textContent = id;
    
    link.onclick = function (e) {
      let clickedLayer = this.textContent;
      e.preventDefault();
      e.stopPropagation();
      
      let visibility = map.getLayoutProperty(clickedLayer, 'visibility');
      
      if (visibility === 'visible') {
        map.setLayoutProperty(clickedLayer, 'visibility', 'none');
        this.className = '';
      } else {
        this.className = 'active';
        map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
      }
    };
    
    let layers = document.getElementById('menu');
    layers.appendChild(link);
  }

  /***********************************************/
  /*********** INTERPOLATION FUNCTIONS ***********/
  /***********************************************/

  function linspace(a,b,n) {
    if(typeof n === "undefined") n = Math.max(Math.round(b-a)+1,1);
    if(n<2) { return n===1?[a]:[]; }
    var i,ret = Array(n);
    n--;
    for(i=n;i>=0;i--) { ret[i] = (i*b+(n-i)*a)/n; }
    ret = ret.map(p => Math.round(p));
    return ret;
  }

  /**
   * Takes in a GeoJSON of a feature collection of points
   * and a feature collection of edges whose starting and
   * end points are the other collection of points.
   * Preinterpolate some points along the edges. Distance
   * between the interpolated points. in kilometers,  can
   * be specified as parameters, default to 0.02 kilometers.
   * @param {GeoJSON} dataPoints GeoJSON of points and edges
   * @param {double} dist distance between interpolated points
   * @return {GeoJSON} a feature collection of points of
   *                   both the orginal points and the new points
   */
  function preInterlopate(dataPoints, dist = 0.02) {
    let points = dataPoints.node_costs.features;
    let edges = dataPoints.edges.features;
    for (let i = 0; i < Object.keys(edges).length; i++) {
      let length = turf.length(edges[i].geometry);
      let coords = edges[i].geometry.coordinates;
      let n = Math.max(parseInt(length / dist), 2);
      let interpolatedPoints = turf.points(interpolateLineRange(coords, n)).features;
      points = points.concat(interpolatedPoints.slice(1, interpolatedPoints.length - 1));
    }
    return turf.featureCollection(points);
  }

  /**
   * Interpolate and produce a point grid based on given
   * data points by first triangulizing the given data points
   * and using IDW to interpolate cost of each grid point 
   * within each triangle.
   * @param {GeoJSON} data a feature collection of points
   *                       with a property cost
   * @param {GeoJSON} points a feature collection of points
   *                         with property cost to be interpolated
   * @return - A point grid in GeoJSON format
   */
  function triangleInterpolate(data, points, weight = interpolateWeight) {
    let trigs = turf.tin(data, 'cost');
    let hull = turf.convex(data);
    addTriangles("hull", hull, false);
    // construct and load a custom RBush tree that
    // accepts GeoJSON triangles for fast look up
    const tree = new MyRBush();
    tree.load(trigs.features);

    // loop through each point in the point grid
    // interpolate the cost at that point using
    // IDW on the vertices of the triangle that
    // contains the point
    for (let i = 0; i < points.features.length; i++) {
      let point = points.features[i];
      if (!turf.booleanPointInPolygon(point, hull)) {
        point.properties.cost = maxCost + 10;
      } else {
        let targetRegion = tree.search({
          minX: point.geometry.coordinates[0],
          minY: point.geometry.coordinates[1],
          maxX: point.geometry.coordinates[0],
          maxY: point.geometry.coordinates[1]
        });
        for (let j = 0; j < targetRegion.length; j++) {
          let trig = targetRegion[j];
          if (turf.booleanPointInPolygon(point, trig)) {
            point.properties.cost = trigIDW(point, trig, weight);
            break;
          }
        }
      }
    }
    return points;
  }

  /**
   * Given a single point and the triangle that the point is in.
   * Use IDW to interpolate the cost of the point by the vertices
   * of the triangle.
   * @param {GeoJSON} point: the point to interpolate
   * @param {GeoJSON} trig: a triangle polygon
   * @return - the interpolated value of the point
   */
  function trigIDW(point, trig, weight) {
    let zw = 0;
    let sw = 0;

    let dataPoints = trig.geometry.coordinates[0];
    let dataCosts = [trig.properties["a"], trig.properties["b"], trig.properties["c"]];

    for (let i = 0; i < 3; i++) {
      let d = turf.distance(point, turf.point(dataPoints[i]));
      if (d === 0) {
        return dataCosts[i];
      }
      let w = 1.0 / Math.pow(d, weight);
      sw += w;
      zw += w * dataCosts[i];
    }
    return zw / sw;
  }

  /***********************************************/
  /************** LINE INTERPOLATION *************/
  /***********************************************/

  /**
   * @param {Point} pt1
   * @param {Point} pt1
   * @return number The Euclidean distance between `pt1` and `pt2`.
   */
  function distance( pt1, pt2 ){
    var deltaX = pt1[0] - pt2[0];
    var deltaY = pt1[1] - pt2[1];
    return Math.sqrt( deltaX * deltaX + deltaY * deltaY );
  }

  /**
   * @param {Point} point The Point object to offset.
   * @param {number} dx The delta-x of the line segment from which `point` will
   *    be offset.
   * @param {number} dy The delta-y of the line segment from which `point` will
   *    be offset.
   * @param {number} distRatio The quotient of the distance to offset `point`
   *    by and the distance of the line segment from which it is being offset.
   */
  function offsetPoint( point, dx, dy, distRatio ){
    return [
      point[ 0 ] - dy * distRatio,
      point[ 1 ] + dx * distRatio
    ];
  }

  /**
   * @param {array of Point} ctrlPoints The vertices of the (multi-segment) line
   *      to be interpolate along.
   * @param {int} number The number of points to interpolate along the line; this
   *      includes the endpoints, and has an effective minimum value of 2 (if a
   *      smaller number is given, then the endpoints will still be returned).
   * @param {number} [offsetDist] An optional perpendicular distance to offset
   *      each point from the line-segment it would otherwise lie on.
   * @param {int} [minGap] An optional minimum gap to maintain between subsequent
   *      interpolated points; if the projected gap between subsequent points for
   *      a set of `number` points is lower than this value, `number` will be
   *      decreased to a suitable value.
   */
  function interpolateLineRange( ctrlPoints, number, offsetDist, minGap ){
    minGap = minGap || 0;
    offsetDist = offsetDist || 0;

    // Calculate path distance from each control point (vertex) to the beginning
    // of the line, and also the ratio of `offsetDist` to the length of every
    // line segment, for use in computing offsets.
    var totalDist = 0;
    var ctrlPtDists = [ 0 ];
    var ptOffsetRatios = [];
    for( var pt = 1; pt < ctrlPoints.length; pt++ ){
      var dist = distance( ctrlPoints[ pt ], ctrlPoints[ pt - 1 ] );
      totalDist += dist;
      ptOffsetRatios.push( offsetDist / dist );
      ctrlPtDists.push( totalDist );
    }

    if( totalDist / (number - 1) < minGap ){
      number = totalDist / minGap + 1;
    }

    // Variables used to control interpolation.
    var step = totalDist / (number - 1);
    var interpPoints = [ offsetPoint(
      ctrlPoints[ 0 ],
      ctrlPoints[ 1 ][ 0 ] - ctrlPoints[ 0 ][ 0 ],
      ctrlPoints[ 1 ][ 1 ] - ctrlPoints[ 0 ][ 1 ],
      ptOffsetRatios[ 0 ]
    )];
    var prevCtrlPtInd = 0;
    var currDist = 0;
    var currPoint = ctrlPoints[ 0 ];
    var nextDist = step;

    for( pt = 0; pt < number - 2; pt++ ){
      // Find the segment in which the next interpolated point lies.
      while( nextDist > ctrlPtDists[ prevCtrlPtInd + 1 ] ){
        prevCtrlPtInd++;
        currDist = ctrlPtDists[ prevCtrlPtInd ];
        currPoint = ctrlPoints[ prevCtrlPtInd ];
      }

      // Interpolate the coordinates of the next point along the current segment.
      var remainingDist = nextDist - currDist;
      var ctrlPtsDeltaX = ctrlPoints[ prevCtrlPtInd + 1 ][ 0 ] -
        ctrlPoints[ prevCtrlPtInd ][ 0 ];
      var ctrlPtsDeltaY = ctrlPoints[ prevCtrlPtInd + 1 ][ 1 ] -
        ctrlPoints[ prevCtrlPtInd ][ 1 ];
      var ctrlPtsDist = ctrlPtDists[ prevCtrlPtInd + 1 ] -
        ctrlPtDists[ prevCtrlPtInd ];
      var distRatio = remainingDist / ctrlPtsDist;

      currPoint = [
        currPoint[ 0 ] + ctrlPtsDeltaX * distRatio,
        currPoint[ 1 ] + ctrlPtsDeltaY * distRatio
      ];

      // Offset currPoint according to `offsetDist`.
      var offsetRatio = offsetDist / ctrlPtsDist;
      interpPoints.push( offsetPoint(
        currPoint, ctrlPtsDeltaX, ctrlPtsDeltaY, ptOffsetRatios[ prevCtrlPtInd ])
      );
      // console.log(currDist);

      currDist = nextDist;
      nextDist += step;
    }

    interpPoints.push( offsetPoint(
      ctrlPoints[ ctrlPoints.length - 1 ],
      ctrlPoints[ ctrlPoints.length - 1 ][ 0 ] -
        ctrlPoints[ ctrlPoints.length - 2 ][ 0 ],
      ctrlPoints[ ctrlPoints.length - 1 ][ 1 ] -
        ctrlPoints[ ctrlPoints.length - 2 ][ 1 ],
      ptOffsetRatios[ ptOffsetRatios.length - 1 ]
    ));
    return interpPoints;
  }

  
  /***********************************************/
  /**************** MAP FUNCTIONS ****************/
  /***********************************************/

  /**
   * Adds a Mapbox Marker at given longitude and latitude.
   * @param {double} lng - longitude of the position
   * @param {double} lat - latitude of the position
   * @return - A Mapbox Marker at the given position
   */
  function addMarker(lng, lat) {
    return new mapboxgl.Marker()
              .setLngLat([lng, lat])
              .setDraggable(false)
              .addTo(map);
  }

  function addRoutes(data) {
    if (map.getLayer("routes")) {
        map.removeLayer("routes");
        map.removeSource("routes");
      }
    map.addLayer({
      "id": "routes",
      "type": "line",
      "source": {
        "type": "geojson",
        "data": data.edges
      },
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#888",
        "line-width": 8
      }
    });
    map.setLayoutProperty("routes", 'visibility', 'none');
    return data;
  }

  /**
   * Draws contours starting from a origin based on given data points.
   * @param {GeoJSON} dataPoints - A feature collection of points with 
   *                               a property cost represents the cost 
   *                               of getting to the point from origin
   */
  function drawContours(dataPoints) {
    console.time("timer");

    addRoutes(dataPoints);

    // add the data points layer
    addPointsLayer("dataPoints", dataPoints.node_costs, 10, false);

    let interpolatedPoints = triangleInterpolate(dataPoints.node_costs, preInterlopate(dataPoints));

    addTriangles("triangles", turf.tin(interpolatedPoints, "cost"), false);

    addPointsLayer("interpolatedPoints", interpolatedPoints, 5, false);

    let pointGrid = turf.pointGrid(turf.bbox(dataPoints.node_costs), interpolateDist);
    pointGrid = triangleInterpolate(interpolatedPoints, pointGrid);

    pointGrid.features = pointGrid.features.filter(p => p.properties.cost);

    addPointsLayer("pointGrid", pointGrid, 2, false);

    let contours = turf.isobands(pointGrid, breaks, {zProperty: "cost"});
    // addContourLayers("contours", contours, colors);
    console.timeEnd("timer");
  }

  /**
   * Add several layers of contours to the map with given id,
   * using the contour source and colors given.
   * @param {string} id - id of the contour, each layer of the contour
   *                      has id in the form "id + i", where i is an int
   * @param {string[]} colors - colors for each layer of the contour
   */
  function addContourLayers(id, source, colors) {
    for (let i = 0; i < source.features.length; i++) {
      let layerID = id + i;
      if (map.getLayer(layerID)) {
        map.removeLayer(layerID);
        map.removeSource(layerID);
      }
      map.addLayer({
        "id": layerID,
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": source.features[i]
        },
        "paint": {
          "fill-color": colors[i],
          "fill-opacity": 0.5
        }
      });
    }
  }

  function addTriangles(id, source, visible) {
    if (map.getLayer(id)) {
      map.removeLayer(id);
      map.removeSource(id);
    }
    map.addLayer({
      "id": id,
      "type": "line",
      "source": {
        "type": "geojson",
        "data": source
      }
    });
    if (!visible) {
      map.setLayoutProperty(id, 'visibility', 'none');
    }
  }

  function addPointsLayer(id, source, pointRadius, visible) {
    if (map.getLayer(id)) {
      map.removeLayer(id);
      map.removeSource(id);
    }
    map.addLayer({
      "id": id,
      "type": "circle",
      "source": {
        "type": "geojson",
        "data": source
      },
      "paint": {
        "circle-radius": pointRadius,
        "circle-color": [
          "case",
          [">=", ["get", "cost"], maxCost],
          "red",
          [
            "interpolate",
            ["linear"],
            ["get", "cost"],
            0, "#08306b",
            50, "#08519c",
            100, "#2171b5",
            150, "#4292c6",
            200, "#6baed6",
            250, "#9ecae1",
            300, "#c6dbef"
          ]
        ]
      }
    });
    if (!visible) {
      map.setLayoutProperty(id, 'visibility', 'none');
    }
  }
};
