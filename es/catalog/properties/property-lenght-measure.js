"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PropertyLengthMeasure;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _constants = require("./../../constants");
var _convertUnits = _interopRequireDefault(require("convert-units"));
var _export = require("../../components/style/export");
var _immutable = require("immutable");
var _math = require("../../utils/math");
var _sharedPropertyStyle = _interopRequireDefault(require("./shared-property-style"));
var _excluded = ["hook", "label"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
var internalTableStyle = {
  borderCollapse: 'collapse'
};
var secondTdStyle = {
  padding: 0
};
var unitContainerStyle = {
  width: '5em'
};
function PropertyLengthMeasure(_ref, _ref2) {
  var value = _ref.value,
    onUpdate = _ref.onUpdate,
    onValid = _ref.onValid,
    configs = _ref.configs,
    sourceElement = _ref.sourceElement,
    internalState = _ref.internalState,
    state = _ref.state;
  var catalog = _ref2.catalog;
  var length = value.get('length') || 0;
  var _length = value.get('_length') || length;
  var _unit = value.get('_unit') || _constants.UNIT_CENTIMETER;
  var hook = configs.hook,
    label = configs.label,
    configRest = _objectWithoutProperties(configs, _excluded);
  var update = function update(lengthInput, unitInput) {
    var newLength = (0, _math.toFixedFloat)(lengthInput);
    var merged = value.merge({
      length: unitInput !== _constants.UNIT_CENTIMETER ? (0, _convertUnits["default"])(newLength).from(unitInput).to(_constants.UNIT_CENTIMETER) : newLength,
      _length: lengthInput,
      _unit: unitInput
    });
    if (hook) {
      return hook(merged, sourceElement, internalState, state).then(function (val) {
        return onUpdate(val);
      });
    }
    return onUpdate(merged);
  };
  return /*#__PURE__*/_react["default"].createElement("table", {
    className: "PropertyLengthMeasure",
    style: _sharedPropertyStyle["default"].tableStyle
  }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    style: _sharedPropertyStyle["default"].firstTdStyle
  }, /*#__PURE__*/_react["default"].createElement(_export.FormLabel, null, label)), /*#__PURE__*/_react["default"].createElement("td", {
    style: secondTdStyle
  }, /*#__PURE__*/_react["default"].createElement("table", {
    style: internalTableStyle
  }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_export.FormNumberInput, _extends({
    value: _length,
    onChange: function onChange(event) {
      return update(event.target.value, _unit);
    },
    onValid: onValid
  }, configRest))), /*#__PURE__*/_react["default"].createElement("td", {
    style: unitContainerStyle
  }, /*#__PURE__*/_react["default"].createElement(_export.FormSelect, {
    value: _unit,
    onChange: function onChange(event) {
      return update(_length, event.target.value);
    }
  }, _constants.UNITS_LENGTH.map(function (el) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: el,
      value: el
    }, el);
  }))))))))));
}
PropertyLengthMeasure.propTypes = {
  value: _propTypes["default"].instanceOf(_immutable.Map).isRequired,
  onUpdate: _propTypes["default"].func.isRequired,
  onValid: _propTypes["default"].func,
  configs: _propTypes["default"].object.isRequired,
  sourceElement: _propTypes["default"].object,
  internalState: _propTypes["default"].object,
  state: _propTypes["default"].object.isRequired
};
PropertyLengthMeasure.contextTypes = {
  catalog: _propTypes["default"].object.isRequired
};