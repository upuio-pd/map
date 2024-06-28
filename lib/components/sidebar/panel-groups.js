"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _panel = _interopRequireDefault(require("./panel"));
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
var _ti = require("react-icons/ti");
var _fa = require("react-icons/fa");
var _immutable = require("immutable");
var _constants = require("../../constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
  padding: '0 1em',
  marginLeft: '1px'
};
var iconColStyle = {
  width: '2em',
  textAlign: 'center'
};
var styleHoverColor = {
  color: SharedStyle.SECONDARY_COLOR.main
};
var styleEditButtonHover = _objectSpread(_objectSpread({}, styleEditButton), styleHoverColor);
var styleAddLabel = {
  fontSize: '10px',
  marginLeft: '5px'
};
var styleEyeVisible = {
  fontSize: '1.25em'
};
var styleEyeHidden = _objectSpread(_objectSpread({}, styleEyeVisible), {}, {
  color: '#a5a1a1'
});
var newLayerLableStyle = {
  fontSize: '1.3em',
  cursor: 'pointer',
  textAlign: 'center'
};
var newLayerLableHoverStyle = _objectSpread(_objectSpread({}, newLayerLableStyle), styleHoverColor);
var PanelGroups = exports["default"] = /*#__PURE__*/function (_Component) {
  function PanelGroups(props, context) {
    var _this;
    _classCallCheck(this, PanelGroups);
    _this = _callSuper(this, PanelGroups, [props, context]);
    _this.state = {
      newEmptyHover: false,
      newSelectedHover: false
    };
    return _this;
  }
  _inherits(PanelGroups, _Component);
  return _createClass(PanelGroups, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.groups.hashCode() !== nextProps.groups.hashCode() || this.props.layers.hashCode() !== nextProps.layers.hashCode() || this.props.mode !== nextProps.mode;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        mode = _this$props.mode,
        groups = _this$props.groups,
        layers = _this$props.layers;
      if (!VISIBILITY_MODE[mode]) return null;
      return /*#__PURE__*/_react["default"].createElement(_panel["default"], {
        name: this.context.translator.t('Groups'),
        opened: groups.size > 0
      }, groups.size ? /*#__PURE__*/_react["default"].createElement("table", {
        style: tablegroupStyle
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
        colSpan: "4"
      }), /*#__PURE__*/_react["default"].createElement("th", null, this.context.translator.t('Elements')), /*#__PURE__*/_react["default"].createElement("th", null, this.context.translator.t('Name')))), /*#__PURE__*/_react["default"].createElement("tbody", null, groups.entrySeq().map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          groupID = _ref2[0],
          group = _ref2[1];
        var selectClick = function selectClick(e) {
          return _this2.context.groupsActions.selectGroup(groupID);
        };
        var swapVisibility = function swapVisibility(e) {
          e.stopPropagation();
          _this2.context.groupsActions.setGroupProperties(groupID, new _immutable.Map({
            visible: !group.get('visible')
          }));
        };
        var chainToGroup = function chainToGroup(e) {
          layers.forEach(function (layer) {
            var layerID = layer.get('id');
            var layerElements = {
              'lines': layer.get('lines'),
              'items': layer.get('items'),
              'holes': layer.get('holes'),
              'areas': layer.get('areas')
            };
            var _loop = function _loop(elementPrototype) {
              var ElementList = layerElements[elementPrototype];
              ElementList.filter(function (el) {
                return el.get('selected');
              }).forEach(function (element) {
                _this2.context.groupsActions.addToGroup(groupID, layerID, elementPrototype, element.get('id'));
              });
            };
            for (var elementPrototype in layerElements) {
              _loop(elementPrototype);
            }
          });
          selectClick(e);
        };
        var isCurrentgroup = group.get('selected');
        var shouldHighlight = isCurrentgroup;
        var rowStyle = !shouldHighlight ? null : styleHoverColor;
        var dimension = group.get('elements').reduce(function (sum, layer) {
          return sum + layer.reduce(function (lSum, elProt) {
            return lSum + elProt.size;
          }, 0);
        }, 0);
        return /*#__PURE__*/_react["default"].createElement("tr", {
          key: groupID,
          style: rowStyle
        }, /*#__PURE__*/_react["default"].createElement("td", {
          style: iconColStyle,
          title: _this2.context.translator.t('Toggle Group Visibility')
        }, /*#__PURE__*/_react["default"].createElement(_fa.FaEye, {
          onClick: swapVisibility,
          style: !group.get('visible') ? styleEyeHidden : styleEyeVisible
        })), /*#__PURE__*/_react["default"].createElement("td", {
          style: iconColStyle,
          title: _this2.context.translator.t('Chain selected Elements to Group')
        }, /*#__PURE__*/_react["default"].createElement(_fa.FaLink, {
          onClick: chainToGroup,
          style: !shouldHighlight ? styleEditButton : styleEditButtonHover
        })), /*#__PURE__*/_react["default"].createElement("td", {
          style: iconColStyle,
          title: _this2.context.translator.t('Un-chain all Group\'s Elements and remove Group')
        }, /*#__PURE__*/_react["default"].createElement(_fa.FaUnlink, {
          onClick: function onClick(e) {
            return _this2.context.groupsActions.removeGroup(groupID);
          },
          style: !shouldHighlight ? styleEditButton : styleEditButtonHover
        })), /*#__PURE__*/_react["default"].createElement("td", {
          style: iconColStyle,
          title: _this2.context.translator.t('Delete group and all Elements')
        }, /*#__PURE__*/_react["default"].createElement(_fa.FaTrash, {
          onClick: function onClick(e) {
            return _this2.context.groupsActions.removeGroupAndDeleteElements(groupID);
          },
          style: !shouldHighlight ? styleEditButton : styleEditButtonHover
        })), /*#__PURE__*/_react["default"].createElement("td", {
          onClick: selectClick,
          style: {
            width: '0em',
            textAlign: 'center'
          }
        }, dimension), /*#__PURE__*/_react["default"].createElement("td", {
          onClick: selectClick
        }, group.get('name')));
      }))) : null, /*#__PURE__*/_react["default"].createElement("table", {
        style: {
          width: '100%',
          marginTop: '0.1em'
        }
      }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        style: !this.state.newEmptyHover ? newLayerLableStyle : newLayerLableHoverStyle,
        onMouseOver: function onMouseOver() {
          return _this2.setState({
            newEmptyHover: true
          });
        },
        onMouseOut: function onMouseOut() {
          return _this2.setState({
            newEmptyHover: false
          });
        },
        onClick: function onClick(e) {
          return _this2.context.groupsActions.addGroup();
        }
      }, /*#__PURE__*/_react["default"].createElement(_ti.TiPlus, null), /*#__PURE__*/_react["default"].createElement("b", {
        style: styleAddLabel
      }, this.context.translator.t('New Empty Group'))), /*#__PURE__*/_react["default"].createElement("td", {
        style: !this.state.newSelectedHover ? newLayerLableStyle : newLayerLableHoverStyle,
        onMouseOver: function onMouseOver() {
          return _this2.setState({
            newSelectedHover: true
          });
        },
        onMouseOut: function onMouseOut() {
          return _this2.setState({
            newSelectedHover: false
          });
        },
        onClick: function onClick(e) {
          return _this2.context.groupsActions.addGroupFromSelected();
        }
      }, /*#__PURE__*/_react["default"].createElement(_ti.TiPlus, null), /*#__PURE__*/_react["default"].createElement("b", {
        style: styleAddLabel
      }, this.context.translator.t('New Group from selected')))))));
    }
  }]);
}(_react.Component);
PanelGroups.propTypes = {
  mode: _propTypes["default"].string.isRequired,
  groups: _propTypes["default"].object.isRequired,
  layers: _propTypes["default"].object.isRequired
};
PanelGroups.contextTypes = {
  catalog: _propTypes["default"].object.isRequired,
  translator: _propTypes["default"].object.isRequired,
  itemsActions: _propTypes["default"].object.isRequired,
  linesActions: _propTypes["default"].object.isRequired,
  holesActions: _propTypes["default"].object.isRequired,
  groupsActions: _propTypes["default"].object.isRequired,
  projectActions: _propTypes["default"].object.isRequired
};