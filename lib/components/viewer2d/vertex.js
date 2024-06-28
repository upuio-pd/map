"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Vertex;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var STYLE = {
  fill: "#0096fd",
  stroke: SharedStyle.COLORS.white,
  cursor: "move"
};
function Vertex(_ref) {
  var vertex = _ref.vertex,
    layer = _ref.layer;
  var x = vertex.x,
    y = vertex.y;
  return /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(".concat(x, ", ").concat(y, ")"),
    "data-element-root": true,
    "data-prototype": vertex.prototype,
    "data-id": vertex.id,
    "data-selected": vertex.selected,
    "data-layer": layer.id
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "0",
    cy: "0",
    r: "7",
    style: STYLE
  }));
}
Vertex.propTypes = {
  vertex: _propTypes["default"].object.isRequired,
  layer: _propTypes["default"].object.isRequired
};