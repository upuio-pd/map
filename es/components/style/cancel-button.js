"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CancelButton;
var _react = _interopRequireDefault(require("react"));
var _button = _interopRequireDefault(require("./button"));
var _excluded = ["children"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
var STYLE = {
  borderColor: "#adadad",
  backgroundColor: "#e6e6e6"
};
var STYLE_HOVER = {
  backgroundColor: "#d4d4d4",
  borderColor: "#8c8c8c"
};
function CancelButton(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_button["default"], _extends({
    style: STYLE,
    styleHover: STYLE_HOVER
  }, rest), children);
}