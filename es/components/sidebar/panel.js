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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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
var Panel = /*#__PURE__*/function (_Component) {
  _inherits(Panel, _Component);
  var _super = _createSuper(Panel);
  function Panel(props, context) {
    var _this;
    _classCallCheck(this, Panel);
    _this = _super.call(this, props, context);
    _this.state = {
      opened: props.hasOwnProperty("opened") ? props.opened : false,
      hover: false
    };
    return _this;
  }
  _createClass(Panel, [{
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
  return Panel;
}(_react.Component);
exports["default"] = Panel;
Panel.propTypes = {
  name: _propTypes["default"].string.isRequired,
  headComponents: _propTypes["default"].array,
  opened: _propTypes["default"].bool
};