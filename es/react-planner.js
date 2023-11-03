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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
  _inherits(ReactPlanner, _Component);
  var _super = _createSuper(ReactPlanner);
  function ReactPlanner() {
    _classCallCheck(this, ReactPlanner);
    return _super.apply(this, arguments);
  }
  _createClass(ReactPlanner, [{
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

      //siu

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread(_objectSpread({}, wrapperStyle), {}, {
          height: height
        })
      }, /*#__PURE__*/_react["default"].createElement(_export2.Content, _extends({
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
  return ReactPlanner;
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
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ReactPlanner);
exports["default"] = _default;