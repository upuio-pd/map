"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.VerticalGuide = exports.HorizontalGuide = exports.CircularGuide = void 0;
var _export = require("../utils/export");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var HorizontalGuide = /*#__PURE__*/function () {
  function HorizontalGuide() {
    _classCallCheck(this, HorizontalGuide);
  }
  _createClass(HorizontalGuide, null, [{
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
  return HorizontalGuide;
}();
exports.HorizontalGuide = HorizontalGuide;
;
var VerticalGuide = /*#__PURE__*/function () {
  function VerticalGuide() {
    _classCallCheck(this, VerticalGuide);
  }
  _createClass(VerticalGuide, null, [{
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
  return VerticalGuide;
}();
exports.VerticalGuide = VerticalGuide;
;
var CircularGuide = /*#__PURE__*/_createClass(function CircularGuide() {
  _classCallCheck(this, CircularGuide);
});
exports.CircularGuide = CircularGuide;
;
var _default = {
  HorizontalGuide: HorizontalGuide,
  VerticalGuide: VerticalGuide,
  CircularGuide: CircularGuide
};
exports["default"] = _default;