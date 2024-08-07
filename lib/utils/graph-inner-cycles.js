"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateInnerCycles = calculateInnerCycles;
exports.isClockWiseOrder = isClockWiseOrder;
var _graph = _interopRequireDefault(require("./graph"));
var _getEdgesOfSubgraphs = _interopRequireDefault(require("./get-edges-of-subgraphs"));
var _graphCycles = _interopRequireDefault(require("./graph-cycles"));
var _immutable = require("immutable");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function calculateInnerCycles(verticesArray, edgesArray) {
  var innerCycles = new _immutable.List();
  var graph = new _graph["default"](verticesArray.length);
  edgesArray.forEach(function (line) {
    graph.addEdge(line[0], line[1]);
    graph.addEdge(line[1], line[0]);
  });
  graph.BCC();
  var subgraphs = graph.subgraphs.filter(function (subgraph) {
    return subgraph.length >= 3;
  });
  var edgesOfSubgraphsArray = (0, _getEdgesOfSubgraphs["default"])(subgraphs, graph);
  var edges = [];
  edgesOfSubgraphsArray.forEach(function (es) {
    es.forEach(function (edge) {
      return edges.push(edge);
    });
  });
  var cycles = (0, _graphCycles["default"])(verticesArray, edges);
  cycles.v_cycles.forEach(function (cycle) {
    cycle.shift();
    innerCycles = innerCycles.push(cycle);
  });
  return innerCycles;
}
function isClockWiseOrder(innerCycleWithCoords) {
  // See: https://stackoverflow.com/a/1165943 and http://blog.element84.com/polygon-winding.html

  var i = 0;
  var twiceEnclosedArea = 0;
  var size = innerCycleWithCoords.size;
  for (i = 0; i < size; i++) {
    var _innerCycleWithCoords = innerCycleWithCoords.get(i),
      x1 = _innerCycleWithCoords.x,
      y1 = _innerCycleWithCoords.y;
    var _innerCycleWithCoords2 = innerCycleWithCoords.get((i + 1) % size),
      x2 = _innerCycleWithCoords2.x,
      y2 = _innerCycleWithCoords2.y;
    twiceEnclosedArea += (x2 - x1) * (y2 + y1);
  }
  return twiceEnclosedArea > 0;
}