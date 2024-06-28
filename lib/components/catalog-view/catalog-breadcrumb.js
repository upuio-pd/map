"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _md = require("react-icons/md");
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var _default = exports["default"] = CatalogBreadcrumb;