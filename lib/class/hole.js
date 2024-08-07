"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _immutable = require("immutable");
var _export = require("./export");
var _export2 = require("../utils/export");
var _snap = require("../utils/snap");
var _constants = require("../constants");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Hole = exports["default"] = /*#__PURE__*/function () {
  function Hole() {
    _classCallCheck(this, Hole);
  }
  return _createClass(Hole, null, [{
    key: "create",
    value: function create(state, layerID, type, lineID, offset, properties) {
      var holeID = _export2.IDBroker.acquireID();
      var hole = state.catalog.factoryElement(type, {
        id: holeID,
        name: _export2.NameGenerator.generateName('holes', state.catalog.getIn(['elements', type, 'info', 'title'])),
        type: type,
        offset: offset,
        line: lineID
      }, properties);
      state = state.setIn(['scene', 'layers', layerID, 'holes', holeID], hole);
      state = state.updateIn(['scene', 'layers', layerID, 'lines', lineID, 'holes'], function (holes) {
        return holes.push(holeID);
      });
      return {
        updatedState: state,
        hole: hole
      };
    }
  }, {
    key: "select",
    value: function select(state, layerID, holeID) {
      state = _export.Layer.select(state, layerID).updatedState;
      state = _export.Layer.selectElement(state, layerID, 'holes', holeID).updatedState;
      return {
        updatedState: state
      };
    }
  }, {
    key: "remove",
    value: function remove(state, layerID, holeID) {
      var hole = state.getIn(['scene', 'layers', layerID, 'holes', holeID]);
      state = this.unselect(state, layerID, holeID).updatedState;
      state = _export.Layer.removeElement(state, layerID, 'holes', holeID).updatedState;
      state = state.updateIn(['scene', 'layers', layerID, 'lines', hole.line, 'holes'], function (holes) {
        var index = holes.findIndex(function (ID) {
          return holeID === ID;
        });
        return index !== -1 ? holes.remove(index) : holes;
      });
      state.getIn(['scene', 'groups']).forEach(function (group) {
        return state = _export.Group.removeElement(state, group.id, layerID, 'holes', holeID).updatedState;
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "unselect",
    value: function unselect(state, layerID, holeID) {
      state = _export.Layer.unselect(state, layerID, 'holes', holeID).updatedState;
      return {
        updatedState: state
      };
    }
  }, {
    key: "selectToolDrawingHole",
    value: function selectToolDrawingHole(state, sceneComponentType) {
      var snapElements = new _immutable.List().withMutations(function (snapElements) {
        var _state$getIn = state.getIn(['scene', 'layers', state.scene.selectedLayer]),
          lines = _state$getIn.lines,
          vertices = _state$getIn.vertices;
        lines.forEach(function (line) {
          var _vertices$get = vertices.get(line.vertices.get(0)),
            x1 = _vertices$get.x,
            y1 = _vertices$get.y;
          var _vertices$get2 = vertices.get(line.vertices.get(1)),
            x2 = _vertices$get2.x,
            y2 = _vertices$get2.y;
          (0, _snap.addLineSegmentSnap)(snapElements, x1, y1, x2, y2, 20, 1, line.id);
        });
      });
      state = state.merge({
        mode: _constants.MODE_DRAWING_HOLE,
        snapElements: snapElements,
        drawingSupport: (0, _immutable.Map)({
          type: sceneComponentType
        })
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "updateDrawingHole",
    value: function updateDrawingHole(state, layerID, x, y) {
      var catalog = state.catalog;

      //calculate snap and overwrite coords if needed
      //force snap to segment
      var snap = (0, _snap.nearestSnap)(state.snapElements, x, y, state.snapMask.merge({
        SNAP_SEGMENT: true
      }));
      if (snap) {
        var _snap$point = snap.point;
        x = _snap$point.x;
        y = _snap$point.y;
      }
      var selectedHole = state.getIn(['scene', 'layers', layerID, 'selected', 'holes']).first();
      if (snap) {
        var lineID = snap.snap.related.get(0);
        var vertices = state.getIn(['scene', 'layers', layerID, 'lines', lineID, 'vertices']);
        var _state$getIn2 = state.getIn(['scene', 'layers', layerID, 'vertices', vertices.get(0)]),
          x1 = _state$getIn2.x,
          y1 = _state$getIn2.y;
        var _state$getIn3 = state.getIn(['scene', 'layers', layerID, 'vertices', vertices.get(1)]),
          x2 = _state$getIn3.x,
          y2 = _state$getIn3.y;

        // I need min and max vertices on this line segment
        var minVertex = _export2.GeometryUtils.minVertex({
          x: x1,
          y: y1
        }, {
          x: x2,
          y: y2
        });
        var maxVertex = _export2.GeometryUtils.maxVertex({
          x: x1,
          y: y1
        }, {
          x: x2,
          y: y2
        });
        var width = catalog.factoryElement(state.drawingSupport.get('type')).properties.getIn(['width', 'length']);

        // Now I need min and max possible coordinates for the hole on the line. They depend on the width of the hole
        var lineLength = _export2.GeometryUtils.pointsDistance(x1, y1, x2, y2);
        var alpha = _export2.GeometryUtils.absAngleBetweenTwoPoints(x1, y1, x2, y2);
        var cosAlpha = _export2.GeometryUtils.cosWithThreshold(alpha, 0.0000001);
        var sinAlpha = _export2.GeometryUtils.sinWithThreshold(alpha, 0.0000001);
        var minLeftVertexHole = {
          x: minVertex.x + width / 2 * cosAlpha,
          y: minVertex.y + width / 2 * sinAlpha
        };
        var maxRightVertexHole = {
          x: minVertex.x + lineLength * cosAlpha - width / 2 * cosAlpha,
          y: minVertex.y + lineLength * sinAlpha - width / 2 * sinAlpha
        };
        var offset;
        if (x < minLeftVertexHole.x) {
          offset = _export2.GeometryUtils.pointPositionOnLineSegment(minVertex.x, minVertex.y, maxVertex.x, maxVertex.y, minLeftVertexHole.x, minLeftVertexHole.y);
        } else if (x > maxRightVertexHole.x) {
          offset = _export2.GeometryUtils.pointPositionOnLineSegment(minVertex.x, minVertex.y, maxVertex.x, maxVertex.y, maxRightVertexHole.x, maxRightVertexHole.y);
        } else {
          if (x === minLeftVertexHole.x && x === maxRightVertexHole.x) {
            if (y < minLeftVertexHole.y) {
              offset = _export2.GeometryUtils.pointPositionOnLineSegment(minVertex.x, minVertex.y, maxVertex.x, maxVertex.y, minLeftVertexHole.x, minLeftVertexHole.y);
              offset = minVertex.x === x1 && minVertex.y === y1 ? offset : 1 - offset;
            } else if (y > maxRightVertexHole.y) {
              offset = _export2.GeometryUtils.pointPositionOnLineSegment(minVertex.x, minVertex.y, maxVertex.x, maxVertex.y, maxRightVertexHole.x, maxRightVertexHole.y);
              offset = minVertex.x === x1 && minVertex.y === y1 ? offset : 1 - offset;
            } else {
              offset = _export2.GeometryUtils.pointPositionOnLineSegment(x1, y1, x2, y2, x, y);
            }
          } else {
            offset = _export2.GeometryUtils.pointPositionOnLineSegment(x1, y1, x2, y2, x, y);
          }
        }

        //if hole does exist, update
        if (selectedHole && snap) {
          state = state.mergeIn(['scene', 'layers', layerID, 'holes', selectedHole], {
            offset: offset,
            line: lineID
          });

          //remove from old line ( if present )
          var index = state.getIn(['scene', 'layers', layerID, 'lines']).findEntry(function (line) {
            return line.id !== lineID && line.get('holes').contains(selectedHole);
          });
          if (index) {
            var removed = index[1].get('holes').filter(function (hl) {
              return hl !== selectedHole;
            });
            state = state.setIn(['scene', 'layers', layerID, 'lines', index[0], 'holes'], removed);
          }

          //add to line
          var line_holes = state.getIn(['scene', 'layers', layerID, 'lines', lineID, 'holes']);
          if (!line_holes.contains(selectedHole)) {
            state = state.setIn(['scene', 'layers', layerID, 'lines', lineID, 'holes'], line_holes.push(selectedHole));
          }
        } else if (!selectedHole && snap) {
          //if hole does not exist, create
          var _this$create = this.create(state, layerID, state.drawingSupport.get('type'), lineID, offset),
            stateH = _this$create.updatedState,
            hole = _this$create.hole;
          state = Hole.select(stateH, layerID, hole.id).updatedState;
        }
      }
      //i've lost the snap while trying to drop the hole
      else if (false && selectedHole)
        //think if enable
        {
          state = Hole.remove(state, layerID, selectedHole).updatedState;
        }
      return {
        updatedState: state
      };
    }
  }, {
    key: "endDrawingHole",
    value: function endDrawingHole(state, layerID, x, y) {
      state = this.updateDrawingHole(state, layerID, x, y).updatedState;
      state = _export.Layer.unselectAll(state, layerID).updatedState;
      return {
        updatedState: state
      };
    }
  }, {
    key: "beginDraggingHole",
    value: function beginDraggingHole(state, layerID, holeID, x, y) {
      var layer = state.getIn(['scene', 'layers', layerID]);
      var hole = layer.getIn(['holes', holeID]);
      var line = layer.getIn(['lines', hole.line]);
      var v0 = layer.getIn(['vertices', line.vertices.get(0)]);
      var v1 = layer.getIn(['vertices', line.vertices.get(1)]);
      var snapElements = (0, _snap.addLineSegmentSnap)((0, _immutable.List)(), v0.x, v0.y, v1.x, v1.y, 9999999, 1, null);
      state = state.merge({
        mode: _constants.MODE_DRAGGING_HOLE,
        snapElements: snapElements,
        draggingSupport: (0, _immutable.Map)({
          layerID: layerID,
          holeID: holeID,
          startPointX: x,
          startPointY: y
        })
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "updateDraggingHole",
    value: function updateDraggingHole(state, x, y) {
      //calculate snap and overwrite coords if needed
      //force snap to segment
      var snap = (0, _snap.nearestSnap)(state.snapElements, x, y, state.snapMask.merge({
        SNAP_SEGMENT: true
      }));
      if (!snap) return state;
      var _state = state,
        draggingSupport = _state.draggingSupport,
        scene = _state.scene;
      var layerID = draggingSupport.get('layerID');
      var holeID = draggingSupport.get('holeID');
      var startPointX = draggingSupport.get('startPointX');
      var startPointY = draggingSupport.get('startPointY');
      var layer = state.getIn(['scene', 'layers', layerID]);
      var hole = layer.getIn(['holes', holeID]);
      var line = layer.getIn(['lines', hole.line]);
      var v0 = layer.getIn(['vertices', line.vertices.get(0)]);
      var v1 = layer.getIn(['vertices', line.vertices.get(1)]);
      // I need min and max vertices on this line segment
      var _snap$point2 = snap.point;
      x = _snap$point2.x;
      y = _snap$point2.y;
      var minVertex = _export2.GeometryUtils.minVertex(v0, v1);
      var maxVertex = _export2.GeometryUtils.maxVertex(v0, v1);

      // Now I need min and max possible coordinates for the hole on the line. They depend on the width of the hole

      var width = hole.properties.get('width').get('length');
      var lineLength = _export2.GeometryUtils.pointsDistance(v0.x, v0.y, v1.x, v1.y);
      var alpha = Math.atan2(Math.abs(v1.y - v0.y), Math.abs(v1.x - v0.x));
      var cosWithThreshold = function cosWithThreshold(alpha) {
        var cos = Math.cos(alpha);
        return cos < 0.0000001 ? 0 : cos;
      };
      var sinWithThreshold = function sinWithThreshold(alpha) {
        var sin = Math.sin(alpha);
        return sin < 0.0000001 ? 0 : sin;
      };
      var cosAlpha = cosWithThreshold(alpha);
      var sinAlpha = sinWithThreshold(alpha);
      var minLeftVertexHole = {
        x: minVertex.x + width / 2 * cosAlpha,
        y: minVertex.y + width / 2 * sinAlpha
      };
      var maxRightVertexHole = {
        x: minVertex.x + lineLength * cosAlpha - width / 2 * cosAlpha,
        y: minVertex.y + lineLength * sinAlpha - width / 2 * sinAlpha
      };

      // Now I need to verify if the snap vertex (with coordinates x and y) is on the line segment

      var offset;
      if (x < minLeftVertexHole.x) {
        // Snap point is previous the the line
        offset = _export2.GeometryUtils.pointPositionOnLineSegment(minVertex.x, minVertex.y, maxVertex.x, maxVertex.y, minLeftVertexHole.x, minLeftVertexHole.y);
      } else {
        // Snap point is after the line or on the line
        if (x > maxRightVertexHole.x) {
          offset = _export2.GeometryUtils.pointPositionOnLineSegment(minVertex.x, minVertex.y, maxVertex.x, maxVertex.y, maxRightVertexHole.x, maxRightVertexHole.y);
        } else if (x === minLeftVertexHole.x && x === maxRightVertexHole.x) {
          // I am on a vertical line, I need to check y coordinates
          if (y < minLeftVertexHole.y) {
            offset = _export2.GeometryUtils.pointPositionOnLineSegment(minVertex.x, minVertex.y, maxVertex.x, maxVertex.y, minLeftVertexHole.x, minLeftVertexHole.y);
            offset = minVertex === v0 ? offset : 1 - offset;
          } else if (y > maxRightVertexHole.y) {
            offset = _export2.GeometryUtils.pointPositionOnLineSegment(minVertex.x, minVertex.y, maxVertex.x, maxVertex.y, maxRightVertexHole.x, maxRightVertexHole.y);
            offset = minVertex === v0 ? offset : 1 - offset;
          } else {
            offset = _export2.GeometryUtils.pointPositionOnLineSegment(minVertex.x, minVertex.y, maxVertex.x, maxVertex.y, x, y);
            offset = minVertex === v0 ? offset : 1 - offset;
          }
        } else {
          offset = _export2.GeometryUtils.pointPositionOnLineSegment(minVertex.x, minVertex.y, maxVertex.x, maxVertex.y, x, y);
        }
      }
      hole = hole.set('offset', offset);
      state = state.merge({
        scene: scene.mergeIn(['layers', layerID, 'holes', holeID], hole)
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "endDraggingHole",
    value: function endDraggingHole(state, x, y) {
      state = this.updateDraggingHole(state, x, y).updatedState;
      state = state.merge({
        mode: _constants.MODE_IDLE
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "setProperties",
    value: function setProperties(state, layerID, holeID, properties) {
      state = state.setIn(['scene', 'layers', layerID, 'holes', holeID, 'properties'], properties);
      return {
        updatedState: state
      };
    }
  }, {
    key: "setJsProperties",
    value: function setJsProperties(state, layerID, holeID, properties) {
      return this.setProperties(state, layerID, holeID, (0, _immutable.fromJS)(properties));
    }
  }, {
    key: "updateProperties",
    value: function updateProperties(state, layerID, holeID, properties) {
      properties.forEach(function (v, k) {
        if (state.hasIn(['scene', 'layers', layerID, 'holes', holeID, 'properties', k])) state = state.mergeIn(['scene', 'layers', layerID, 'holes', holeID, 'properties', k], v);
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "updateJsProperties",
    value: function updateJsProperties(state, layerID, holeID, properties) {
      return this.updateProperties(state, layerID, holeID, (0, _immutable.fromJS)(properties));
    }
  }, {
    key: "setAttributes",
    value: function setAttributes(state, layerID, holeID, holesAttributes) {
      var hAttr = holesAttributes.toJS();
      var offsetA = hAttr.offsetA,
        offsetB = hAttr.offsetB,
        offset = hAttr.offset;
      delete hAttr['offsetA'];
      delete hAttr['offsetB'];
      delete hAttr['offset'];
      var misc = new _immutable.Map({
        _unitA: offsetA._unit,
        _unitB: offsetB._unit
      });
      state = state.mergeIn(['scene', 'layers', layerID, 'holes', holeID], (0, _immutable.fromJS)(hAttr)).mergeDeepIn(['scene', 'layers', layerID, 'holes', holeID], new _immutable.Map({
        offset: offset,
        misc: misc
      }));
      return {
        updatedState: state
      };
    }
  }]);
}();