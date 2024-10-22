"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _translator = _interopRequireDefault(require("./translator/translator"));
var _catalog = _interopRequireDefault(require("./catalog/catalog"));
var _export = _interopRequireDefault(require("./actions/export"));
var _objectsUtils = require("./utils/objects-utils");
var _export2 = require("./components/export");
var _version = require("./version");
require("./styles/export");
var _excluded = ["width", "height", "state", "stateExtractor", "viewOnly", "onClickOnItem", "theme"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
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
var Toolbar = _export2.ToolbarComponents.Toolbar;
var Sidebar = _export2.SidebarComponents.Sidebar;
var FooterBar = _export2.FooterBarComponents.FooterBar;
var toolbarW = 400;
var sidebarW = 300;
var footerBarH = 20;
var localStorage = window.hasOwnProperty('localStorage') ? window.localStorage : false;
var wrapperStyle = {
  display: "flex",
  flexFlow: "row nowrap"
};
var ReactPlanner = /*#__PURE__*/function (_Component) {
  function ReactPlanner() {
    _classCallCheck(this, ReactPlanner);
    return _callSuper(this, ReactPlanner, arguments);
  }
  _inherits(ReactPlanner, _Component);
  return _createClass(ReactPlanner, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _this = this;
      return _objectSpread(_objectSpread({}, (0, _objectsUtils.objectsMap)(_export["default"], function (actionNamespace) {
        return _this.props[actionNamespace];
      })), {}, {
        translator: this.props.translator,
        catalog: this.props.catalog
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var store = this.context.store;
      var _this$props = this.props,
        projectActions = _this$props.projectActions,
        catalog = _this$props.catalog,
        stateExtractor = _this$props.stateExtractor,
        plugins = _this$props.plugins;
      plugins.forEach(function (plugin) {
        return plugin(store, stateExtractor);
      });
      projectActions.initCatalog(catalog);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var stateExtractor = nextProps.stateExtractor,
        state = nextProps.state,
        projectActions = nextProps.projectActions,
        catalog = nextProps.catalog;
      var plannerState = stateExtractor(state);
      var catalogReady = plannerState.getIn(["catalog", "ready"]);
      if (!catalogReady) {
        projectActions.initCatalog(catalog);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        width = _this$props2.width,
        height = _this$props2.height,
        state = _this$props2.state,
        stateExtractor = _this$props2.stateExtractor,
        viewOnly = _this$props2.viewOnly,
        onClickOnItem = _this$props2.onClickOnItem,
        _this$props2$theme = _this$props2.theme,
        theme = _this$props2$theme === void 0 ? 'light' : _this$props2$theme,
        props = _objectWithoutProperties(_this$props2, _excluded);
      localStorage && localStorage.setItem('color_theme', "".concat(props.theme == 'dark' ? 'dark' : 'light'));
      // const theme = 'light';

      //let contentW = !viewOnly ? width - toolbarW : width;
      var contentW = width;
      var toolbarH = height;
      var contentH = height;
      var sidebarH = height;
      var extractedState = stateExtractor(state);
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread(_objectSpread({}, wrapperStyle), {}, {
          height: height
        })
      }, /*#__PURE__*/_react["default"].createElement(Toolbar, _extends({
        width: toolbarW,
        height: toolbarH,
        state: extractedState
      }, props)), /*#__PURE__*/_react["default"].createElement(_export2.Content, _extends({
        width: contentW,
        height: contentH,
        state: extractedState,
        viewOnly: viewOnly,
        onClickOnItem: onClickOnItem,
        theme: theme
      }, props, {
        onWheel: function onWheel(event) {
          console.log('wheel', event), {
            capture: false,
            passive: false
          };
        }
      })));
    }
  }]);
}(_react.Component);
ReactPlanner.propTypes = {
  translator: _propTypes["default"].instanceOf(_translator["default"]),
  catalog: _propTypes["default"].instanceOf(_catalog["default"]),
  allowProjectFileSupport: _propTypes["default"].bool,
  plugins: _propTypes["default"].arrayOf(_propTypes["default"].func),
  autosaveKey: _propTypes["default"].string,
  autosaveDelay: _propTypes["default"].number,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  stateExtractor: _propTypes["default"].func.isRequired,
  toolbarButtons: _propTypes["default"].array,
  sidebarComponents: _propTypes["default"].array,
  footerbarComponents: _propTypes["default"].array,
  customContents: _propTypes["default"].object,
  softwareSignature: _propTypes["default"].string
};
ReactPlanner.contextTypes = {
  store: _propTypes["default"].object.isRequired
};
ReactPlanner.childContextTypes = _objectSpread(_objectSpread({}, (0, _objectsUtils.objectsMap)(_export["default"], function () {
  return _propTypes["default"].object;
})), {}, {
  translator: _propTypes["default"].object,
  catalog: _propTypes["default"].object
});
ReactPlanner.defaultProps = {
  translator: new _translator["default"](),
  catalog: new _catalog["default"](),
  plugins: [],
  allowProjectFileSupport: true,
  softwareSignature: "React-Planner ".concat(_version.VERSION),
  toolbarButtons: [],
  sidebarComponents: [],
  footerbarComponents: [],
  customContents: {}
};

//redux connect
function mapStateToProps(reduxState) {
  return {
    state: reduxState
  };
}
function mapDispatchToProps(dispatch) {
  return (0, _objectsUtils.objectsMap)(_export["default"], function (actionNamespace) {
    return (0, _redux.bindActionCreators)(_export["default"][actionNamespace], dispatch);
  });
}
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ReactPlanner);