"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ItemAttributesEditor;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _formNumberInput = _interopRequireDefault(require("../../../style/form-number-input"));
var _formTextInput = _interopRequireDefault(require("../../../style/form-text-input"));
var _excluded = ["element", "onUpdate", "attributeFormData", "state"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
var tableStyle = {
  width: "100%"
};
var firstTdStyle = {
  width: "6em"
};
var inputStyle = {
  textAlign: "left"
};
function ItemAttributesEditor(_ref, _ref2) {
  var translator = _ref2.translator;
  var element = _ref.element,
    onUpdate = _ref.onUpdate,
    attributeFormData = _ref.attributeFormData,
    state = _ref.state,
    rest = _objectWithoutProperties(_ref, _excluded);
  var name = attributeFormData.has("name") ? attributeFormData.get("name") : element.name;
  var renderedX = attributeFormData.has("x") ? attributeFormData.get("x") : element.x;
  var renderedY = attributeFormData.has("y") ? attributeFormData.get("y") : element.y;
  var renderedR = attributeFormData.has("rotation") ? attributeFormData.get("rotation") : element.rotation;
  return /*#__PURE__*/_react["default"].createElement("table", {
    style: tableStyle
  }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    style: firstTdStyle
  }, translator.t("Name")), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_formTextInput["default"], {
    value: name,
    onChange: function onChange(event) {
      return onUpdate("name", event.target.value);
    },
    style: inputStyle
  }))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    style: firstTdStyle
  }, "X"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_formNumberInput["default"], _extends({
    value: renderedX,
    onChange: function onChange(event) {
      return onUpdate("x", event.target.value);
    },
    style: inputStyle,
    state: state,
    precision: 2
  }, rest)))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    style: firstTdStyle
  }, "Y"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_formNumberInput["default"], _extends({
    value: renderedY,
    onChange: function onChange(event) {
      return onUpdate("y", event.target.value);
    },
    style: inputStyle,
    state: state,
    precision: 2
  }, rest)))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    style: firstTdStyle
  }, translator.t("Rotation")), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_formNumberInput["default"], _extends({
    value: renderedR,
    onChange: function onChange(event) {
      return onUpdate("rotation", event.target.value);
    },
    style: inputStyle,
    state: state,
    precision: 2
  }, rest))))));
}
ItemAttributesEditor.propTypes = {
  element: _propTypes["default"].object.isRequired,
  onUpdate: _propTypes["default"].func.isRequired,
  attributeFormData: _propTypes["default"].object.isRequired,
  state: _propTypes["default"].object.isRequired
};
ItemAttributesEditor.contextTypes = {
  translator: _propTypes["default"].object.isRequired
};