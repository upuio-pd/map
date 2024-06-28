"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _immutable = require("immutable");
var _models = require("../models");
var _export = require("../utils/export");
var _constants = require("../constants");
var _export2 = require("../class/export");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Vertex = exports["default"] = /*#__PURE__*/function () {
  function Vertex() {
    _classCallCheck(this, Vertex);
  }
  return _createClass(Vertex, null, [{
    key: "add",
    value: function add(state, layerID, x, y, relatedPrototype, relatedID) {
      var vertex = state.getIn(['scene', 'layers', layerID, 'vertices']).find(function (vertex) {
        return _export.GeometryUtils.samePoints(vertex, {
          x: x,
          y: y
        });
      });
      if (vertex) {
        vertex = vertex.update(relatedPrototype, function (related) {
          return related.push(relatedID);
        });
      } else {
        vertex = new _models.Vertex(_defineProperty({
          id: _export.IDBroker.acquireID(),
          name: 'Vertex',
          x: x,
          y: y
        }, relatedPrototype, new _immutable.List([relatedID])));
      }
      state = state.setIn(['scene', 'layers', layerID, 'vertices', vertex.id], vertex);
      return {
        updatedState: state,
        vertex: vertex
      };
    }
  }, {
    key: "setAttributes",
    value: function setAttributes(state, layerID, vertexID, vertexAttributes) {
      state = state.mergeIn(['scene', 'layers', layerID, 'vertices', vertexID], vertexAttributes);
      return {
        updatedState: state
      };
    }
  }, {
    key: "addElement",
    value: function addElement(state, layerID, vertexID, elementPrototype, elementID) {
      state = state.updateIn(['scene', 'layers', layerID, 'vertices', vertexID, elementPrototype], function (list) {
        return list.push(elementID);
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "removeElement",
    value: function removeElement(state, layerID, vertexID, elementPrototype, elementID) {
      var elementIndex = state.getIn(['scene', 'layers', layerID, 'vertices', vertexID, elementPrototype]).findIndex(function (el) {
        return el === elementID;
      });
      if (elementIndex !== -1) {
        state = state.updateIn(['scene', 'layers', layerID, 'vertices', vertexID, elementPrototype], function (list) {
          return list.remove(elementIndex);
        });
      }
      return {
        updatedState: state
      };
    }
  }, {
    key: "select",
    value: function select(state, layerID, vertexID) {
      state = state.setIn(['scene', 'layers', layerID, 'vertices', vertexID, 'selected'], true);
      state = state.updateIn(['scene', 'layers', layerID, 'selected', 'vertices'], function (elems) {
        return elems.push(vertexID);
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "unselect",
    value: function unselect(state, layerID, vertexID) {
      state = state.setIn(['scene', 'layers', layerID, 'vertices', vertexID, 'selected'], false);
      state = state.updateIn(['scene', 'layers', layerID, 'selected', 'vertices'], function (elems) {
        return elems.filter(function (el) {
          return el.id !== vertexID;
        });
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "remove",
    value: function remove(state, layerID, vertexID, relatedPrototype, relatedID, forceRemove) {
      var vertex = state.getIn(['scene', 'layers', layerID, 'vertices', vertexID]);
      if (vertex) {
        if (relatedPrototype && relatedID) vertex = vertex.update(relatedPrototype, function (related) {
          var index = related.findIndex(function (ID) {
            return relatedID === ID;
          });
          return related["delete"](index);
        });
        var inUse = vertex.areas.size || vertex.lines.size;
        if (inUse && !forceRemove) {
          state = state.setIn(['scene', 'layers', layerID, 'vertices', vertexID], vertex);
        } else {
          state = state.deleteIn(['scene', 'layers', layerID, 'vertices', vertexID]);
        }
      }
      return {
        updatedState: state
      };
    }
  }, {
    key: "beginDraggingVertex",
    value: function beginDraggingVertex(state, layerID, vertexID, x, y) {
      var snapElements = _export.SnapSceneUtils.sceneSnapElements(state.scene, new _immutable.List(), state.snapMask);
      state = state.merge({
        mode: _constants.MODE_DRAGGING_VERTEX,
        snapElements: snapElements,
        draggingSupport: (0, _immutable.Map)({
          layerID: layerID,
          vertexID: vertexID,
          previousMode: state.get('mode')
        })
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "updateDraggingVertex",
    value: function updateDraggingVertex(state, x, y) {
      var _state = state,
        draggingSupport = _state.draggingSupport,
        snapElements = _state.snapElements,
        scene = _state.scene;
      var snap = null;
      if (state.snapMask && !state.snapMask.isEmpty()) {
        snap = _export.SnapUtils.nearestSnap(snapElements, x, y, state.snapMask);
        if (snap) {
          var _snap$point = snap.point;
          x = _snap$point.x;
          y = _snap$point.y;
        }
      }
      var layerID = draggingSupport.get('layerID');
      var vertexID = draggingSupport.get('vertexID');
      state = state.merge({
        activeSnapElement: snap ? snap.snap : null,
        scene: scene.mergeIn(['layers', layerID, 'vertices', vertexID], {
          x: x,
          y: y
        })
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "endDraggingVertex",
    value: function endDraggingVertex(state, x, y) {
      var _state2 = state,
        draggingSupport = _state2.draggingSupport;
      var layerID = draggingSupport.get('layerID');
      var vertexID = draggingSupport.get('vertexID');
      var lines = state.getIn(['scene', 'layers', layerID, 'vertices', vertexID, 'lines']);
      if (lines) {
        state = lines.reduce(function (reducedState, lineID) {
          if (!reducedState.getIn(['scene', 'layers', layerID, 'lines', lineID])) return reducedState;
          var v_id0 = reducedState.getIn(['scene', 'layers', layerID, 'lines', lineID, 'vertices', 0]);
          var v_id1 = reducedState.getIn(['scene', 'layers', layerID, 'lines', lineID, 'vertices', 1]);
          var oldVertexID = v_id0 === vertexID ? v_id1 : v_id0;
          var oldVertex = reducedState.getIn(['scene', 'layers', layerID, 'vertices', oldVertexID]);
          var vertex = reducedState.getIn(['scene', 'layers', layerID, 'vertices', vertexID]);
          var oldHoles = [];
          var orderedVertices = _export.GeometryUtils.orderVertices([oldVertex, vertex]);
          var holes = reducedState.getIn(['scene', 'layers', layerID, 'lines', lineID, 'holes']).forEach(function (holeID) {
            var hole = reducedState.getIn(['scene', 'layers', layerID, 'holes', holeID]);
            var oldLineLength = _export.GeometryUtils.pointsDistance(oldVertex.x, oldVertex.y, vertex.x, vertex.y);
            var offset = _export.GeometryUtils.samePoints(orderedVertices[1], reducedState.getIn(['scene', 'layers', layerID, 'lines', lineID, 'vertices', 1])) ? 1 - hole.offset : hole.offset;
            var offsetPosition = _export.GeometryUtils.extendLine(oldVertex.x, oldVertex.y, vertex.x, vertex.y, oldLineLength * offset);
            oldHoles.push({
              hole: hole,
              offsetPosition: offsetPosition
            });
          });
          var lineType = reducedState.getIn(['scene', 'layers', layerID, 'lines', lineID, 'type']);
          var lineProps = reducedState.getIn(['scene', 'layers', layerID, 'lines', lineID, 'properties']);
          var lineGroups = reducedState //get groups membership if present
          .getIn(['scene', 'groups']).filter(function (group) {
            var lines = group.getIn(['elements', layerID, 'lines']);
            return lines && lines.contains(lineID);
          });
          reducedState = _export2.Layer.removeZeroLengthLines(reducedState, layerID).updatedState;
          reducedState = _export2.Layer.mergeEqualsVertices(reducedState, layerID, vertexID).updatedState;
          reducedState = _export2.Line.remove(reducedState, layerID, lineID).updatedState;
          if (!_export.GeometryUtils.samePoints(oldVertex, vertex)) {
            var ret = _export2.Line.createAvoidingIntersections(reducedState, layerID, lineType, oldVertex.x, oldVertex.y, vertex.x, vertex.y, lineProps, oldHoles);
            reducedState = ret.updatedState;

            //re-add to old line's groups if present
            ret.lines.forEach(function (addedLine) {
              lineGroups.forEach(function (oldLineGroup) {
                reducedState = _export2.Group.addElement(reducedState, oldLineGroup.id, layerID, 'lines', addedLine.id).updatedState;
              });
            });
          }
          return reducedState;
        }, state);
      }
      state = _export2.Layer.detectAndUpdateAreas(state, layerID).updatedState;
      state = state.merge({
        mode: draggingSupport.get('previousMode'),
        draggingSupport: null,
        activeSnapElement: null,
        snapElements: new _immutable.List()
      });
      return {
        updatedState: state
      };
    }
  }]);
}();