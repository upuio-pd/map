"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _fa = require("react-icons/fa");
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
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
var STYLE_DESCRIPTION = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
  display: "block"
}, "display", "-webkit-box"), "height", "2em"), "margin", "0 auto"), "fontSize", "0.75em"), "fontStyle", "italic"), "lineHeight", "1em"), "WebkitLineClamp", "2"), "WebkitBoxOrient", "vertical"), "overflow", "hidden"), "textOverflow", "ellipsis");
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
var CatalogItem = exports["default"] = /*#__PURE__*/function (_Component) {
  function CatalogItem(props) {
    var _this;
    _classCallCheck(this, CatalogItem);
    _this = _callSuper(this, CatalogItem, [props]);
    _this.state = {
      hover: false
    };
    return _this;
  }
  _inherits(CatalogItem, _Component);
  return _createClass(CatalogItem, [{
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
}(_react.Component);
CatalogItem.propTypes = {
  element: _propTypes["default"].object.isRequired
};
CatalogItem.contextTypes = {
  itemsActions: _propTypes["default"].object.isRequired,
  linesActions: _propTypes["default"].object.isRequired,
  holesActions: _propTypes["default"].object.isRequired,
  projectActions: _propTypes["default"].object.isRequired
};