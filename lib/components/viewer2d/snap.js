"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ActiveDrawingHelper;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var Geometry = _interopRequireWildcard(require("../../utils/geometry"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var STYLE = {
  stroke: '#D32F2F',
  strokeWidth: "1px"
};
function ActiveDrawingHelper(_ref) {
  var snap = _ref.snap,
    width = _ref.width,
    height = _ref.height;
  switch (snap.type) {
    case 'point':
      return /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(".concat(snap.x, " ").concat(snap.y, ")")
      }, /*#__PURE__*/_react["default"].createElement("line", {
        x1: "0",
        y1: "-70",
        x2: "0",
        y2: "70",
        style: STYLE
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "-70",
        y1: "0",
        x2: "70",
        y2: "0",
        style: STYLE
      }));
    case 'line':
      var h0 = Geometry.horizontalLine(0);
      var h1 = Geometry.horizontalLine(height);
      var pointH0 = Geometry.twoLinesIntersection(snap.a, snap.b, snap.c, h0.a, h0.b, h0.c);
      var pointH1 = Geometry.twoLinesIntersection(snap.a, snap.b, snap.c, h1.a, h1.b, h1.c);
      var v0 = Geometry.verticalLine(0);
      var v1 = Geometry.verticalLine(width);
      var pointV0 = Geometry.twoLinesIntersection(snap.a, snap.b, snap.c, v0.a, v0.b, v0.c);
      var pointV1 = Geometry.twoLinesIntersection(snap.a, snap.b, snap.c, v1.a, v1.b, v1.c);
      if (pointH0 && pointH1) return /*#__PURE__*/_react["default"].createElement("line", {
        x1: pointH0.x,
        y1: pointH0.y,
        x2: pointH1.x,
        y2: pointH1.y,
        style: STYLE
      });
      if (pointV0 && pointV1) return /*#__PURE__*/_react["default"].createElement("line", {
        x1: pointV0.x,
        y1: pointV0.y,
        x2: pointV1.x,
        y2: pointV1.y,
        style: STYLE
      });
      return null;
    case 'line-segment':
      return /*#__PURE__*/_react["default"].createElement("line", {
        x1: snap.x1,
        y1: snap.y1,
        x2: snap.x2,
        y2: snap.y2,
        style: STYLE
      });
    default:
      return null;
  }
}
ActiveDrawingHelper.propTypes = {
  snap: _propTypes["default"].object.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired
};