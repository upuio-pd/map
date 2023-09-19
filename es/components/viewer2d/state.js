"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = State;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _scene = _interopRequireDefault(require("./scene"));
var _snap = _interopRequireDefault(require("./snap"));
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var guideStyle = {
  stroke: SharedStyle.SECONDARY_COLOR.main,
  strokewidth: '2.5px'
};
function State(_ref) {
  var state = _ref.state,
    catalog = _ref.catalog;
  var activeSnapElement = state.activeSnapElement,
    snapElements = state.snapElements,
    scene = state.scene;
  var width = scene.width,
    height = scene.height;
  var localStorage = window.hasOwnProperty('localStorage') ? window.localStorage : false;
  activeSnapElement = activeSnapElement ? /*#__PURE__*/_react["default"].createElement(_snap["default"], {
    snap: activeSnapElement,
    width: scene.width,
    height: scene.height
  }) : null;
  // snapElements = snapElements.map((snap,id) => <Snap key={id} snap={snap} width={scene.width} height={scene.height}/>);
  snapElements = null; //only for debug purpose

  return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("rect", {
    x: "0",
    y: "0",
    width: width,
    height: height,
    fill: localStorage.theme == 'dark' ? "#292929" : "#FFF"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(0, ".concat(scene.height, ") scale(1, -1)"),
    id: "svg-drawing-paper"
  }, /*#__PURE__*/_react["default"].createElement(_scene["default"], {
    scene: scene,
    catalog: catalog
  }), scene.getIn(['guides', 'horizontal']).entrySeq().map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      hgKey = _ref3[0],
      hgVal = _ref3[1];
    return /*#__PURE__*/_react["default"].createElement("line", {
      id: 'hGuide' + hgKey,
      key: hgKey,
      x1: 0,
      y1: hgVal,
      x2: width,
      y2: hgVal,
      style: guideStyle
    });
  }), scene.getIn(['guides', 'vertical']).entrySeq().map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
      vgKey = _ref5[0],
      vgVal = _ref5[1];
    return /*#__PURE__*/_react["default"].createElement("line", {
      key: vgKey,
      x1: vgVal,
      y1: 0,
      x2: vgVal,
      y2: height,
      style: guideStyle
    });
  }), activeSnapElement, snapElements));
}
State.propTypes = {
  state: _propTypes["default"].object.isRequired,
  catalog: _propTypes["default"].object.isRequired
};