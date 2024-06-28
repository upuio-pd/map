"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _panel = _interopRequireDefault(require("../panel"));
var _immutable = require("immutable");
var _constants = require("../../../constants");
var _export = require("../../../components/style/export");
var _export2 = require("../../../class/export");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
var tableStyle = {
  width: "100%"
};
var firstTdStyle = {
  width: "6em"
};
var PanelMultiElementsEditor = exports["default"] = /*#__PURE__*/function (_Component) {
  //export default function PanelMultiElementsEditor({state}, {projectActions, translator}) {
  function PanelMultiElementsEditor(props, context) {
    var _this;
    _classCallCheck(this, PanelMultiElementsEditor);
    _this = _callSuper(this, PanelMultiElementsEditor, [props, context]);
    _this.state = {
      selectedGroupID: ""
    };
    return _this;
  }
  _inherits(PanelMultiElementsEditor, _Component);
  return _createClass(PanelMultiElementsEditor, [{
    key: "addSelectToGroup",
    value: function addSelectToGroup(state, groupID, layerID, selecteds) {
      if (!groupID || groupID === "" || !selecteds || !selecteds.size) return;

      /*let selectedJs = selecteds.toJS();
       for( let lineID in selectedJs.lines ) Group.addElement( state, groupID, layerID, 'lines', lineID );*/
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var mode = this.props.state.mode;
      if (![_constants.MODE_IDLE, _constants.MODE_2D_ZOOM_IN, _constants.MODE_2D_ZOOM_OUT, _constants.MODE_2D_PAN, _constants.MODE_3D_VIEW, _constants.MODE_3D_FIRST_PERSON, _constants.MODE_WAITING_DRAWING_LINE, _constants.MODE_DRAWING_LINE, _constants.MODE_DRAWING_HOLE, _constants.MODE_DRAWING_ITEM, _constants.MODE_DRAGGING_LINE, _constants.MODE_DRAGGING_VERTEX, _constants.MODE_DRAGGING_ITEM, _constants.MODE_DRAGGING_HOLE, _constants.MODE_ROTATING_ITEM, _constants.MODE_UPLOADING_IMAGE, _constants.MODE_FITTING_IMAGE].includes(mode)) return null;
      var groups = this.props.state.getIn(["scene", "groups"]);

      //TODO change in multi-layer check
      var selectedLayer = this.props.state.getIn(["scene", "selectedLayer"]);
      var selecteds = this.props.state.getIn(["scene", "layers", selectedLayer, "selected"]);
      return /*#__PURE__*/_react["default"].createElement(_panel["default"], {
        name: "Multiselected",
        opened: true
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          padding: "5px 15px"
        }
      }, /*#__PURE__*/_react["default"].createElement("p", null, "Multiselection tab"), /*#__PURE__*/_react["default"].createElement("table", {
        style: tableStyle
      }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        style: firstTdStyle
      }, "Add to Group"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_export.FormSelect, {
        value: this.state.selectedGroupID,
        onChange: function onChange(e) {
          return _this2.setState({
            selectedGroupID: e.target.value
          });
        }
      }, /*#__PURE__*/_react["default"].createElement("option", {
        key: 0,
        value: ""
      }), groups.entrySeq().map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          groupID = _ref2[0],
          group = _ref2[1];
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: groupID,
          value: groupID
        }, group.get("name"));
      }))), /*#__PURE__*/_react["default"].createElement("td", {
        style: {
          cursor: "pointer",
          padding: "0.5em 0",
          textAlign: "center"
        },
        onClick: function onClick(e) {
          if (!_this2.state.selectedGroupID || _this2.state.selectedGroupID === "" || !selecteds || !selecteds.size) return;
          var selectedJs = selecteds.toJS();
          for (var x = 0; x < selectedJs.lines.length; x++) _this2.context.groupsActions.addToGroup(_this2.state.selectedGroupID, selectedLayer, "lines", selectedJs.lines[x]);
        }
      }, "+"))))));
    }
  }]);
}(_react.Component);
PanelMultiElementsEditor.propTypes = {
  state: _propTypes["default"].object.isRequired
};
PanelMultiElementsEditor.contextTypes = {
  projectActions: _propTypes["default"].object.isRequired,
  groupsActions: _propTypes["default"].object.isRequired,
  translator: _propTypes["default"].object.isRequired
};