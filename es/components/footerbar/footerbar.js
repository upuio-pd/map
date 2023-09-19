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
var leftTextStyle = {
  position: 'relative',
  borderRight: '1px solid #FFF',
  "float": 'left',
  padding: '0 1em',
  display: 'inline-block'
};
exports.leftTextStyle = leftTextStyle;
var rightTextStyle = {
  position: 'relative',
  borderLeft: '1px solid #FFF',
  "float": 'right',
  padding: '0 1em',
  display: 'inline-block'
};
exports.rightTextStyle = rightTextStyle;
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
var FooterBar = /*#__PURE__*/function (_Component) {
  _inherits(FooterBar, _Component);
  var _super = _createSuper(FooterBar);
  function FooterBar(props, context) {
    var _this;
    _classCallCheck(this, FooterBar);
    _this = _super.call(this, props, context);
    _this.state = {};
    return _this;
  }
  _createClass(FooterBar, [{
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
  return FooterBar;
}(_react.Component);
exports["default"] = FooterBar;
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