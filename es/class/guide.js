"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.VerticalGuide = exports.HorizontalGuide = exports.CircularGuide = void 0;
var _export = require("../utils/export");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HorizontalGuide = exports.HorizontalGuide = /*#__PURE__*/function () {
  function HorizontalGuide() {
    _classCallCheck(this, HorizontalGuide);
  }
  return _createClass(HorizontalGuide, null, [{
    key: "create",
    value: function create(state, coordinate) {
      var hGuideID = _export.IDBroker.acquireID();
      state = state.setIn(['scene', 'guides', 'horizontal', hGuideID], coordinate);
      return {
        updatedState: state
      };
    }
  }, {
    key: "remove",
    value: function remove(state, hGuideID) {
      state = state.deleteIn(['scene', 'guides', 'horizontal', hGuideID]);
      return {
        updatedState: state
      };
    }
  }]);
}();
;
var VerticalGuide = exports.VerticalGuide = /*#__PURE__*/function () {
  function VerticalGuide() {
    _classCallCheck(this, VerticalGuide);
  }
  return _createClass(VerticalGuide, null, [{
    key: "create",
    value: function create(state, coordinate) {
      var vGuideID = _export.IDBroker.acquireID();
      state = state.setIn(['scene', 'guides', 'vertical', vGuideID], coordinate);
      return {
        updatedState: state
      };
    }
  }, {
    key: "remove",
    value: function remove(state, vGuideID) {
      state = state.deleteIn(['scene', 'guides', 'vertical', vGuideID]);
      return {
        updatedState: state
      };
    }
  }]);
}();
;
var CircularGuide = exports.CircularGuide = /*#__PURE__*/_createClass(function CircularGuide() {
  _classCallCheck(this, CircularGuide);
});
;
var _default = exports["default"] = {
  HorizontalGuide: HorizontalGuide,
  VerticalGuide: VerticalGuide,
  CircularGuide: CircularGuide
};