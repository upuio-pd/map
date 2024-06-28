"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rightTextStyle = exports.leftTextStyle = exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactIf = _interopRequireDefault(require("../../utils/react-if"));
var _footerToggleButton = _interopRequireDefault(require("./footer-toggle-button"));
var _footerContentButton = _interopRequireDefault(require("./footer-content-button"));
var _snap = require("../../utils/snap");
var _constants = require("../../constants");
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
var _md = require("react-icons/md");
var _version = require("../../version");
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
var footerBarStyle = {
  position: 'absolute',
  bottom: 0,
  lineHeight: '14px',
  fontSize: '12px',
  color: SharedStyle.COLORS.white,
  backgroundColor: SharedStyle.SECONDARY_COLOR.alt,
  padding: '3px 1em',
  margin: 0,
  boxSizing: 'border-box',
  cursor: 'default',
  userSelect: 'none',
  zIndex: '9001'
};
var leftTextStyle = exports.leftTextStyle = {
  position: 'relative',
  borderRight: '1px solid #FFF',
  "float": 'left',
  padding: '0 1em',
  display: 'inline-block'
};
var rightTextStyle = exports.rightTextStyle = {
  position: 'relative',
  borderLeft: '1px solid #FFF',
  "float": 'right',
  padding: '0 1em',
  display: 'inline-block'
};
var coordStyle = {
  display: 'inline-block',
  width: '6em',
  margin: 0,
  padding: 0
};
var appMessageStyle = {
  borderBottom: '1px solid #555',
  lineHeight: '1.5em'
};
var FooterBar = exports["default"] = /*#__PURE__*/function (_Component) {
  function FooterBar(props, context) {
    var _this;
    _classCallCheck(this, FooterBar);
    _this = _callSuper(this, FooterBar, [props, context]);
    _this.state = {};
    return _this;
  }
  _inherits(FooterBar, _Component);
  return _createClass(FooterBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        globalState = _this$props.state,
        width = _this$props.width,
        height = _this$props.height;
      var _this$context = this.context,
        translator = _this$context.translator,
        projectActions = _this$context.projectActions;
      var _globalState$get$toJS = globalState.get('mouse').toJS(),
        x = _globalState$get$toJS.x,
        y = _globalState$get$toJS.y;
      var zoom = globalState.get('zoom');
      var mode = globalState.get('mode');
      var errors = globalState.get('errors').toArray();
      var errorsJsx = errors.map(function (err, ind) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: ind,
          style: appMessageStyle
        }, "[ ", new Date(err.date).toLocaleString(), " ] ", err.error);
      });
      var errorLableStyle = errors.length ? {
        color: SharedStyle.MATERIAL_COLORS[500].red
      } : {};
      var errorIconStyle = errors.length ? {
        transform: 'rotate(45deg)',
        color: SharedStyle.MATERIAL_COLORS[500].red
      } : {
        transform: 'rotate(45deg)'
      };
      var warnings = globalState.get('warnings').toArray();
      var warningsJsx = warnings.map(function (warn, ind) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: ind,
          style: appMessageStyle
        }, "[ ", new Date(warn.date).toLocaleString(), " ] ", warn.warning);
      });
      var warningLableStyle = warnings.length ? {
        color: SharedStyle.MATERIAL_COLORS[500].yellow
      } : {};
      var warningIconStyle = warningLableStyle;
      var updateSnapMask = function updateSnapMask(val) {
        return projectActions.toggleSnap(globalState.snapMask.merge(val));
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread(_objectSpread({}, footerBarStyle), {}, {
          width: width,
          height: height
        })
      }, /*#__PURE__*/_react["default"].createElement(_reactIf["default"], {
        condition: _constants.MODE_SNAPPING.includes(mode)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: leftTextStyle
      }, /*#__PURE__*/_react["default"].createElement("div", {
        title: translator.t('Mouse X Coordinate'),
        style: coordStyle
      }, "X : ", x.toFixed(3)), /*#__PURE__*/_react["default"].createElement("div", {
        title: translator.t('Mouse Y Coordinate'),
        style: coordStyle
      }, "Y : ", y.toFixed(3))), /*#__PURE__*/_react["default"].createElement("div", {
        style: leftTextStyle,
        title: translator.t('Scene Zoom Level')
      }, "Zoom: ", zoom.toFixed(3), "X"), /*#__PURE__*/_react["default"].createElement("div", {
        style: leftTextStyle
      }, /*#__PURE__*/_react["default"].createElement(_footerToggleButton["default"], {
        state: this.state,
        toggleOn: function toggleOn() {
          updateSnapMask({
            SNAP_POINT: true
          });
        },
        toggleOff: function toggleOff() {
          updateSnapMask({
            SNAP_POINT: false
          });
        },
        text: "Snap PT",
        toggleState: globalState.snapMask.get(_snap.SNAP_POINT),
        title: translator.t('Snap to Point')
      }), /*#__PURE__*/_react["default"].createElement(_footerToggleButton["default"], {
        state: this.state,
        toggleOn: function toggleOn() {
          updateSnapMask({
            SNAP_LINE: true
          });
        },
        toggleOff: function toggleOff() {
          updateSnapMask({
            SNAP_LINE: false
          });
        },
        text: "Snap LN",
        toggleState: globalState.snapMask.get(_snap.SNAP_LINE),
        title: translator.t('Snap to Line')
      }), /*#__PURE__*/_react["default"].createElement(_footerToggleButton["default"], {
        state: this.state,
        toggleOn: function toggleOn() {
          updateSnapMask({
            SNAP_SEGMENT: true
          });
        },
        toggleOff: function toggleOff() {
          updateSnapMask({
            SNAP_SEGMENT: false
          });
        },
        text: "Snap SEG",
        toggleState: globalState.snapMask.get(_snap.SNAP_SEGMENT),
        title: translator.t('Snap to Segment')
      }), /*#__PURE__*/_react["default"].createElement(_footerToggleButton["default"], {
        state: this.state,
        toggleOn: function toggleOn() {
          updateSnapMask({
            SNAP_GRID: true
          });
        },
        toggleOff: function toggleOff() {
          updateSnapMask({
            SNAP_GRID: false
          });
        },
        text: "Snap GRD",
        toggleState: globalState.snapMask.get(_snap.SNAP_GRID),
        title: translator.t('Snap to Grid')
      }), /*#__PURE__*/_react["default"].createElement(_footerToggleButton["default"], {
        state: this.state,
        toggleOn: function toggleOn() {
          updateSnapMask({
            SNAP_GUIDE: true
          });
        },
        toggleOff: function toggleOff() {
          updateSnapMask({
            SNAP_GUIDE: false
          });
        },
        text: "Snap GDE",
        toggleState: globalState.snapMask.get(_snap.SNAP_GUIDE),
        title: translator.t('Snap to Guide')
      }))), this.props.footerbarComponents.map(function (Component, index) {
        return /*#__PURE__*/_react["default"].createElement(Component, {
          state: state,
          key: index
        });
      }), this.props.softwareSignature ? /*#__PURE__*/_react["default"].createElement("div", {
        style: rightTextStyle,
        title: this.props.softwareSignature + (this.props.softwareSignature.includes('React-Planner') ? '' : " using React-Planner ".concat(_version.VERSION))
      }, this.props.softwareSignature) : null, /*#__PURE__*/_react["default"].createElement("div", {
        style: rightTextStyle
      }, /*#__PURE__*/_react["default"].createElement(_footerContentButton["default"], {
        state: this.state,
        icon: _md.MdAddCircle,
        iconStyle: errorIconStyle,
        text: errors.length.toString(),
        textStyle: errorLableStyle,
        title: "Errors [ ".concat(errors.length, " ]"),
        titleStyle: errorLableStyle,
        content: [errorsJsx]
      }), /*#__PURE__*/_react["default"].createElement(_footerContentButton["default"], {
        state: this.state,
        icon: _md.MdWarning,
        iconStyle: warningIconStyle,
        text: warnings.length.toString(),
        textStyle: warningLableStyle,
        title: "Warnings [ ".concat(warnings.length, " ]"),
        titleStyle: warningLableStyle,
        content: [warningsJsx]
      })));
    }
  }]);
}(_react.Component);
FooterBar.propTypes = {
  state: _propTypes["default"].object.isRequired,
  footerbarComponents: _propTypes["default"].array.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  softwareSignature: _propTypes["default"].string
};
FooterBar.contextTypes = {
  projectActions: _propTypes["default"].object.isRequired,
  viewer2DActions: _propTypes["default"].object.isRequired,
  viewer3DActions: _propTypes["default"].object.isRequired,
  linesActions: _propTypes["default"].object.isRequired,
  holesActions: _propTypes["default"].object.isRequired,
  itemsActions: _propTypes["default"].object.isRequired,
  translator: _propTypes["default"].object.isRequired
};