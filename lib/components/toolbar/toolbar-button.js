"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
//http://www.cssportal.com/css-tooltip-generator/

var STYLE = {
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "5px",
  fontSize: "25px",
  position: "relative",
  cursor: "pointer"
};
var STYLE_TOOLTIP = {
  position: "absolute",
  width: "140px",
  color: SharedStyle.COLORS.white,
  background: SharedStyle.COLORS.black,
  height: "30px",
  lineHeight: "30px",
  textAlign: "center",
  visibility: "visible",
  borderRadius: "6px",
  opacity: "0.8",
  left: "100%",
  top: "50%",
  marginTop: "-15px",
  marginLeft: "15px",
  zIndex: "999",
  fontSize: "12px"
};
var STYLE_TOOLTIP_PIN = {
  position: "absolute",
  top: "50%",
  right: "100%",
  marginTop: "-8px",
  width: "0",
  height: "0",
  borderRight: "8px solid #000000",
  borderTop: "8px solid transparent",
  borderBottom: "8px solid transparent"
};
var ToolbarButton = exports["default"] = /*#__PURE__*/function (_Component) {
  function ToolbarButton(props, context) {
    var _this;
    _classCallCheck(this, ToolbarButton);
    _this = _callSuper(this, ToolbarButton, [props, context]);
    _this.state = {
      active: false
    };
    return _this;
  }
  _inherits(ToolbarButton, _Component);
  return _createClass(ToolbarButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var state = this.state,
        props = this.props;
      var name = props.name;
      var color = props.active || state.active ? SharedStyle.SECONDARY_COLOR.icon : SharedStyle.PRIMARY_COLOR.icon;
      if (name) return /*#__PURE__*/_react["default"].createElement("div", {
        onClick: props.onClick,
        onMouseOver: function onMouseOver(event) {
          return _this2.setState({
            active: true
          });
        },
        onMouseOut: function onMouseOut(event) {
          return _this2.setState({
            active: false
          });
        },
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "between",
          flexDirection: "row",
          paddingLeft: "10px",
          paddingRight: "10px",
          marginBottom: "10px",
          paddingTop: "10px",
          paddingBottom: "10px",
          borderRadius: 15,
          cursor: "pointer",
          backgroundColor: "white"
        }
      }, /*#__PURE__*/_react["default"].createElement("i", {
        style: {
          backgroundColor: "black",
          width: "40px",
          height: "40px",
          borderRadius: "100%",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "10px"
        }
      }, props.children), /*#__PURE__*/_react["default"].createElement("p", {
        className: "text-base font-bold",
        style: {
          fontWeight: 500
        }
      }, name));else return /*#__PURE__*/_react["default"].createElement("div", null);
    }
  }]);
}(_react.Component);
ToolbarButton.propTypes = {
  active: _propTypes["default"].bool.isRequired,
  tooltip: _propTypes["default"].string.isRequired,
  onClick: _propTypes["default"].func.isRequired
};