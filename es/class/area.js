"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _immutable = require("immutable");
var _export = require("./export");
var _export2 = require("../utils/export");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Area = exports["default"] = /*#__PURE__*/function () {
  function Area() {
    _classCallCheck(this, Area);
  }
  return _createClass(Area, null, [{
    key: "add",
    value: function add(state, layerID, type, verticesCoords, catalog) {
      var area;
      var layer = state.getIn(['scene', 'layers', layerID]);
      layer = layer.withMutations(function (layer) {
        var areaID = _export2.IDBroker.acquireID();
        var vertices = verticesCoords.map(function (v) {
          return _export.Vertex.add(state, layerID, v.x, v.y, 'areas', areaID).vertex.id;
        });
        area = catalog.factoryElement(type, {
          id: areaID,
          name: _export2.NameGenerator.generateName('areas', catalog.getIn(['elements', type, 'info', 'title'])),
          type: type,
          prototype: 'areas',
          vertices: vertices
        });
        layer.setIn(['areas', areaID], area);
      });
      state = state.setIn(['scene', 'layers', layerID], layer);
      return {
        updatedState: state,
        area: area
      };
    }
  }, {
    key: "select",
    value: function select(state, layerID, areaID) {
      state = _export.Layer.select(state, layerID).updatedState;
      state = _export.Layer.selectElement(state, layerID, 'areas', areaID).updatedState;
      return {
        updatedState: state
      };
    }
  }, {
    key: "remove",
    value: function remove(state, layerID, areaID) {
      var area = state.getIn(['scene', 'layers', layerID, 'areas', areaID]);
      if (area.get('selected') === true) state = this.unselect(state, layerID, areaID).updatedState;
      area.vertices.forEach(function (vertexID) {
        state = _export.Vertex.remove(state, layerID, vertexID, 'areas', areaID).updatedState;
      });
      state = state.deleteIn(['scene', 'layers', layerID, 'areas', areaID]);
      state.getIn(['scene', 'groups']).forEach(function (group) {
        return state = _export.Group.removeElement(state, group.id, layerID, 'areas', areaID).updatedState;
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "unselect",
    value: function unselect(state, layerID, areaID) {
      state = _export.Layer.unselect(state, layerID, 'areas', areaID).updatedState;
      return {
        updatedState: state
      };
    }
  }, {
    key: "setProperties",
    value: function setProperties(state, layerID, areaID, properties) {
      state = state.mergeIn(['scene', 'layers', layerID, 'areas', areaID, 'properties'], properties);
      return {
        updatedState: state
      };
    }
  }, {
    key: "setJsProperties",
    value: function setJsProperties(state, layerID, areaID, properties) {
      return this.setProperties(state, layerID, areaID, (0, _immutable.fromJS)(properties));
    }
  }, {
    key: "updateProperties",
    value: function updateProperties(state, layerID, areaID, properties) {
      properties.forEach(function (v, k) {
        if (state.hasIn(['scene', 'layers', layerID, 'areas', areaID, 'properties', k])) state = state.mergeIn(['scene', 'layers', layerID, 'areas', areaID, 'properties', k], v);
      });
      return {
        updatedState: state
      };
    }
  }, {
    key: "updateJsProperties",
    value: function updateJsProperties(state, layerID, areaID, properties) {
      return this.updateProperties(state, layerID, areaID, (0, _immutable.fromJS)(properties));
    }
  }, {
    key: "setAttributes",
    value: function setAttributes(state) {
      return {
        updatedState: state
      };
    }
  }]);
}();