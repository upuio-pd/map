"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FormNumberInput;
var _react = _interopRequireDefault(require("react"));
var _reactRange = _interopRequireDefault(require("@mapbox/react-range"));
var _formTextInput = _interopRequireDefault(require("./form-text-input"));
var _excluded = ["value", "onChange"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
var sliderContainerStyle = {
  display: 'inline-block',
  width: '80%',
  marginRight: '5%'
};
var sliderStyle = {
  display: 'block',
  width: '100%',
  height: '30px'
};
var textContainerStyle = {
  display: 'inline-block',
  width: '15%',
  "float": 'right'
};
var textStyle = {
  height: '34px',
  textAlign: 'center'
};
function FormNumberInput(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: sliderContainerStyle
  }, /*#__PURE__*/_react["default"].createElement(_reactRange["default"], _extends({
    type: "range",
    style: sliderStyle,
    onChange: onChange,
    value: value
  }, rest))), /*#__PURE__*/_react["default"].createElement("div", {
    style: textContainerStyle
  }, /*#__PURE__*/_react["default"].createElement(_formTextInput["default"], {
    value: value,
    onChange: onChange,
    style: textStyle
  })));
}