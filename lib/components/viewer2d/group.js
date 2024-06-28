"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Group;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactIf = _interopRequireDefault(require("../../utils/react-if"));
var sharedStyles = _interopRequireWildcard(require("../../shared-style"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var cx = 0;
var cy = 0;
var radius = 5;
var STYLE_CIRCLE = {
  fill: sharedStyles.MATERIAL_COLORS[500].orange,
  stroke: sharedStyles.MATERIAL_COLORS[500].orange,
  cursor: 'default'
};
function Group(_ref, _ref2) {
  var layer = _ref.layer,
    group = _ref.group,
    scene = _ref.scene,
    catalog = _ref.catalog;
  var translator = _ref2.translator;
  return /*#__PURE__*/_react["default"].createElement("g", {
    "data-element-root": true,
    "data-prototype": group.prototype,
    "data-id": group.id,
    "data-selected": group.selected,
    "data-layer": layer.id,
    style: group.selected ? {
      cursor: 'move'
    } : {},
    transform: "translate(".concat(group.x, ",").concat(group.y, ") rotate(").concat(group.rotation, ")")
  }, /*#__PURE__*/_react["default"].createElement(_reactIf["default"], {
    condition: group.selected
  }, /*#__PURE__*/_react["default"].createElement("g", {
    "data-element-root": true,
    "data-prototype": group.prototype,
    "data-id": group.id,
    "data-selected": group.selected,
    "data-layer": layer.id,
    "data-part": "rotation-anchor"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: cx,
    cy: cy,
    r: radius,
    style: STYLE_CIRCLE
  }, /*#__PURE__*/_react["default"].createElement("title", null, translator.t('Group\'s Barycenter'))))));
}
Group.propTypes = {
  group: _propTypes["default"].object.isRequired,
  layer: _propTypes["default"].object.isRequired,
  scene: _propTypes["default"].object.isRequired,
  catalog: _propTypes["default"].object.isRequired
};
Group.contextTypes = {
  translator: _propTypes["default"].object.isRequired
};