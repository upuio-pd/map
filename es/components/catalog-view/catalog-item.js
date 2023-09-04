"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _fa = require("react-icons/fa");
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
var _STYLE_DESCRIPTION;
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
var STYLE_BOX = {
  width: "14em",
  height: "14em",
  padding: "0.625em",
  background: "#f7f7f9",
  border: "1px solid #e1e1e8",
  cursor: "pointer",
  position: "relative",
  boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.11), 0 1px 4px 0 rgba(0, 0, 0, 0.11)",
  borderRadius: "2px",
  transition: "all .15s ease-in-out",
  WebkitTransition: "all .15s ease-in-out",
  alignSelf: "center",
  justifySelf: "center"
};
var STYLE_BOX_HOVER = _objectSpread(_objectSpread({}, STYLE_BOX), {}, {
  background: SharedStyle.SECONDARY_COLOR.main
});
var STYLE_TITLE = {
  width: "100%",
  textAlign: "center",
  display: "block",
  marginBottom: ".5em",
  textTransform: "capitalize"
};
var STYLE_TITLE_HOVER = _objectSpread(_objectSpread({}, STYLE_TITLE), {}, {
  color: SharedStyle.COLORS.white
});
var STYLE_IMAGE_CONTAINER = {
  width: "100%",
  height: "8em",
  position: "relative",
  overflow: "hidden",
  border: "solid 1px #e6e6e6",
  padding: 0,
  margin: 0,
  marginBottom: "5px"
};
var STYLE_IMAGE = {
  position: "absolute",
  background: "#222",
  width: "100%",
  height: "100%",
  backgroundSize: "contain",
  backgroundPosition: "50% 50%",
  backgroundColor: SharedStyle.COLORS.white,
  backgroundRepeat: "no-repeat",
  transition: "all .2s ease-in-out"
};
var STYLE_IMAGE_HOVER = _objectSpread(_objectSpread({}, STYLE_IMAGE), {}, {
  transform: "scale(1.2)"
});
var STYLE_PLUS_HOVER = {
  marginTop: "1.5em",
  color: SharedStyle.SECONDARY_COLOR.main,
  fontSize: "2em",
  opacity: "0.7",
  width: "100%"
};
var STYLE_DESCRIPTION = (_STYLE_DESCRIPTION = {
  display: "block"
}, _defineProperty(_STYLE_DESCRIPTION, "display", "-webkit-box"), _defineProperty(_STYLE_DESCRIPTION, "height", "2em"), _defineProperty(_STYLE_DESCRIPTION, "margin", "0 auto"), _defineProperty(_STYLE_DESCRIPTION, "fontSize", "0.75em"), _defineProperty(_STYLE_DESCRIPTION, "fontStyle", "italic"), _defineProperty(_STYLE_DESCRIPTION, "lineHeight", "1em"), _defineProperty(_STYLE_DESCRIPTION, "WebkitLineClamp", "2"), _defineProperty(_STYLE_DESCRIPTION, "WebkitBoxOrient", "vertical"), _defineProperty(_STYLE_DESCRIPTION, "overflow", "hidden"), _defineProperty(_STYLE_DESCRIPTION, "textOverflow", "ellipsis"), _STYLE_DESCRIPTION);
var STYLE_TAGS = {
  listStyle: "none",
  margin: "0px",
  padding: "0px",
  fontSize: "11px",
  marginBottom: "3px"
};
var STYLE_TAG = {
  display: "inline-block",
  background: "#337ab7",
  color: SharedStyle.COLORS.white,
  padding: "1px 4px",
  marginRight: "3px",
  borderRadius: "3px"
};
var CatalogItem = /*#__PURE__*/function (_Component) {
  _inherits(CatalogItem, _Component);
  var _super = _createSuper(CatalogItem);
  function CatalogItem(props) {
    var _this;
    _classCallCheck(this, CatalogItem);
    _this = _super.call(this, props);
    _this.state = {
      hover: false
    };
    return _this;
  }
  _createClass(CatalogItem, [{
    key: "select",
    value: function select() {
      var element = this.props.element;
      switch (element.prototype) {
        case "lines":
          this.context.linesActions.selectToolDrawingLine(element.name);
          break;
        case "items":
          this.context.itemsActions.selectToolDrawingItem(element.name);
          break;
        case "holes":
          this.context.holesActions.selectToolDrawingHole(element.name);
          break;
      }
      this.context.projectActions.pushLastSelectedCatalogElementToHistory(element);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var element = this.props.element;
      var hover = this.state.hover;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          border: "1px solid rgba(0,0,0,0.1)",
          padding: 5,
          borderRadius: 10,
          position: "relative",
          cursor: "pointer"
        },
        onClick: function onClick(e) {
          return _this2.select();
        },
        onMouseEnter: function onMouseEnter(e) {
          return _this2.setState({
            hover: true
          });
        },
        onMouseLeave: function onMouseLeave(e) {
          return _this2.setState({
            hover: false
          });
        }
      }, hover ? /*#__PURE__*/_react["default"].createElement(_fa.FaPlusCircle, {
        style: {
          position: "absolute",
          left: 27,
          top: 27,
          width: 20,
          height: 20,
          color: "rgba(0,0,0,0.3)"
        }
      }) : null, /*#__PURE__*/_react["default"].createElement("img", {
        src: element.info.image,
        style: {
          width: 60,
          height: 60,
          borderRadius: 100,
          border: "1px solid rgba(0,0,0,0.2)"
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          marginTop: "auto",
          marginBottom: "auto",
          marginLeft: 15
        }
      }, element.info.description));
    }
  }]);
  return CatalogItem;
}(_react.Component);
exports["default"] = CatalogItem;
CatalogItem.propTypes = {
  element: _propTypes["default"].object.isRequired
};
CatalogItem.contextTypes = {
  itemsActions: _propTypes["default"].object.isRequired,
  linesActions: _propTypes["default"].object.isRequired,
  holesActions: _propTypes["default"].object.isRequired,
  projectActions: _propTypes["default"].object.isRequired
};