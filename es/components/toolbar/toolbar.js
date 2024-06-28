"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _md = require("react-icons/md");
var _fa = require("react-icons/fa");
var _toolbarButton = _interopRequireDefault(require("./toolbar-button"));
var _toolbarSaveButton = _interopRequireDefault(require("./toolbar-save-button"));
var _toolbarLoadButton = _interopRequireDefault(require("./toolbar-load-button"));
var _reactIf = _interopRequireDefault(require("../../utils/react-if"));
var _constants = require("../../constants");
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
var iconTextStyle = {
  fontSize: "19px",
  textDecoration: "none",
  fontWeight: "bold",
  margin: "0px",
  userSelect: "none"
};
var Icon2D = function Icon2D(_ref) {
  var style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement("p", {
    style: _objectSpread(_objectSpread({}, iconTextStyle), style)
  }, "2D");
};
var Icon3D = function Icon3D(_ref2) {
  var style = _ref2.style;
  return /*#__PURE__*/_react["default"].createElement("p", {
    style: _objectSpread(_objectSpread({}, iconTextStyle), style)
  }, "3D");
};
var ASIDE_STYLE = {
  backgroundColor: SharedStyle.PRIMARY_COLOR.main,
  padding: "10px"
};
var sortButtonsCb = function sortButtonsCb(a, b) {
  if (a.index === undefined || a.index === null) {
    a.index = Number.MAX_SAFE_INTEGER;
  }
  if (b.index === undefined || b.index === null) {
    b.index = Number.MAX_SAFE_INTEGER;
  }
  return a.index - b.index;
};
var mapButtonsCb = function mapButtonsCb(el, ind) {
  return /*#__PURE__*/_react["default"].createElement(_reactIf["default"], {
    key: ind,
    condition: el.condition,
    style: {
      position: "relative"
    }
  }, el.dom);
};
var Toolbar = exports["default"] = /*#__PURE__*/function (_Component) {
  function Toolbar(props, context) {
    var _this;
    _classCallCheck(this, Toolbar);
    _this = _callSuper(this, Toolbar, [props, context]);
    _this.state = {};
    return _this;
  }
  _inherits(Toolbar, _Component);
  return _createClass(Toolbar, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.state.mode !== nextProps.state.mode || this.props.height !== nextProps.height || this.props.width !== nextProps.width || this.props.state.alterate !== nextProps.state.alterate;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        state = _this$props.state,
        width = _this$props.width,
        height = _this$props.height,
        toolbarButtons = _this$props.toolbarButtons,
        allowProjectFileSupport = _this$props.allowProjectFileSupport,
        _this$context = this.context,
        projectActions = _this$context.projectActions,
        viewer3DActions = _this$context.viewer3DActions,
        translator = _this$context.translator;
      var mode = state.get("mode");
      var alterate = state.get("alterate");
      var alterateColor = alterate ? SharedStyle.MATERIAL_COLORS[500].orange : "";
      var sorter = [
      /*
      {
        index: 0,
        condition: allowProjectFileSupport,
        dom: (
          <ToolbarButton
            active={false}
            tooltip={translator.t("New project")}
            onClick={(event) =>
              confirm(translator.t("Would you want to start a new Project?"))
                ? projectActions.newProject()
                : null
            }
          >
            <FaFile />
          </ToolbarButton>
        ),
      },*/
      {
        index: 1,
        condition: allowProjectFileSupport,
        dom: /*#__PURE__*/_react["default"].createElement(_toolbarSaveButton["default"], {
          name: "Kaydet",
          state: state
        })
      },
      /*{
        index: 2,
        condition: allowProjectFileSupport,
        dom: <ToolbarLoadButton state={state} />,
      },*/
      {
        index: 3,
        condition: true,
        dom: /*#__PURE__*/_react["default"].createElement(_toolbarButton["default"], {
          name: "Esyalar",
          active: [_constants.MODE_VIEWING_CATALOG].includes(mode),
          tooltip: translator.t("Open catalog"),
          onClick: function onClick(event) {
            return projectActions.openCatalog();
          }
        }, /*#__PURE__*/_react["default"].createElement(_fa.FaPlus, null))
      }, {
        index: 4,
        condition: true,
        dom: /*#__PURE__*/_react["default"].createElement(_toolbarButton["default"], {
          name: "3D Kamerayı Kullan",
          active: [_constants.MODE_3D_VIEW].includes(mode),
          tooltip: translator.t("3D View"),
          onClick: function onClick(event) {
            return viewer3DActions.selectTool3DView();
          }
        }, /*#__PURE__*/_react["default"].createElement(Icon3D, null))
      }, {
        index: 5,
        condition: true,
        dom: /*#__PURE__*/_react["default"].createElement(_toolbarButton["default"], {
          name: "2D Kamerayı Kullan",
          active: [_constants.MODE_IDLE].includes(mode),
          tooltip: translator.t("2D View"),
          onClick: function onClick(event) {
            return projectActions.setMode(_constants.MODE_IDLE);
          }
        }, [_constants.MODE_3D_FIRST_PERSON, _constants.MODE_3D_VIEW].includes(mode) ? /*#__PURE__*/_react["default"].createElement(Icon2D, {
          style: {
            color: alterateColor
          }
        }) : /*#__PURE__*/_react["default"].createElement(_fa.FaMousePointer, {
          style: {
            color: alterateColor
          }
        }))
      }, {
        index: 6,
        condition: true,
        dom: /*#__PURE__*/_react["default"].createElement(_toolbarButton["default"], {
          name: "3D Kullan\u0131c\u0131 Kameras\u0131",
          active: [_constants.MODE_3D_FIRST_PERSON].includes(mode),
          tooltip: translator.t("3D First Person"),
          onClick: function onClick(event) {
            return viewer3DActions.selectTool3DFirstPerson();
          }
        }, /*#__PURE__*/_react["default"].createElement(_md.MdDirectionsRun, null))
      }, {
        index: 7,
        condition: true,
        dom: /*#__PURE__*/_react["default"].createElement(_toolbarButton["default"], {
          name: "Geri Al",
          active: false,
          tooltip: translator.t("Undo (CTRL-Z)"),
          onClick: function onClick(event) {
            return projectActions.undo();
          }
        }, /*#__PURE__*/_react["default"].createElement(_md.MdUndo, null))
      }, {
        index: 8,
        condition: true,
        dom: /*#__PURE__*/_react["default"].createElement(_toolbarButton["default"], {
          name: "Proje Ayarlari",
          active: [_constants.MODE_CONFIGURING_PROJECT].includes(mode),
          tooltip: translator.t("Configure project"),
          onClick: function onClick(event) {
            return projectActions.openProjectConfigurator();
          }
        }, /*#__PURE__*/_react["default"].createElement(_md.MdSettings, null))
      }];
      sorter = sorter.concat(toolbarButtons.map(function (Component, key) {
        return Component.prototype //if is a react component
        ? {
          condition: true,
          dom: /*#__PURE__*/_react["default"].createElement(Component, {
            mode: mode,
            state: state,
            key: key
          })
        } : {
          //else is a sortable toolbar button
          index: Component.index,
          condition: Component.condition,
          dom: /*#__PURE__*/_react["default"].createElement(Component.dom, {
            mode: mode,
            state: state,
            key: key
          })
        };
      }));
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(246, 246, 246)",
          minWidth: width,
          width: width,
          padding: 15
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          fontSize: "2rem",
          fontWeight: "bold",
          borderBottom: "1px solid rgb(204,204,204)",
          paddingBottom: "2rem"
        }
      }, "Harita Edit\xF6r\xFC"), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          paddingBottom: 10
        }
      }, /*#__PURE__*/_react["default"].createElement("h5", {
        style: {
          fontSize: 20
        }
      }, "\u015Eablonlar"), sorter.sort(sortButtonsCb).map(mapButtonsCb)));
      return /*#__PURE__*/_react["default"].createElement("aside", {
        style: _objectSpread(_objectSpread({}, ASIDE_STYLE), {}, {
          maxWidth: width,
          maxHeight: height
        }),
        className: "toolbar"
      }, sorter.sort(sortButtonsCb).map(mapButtonsCb));
    }
  }]);
}(_react.Component);
Toolbar.propTypes = {
  state: _propTypes["default"].object.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  allowProjectFileSupport: _propTypes["default"].bool.isRequired,
  toolbarButtons: _propTypes["default"].array
};
Toolbar.contextTypes = {
  projectActions: _propTypes["default"].object.isRequired,
  viewer2DActions: _propTypes["default"].object.isRequired,
  viewer3DActions: _propTypes["default"].object.isRequired,
  linesActions: _propTypes["default"].object.isRequired,
  holesActions: _propTypes["default"].object.isRequired,
  itemsActions: _propTypes["default"].object.isRequired,
  translator: _propTypes["default"].object.isRequired
};