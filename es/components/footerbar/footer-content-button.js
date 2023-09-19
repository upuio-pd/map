"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
var _fa = require("react-icons/fa");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
var FooterContentButton = /*#__PURE__*/function (_Component) {
  _inherits(FooterContentButton, _Component);
  var _super = _createSuper(FooterContentButton);
  function FooterContentButton(props) {
    var _this;
    _classCallCheck(this, FooterContentButton);
    _this = _super.call(this, props);
    _this.state = {
      over: false,
      closeOver: false,
      active: _this.props.toggleState || false
    };
    return _this;
  }
  _createClass(FooterContentButton, [{
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
  return FooterContentButton;
}(_react.Component);
exports["default"] = FooterContentButton;
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