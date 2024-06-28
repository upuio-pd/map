"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
var _fa = require("react-icons/fa");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var STYLE = {};
var STYLE_TITLE = {
  fontSize: "11px",
  color: "black",
  padding: "5px 15px 8px 15px",
  backgroundColor: "rgba(246, 246, 246)",
  borderTopLeftRadius: "15px",
  borderTopRightRadius: "15px",
  margin: "0px"
};
var STYLE_CONTENT = {
  fontSize: "11px",
  color: "black",
  borderBottomLeftRadius: "15px",
  borderBottomRightRadius: "15px",
  padding: "0px",
  backgroundColor: "rgba(246, 246, 246)"
};
var STYLE_ARROW = {
  "float": "right"
};
var Panel = exports["default"] = /*#__PURE__*/function (_Component) {
  function Panel(props, context) {
    var _this;
    _classCallCheck(this, Panel);
    _this = _callSuper(this, Panel, [props, context]);
    _this.state = {
      opened: props.hasOwnProperty("opened") ? props.opened : false,
      hover: false
    };
    return _this;
  }
  _inherits(Panel, _Component);
  return _createClass(Panel, [{
    key: "toggleOpen",
    value: function toggleOpen() {
      this.setState({
        opened: !this.state.opened
      });
    }
  }, {
    key: "toggleHover",
    value: function toggleHover() {
      this.setState({
        hover: !this.state.hover
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        name = _this$props.name,
        headComponents = _this$props.headComponents,
        children = _this$props.children;
      var _this$state = this.state,
        opened = _this$state.opened,
        hover = _this$state.hover;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: STYLE
      }, /*#__PURE__*/_react["default"].createElement("h3", {
        style: STYLE_TITLE
      }, name.toUpperCase()), /*#__PURE__*/_react["default"].createElement("div", {
        style: STYLE_CONTENT
      }, children));
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: STYLE
      }, /*#__PURE__*/_react["default"].createElement("h3", {
        style: _objectSpread(_objectSpread({}, STYLE_TITLE), {}, {
          color: hover ? SharedStyle.SECONDARY_COLOR.main : SharedStyle.PRIMARY_COLOR.text_alt
        }),
        onMouseEnter: function onMouseEnter() {
          return _this2.toggleHover();
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.toggleHover();
        },
        onClick: function onClick() {
          return _this2.toggleOpen();
        }
      }, name, headComponents, opened ? /*#__PURE__*/_react["default"].createElement(_fa.FaAngleUp, {
        style: STYLE_ARROW
      }) : /*#__PURE__*/_react["default"].createElement(_fa.FaAngleDown, {
        style: STYLE_ARROW
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread(_objectSpread({}, STYLE_CONTENT), {}, {
          display: opened ? "block" : "none"
        })
      }, children));
    }
  }]);
}(_react.Component);
Panel.propTypes = {
  name: _propTypes["default"].string.isRequired,
  headComponents: _propTypes["default"].array,
  opened: _propTypes["default"].bool
};