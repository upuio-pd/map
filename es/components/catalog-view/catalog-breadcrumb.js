"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _md = require("react-icons/md");
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var breadcrumbStyle = {
  margin: '1.5em',
  display: 'flex'
};
var breadcrumbTextStyle = {
  fontSize: '20px',
  cursor: 'pointer'
};
var breadcrumbLastTextStyle = _objectSpread(_objectSpread({}, breadcrumbTextStyle), {}, {
  fontWeight: 'bolder',
  color: SharedStyle.SECONDARY_COLOR.main
});
var breadcrumbTabStyle = {
  fill: SharedStyle.COLORS.black,
  fontSize: '24px',
  marginLeft: '10px',
  marginRight: '10px'
};
var CatalogBreadcrumb = function CatalogBreadcrumb(_ref) {
  var names = _ref.names;
  var labelNames = names.map(function (name, ind) {
    var lastElement = ind === names.length - 1;
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: ind,
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: !lastElement ? breadcrumbTextStyle : breadcrumbLastTextStyle,
      onClick: name.action || null
    }, name.name), !lastElement ? /*#__PURE__*/_react["default"].createElement(_md.MdArrowBack, {
      style: breadcrumbTabStyle
    }) : null);
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: breadcrumbStyle
  }, labelNames);
};
CatalogBreadcrumb.propTypes = {
  names: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired
};
var _default = CatalogBreadcrumb;
exports["default"] = _default;