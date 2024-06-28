"use strict";

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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var labelContainerStyle = {
  width: 'auto',
  display: 'inline-block',
  margin: 0,
  padding: '0px 5px 0px 0px'
};
var toggleButtonStyle = {
  color: '#CCC',
  textAlign: 'center',
  cursor: 'pointer',
  userSelect: 'none'
};
var toggleButtonStyleOver = _objectSpread(_objectSpread({}, toggleButtonStyle), {}, {
  color: SharedStyle.COLORS.white
});
var contentContainerStyleActive = {
  position: 'fixed',
  width: 'calc( 100% - 2px )',
  height: '40%',
  left: 0,
  bottom: 20,
  backgroundColor: SharedStyle.PRIMARY_COLOR.alt,
  borderTop: SharedStyle.PRIMARY_COLOR.border,
  zIndex: 0,
  padding: 0,
  margin: 0,
  transition: 'all 300ms ease'
};
var contentContainerStyleInactive = _objectSpread(_objectSpread({}, contentContainerStyleActive), {}, {
  visibility: 'hidden',
  height: 0
});
var contentHeaderStyle = {
  position: 'relative',
  width: '100%',
  height: '2em',
  top: 0,
  left: 0,
  borderBottom: SharedStyle.PRIMARY_COLOR.border
};
var titleStyle = {
  position: 'relative',
  height: '2em',
  lineHeight: '2em',
  marginLeft: '1em'
};
var contentAreaStyle = {
  position: 'relative',
  width: '100%',
  height: 'calc( 100% - 2em )',
  padding: '1em',
  overflowY: 'auto'
};
var iconCloseStyleOut = {
  position: 'absolute',
  width: '2em',
  height: '2em',
  right: 0,
  top: 0,
  padding: '0.5em',
  borderLeft: SharedStyle.PRIMARY_COLOR.border,
  cursor: 'pointer'
};
var iconCloseStyleOver = _objectSpread(_objectSpread({}, iconCloseStyleOut), {}, {
  color: SharedStyle.COLORS.white,
  backgroundColor: SharedStyle.SECONDARY_COLOR.alt
});
var iconStyle = {
  width: '15px',
  height: '15px',
  marginTop: '-2px',
  marginRight: '2px'
};
var textStyle = {
  position: 'relative'
};
var FooterContentButton = exports["default"] = /*#__PURE__*/function (_Component) {
  function FooterContentButton(props) {
    var _this;
    _classCallCheck(this, FooterContentButton);
    _this = _callSuper(this, FooterContentButton, [props]);
    _this.state = {
      over: false,
      closeOver: false,
      active: _this.props.toggleState || false
    };
    return _this;
  }
  _inherits(FooterContentButton, _Component);
  return _createClass(FooterContentButton, [{
    key: "toggleOver",
    value: function toggleOver(e) {
      this.setState({
        over: true
      });
    }
  }, {
    key: "toggleOut",
    value: function toggleOut(e) {
      this.setState({
        over: false
      });
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      var isActive = !this.state.active;
      this.setState({
        active: isActive
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.state.over != nextState.over) return true;
      if (this.state.closeOver != nextState.closeOver) return true;
      if (this.state.active != nextState.active) return true;
      if (this.props.content.length != nextProps.content.length) return true;
      if (this.props.toggleState != nextProps.toggleState) return true;
      return false;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.toggleState != this.props.toggleState) this.state.active = nextProps.toggleState;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var s = this.state;
      var p = this.props;
      var LabelIcon = p.icon || null;
      var labelIconStyle = p.iconStyle || {};
      var labelTextStyle = p.textStyle || {};
      var inputTitleStyle = p.titleStyle || {};
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: labelContainerStyle
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: s.over || s.active ? toggleButtonStyleOver : toggleButtonStyle,
        onClick: function onClick(e) {
          return _this2.toggle(e);
        },
        title: p.title
      }, /*#__PURE__*/_react["default"].createElement(LabelIcon, {
        style: _objectSpread(_objectSpread({}, labelIconStyle), iconStyle)
      }), /*#__PURE__*/_react["default"].createElement("span", {
        style: _objectSpread(_objectSpread({}, textStyle), labelTextStyle)
      }, p.text)), /*#__PURE__*/_react["default"].createElement("div", {
        style: s.active ? contentContainerStyleActive : contentContainerStyleInactive
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: contentHeaderStyle
      }, /*#__PURE__*/_react["default"].createElement("b", {
        style: _objectSpread(_objectSpread({}, titleStyle), inputTitleStyle)
      }, p.title), /*#__PURE__*/_react["default"].createElement(_fa.FaTimes, {
        style: s.closeOver ? iconCloseStyleOver : iconCloseStyleOut,
        onMouseOver: function onMouseOver(e) {
          return _this2.setState({
            closeOver: true
          });
        },
        onMouseOut: function onMouseOut(e) {
          return _this2.setState({
            closeOver: false
          });
        },
        onClick: function onClick(e) {
          return _this2.toggle(e);
        }
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: contentAreaStyle
      }, p.content)));
    }
  }]);
}(_react.Component);
FooterContentButton.propTypes = {
  state: _propTypes["default"].object.isRequired,
  text: _propTypes["default"].string.isRequired,
  textStyle: _propTypes["default"].object,
  icon: _propTypes["default"].func,
  iconStyle: _propTypes["default"].object,
  content: _propTypes["default"].array.isRequired,
  toggleState: _propTypes["default"].bool,
  title: _propTypes["default"].string,
  titleStyle: _propTypes["default"].object
};
FooterContentButton.contextTypes = {
  projectActions: _propTypes["default"].object.isRequired,
  viewer2DActions: _propTypes["default"].object.isRequired,
  viewer3DActions: _propTypes["default"].object.isRequired,
  linesActions: _propTypes["default"].object.isRequired,
  holesActions: _propTypes["default"].object.isRequired,
  itemsActions: _propTypes["default"].object.isRequired,
  translator: _propTypes["default"].object.isRequired
};