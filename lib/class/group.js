"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _export = require("./export");
var _immutable = require("immutable");
var _models = require("../models");
var _export2 = require("../utils/export");
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
var Group = exports["default"] = /*#__PURE__*/function () {
  function Group() {
    _classCallCheck(this, Group);
  }
  return _createClass(Group, null, [{
    key: "select",
    value: function select(state, groupID) {
      var layerList = state.getIn(['scene', 'groups', groupID, 'elements']);
      state = _export.Project.setAlterate(state).updatedState;
      layerList.entrySeq().forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          groupLayerID = _ref2[0],
          groupLayerElements = _ref2[1];
        state = _export.Layer.unselectAll(state, groupLayerID).updatedState;
        var lines = groupLayerElements.get('lines');
        var holes = groupLayerElements.get('holes');
        var items = groupLayerElements.get('items');
        var areas = groupLayerElements.get('areas');
        if (lines) lines.forEach(function (lineID) {
          state = _export.Line.select(state, groupLayerID, lineID).updatedState;
        });
        if (holes) holes.forEach(function (holeID) {
          state = _export.Hole.select(state, groupLayerID, holeID).updatedState;
        });
        if (items) items.forEach(function (itemID) {
          state = _export.Item.select(state, groupLayerID, itemID).updatedState;
        });
        if (areas) areas.forEach(function (areaID) {
          state = _export.Area.select(state, groupLayerID, areaID).updatedState;
        });
      });
      state = _export.Project.setAlterate(state).updatedState;
      var groups = state.getIn(['scene', 'groups']).map(function (g) {
        return g.set('selected', false);
      });
      state = state.setIn(['scene', 'groups'], groups).setIn(['scene', 'groups', groupID, 'selected'], true);
      return {
        updatedState: state
      };
    }
  }, {
    key: "unselect",
    value: function unselect(state, groupID) {
      var layerList = state.getIn(['scene', 'groups', groupID, 'elements']);
      var reduced = layerList.reduce(function (newState, layer, layerID) {
        return _export.Layer.unselectAll(newState, layerID).updatedState;
      }, state);
      state = reduced.setIn(['scene', 'groups', groupID, 'selected'], false);
      return {
        updatedState: state
      };
    }
  }, {
    key: "create",
    value: function create(state) {
      var groupID = _export2.IDBroker.acquireID();
      state = state.setIn(['scene', 'groups', groupID], new _models.Group({
        id: groupID,
        name: groupID
      }));
      return {
        updatedState: state
      };
    }
  }, {
    key: "createFromSelectedElements",
    value: function createFromSelectedElements(state) {
      var _this = this;
      var groupID = _export2.IDBroker.acquireID();
      state = state.setIn(['scene', 'groups', groupID], new _models.Group({
        id: groupID,
        name: groupID
      }));
      state.getIn(['scene', 'layers']).forEach(function (layer) {
        var layerID = layer.get('id');
        var layerElements = {
          'lines': layer.get('lines').filter(function (el) {
            return el.get('selected');
          }),
          'items': layer.get('items').filter(function (el) {
            return el.get('selected');
          }),
          'holes': layer.get('holes').filter(function (el) {
            return el.get('selected');
          }),
          'areas': layer.get('areas').filter(function (el) {
            return el.get('selected');
          })
        };
        var _loop = function _loop(elementPrototype) {
          layerElements[elementPrototype].forEach(function (el) {
            return state = _this.addElement(state, groupID, layerID, elementPrototype, el.get('id')).updatedState;
          });
        };
        for (var elementPrototype in layerElements) {
          _loop(elementPrototype);
        }
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "addElement",
    value: function addElement(state, groupID, layerID, elementPrototype, elementID) {
      var actualList = state.getIn(['scene', 'groups', groupID, 'elements', layerID, elementPrototype]) || new _immutable.List();
      if (!actualList.contains(elementID)) {
        state = state.setIn(['scene', 'groups', groupID, 'elements', layerID, elementPrototype], actualList.push(elementID));
        state = this.reloadBaricenter(state, groupID).updatedState;
      }
      return {
        updatedState: state
      };
    }
  }, {
    key: "setBarycenter",
    value: function setBarycenter(state, groupID, x, y) {
      if (typeof x !== 'undefined') state = state.setIn(['scene', 'groups', groupID, 'x'], x);
      if (typeof y !== 'undefined') state = state.setIn(['scene', 'groups', groupID, 'y'], y);
      return {
        updatedState: state
      };
    }
  }, {
    key: "reloadBaricenter",
    value: function reloadBaricenter(state, groupID) {
      var layerList = state.getIn(['scene', 'groups', groupID, 'elements']);
      var _state$get$toJS = state.get('viewer2D').toJS(),
        a = _state$get$toJS.a,
        b = _state$get$toJS.b,
        c = _state$get$toJS.c,
        d = _state$get$toJS.d,
        e = _state$get$toJS.e,
        f = _state$get$toJS.f,
        SVGHeight = _state$get$toJS.SVGHeight;
      var m1 = [[a, b, c], [d, e, f], [0, 0, 1]];
      var xBar = 0;
      var yBar = 0;
      var elementCount = 0;
      layerList.entrySeq().forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          groupLayerID = _ref4[0],
          groupLayerElements = _ref4[1];
        state = _export.Layer.unselectAll(state, groupLayerID).updatedState;
        var lines = groupLayerElements.get('lines');
        var holes = groupLayerElements.get('holes');
        var items = groupLayerElements.get('items');
        var areas = groupLayerElements.get('areas');
        if (lines) lines.forEach(function (lineID) {
          var vertices = state.getIn(['scene', 'layers', groupLayerID, 'lines', lineID, 'vertices']).map(function (vID) {
            return state.getIn(['scene', 'layers', groupLayerID, 'vertices', vID]);
          });
          var _vertices$get = vertices.get(0),
            x1 = _vertices$get.x,
            y1 = _vertices$get.y;
          var _vertices$get2 = vertices.get(1),
            x2 = _vertices$get2.x,
            y2 = _vertices$get2.y;
          var _GeometryUtils$midPoi = _export2.GeometryUtils.midPoint(x1, y1, x2, y2),
            xM = _GeometryUtils$midPoi.x,
            yM = _GeometryUtils$midPoi.y;
          xBar += xM;
          yBar += yM;
          elementCount++;
        });
        if (holes) holes.forEach(function (holeID) {
          var hole = state.getIn(['scene', 'layers', groupLayerID, 'holes', holeID]);
          var lineVertices = state.getIn(['scene', 'layers', groupLayerID, 'lines', hole.line, 'vertices']).map(function (vID) {
            return state.getIn(['scene', 'layers', groupLayerID, 'vertices', vID]);
          });
          var _lineVertices$get = lineVertices.get(0),
            x1 = _lineVertices$get.x,
            y1 = _lineVertices$get.y;
          var _lineVertices$get2 = lineVertices.get(1),
            x2 = _lineVertices$get2.x,
            y2 = _lineVertices$get2.y;
          var _GeometryUtils$extend = _export2.GeometryUtils.extendLine(x1, y1, x2, y2, hole.offset * _export2.GeometryUtils.pointsDistance(x1, y1, x2, y2)),
            x = _GeometryUtils$extend.x,
            y = _GeometryUtils$extend.y;
          xBar += x;
          yBar += y;
          elementCount++;
        });
        if (items) items.forEach(function (itemID) {
          var _state$getIn = state.getIn(['scene', 'layers', groupLayerID, 'items', itemID]),
            x = _state$getIn.x,
            y = _state$getIn.y;
          xBar += x;
          yBar += y;
          elementCount++;
        });
        if (areas) areas.forEach(function (areaID) {
          var areaVertices = state.getIn(['scene', 'layers', groupLayerID, 'areas', areaID, 'vertices']).map(function (vID) {
            return state.getIn(['scene', 'layers', groupLayerID, 'vertices', vID]);
          }).toJS();
          var _GeometryUtils$vertic = _export2.GeometryUtils.verticesMidPoint(areaVertices),
            x = _GeometryUtils$vertic.x,
            y = _GeometryUtils$vertic.y;
          xBar += x;
          yBar += y;
          elementCount++;
        });
      });
      if (elementCount) {
        state = this.setBarycenter(state, groupID, xBar / elementCount, yBar / elementCount).updatedState;
      }
      return {
        updatedState: state
      };
    }
  }, {
    key: "removeElement",
    value: function removeElement(state, groupID, layerID, elementPrototype, elementID) {
      var actualList = state.getIn(['scene', 'groups', groupID, 'elements', layerID, elementPrototype]);
      if (!actualList || !actualList.contains(elementID)) {
        return {
          updatedState: state
        };
      }
      state = state.setIn(['scene', 'groups', groupID, 'elements', layerID, elementPrototype], actualList.filterNot(function (el) {
        return el === elementID;
      }));
      return {
        updatedState: state
      };
    }
  }, {
    key: "setAttributes",
    value: function setAttributes(state, groupID, attributes) {
      state = state.mergeIn(['scene', 'groups', groupID], attributes);
      return {
        updatedState: state
      };
    }
  }, {
    key: "setProperties",
    value: function setProperties(state, groupID, properties) {
      state = state.mergeIn(['scene', 'groups', groupID, 'properties'], properties);
      return {
        updatedState: state
      };
    }
  }, {
    key: "remove",
    value: function remove(state, groupID) {
      state = state.removeIn(['scene', 'groups', groupID]);
      return {
        updatedState: state
      };
    }
  }, {
    key: "removeAndDeleteElements",
    value: function removeAndDeleteElements(state, groupID) {
      var layerList = state.getIn(['scene', 'groups', groupID, 'elements']);
      layerList.entrySeq().forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          groupLayerID = _ref6[0],
          groupLayerElements = _ref6[1];
        state = _export.Layer.unselectAll(state, groupLayerID).updatedState;
        var lines = groupLayerElements.get('lines');
        var holes = groupLayerElements.get('holes');
        var items = groupLayerElements.get('items');
        var areas = groupLayerElements.get('areas');
        if (lines) {
          lines.forEach(function (lineID) {
            state = _export.Line.remove(state, groupLayerID, lineID).updatedState;
            state = _export.Layer.detectAndUpdateAreas(state, groupLayerID).updatedState;
          });
        }
        if (holes) holes.forEach(function (holeID) {
          state = _export.Hole.remove(state, groupLayerID, holeID).updatedState;
        });
        if (items) items.forEach(function (itemID) {
          state = _export.Item.remove(state, groupLayerID, itemID).updatedState;
        });
        //( actually ) no effect by area's destruction
        if (false && areas) areas.forEach(function (areaID) {
          state = _export.Area.remove(state, groupLayerID, areaID).updatedState;
        });
      });
      state = state.deleteIn(['scene', 'groups', groupID]);
      return {
        updatedState: state
      };
    }
  }, {
    key: "translate",
    value: function translate(state, groupID, x, y) {
      var deltaX = x - state.getIn(['scene', 'groups', groupID, 'x']);
      var deltaY = y - state.getIn(['scene', 'groups', groupID, 'y']);
      var layerList = state.getIn(['scene', 'groups', groupID, 'elements']);
      layerList.entrySeq().forEach(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
          groupLayerID = _ref8[0],
          groupLayerElements = _ref8[1];
        var lines = groupLayerElements.get('lines');
        //let holes = groupLayerElements.get('holes');
        var items = groupLayerElements.get('items');
        //let areas = groupLayerElements.get('areas');

        //move vertices instead lines avoiding multiple vertex translation
        if (lines) {
          var vertices = {};
          lines.forEach(function (lineID) {
            var line = state.getIn(['scene', 'layers', groupLayerID, 'lines', lineID]);
            if (!vertices[line.vertices.get(0)]) vertices[line.vertices.get(0)] = state.getIn(['scene', 'layers', groupLayerID, 'vertices', line.vertices.get(0)]);
            if (!vertices[line.vertices.get(1)]) vertices[line.vertices.get(1)] = state.getIn(['scene', 'layers', groupLayerID, 'vertices', line.vertices.get(1)]);
          });
          for (var vertexID in vertices) {
            var _vertices$vertexID = vertices[vertexID],
              xV = _vertices$vertexID.x,
              yV = _vertices$vertexID.y;
            state = _export.Vertex.setAttributes(state, groupLayerID, vertexID, new _immutable.Map({
              x: xV + deltaX,
              y: yV + deltaY
            })).updatedState;
          }

          //need to be separated from setAttributes cycle
          for (var _vertexID in vertices) {
            state = _export.Vertex.beginDraggingVertex(state, groupLayerID, _vertexID).updatedState;
            state = _export.Vertex.endDraggingVertex(state).updatedState;
          }
        }
        if (items) state = items.map(function (itemID) {
          return state.getIn(['scene', 'layers', groupLayerID, 'items', itemID]);
        }).reduce(function (newState, item) {
          var xI = item.x,
            yI = item.y;
          return _export.Item.setAttributes(newState, groupLayerID, item.id, new _immutable.Map({
            x: xI + deltaX,
            y: yI + deltaY
          })).updatedState;
        }, state);

        //translation of holes and areas should not take any effect
        //if( holes ) holes.forEach( holeID => { state = Hole.select( state, groupLayerID, holeID ).updatedState; });
        //if( areas ) areas.forEach( areaID => { state = Area.select( state, groupLayerID, areaID ).updatedState; });

        state = _export.Layer.detectAndUpdateAreas(state, groupLayerID).updatedState;
      });
      state = this.setBarycenter(state, groupID, x, y).updatedState;
      state = Group.select(state, groupID).updatedState;
      return {
        updatedState: state
      };
    }
  }, {
    key: "rotate",
    value: function rotate(state, groupID, newAlpha) {
      var _state$getIn2 = state.getIn(['scene', 'groups', groupID]),
        barX = _state$getIn2.x,
        barY = _state$getIn2.y,
        rotation = _state$getIn2.rotation;
      var alpha = newAlpha - rotation;
      state = Group.setAttributes(state, groupID, new _immutable.Map({
        rotation: newAlpha
      })).updatedState;
      var layerList = state.getIn(['scene', 'groups', groupID, 'elements']);
      layerList.entrySeq().forEach(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
          groupLayerID = _ref10[0],
          groupLayerElements = _ref10[1];
        var lines = groupLayerElements.get('lines');
        var holes = groupLayerElements.get('holes');
        var items = groupLayerElements.get('items');
        var areas = groupLayerElements.get('areas');

        //move vertices instead lines avoiding multiple vertex translation
        if (lines) {
          var vertices = {};
          lines.forEach(function (lineID) {
            var line = state.getIn(['scene', 'layers', groupLayerID, 'lines', lineID]);
            if (!vertices[line.vertices.get(0)]) vertices[line.vertices.get(0)] = state.getIn(['scene', 'layers', groupLayerID, 'vertices', line.vertices.get(0)]);
            if (!vertices[line.vertices.get(1)]) vertices[line.vertices.get(1)] = state.getIn(['scene', 'layers', groupLayerID, 'vertices', line.vertices.get(1)]);
          });
          for (var vertexID in vertices) {
            var _vertices$vertexID2 = vertices[vertexID],
              xV = _vertices$vertexID2.x,
              yV = _vertices$vertexID2.y;
            var _GeometryUtils$rotate = _export2.GeometryUtils.rotatePointAroundPoint(xV, yV, barX, barY, alpha),
              newX = _GeometryUtils$rotate.x,
              newY = _GeometryUtils$rotate.y;
            state = _export.Vertex.setAttributes(state, groupLayerID, vertexID, new _immutable.Map({
              x: newX,
              y: newY
            })).updatedState;
          }
          //need to be separated from setAttributes cycle
          for (var _vertexID2 in vertices) {
            state = _export.Vertex.beginDraggingVertex(state, groupLayerID, _vertexID2).updatedState;
            state = _export.Vertex.endDraggingVertex(state).updatedState;
          }
        }
        if (items) state = items.map(function (itemID) {
          return state.getIn(['scene', 'layers', groupLayerID, 'items', itemID]);
        }).reduce(function (newState, item) {
          var xI = item.x,
            yI = item.y,
            rI = item.rotation;
          var _GeometryUtils$rotate2 = _export2.GeometryUtils.rotatePointAroundPoint(xI, yI, barX, barY, alpha),
            newX = _GeometryUtils$rotate2.x,
            newY = _GeometryUtils$rotate2.y;
          return _export.Item.setAttributes(newState, groupLayerID, item.id, new _immutable.Map({
            x: newX,
            y: newY,
            rotation: rI + alpha
          })).updatedState;
        }, state);

        //rotation of holes and areas should not take any effect
        //if( holes ) holes.forEach( holeID => { state = Hole.select( state, groupLayerID, holeID ).updatedState; });
        //if( areas ) areas.forEach( areaID => { state = Area.select( state, groupLayerID, areaID ).updatedState; });

        state = _export.Layer.detectAndUpdateAreas(state, groupLayerID).updatedState;
      });
      state = Group.select(state, groupID).updatedState;
      return {
        updatedState: state
      };
    }
  }]);
}();