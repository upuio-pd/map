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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var tableStyle = {
  width: "100%"
};
var firstTdStyle = {
  width: "6em"
};
var PanelMultiElementsEditor = /*#__PURE__*/function (_Component) {
  _inherits(PanelMultiElementsEditor, _Component);
  var _super = _createSuper(PanelMultiElementsEditor);
  //export default function PanelMultiElementsEditor({state}, {projectActions, translator}) {
  function PanelMultiElementsEditor(props, context) {
    var _this;
    _classCallCheck(this, PanelMultiElementsEditor);
    _this = _super.call(this, props, context);
    _this.state = {
      selectedGroupID: ""
    };
    return _this;
  }
  _createClass(PanelMultiElementsEditor, [{
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
  return PanelMultiElementsEditor;
}(_react.Component);
exports["default"] = PanelMultiElementsEditor;
PanelMultiElementsEditor.propTypes = {
  state: _propTypes["default"].object.isRequired
};
PanelMultiElementsEditor.contextTypes = {
  projectActions: _propTypes["default"].object.isRequired,
  groupsActions: _propTypes["default"].object.isRequired,
  translator: _propTypes["default"].object.isRequired
};