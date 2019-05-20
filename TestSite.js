// some constants
window.onload = function() {

  const maxCost = 300;
  const breaks = [0, 50, 100, 150, 200, 250, 299];
  const colors = ["#08306b", "#08519c", "#2171b5", "#4292c6", "#6baed6", "#9ecae1", "#c6dbef"];
  const idwColors = ["#67001f", "#980043", "#ce1256", "#e7298a", "#df65b0", "#c994c7", "#d4b9da"];
  const interpolateDist = 0.01;
  const interpolateWeight = 40;
  let marker = null;
  
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
    let dataPoints;
    let url = "http://localhost:8000/reachable/default.json?lon=" + lng 
              + "&lat=" + lat + "&maxCost=" + maxCost;
    fetch(url)
      .then(res => res.json())
      .then(addRoutes)
      .then(data => dataPoints = data.node_costs)
      .then(drawContours);
  });

  let toggleableLayerIds = [ 'routes', 'dataPoints', 'gridPoints', "triangles" ];

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
  function RBF(points, values, distanceFunction, epsilon) {
  
    // `identity` here serves as a shorthand to allocate
    // the matrix nested array.
    var M = numeric.identity(points.length);
  
    // First compute the point to point distance matrix
    // to allow computing epsilon if it's not provided
    for(var j=0; j<points.length; j++) {
      for(var i=0; i<points.length; i++) {
        M[j][i] = turf.distance(turf.point(points[i]), turf.point(points[j]));
      }
    }
  
    // determine dimensionality of target values
    var sample = values[0];
    var D = typeof sample === 'number'
      ? 1
      : sample.length;
  
    // generalize to vector values
    if(D === 1) {
      values = values.map(function(value) {
        return [value];
      });
    }
  
    // reshape values by component
    var tmp = new Array(D);
    for(var i=0; i<D; i++) {
      tmp[i] = values.map(function(value) {
        return value[i];
      });
    }
    values = tmp;
  
    // Compute basis functions weights by solving
    // the linear system of equations for each target component
    var w = new Array(D);
    var LU = numeric.LU(M);
    for(var i=0; i<D; i++) {
      w[i] = numeric.LUsolve(LU, values[i]);
    }
  
    // The returned interpolant will compute the value at any point 
    // by summing the weighted contributions of the input points
    function interpolant(p) {
  
      var distances = new Array(points.length);
      for(var i=0; i<points.length; i++) {
        distances[i] = turf.distance(turf.point(p), turf.point(points[i]));
      }
  
      var sums = new Array(D);
      for(var i=0; i<D; i++) {
        sums[i] = numeric.sum(numeric.mul(distances, w[i]));
      }
  
      return sums;
    }
  
    return interpolant;
  }

  function rbfInterpolate(data, interpolateDist) {
    let pointGrid = turf.pointGrid(turf.bbox(data), interpolateDist);
    let hull = turf.convex(data);
    let dataPoints = [];
    let values = [];
    turf.featureEach(data, function(dataPoint){
      dataPoints.push(dataPoint.geometry.coordinates);
      values.push(dataPoint.properties.cost);
    });
    let rbf = RBF(dataPoints, values, "linear");
    turf.featureEach(pointGrid, function(gridPoint){
      if (!turf.booleanPointInPolygon(gridPoint, hull)) {
        gridPoint.properties.cost = 300;
      } else {
        gridPoint.properties.cost = rbf(gridPoint.geometry.coordinates)[0];
      }
    });
    return pointGrid;
  }

  /**
   * Interpolate and produce a point grid based on given
   * data points by first triangulizing the given data points
   * and using IDW to interpolate cost of each grid point 
   * within each triangle.
   * @param {GeoJSON} data: a feature collection of points
   *                        with a property cost
   * @param {double} inerpolateDist:
  *                 the distance between each grid point
  * @return - A point grid in GeoJSON format
  */
  function triangleInterpolate(data, interpolateDist) {
    let trigs = turf.tin(data, 'cost');
    let hull = turf.convex(data);
    let pointGrid = turf.pointGrid(turf.bbox(data), interpolateDist);
    turf.featureEach(pointGrid, function(point){
      if (!turf.booleanPointInPolygon(point, hull)) {
        point.properties.cost = 300;
      } else {
        turf.featureEach(trigs, function(trig){
          if (turf.booleanPointInPolygon(point, trig)) {
            point.properties.cost = trigIDW(point, trig);
          }
        });
      }
    });
    return pointGrid;
  }

  /**
   * Given a single point and the triangle that the point is in.
   * Use IDW to interpolate the cost of the point by the vertices
   * of the triangle.
   * @param {GeoJSON} point: the point to interpolate
   * @param {GeoJSON} trig: a triangle polygon
   * @return - the interpolated value of the point
   */
  function trigIDW(point, trig) {
    let zw = 0;
    let sw = 0;

    let dataPoints = trig.geometry.coordinates[0];
    let dataCosts = [trig.properties["a"], trig.properties["b"], trig.properties["c"]];

    for (let i = 0; i < 3; i++) {
      let d = turf.distance(point, turf.point(dataPoints[i]));
      let w = 1.0 / Math.pow(d, 2);
      sw += w;
      zw += w * dataCosts[i];
    }
    return zw / sw;
  }

  /**
   * Interpolate and produce a point grid based on given
   * data points using kriging algorithm.
   *     http://oeo4b.github.io 
   * @param {GeoJSON} data: a feature collection of points
   *                        with a property cost
   * @param {double} inerpolateDist:
   *                 the distance between each grid point
   * @return - A point grid in GeoJSON format
   */
  function krigingInterpolate(data, interpolateDist) {
    // const dataBbox = turf.bbox(data);
    // const bufferDist = 1e-3;
    // const bufferedBbox = [
    //   dataBbox[0] - bufferDist,
    //   dataBbox[1] - bufferDist,
    //   dataBbox[2] + bufferDist,
    //   dataBbox[3] + bufferDist
    // ];
    let hull = turf.convex(data);
    let pointGrid = turf.pointGrid(turf.bbox(data), interpolateDist);
    
    let xs = [];
    let ys = [];
    let zs = [];
    turf.featureEach(data, function(dataPoint) {
      xs.push(dataPoint.geometry.coordinates[1]);
      ys.push(dataPoint.geometry.coordinates[0]);
      zs.push(dataPoint.properties.cost);
    });

    let model = "spherical";
    let sigma2 = 0;
    let alpha = 1e-10;
    let fitModel = kriging.train(zs, xs, ys, model, sigma2, alpha);

    turf.featureEach(pointGrid, function(gridPoint) {
      if (!turf.booleanPointInPolygon(gridPoint, hull)) {
        gridPoint.properties.cost = 300;
      } else {
        let x = gridPoint.geometry.coordinates[1];
        let y = gridPoint.geometry.coordinates[0];
        gridPoint.properties.cost = kriging.predict(x, y, fitModel);
      }
    });
    return pointGrid;
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
    // dataPoints.features = dataPoints.features.filter(f => f.properties.cost <= maxCost);

    // add the data points layer
    addPointsLayer("dataPoints", dataPoints, 5, false);

    // add the triangles layer
    addTriangles("triangles", turf.tin(dataPoints, "cost"), false);

    let pointGrid = triangleInterpolate(dataPoints, interpolateDist);
    console.log(pointGrid);
    addPointsLayer("gridPoints", pointGrid, 2, false);
    let contours = turf.isobands(pointGrid, breaks, {zProperty: "cost"});
    addContourLayers("contours", contours, colors);

    // let idwPointGrid = turf.interpolate(dataPoints, interpolateDist, {
    //   gridType: 'points', property: 'cost', units: 'kilometers', weight: interpolateWeight
    // });
    // addPointsLayer("gridPoints", idwPointGrid, 2, false);
    // let idwContours = turf.isobands(idwPointGrid, breaks, {zProperty: "cost"});
    // addContourLayers("idwContours", idwContours, idwColors);
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
      "type": "fill",
      "source": {
        "type": "geojson",
        "data": source
      },
      "paint": {
          "fill-color": "#8747C2",
          "fill-opacity": 0.5
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
          [">=", ["get", "cost"], 300],
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



