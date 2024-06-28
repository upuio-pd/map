"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FormColorInput;
var _react = _interopRequireDefault(require("react"));
var _formTextInput = _interopRequireDefault(require("./form-text-input"));
var _excluded = ["onChange"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
var STYLE = {
  padding: 0,
  border: 0
};
var EREG_NUMBER = /^.*$/;
function FormColorInput(_ref) {
  var onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, _excluded);
  var onChangeCustom = function onChangeCustom(event) {
    var value = event.target.value;
    if (EREG_NUMBER.test(value)) {
      onChange(event);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_formTextInput["default"], _extends({
    type: "color",
    style: STYLE,
    onChange: onChangeCustom,
    autoComplete: "off"
  }, rest));
}