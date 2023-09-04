"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Grids;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _gridHorizontalStreak = _interopRequireDefault(require("./grid-horizontal-streak"));
var _gridVerticalStreak = _interopRequireDefault(require("./grid-vertical-streak"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Grids(_ref) {
  var scene = _ref.scene;
  var width = scene.width,
    height = scene.height,
    grids = scene.grids;
  var renderedGrids = grids.entrySeq().map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      gridID = _ref3[0],
      grid = _ref3[1];
    switch (grid.type) {
      case 'horizontal-streak':
        return /*#__PURE__*/_react["default"].createElement(_gridHorizontalStreak["default"], {
          key: gridID,
          width: width,
          height: height,
          grid: grid
        });
      case 'vertical-streak':
        return /*#__PURE__*/_react["default"].createElement(_gridVerticalStreak["default"], {
          key: gridID,
          width: width,
          height: height,
          grid: grid
        });
      default:
        console.warn("grid ".concat(grid.type, " not allowed"));
    }
  }).toList();
  return /*#__PURE__*/_react["default"].createElement("g", null, renderedGrids);
}
Grids.propTypes = {
  scene: _propTypes["default"].object.isRequired
};