"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _immutable = require("immutable");
var _export = require("./export");
var _export2 = require("../utils/export");
var _constants = require("../constants");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Line = exports["default"] = /*#__PURE__*/function () {
  function Line() {
    _classCallCheck(this, Line);
  }
  return _createClass(Line, null, [{
    key: "create",
    value: function create(state, layerID, type, x0, y0, x1, y1, properties) {
      var lineID = _export2.IDBroker.acquireID();
      var _Vertex$add = _export.Vertex.add(state, layerID, x0, y0, 'lines', lineID),
        stateV0 = _Vertex$add.updatedState,
        v0 = _Vertex$add.vertex;
      var _Vertex$add2 = _export.Vertex.add(stateV0, layerID, x1, y1, 'lines', lineID),
        stateV1 = _Vertex$add2.updatedState,
        v1 = _Vertex$add2.vertex;
      state = stateV1;
      var line = state.catalog.factoryElement(type, {
        id: lineID,
        name: _export2.NameGenerator.generateName('lines', state.catalog.getIn(['elements', type, 'info', 'title'])),
        vertices: new _immutable.List([v0.id, v1.id]),
        type: type
      }, properties);
      state = state.setIn(['scene', 'layers', layerID, 'lines', lineID], line);
      return {
        updatedState: state,
        line: line
      };
    }
  }, {
    key: "select",
    value: function select(state, layerID, lineID) {
      state = _export.Layer.select(state, layerID).updatedState;
      var line = state.getIn(['scene', 'layers', layerID, 'lines', lineID]);
      state = _export.Layer.selectElement(state, layerID, 'lines', lineID).updatedState;
      state = _export.Layer.selectElement(state, layerID, 'vertices', line.vertices.get(0)).updatedState;
      state = _export.Layer.selectElement(state, layerID, 'vertices', line.vertices.get(1)).updatedState;
      return {
        updatedState: state
      };
    }
  }, {
    key: "remove",
    value: function remove(state, layerID, lineID) {
      var line = state.getIn(['scene', 'layers', layerID, 'lines', lineID]);
      if (line) {
        state = this.unselect(state, layerID, lineID).updatedState;
        line.holes.forEach(function (holeID) {
          return state = _export.Hole.remove(state, layerID, holeID).updatedState;
        });
        state = _export.Layer.removeElement(state, layerID, 'lines', lineID).updatedState;
        line.vertices.forEach(function (vertexID) {
          return state = _export.Vertex.remove(state, layerID, vertexID, 'lines', lineID).updatedState;
        });
        state.getIn(['scene', 'groups']).forEach(function (group) {
          return state = _export.Group.removeElement(state, group.id, layerID, 'lines', lineID).updatedState;
        });
      }
      return {
        updatedState: state
      };
    }
  }, {
    key: "unselect",
    value: function unselect(state, layerID, lineID) {
      var line = state.getIn(['scene', 'layers', layerID, 'lines', lineID]);
      if (line) {
        state = _export.Layer.unselect(state, layerID, 'vertices', line.vertices.get(0)).updatedState;
        state = _export.Layer.unselect(state, layerID, 'vertices', line.vertices.get(1)).updatedState;
        state = _export.Layer.unselect(state, layerID, 'lines', lineID).updatedState;
      }
      return {
        updatedState: state
      };
    }
  }, {
    key: "split",
    value: function split(state, layerID, lineID, x, y) {
      var line = state.getIn(['scene', 'layers', layerID, 'lines', lineID]);
      var v0 = state.getIn(['scene', 'layers', layerID, 'vertices', line.vertices.get(0)]);
      var v1 = state.getIn(['scene', 'layers', layerID, 'vertices', line.vertices.get(1)]);
      var x0 = v0.x,
        y0 = v0.y;
      var x1 = v1.x,
        y1 = v1.y;
      var _Line$create = Line.create(state, layerID, line.type, x0, y0, x, y, line.get('properties')),
        stateL1 = _Line$create.updatedState,
        line0 = _Line$create.line;
      var _Line$create2 = Line.create(stateL1, layerID, line.type, x1, y1, x, y, line.get('properties')),
        stateL2 = _Line$create2.updatedState,
        line1 = _Line$create2.line;
      state = stateL2;
      var splitPointOffset = _export2.GeometryUtils.pointPositionOnLineSegment(x0, y0, x1, y1, x, y);
      var minVertex = _export2.GeometryUtils.minVertex(v0, v1);
      line.holes.forEach(function (holeID) {
        var hole = state.getIn(['scene', 'layers', layerID, 'holes', holeID]);
        var holeOffset = hole.offset;
        if (minVertex.x === x1 && minVertex.y === y1) {
          splitPointOffset = 1 - splitPointOffset;
          holeOffset = 1 - hole.offset;
        }
        if (holeOffset < splitPointOffset) {
          var offset = holeOffset / splitPointOffset;
          if (minVertex.x === x1 && minVertex.y === y1) {
            offset = 1 - offset;
          }
          state = _export.Hole.create(state, layerID, hole.type, line0.id, offset, hole.properties).updatedState;
        } else {
          var _offset = (holeOffset - splitPointOffset) / (1 - splitPointOffset);
          if (minVertex.x === x1 && minVertex.y === y1) {
            _offset = 1 - _offset;
          }
          state = _export.Hole.create(state, layerID, hole.type, line1.id, _offset, hole.properties).updatedState;
        }
      });

      //add splitted lines to the original line's group
      var lineGroups = state.getIn(['scene', 'groups']).filter(function (group) {
        var lines = group.getIn(['elements', layerID, 'lines']);
        return lines && lines.contains(lineID);
      });
      lineGroups.forEach(function (group) {
        state = _export.Group.addElement(state, group.id, layerID, 'lines', line0.id).updatedState;
        state = _export.Group.addElement(state, group.id, layerID, 'lines', line1.id).updatedState;
      });
      state = Line.remove(state, layerID, lineID).updatedState;
      return {
        updatedState: state,
        lines: new _immutable.List([line0, line1])
      };
    }
  }, {
    key: "addFromPoints",
    value: function addFromPoints(state, layerID, type, points, properties, holes) {
      var _this = this;
      points = new _immutable.List(points).sort(function (_ref, _ref2) {
        var x1 = _ref.x,
          y1 = _ref.y;
        var x2 = _ref2.x,
          y2 = _ref2.y;
        return x1 === x2 ? y1 - y2 : x1 - x2;
      });
      var pointsPair = points.zip(points.skip(1)).filterNot(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          _ref4$ = _ref4[0],
          x1 = _ref4$.x,
          y1 = _ref4$.y,
          _ref4$2 = _ref4[1],
          x2 = _ref4$2.x,
          y2 = _ref4$2.y;
        return x1 === x2 && y1 === y2;
      });
      var lines = [];
      pointsPair.forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          _ref6$ = _ref6[0],
          x1 = _ref6$.x,
          y1 = _ref6$.y,
          _ref6$2 = _ref6[1],
          x2 = _ref6$2.x,
          y2 = _ref6$2.y;
        var _this$create = _this.create(state, layerID, type, x1, y1, x2, y2, properties),
          stateL = _this$create.updatedState,
          line = _this$create.line;
        state = stateL;
        if (holes) {
          holes.forEach(function (holeWithOffsetPoint) {
            var _holeWithOffsetPoint$ = holeWithOffsetPoint.offsetPosition,
              xp = _holeWithOffsetPoint$.x,
              yp = _holeWithOffsetPoint$.y;
            if (_export2.GeometryUtils.isPointOnLineSegment(x1, y1, x2, y2, xp, yp)) {
              var newOffset = _export2.GeometryUtils.pointPositionOnLineSegment(x1, y1, x2, y2, xp, yp);
              if (newOffset >= 0 && newOffset <= 1) {
                state = _export.Hole.create(state, layerID, holeWithOffsetPoint.hole.type, line.id, newOffset, holeWithOffsetPoint.hole.properties).updatedState;
              }
            }
          });
        }
        lines.push(line);
      });
      return {
        updatedState: state,
        lines: new _immutable.List(lines)
      };
    }
  }, {
    key: "createAvoidingIntersections",
    value: function createAvoidingIntersections(state, layerID, type, x0, y0, x1, y1, oldProperties, oldHoles) {
      var _this2 = this;
      var points = [{
        x: x0,
        y: y0
      }, {
        x: x1,
        y: y1
      }];
      state = state.getIn(['scene', 'layers', layerID, 'lines']).reduce(function (reducedState, line) {
        var _line$vertices$map$to = line.vertices.map(function (vertexID) {
            return reducedState.getIn(['scene', 'layers', layerID, 'vertices']).get(vertexID);
          }).toArray(),
          _line$vertices$map$to2 = _slicedToArray(_line$vertices$map$to, 2),
          v0 = _line$vertices$map$to2[0],
          v1 = _line$vertices$map$to2[1];
        var hasCommonEndpoint = _export2.GeometryUtils.samePoints(v0, points[0]) || _export2.GeometryUtils.samePoints(v0, points[1]) || _export2.GeometryUtils.samePoints(v1, points[0]) || _export2.GeometryUtils.samePoints(v1, points[1]);
        var intersection = _export2.GeometryUtils.twoLineSegmentsIntersection(points[0], points[1], v0, v1);
        if (intersection.type === 'colinear') {
          if (!oldHoles) {
            oldHoles = [];
          }
          var orderedVertices = _export2.GeometryUtils.orderVertices(points);
          reducedState.getIn(['scene', 'layers', layerID, 'lines', line.id, 'holes']).forEach(function (holeID) {
            var hole = reducedState.getIn(['scene', 'layers', layerID, 'holes', holeID]);
            var oldLineLength = _export2.GeometryUtils.pointsDistance(v0.x, v0.y, v1.x, v1.y);
            var offset = _export2.GeometryUtils.samePoints(orderedVertices[1], line.vertices.get(1)) ? 1 - hole.offset : hole.offset;
            var offsetPosition = _export2.GeometryUtils.extendLine(v0.x, v0.y, v1.x, v1.y, oldLineLength * offset);
            oldHoles.push({
              hole: hole,
              offsetPosition: offsetPosition
            });
          });
          reducedState = _this2.remove(reducedState, layerID, line.id).updatedState;
          points.push(v0, v1);
        }
        if (intersection.type === 'intersecting' && !hasCommonEndpoint) {
          reducedState = _this2.split(reducedState, layerID, line.id, intersection.point.x, intersection.point.y).updatedState;
          points.push(intersection.point);
        }
        return reducedState;
      }, state);
      var _Line$addFromPoints = Line.addFromPoints(state, layerID, type, points, oldProperties, oldHoles),
        updatedState = _Line$addFromPoints.updatedState,
        lines = _Line$addFromPoints.lines;
      return {
        updatedState: updatedState,
        lines: lines
      };
    }
  }, {
    key: "replaceVertex",
    value: function replaceVertex(state, layerID, lineID, vertexIndex, x, y) {
      var vertexID = state.getIn(['scene', 'layers', layerID, 'lines', lineID, 'vertices', vertexIndex]);
      state = _export.Vertex.remove(state, layerID, vertexID, 'lines', lineID).updatedState;
      var _Vertex$add3 = _export.Vertex.add(state, layerID, x, y, 'lines', lineID),
        stateV = _Vertex$add3.updatedState,
        vertex = _Vertex$add3.vertex;
      state = stateV;
      state = state.setIn(['scene', 'layers', layerID, 'lines', lineID, 'vertices', vertexIndex], vertex.id);
      state = state.setIn(['scene', 'layers', layerID, 'lines', lineID], state.getIn(['scene', 'layers', layerID, 'lines', lineID]));
      return {
        updatedState: state,
        line: state.getIn(['scene', 'layers', layerID, 'lines', lineID]),
        vertex: vertex
      };
    }
  }, {
    key: "selectToolDrawingLine",
    value: function selectToolDrawingLine(state, sceneComponentType) {
      state = state.merge({
        mode: _constants.MODE_WAITING_DRAWING_LINE,
        drawingSupport: new _immutable.Map({
          type: sceneComponentType
        })
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "beginDrawingLine",
    value: function beginDrawingLine(state, layerID, x, y) {
      var snapElements = _export2.SnapSceneUtils.sceneSnapElements(state.scene, new _immutable.List(), state.snapMask);
      var snap = null;
      if (state.snapMask && !state.snapMask.isEmpty()) {
        snap = _export2.SnapUtils.nearestSnap(snapElements, x, y, state.snapMask);
        if (snap) {
          var _snap$point = snap.point;
          x = _snap$point.x;
          y = _snap$point.y;
        }
        snapElements = snapElements.withMutations(function (snapElements) {
          var a, b, c;
          var _GeometryUtils$horizo = _export2.GeometryUtils.horizontalLine(y);
          a = _GeometryUtils$horizo.a;
          b = _GeometryUtils$horizo.b;
          c = _GeometryUtils$horizo.c;
          _export2.SnapUtils.addLineSnap(snapElements, a, b, c, 10, 3, null);
          var _GeometryUtils$vertic = _export2.GeometryUtils.verticalLine(x);
          a = _GeometryUtils$vertic.a;
          b = _GeometryUtils$vertic.b;
          c = _GeometryUtils$vertic.c;
          _export2.SnapUtils.addLineSnap(snapElements, a, b, c, 10, 3, null);
        });
      }
      var drawingSupport = state.get('drawingSupport').set('layerID', layerID);
      state = _export.Layer.unselectAll(state, layerID).updatedState;
      var _Line$create3 = Line.create(state, layerID, drawingSupport.get('type'), x, y, x, y),
        stateL = _Line$create3.updatedState,
        line = _Line$create3.line;
      state = Line.select(stateL, layerID, line.id).updatedState;
      state = state.merge({
        mode: _constants.MODE_DRAWING_LINE,
        snapElements: snapElements,
        activeSnapElement: snap ? snap.snap : null,
        drawingSupport: drawingSupport
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "updateDrawingLine",
    value: function updateDrawingLine(state, x, y) {
      var snap = null;
      if (state.snapMask && !state.snapMask.isEmpty()) {
        snap = _export2.SnapUtils.nearestSnap(state.snapElements, x, y, state.snapMask);
        if (snap) {
          var _snap$point2 = snap.point;
          x = _snap$point2.x;
          y = _snap$point2.y;
        }
      }
      var layerID = state.getIn(['drawingSupport', 'layerID']);
      var lineID = state.getIn(['scene', 'layers', layerID, 'selected', 'lines']).first();
      var _Line$replaceVertex = Line.replaceVertex(state, layerID, lineID, 1, x, y),
        stateLV = _Line$replaceVertex.updatedState,
        vertex = _Line$replaceVertex.vertex;
      state = stateLV;
      state = this.select(state, layerID, lineID).updatedState;
      state = state.merge({
        activeSnapElement: snap ? snap.snap : null
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "endDrawingLine",
    value: function endDrawingLine(state, x, y) {
      if (state.snapMask && !state.snapMask.isEmpty()) {
        var snap = _export2.SnapUtils.nearestSnap(state.snapElements, x, y, state.snapMask);
        if (snap) {
          var _snap$point3 = snap.point;
          x = _snap$point3.x;
          y = _snap$point3.y;
        }
      }
      var layerID = state.getIn(['drawingSupport', 'layerID']);
      var layer = state.getIn(['scene', 'layers', layerID]);
      var lineID = state.getIn(['scene', 'layers', layerID, 'selected', 'lines']).first();
      var line = state.getIn(['scene', 'layers', layerID, 'lines', lineID]);
      var v0 = layer.vertices.get(line.vertices.get(0));
      state = Line.remove(state, layerID, lineID).updatedState;
      state = Line.createAvoidingIntersections(state, layerID, line.type, v0.x, v0.y, x, y).updatedState;
      state = _export.Layer.detectAndUpdateAreas(state, layerID).updatedState;
      state = state.merge({
        mode: _constants.MODE_WAITING_DRAWING_LINE,
        snapElements: new _immutable.List(),
        activeSnapElement: null
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "beginDraggingLine",
    value: function beginDraggingLine(state, layerID, lineID, x, y) {
      var snapElements = _export2.SnapSceneUtils.sceneSnapElements(state.scene, new _immutable.List(), state.snapMask);
      var layer = state.scene.layers.get(layerID);
      var line = layer.lines.get(lineID);
      var vertex0 = layer.vertices.get(line.vertices.get(0));
      var vertex1 = layer.vertices.get(line.vertices.get(1));
      state = state.merge({
        mode: _constants.MODE_DRAGGING_LINE,
        snapElements: snapElements,
        draggingSupport: (0, _immutable.Map)({
          layerID: layerID,
          lineID: lineID,
          startPointX: x,
          startPointY: y,
          startVertex0X: vertex0.x,
          startVertex0Y: vertex0.y,
          startVertex1X: vertex1.x,
          startVertex1Y: vertex1.y
        })
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "updateDraggingLine",
    value: function updateDraggingLine(state, x, y) {
      var draggingSupport = state.draggingSupport;
      var snapElements = state.snapElements;
      var layerID = draggingSupport.get('layerID');
      var lineID = draggingSupport.get('lineID');
      var diffX = x - draggingSupport.get('startPointX');
      var diffY = y - draggingSupport.get('startPointY');
      var newVertex0X = draggingSupport.get('startVertex0X') + diffX;
      var newVertex0Y = draggingSupport.get('startVertex0Y') + diffY;
      var newVertex1X = draggingSupport.get('startVertex1X') + diffX;
      var newVertex1Y = draggingSupport.get('startVertex1Y') + diffY;
      var activeSnapElement = null;
      var curSnap0 = null,
        curSnap1 = null;
      if (state.snapMask && !state.snapMask.isEmpty()) {
        curSnap0 = _export2.SnapUtils.nearestSnap(snapElements, newVertex0X, newVertex0Y, state.snapMask);
        curSnap1 = _export2.SnapUtils.nearestSnap(snapElements, newVertex1X, newVertex1Y, state.snapMask);
      }
      var deltaX = 0,
        deltaY = 0;
      if (curSnap0 && curSnap1) {
        if (curSnap0.point.distance < curSnap1.point.distance) {
          deltaX = curSnap0.point.x - newVertex0X;
          deltaY = curSnap0.point.y - newVertex0Y;
          activeSnapElement = curSnap0.snap;
        } else {
          deltaX = curSnap1.point.x - newVertex1X;
          deltaY = curSnap1.point.y - newVertex1Y;
          activeSnapElement = curSnap1.snap;
        }
      } else {
        if (curSnap0) {
          deltaX = curSnap0.point.x - newVertex0X;
          deltaY = curSnap0.point.y - newVertex0Y;
          activeSnapElement = curSnap0.snap;
        }
        if (curSnap1) {
          deltaX = curSnap1.point.x - newVertex1X;
          deltaY = curSnap1.point.y - newVertex1Y;
          activeSnapElement = curSnap1.snap;
        }
      }
      newVertex0X += deltaX;
      newVertex0Y += deltaY;
      newVertex1X += deltaX;
      newVertex1Y += deltaY;
      state = state.merge({
        activeSnapElement: activeSnapElement,
        scene: state.scene.updateIn(['layers', layerID], function (layer) {
          return layer.withMutations(function (layer) {
            var lineVertices = layer.getIn(['lines', lineID, 'vertices']);
            layer.updateIn(['vertices', lineVertices.get(0)], function (vertex) {
              return vertex.merge({
                x: newVertex0X,
                y: newVertex0Y
              });
            });
            layer.updateIn(['vertices', lineVertices.get(1)], function (vertex) {
              return vertex.merge({
                x: newVertex1X,
                y: newVertex1Y
              });
            });
            return layer;
          });
        })
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "endDraggingLine",
    value: function endDraggingLine(state, x, y) {
      var _state = state,
        draggingSupport = _state.draggingSupport;
      var layerID = draggingSupport.get('layerID');
      var layer = state.scene.layers.get(layerID);
      var lineID = draggingSupport.get('lineID');
      var line = layer.lines.get(lineID);
      var vertex0 = layer.vertices.get(line.vertices.get(0));
      var vertex1 = layer.vertices.get(line.vertices.get(1));
      var maxV = _export2.GeometryUtils.maxVertex(vertex0, vertex1);
      var minV = _export2.GeometryUtils.minVertex(vertex0, vertex1);
      var lineLength = _export2.GeometryUtils.verticesDistance(minV, maxV);
      var alpha = Math.atan2(maxV.y - minV.y, maxV.x - minV.x);
      var holesWithOffsetPosition = [];
      layer.lines.get(lineID).holes.forEach(function (holeID) {
        var hole = layer.holes.get(holeID);
        var pointOnLine = lineLength * hole.offset;
        var offsetPosition = {
          x: pointOnLine * Math.cos(alpha) + minV.x,
          y: pointOnLine * Math.sin(alpha) + minV.y
        };
        holesWithOffsetPosition.push({
          hole: hole,
          offsetPosition: offsetPosition
        });
      });
      var diffX = x - draggingSupport.get('startPointX');
      var diffY = y - draggingSupport.get('startPointY');
      var newVertex0X = draggingSupport.get('startVertex0X') + diffX;
      var newVertex0Y = draggingSupport.get('startVertex0Y') + diffY;
      var newVertex1X = draggingSupport.get('startVertex1X') + diffX;
      var newVertex1Y = draggingSupport.get('startVertex1Y') + diffY;
      if (state.snapMask && !state.snapMask.isEmpty()) {
        var curSnap0 = _export2.SnapUtils.nearestSnap(state.snapElements, newVertex0X, newVertex0Y, state.snapMask);
        var curSnap1 = _export2.SnapUtils.nearestSnap(state.snapElements, newVertex1X, newVertex1Y, state.snapMask);
        var deltaX = 0,
          deltaY = 0;
        if (curSnap0 && curSnap1) {
          if (curSnap0.point.distance < curSnap1.point.distance) {
            deltaX = curSnap0.point.x - newVertex0X;
            deltaY = curSnap0.point.y - newVertex0Y;
          } else {
            deltaX = curSnap1.point.x - newVertex1X;
            deltaY = curSnap1.point.y - newVertex1Y;
          }
        } else {
          if (curSnap0) {
            deltaX = curSnap0.point.x - newVertex0X;
            deltaY = curSnap0.point.y - newVertex0Y;
          }
          if (curSnap1) {
            deltaX = curSnap1.point.x - newVertex1X;
            deltaY = curSnap1.point.y - newVertex1Y;
          }
        }
        newVertex0X += deltaX;
        newVertex0Y += deltaY;
        newVertex1X += deltaX;
        newVertex1Y += deltaY;
      }
      var lineGroups = state //get groups membership if present
      .getIn(['scene', 'groups']).filter(function (group) {
        var lines = group.getIn(['elements', layerID, 'lines']);
        return lines && lines.contains(lineID);
      });
      state = _export.Layer.mergeEqualsVertices(state, layerID, line.vertices.get(0)).updatedState;
      state = _export.Layer.mergeEqualsVertices(state, layerID, line.vertices.get(1)).updatedState;
      state = Line.remove(state, layerID, lineID).updatedState;
      if (!_export2.GeometryUtils.samePoints({
        newVertex0X: newVertex0X,
        newVertex0Y: newVertex0Y
      }, {
        newVertex1X: newVertex1X,
        newVertex1Y: newVertex1Y
      })) {
        var ret = Line.createAvoidingIntersections(state, layerID, line.type, newVertex0X, newVertex0Y, newVertex1X, newVertex1Y, line.properties, holesWithOffsetPosition);
        state = ret.updatedState;

        //re-add to old line's groups if present
        ret.lines.forEach(function (addedLine) {
          lineGroups.forEach(function (oldLineGroup) {
            state = _export.Group.addElement(state, oldLineGroup.id, layerID, 'lines', addedLine.id).updatedState;
          });
        });
      }
      state = _export.Layer.detectAndUpdateAreas(state, layerID).updatedState;
      state = state.merge({
        mode: _constants.MODE_IDLE,
        draggingSupport: null,
        activeSnapElement: null,
        snapElements: new _immutable.List()
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "setProperties",
    value: function setProperties(state, layerID, lineID, properties) {
      state = state.mergeIn(['scene', 'layers', layerID, 'lines', lineID, 'properties'], properties);
      return {
        updatedState: state
      };
    }
  }, {
    key: "setJsProperties",
    value: function setJsProperties(state, layerID, lineID, properties) {
      return this.setProperties(state, layerID, lineID, (0, _immutable.fromJS)(properties));
    }
  }, {
    key: "updateProperties",
    value: function updateProperties(state, layerID, lineID, properties) {
      properties.forEach(function (v, k) {
        if (state.hasIn(['scene', 'layers', layerID, 'lines', lineID, 'properties', k])) state = state.mergeIn(['scene', 'layers', layerID, 'lines', lineID, 'properties', k], v);
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "updateJsProperties",
    value: function updateJsProperties(state, layerID, lineID, properties) {
      return this.updateProperties(state, layerID, lineID, (0, _immutable.fromJS)(properties));
    }
  }, {
    key: "setAttributes",
    value: function setAttributes(state, layerID, lineID, lineAttributes) {
      var lAttr = lineAttributes.toJS();
      var vertexOne = lAttr.vertexOne,
        vertexTwo = lAttr.vertexTwo,
        lineLength = lAttr.lineLength;
      delete lAttr['vertexOne'];
      delete lAttr['vertexTwo'];
      delete lAttr['lineLength'];
      state = state.mergeIn(['scene', 'layers', layerID, 'lines', lineID], (0, _immutable.fromJS)(lAttr)).mergeIn(['scene', 'layers', layerID, 'vertices', vertexOne.id], {
        x: vertexOne.x,
        y: vertexOne.y
      }).mergeIn(['scene', 'layers', layerID, 'vertices', vertexTwo.id], {
        x: vertexTwo.x,
        y: vertexTwo.y
      }).mergeIn(['scene', 'layers', layerID, 'lines', lineID, 'misc'], new _immutable.Map({
        '_unitLength': lineLength._unit
      }));
      state = _export.Layer.mergeEqualsVertices(state, layerID, vertexOne.id).updatedState;
      if (vertexOne.x != vertexTwo.x && vertexOne.y != vertexTwo.y) {
        state = _export.Layer.mergeEqualsVertices(state, layerID, vertexTwo.id).updatedState;
      }
      state = _export.Layer.detectAndUpdateAreas(state, layerID).updatedState;
      return {
        updatedState: state
      };
    }
  }, {
    key: "setVerticesCoords",
    value: function setVerticesCoords(state, layerID, lineID, x1, y1, x2, y2) {
      var line = state.getIn(['scene', 'layers', layerID, 'lines', lineID]);
      state = _export.Vertex.setAttributes(state, layerID, line.vertices.get(0), new _immutable.Map({
        x: x1,
        y: y1
      })).updatedState;
      state = _export.Vertex.setAttributes(state, layerID, line.vertices.get(1), new _immutable.Map({
        x: x2,
        y: y2
      })).updatedState;
      return {
        updatedState: state
      };
    }
  }]);
}();