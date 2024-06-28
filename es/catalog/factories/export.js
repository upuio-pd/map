"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AreaFactory", {
  enumerable: true,
  get: function get() {
    return _areaFactory["default"];
  }
});
Object.defineProperty(exports, "WallFactory", {
  enumerable: true,
  get: function get() {
    return _wallFactory["default"];
  }
});
exports["default"] = void 0;
var _wallFactory = _interopRequireDefault(require("./wall-factory"));
var _areaFactory = _interopRequireDefault(require("./area-factory"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = {
  WallFactory: _wallFactory["default"],
  AreaFactory: _areaFactory["default"]
};