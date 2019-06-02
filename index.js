/***********************************************/
/*********** INTERPOLATION FUNCTIONS ***********/
/***********************************************/

/**
 * Generate contours based on given GeoJSON data points.
 * Steps:
 *
 * 1. Create a rectanglular bounding box that enclosed all
 *    of the data points. Use Turf's pointGrid function to
 *    generate point grid inside that bounding box, with each
 *    point in the grid seperated by a given distance, or default
 * 
 * 2. Use Turf's tin function to generate traingles connecting
 *    the data points. For each of the newly added grid
 *    point, interpolate the property value of that point
 *    using inversed distance weighting with some power
 *    considering only the vertices of the triangle that
 *    encloses the point.
 * 
 * 3. Use Turf's isoband function to generate contours with
 *    with the point grid.
 * 
 * (If edges is supplied, before any of the steps mentioned above
 * some points will be placed along the edges and have their property
 * value interpolated using the method in step 2 and the newly
 * added points will be used as data points.)
 * 
 * @param {GeoJSON} dataPoints a feature collection of points
 *                             with a numeric property value
 * @param {string} property the name of the property value
 *                          to draw contours on
 * @param {array} breaks property value of each layer of contour
 * @param {number} maxProp maximum of the property value
 * @param {GeoJSON} edges optional, a feature collection of
 *                        line strings connecting dataPoints
 *                        if supplied, some points will be first
 *                        placed and interpolated along the edges,
 *                        resulting less pointy contours
 * @param {number} dist optinal, distance between the points placed
 *                      on supplied edges, in kilometers, default to 0.02
 * @param {number} weight optianl, power used in inversed distance weighting,
 *                        default to 3
 * @param {number} cellSize optinal, distance between the points in
 *                          the grid, in kilometers, defaulty to 0.005
 */
function generateContours(dataPoints, property, breaks,
                          maxProp, edges, dist = 0.02, weight = 3, cellSize = 0.005) {
  let preInterPoints;
  if (typeof edges === "undefined") {
    preInterPoints = dataPoints;
  } else {
    preInterPoints = preInterlopate(dataPoints, edges, dist);
    preInterPoints = triangleInterpolate(dataPoints, preInterPoints,
                                         maxProp, property, weight);
  }
  let pointGrid = turf.pointGrid(turf.bbox(dataPoints), cellSize);
  pointGrid = triangleInterpolate(preInterPoints, pointGrid,
                                  maxProp, property, weight);
  pointGrid.features = pointGrid.features.filter(p => p.properties[property]);
  
  return turf.isobands(pointGrid, breaks, {zProperty: property});
}

/**
 * Takes in a feature collection of points and a
 * feature collection of edges whose starting and
 * end points are the other collection of points.
 * Preinterpolate some points along the edges. Distance
 * between the interpolated points, in kilometers, can
 * be specified as parameters, default to 0.02 kilometers.
 * @param {GeoJSON} dataPoints GeoJSON of points and edges
 * @param {double} dist optinal, distance between interpolated
 *                      points, in kilometers, default to 0.02
 * @return {GeoJSON} a feature collection of points of
 *                   both the orginal points and the new points
 */
function preInterlopate(dataPoints, dataEdges, dist = 0.02) {
  let points = dataPoints.features;
  let edges = dataEdges.features;
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
 * and using IDW to interpolate the property of each grid point 
 * within each triangle.
 * @param {GeoJSON} dataPoints a feature collection of points
 *                       with a property cost
 * @param {GeoJSON} pointGrid a feature collection of points
 *                         with property cost to be interpolated
 * @param {string} property the property to be interpreted
 * @return - A point grid with cost in GeoJSON format
 */
function triangleInterpolate(dataPoints, pointGrid, maxCost, property, weight = 3) {
  let trigs = turf.tin(dataPoints, property);
  let hull = turf.convex(dataPoints);
  // construct and load a custom RBush tree that
  // accepts GeoJSON triangles for fast look up
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
  const tree = new MyRBush();
  tree.load(trigs.features);

  // loop through each point in the point grid
  // interpolate the cost at that point using
  // IDW on the vertices of the triangle that
  // contains the point
  for (let i = 0; i < pointGrid.features.length; i++) {
    let point = pointGrid.features[i];
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
  return pointGrid;
}

/**
 * Given a single point and the triangle that the point is in.
 * Use IDW to interpolate the property of the point by the vertices
 * of the triangle. All vertices of the triangle are required to
 * have the property value specified.
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