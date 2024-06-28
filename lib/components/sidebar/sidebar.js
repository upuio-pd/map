"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Sidebar;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _panelElementEditor = _interopRequireDefault(require("./panel-element-editor/panel-element-editor"));
var _panelGroupEditor = _interopRequireDefault(require("./panel-group-editor"));
var _panelMultiElementsEditor = _interopRequireDefault(require("./panel-element-editor/panel-multi-elements-editor"));
var _panelLayers = _interopRequireDefault(require("./panel-layers"));
var _panelGuides = _interopRequireDefault(require("./panel-guides"));
var _panelGroups = _interopRequireDefault(require("./panel-groups"));
var _panelLayerElements = _interopRequireDefault(require("./panel-layer-elements"));
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
var _reactIf = _interopRequireDefault(require("../../utils/react-if"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var STYLE = {
  backgroundColor: SharedStyle.PRIMARY_COLOR.main,
  width: 200,
  display: "block",
  overflowY: "auto",
  overflowX: "hidden",
  paddingBottom: "20px"
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
function Sidebar(_ref) {
  var state = _ref.state,
    width = _ref.width,
    viewOnly = _ref.viewOnly,
    height = _ref.height,
    sidebarComponents = _ref.sidebarComponents;
  var selectedLayer = state.getIn(["scene", "selectedLayer"]);

  //TODO change in multi-layer check
  var selected = state.getIn(["scene", "layers", selectedLayer, "selected"]);
  var multiselected = selected.lines.size > 1 || selected.items.size > 1 || selected.holes.size > 1 || selected.areas.size > 1 || selected.lines.size + selected.items.size + selected.holes.size + selected.areas.size > 1;
  var selectedGroup = state.getIn(["scene", "groups"]).findEntry(function (g) {
    return g.get("selected");
  });
  var sorter = [
    /*{ index: 0, condition: true, dom: <PanelGuides state={state} /> },
    { index: 1, condition: true, dom: <PanelLayers state={state} /> },
    {
      index: 2,
      condition: true,
      dom: (
        <PanelLayerElements
          mode={state.mode}
          layers={state.scene.layers}
          selectedLayer={state.scene.selectedLayer}
        />
      ),
    },
    {
      index: 3,
      condition: true,
      dom: (
        <PanelGroups
          mode={state.mode}
          groups={state.scene.groups}
          layers={state.scene.layers}
        />
      ),
    }, 
    {
      index: 4,
      condition: !multiselected,
      dom: <PanelElementEditor state={state} />,
    },
    //{ index: 5, condition: multiselected, dom: <PanelMultiElementsEditor state={state} /> },
    {
      index: 6,
      condition: !!selectedGroup,
      dom: (
        <PanelGroupEditor
          state={state}
          groupID={selectedGroup ? selectedGroup[0] : null}
        />
      ),
    },*/
  ];
  sorter = sorter.concat(sidebarComponents.map(function (Component, key) {
    return Component.prototype //if is a react component
    ? {
      condition: true,
      dom: /*#__PURE__*/_react["default"].createElement(Component, {
        state: state,
        key: key
      })
    } : {
      //else is a sortable toolbar button
      index: Component.index,
      condition: Component.condition,
      dom: /*#__PURE__*/_react["default"].createElement(Component.dom, {
        state: state,
        key: key
      })
    };
  }));
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({
      width: width
    }, STYLE), {}, {
      backgroundColor: "transparent",
      position: "absolute",
      right: 5,
      bottom: 5
    }),
    onKeyDown: function onKeyDown(event) {
      return event.stopPropagation();
    },
    onKeyUp: function onKeyUp(event) {
      return event.stopPropagation();
    },
    className: "sidebar"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "properties"
  }, /*#__PURE__*/_react["default"].createElement(_panelElementEditor["default"], {
    viewOnly: viewOnly,
    state: state
  })));
  return /*#__PURE__*/_react["default"].createElement("aside", {
    style: _objectSpread({
      width: width,
      height: height
    }, STYLE),
    onKeyDown: function onKeyDown(event) {
      return event.stopPropagation();
    },
    onKeyUp: function onKeyUp(event) {
      return event.stopPropagation();
    },
    className: "sidebar"
  }, sorter.sort(sortButtonsCb).map(mapButtonsCb));
}
Sidebar.propTypes = {
  state: _propTypes["default"].object.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired
};