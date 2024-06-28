"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _panel = _interopRequireDefault(require("./panel"));
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
var _export = require("../style/export");
var _immutable = require("immutable");
var _fa = require("react-icons/fa");
var _constants = require("../../constants");
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
var VISIBILITY_MODE = {
  MODE_IDLE: _constants.MODE_IDLE,
  MODE_2D_ZOOM_IN: _constants.MODE_2D_ZOOM_IN,
  MODE_2D_ZOOM_OUT: _constants.MODE_2D_ZOOM_OUT,
  MODE_2D_PAN: _constants.MODE_2D_PAN,
  MODE_3D_VIEW: _constants.MODE_3D_VIEW,
  MODE_3D_FIRST_PERSON: _constants.MODE_3D_FIRST_PERSON,
  MODE_WAITING_DRAWING_LINE: _constants.MODE_WAITING_DRAWING_LINE,
  MODE_DRAWING_LINE: _constants.MODE_DRAWING_LINE,
  MODE_DRAWING_HOLE: _constants.MODE_DRAWING_HOLE,
  MODE_DRAWING_ITEM: _constants.MODE_DRAWING_ITEM,
  MODE_DRAGGING_LINE: _constants.MODE_DRAGGING_LINE,
  MODE_DRAGGING_VERTEX: _constants.MODE_DRAGGING_VERTEX,
  MODE_DRAGGING_ITEM: _constants.MODE_DRAGGING_ITEM,
  MODE_DRAGGING_HOLE: _constants.MODE_DRAGGING_HOLE,
  MODE_FITTING_IMAGE: _constants.MODE_FITTING_IMAGE,
  MODE_UPLOADING_IMAGE: _constants.MODE_UPLOADING_IMAGE,
  MODE_ROTATING_ITEM: _constants.MODE_ROTATING_ITEM
};
var tableStyle = {
  width: '100%'
};
var firstTdStyle = {
  width: '6em'
};
var inputStyle = {
  textAlign: 'left'
};
var styleEditButton = {
  marginLeft: '5px',
  border: '0px',
  background: 'none',
  color: SharedStyle.COLORS.white,
  fontSize: '14px',
  outline: '0px'
};
var tablegroupStyle = {
  width: '100%',
  cursor: 'pointer',
  maxHeight: '20em',
  marginLeft: '1px',
  marginTop: '1em'
};
var iconColStyle = {
  width: '2em'
};
var PanelGroupEditor = exports["default"] = /*#__PURE__*/function (_Component) {
  function PanelGroupEditor(props, context) {
    var _this;
    _classCallCheck(this, PanelGroupEditor);
    _this = _callSuper(this, PanelGroupEditor, [props, context]);
    _this.state = {};
    return _this;
  }
  _inherits(PanelGroupEditor, _Component);
  return _createClass(PanelGroupEditor, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      if (!this.props.groupID || !VISIBILITY_MODE[this.props.state.mode]) return null;
      var group = this.props.state.getIn(['scene', 'groups', this.props.groupID]);
      var elements = group.get('elements');
      return /*#__PURE__*/_react["default"].createElement(_panel["default"], {
        name: this.context.translator.t('Group [{0}]', group.get('name')),
        opened: true
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          padding: '5px 15px'
        }
      }, /*#__PURE__*/_react["default"].createElement("table", {
        style: tableStyle
      }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        style: firstTdStyle
      }, this.context.translator.t('Name')), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_export.FormTextInput, {
        value: group.get('name'),
        onChange: function onChange(e) {
          return _this2.context.groupsActions.setGroupAttributes(_this2.props.groupID, new _immutable.Map({
            'name': e.target.value
          }));
        },
        style: inputStyle
      }))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        style: firstTdStyle
      }, "X"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_export.FormNumberInput, {
        value: group.get('x'),
        onChange: function onChange(e) {
          return _this2.context.groupsActions.groupTranslate(_this2.props.groupID, e.target.value, group.get('y'));
        },
        style: inputStyle,
        state: this.props.state,
        precision: 2
      }))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        style: firstTdStyle
      }, "Y"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_export.FormNumberInput, {
        value: group.get('y'),
        onChange: function onChange(e) {
          return _this2.context.groupsActions.groupTranslate(_this2.props.groupID, group.get('x'), e.target.value);
        },
        style: inputStyle,
        state: this.props.state,
        precision: 2
      }))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        style: firstTdStyle
      }, this.context.translator.t('Rotation')), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_export.FormNumberInput, {
        value: group.get('rotation'),
        onChange: function onChange(e) {
          return _this2.context.groupsActions.groupRotate(_this2.props.groupID, e.target.value);
        },
        style: inputStyle,
        state: this.props.state,
        precision: 2
      }))))), elements.size ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
        style: {
          textAlign: 'center',
          borderBottom: SharedStyle.PRIMARY_COLOR.border,
          paddingBottom: '1em'
        }
      }, this.context.translator.t('Group\'s Elements')), /*#__PURE__*/_react["default"].createElement("table", {
        style: tablegroupStyle
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
        style: iconColStyle
      }), /*#__PURE__*/_react["default"].createElement("th", null, this.context.translator.t('Layer')), /*#__PURE__*/_react["default"].createElement("th", null, this.context.translator.t('Prototype')), /*#__PURE__*/_react["default"].createElement("th", null, this.context.translator.t('Name')))), /*#__PURE__*/_react["default"].createElement("tbody", null, elements.entrySeq().map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          layerID = _ref2[0],
          layerElements = _ref2[1];
        return layerElements.entrySeq().map(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
            elementPrototype = _ref4[0],
            ElementList = _ref4[1];
          return ElementList.valueSeq().map(function (elementID) {
            var element = _this2.props.state.getIn(['scene', 'layers', layerID, elementPrototype, elementID]);
            return /*#__PURE__*/_react["default"].createElement("tr", {
              key: elementID
            }, /*#__PURE__*/_react["default"].createElement("td", {
              style: iconColStyle,
              title: _this2.context.translator.t('Un-chain Element from Group')
            }, /*#__PURE__*/_react["default"].createElement(_fa.FaUnlink, {
              onClick: function onClick(e) {
                return _this2.context.groupsActions.removeFromGroup(_this2.props.groupID, layerID, elementPrototype, elementID);
              },
              style: styleEditButton
            })), /*#__PURE__*/_react["default"].createElement("td", {
              style: {
                textAlign: 'center'
              }
            }, layerID), /*#__PURE__*/_react["default"].createElement("td", {
              style: {
                textAlign: 'center',
                textTransform: 'capitalize'
              }
            }, elementPrototype), /*#__PURE__*/_react["default"].createElement("td", {
              style: {
                textAlign: 'center'
              }
            }, element.name));
          });
        });
      })))) : null));
    }
  }]);
}(_react.Component);
PanelGroupEditor.propTypes = {
  state: _propTypes["default"].object.isRequired,
  groupID: _propTypes["default"].string
};
PanelGroupEditor.contextTypes = {
  catalog: _propTypes["default"].object.isRequired,
  translator: _propTypes["default"].object.isRequired,
  itemsActions: _propTypes["default"].object.isRequired,
  linesActions: _propTypes["default"].object.isRequired,
  holesActions: _propTypes["default"].object.isRequired,
  groupsActions: _propTypes["default"].object.isRequired,
  projectActions: _propTypes["default"].object.isRequired
};