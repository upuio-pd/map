"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _immutable = require("immutable");
var _panel = _interopRequireDefault(require("./panel"));
var _ti = require("react-icons/ti");
var _fa = require("react-icons/fa");
var _export = require("../style/export");
var _constants = require("../../constants");
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
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
  MODE_ROTATING_ITEM: _constants.MODE_ROTATING_ITEM,
  MODE_UPLOADING_IMAGE: _constants.MODE_UPLOADING_IMAGE,
  MODE_FITTING_IMAGE: _constants.MODE_FITTING_IMAGE
};
var styleEditButton = {
  cursor: 'pointer',
  marginLeft: '5px',
  border: '0px',
  background: 'none',
  color: SharedStyle.COLORS.white,
  fontSize: '14px',
  outline: '0px'
};
var tableLayerStyle = {
  width: '100%',
  cursor: 'pointer',
  overflowY: 'auto',
  maxHeight: '20em',
  display: 'block',
  padding: '0 1em',
  marginLeft: '1px'
};
var iconColStyle = {
  width: '2em'
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
var firstTdStyle = {
  width: '6em'
};
var newLayerLableStyle = {
  margin: '0.5em 0',
  fontSize: '1.3em',
  cursor: 'pointer',
  textAlign: 'center'
};
var newLayerLableHoverStyle = _objectSpread(_objectSpread({}, newLayerLableStyle), styleHoverColor);
var layerInputTableStyle = {
  width: '100%',
  borderSpacing: '2px 0',
  padding: '5px 15px'
};
var inputTableButtonStyle = {
  "float": 'right',
  marginTop: '0.5em',
  borderSpacing: '0'
};
var PanelLayers = exports["default"] = /*#__PURE__*/function (_Component) {
  function PanelLayers(props) {
    var _this;
    _classCallCheck(this, PanelLayers);
    _this = _callSuper(this, PanelLayers, [props]);
    _this.state = {
      headHovered: false,
      layerAddUIVisible: false,
      editingLayer: new _immutable.Map()
    };
    return _this;
  }
  _inherits(PanelLayers, _Component);
  return _createClass(PanelLayers, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.state.scene.layers.size !== nextProps.state.scene.layers.size || nextState.layerAddUIVisible != this.state.layerAddUIVisible || this.state.editingLayer.hashCode() !== nextState.editingLayer.hashCode() || this.props.state.sceneHistory.hashCode() !== nextProps.state.sceneHistory.hashCode()) return true;
      return false;
    }
  }, {
    key: "addLayer",
    value: function addLayer(e) {
      e.stopPropagation();
      if (!this.state.layerAddUIVisible) {
        this.context.sceneActions.addLayer('', 0);
        this.setState({
          layerAddUIVisible: false
        });
      } else this.setState({
        layerAddUIVisible: !this.state.layerAddUIVisible
      });
    }
  }, {
    key: "resetLayerMod",
    value: function resetLayerMod(e) {
      e.stopPropagation();
      this.setState({
        layerAddUIVisible: false,
        editingLayer: new _immutable.Map()
      });
    }
  }, {
    key: "updateLayer",
    value: function updateLayer(e, layerData) {
      e.stopPropagation();
      var _layerData$toJS = layerData.toJS(),
        id = _layerData$toJS.id,
        name = _layerData$toJS.name,
        opacity = _layerData$toJS.opacity,
        altitude = _layerData$toJS.altitude,
        order = _layerData$toJS.order;
      altitude = parseInt(altitude);
      this.context.sceneActions.setLayerProperties(id, {
        name: name,
        opacity: opacity,
        altitude: altitude,
        order: order
      });
      this.setState({
        layerAddUIVisible: false,
        editingLayer: new _immutable.Map()
      });
    }
  }, {
    key: "delLayer",
    value: function delLayer(e, layerID) {
      e.stopPropagation();
      this.context.sceneActions.removeLayer(layerID);
      this.setState({
        layerAddUIVisible: false,
        editingLayer: new _immutable.Map()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      if (!VISIBILITY_MODE[this.props.state.mode]) return null;
      var scene = this.props.state.scene;
      var isLastLayer = scene.layers.size === 1;
      return /*#__PURE__*/_react["default"].createElement(_panel["default"], {
        name: this.context.translator.t('Layers')
      }, /*#__PURE__*/_react["default"].createElement("table", {
        style: tableLayerStyle
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
        colSpan: "3"
      }), /*#__PURE__*/_react["default"].createElement("th", null, this.context.translator.t('Altitude')), /*#__PURE__*/_react["default"].createElement("th", null, this.context.translator.t('Name')))), /*#__PURE__*/_react["default"].createElement("tbody", null, scene.layers.entrySeq().map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          layerID = _ref2[0],
          layer = _ref2[1];
        var selectClick = function selectClick(e) {
          return _this2.context.sceneActions.selectLayer(layerID);
        };
        var configureClick = function configureClick(e) {
          return _this2.setState({
            editingLayer: layer,
            layerAddUIVisible: true
          });
        };
        var swapVisibility = function swapVisibility(e) {
          e.stopPropagation();
          _this2.context.sceneActions.setLayerProperties(layerID, {
            visible: !layer.visible
          });
        };
        var isCurrentLayer = layerID === scene.selectedLayer;
        return /*#__PURE__*/_react["default"].createElement("tr", {
          key: layerID,
          onClick: selectClick,
          onDoubleClick: configureClick,
          style: !isCurrentLayer ? null : styleHoverColor
        }, /*#__PURE__*/_react["default"].createElement("td", {
          style: iconColStyle
        }, !isCurrentLayer ? /*#__PURE__*/_react["default"].createElement(_fa.FaEye, {
          onClick: swapVisibility,
          style: !layer.visible ? styleEyeHidden : styleEyeVisible
        }) : null), /*#__PURE__*/_react["default"].createElement("td", {
          style: iconColStyle
        }, /*#__PURE__*/_react["default"].createElement(_fa.FaPencilAlt, {
          onClick: configureClick,
          style: !isCurrentLayer ? styleEditButton : styleEditButtonHover,
          title: _this2.context.translator.t('Configure layer')
        })), /*#__PURE__*/_react["default"].createElement("td", {
          style: iconColStyle
        }, !isLastLayer ? /*#__PURE__*/_react["default"].createElement(_fa.FaTrash, {
          onClick: function onClick(e) {
            return _this2.delLayer(e, layerID);
          },
          style: !isCurrentLayer ? styleEditButton : styleEditButtonHover,
          title: _this2.context.translator.t('Delete layer')
        }) : null), /*#__PURE__*/_react["default"].createElement("td", {
          style: {
            width: '6em',
            textAlign: 'center'
          }
        }, "[ h : ", layer.altitude, " ]"), /*#__PURE__*/_react["default"].createElement("td", null, layer.name));
      }))), /*#__PURE__*/_react["default"].createElement("p", {
        style: !this.state.headHovered ? newLayerLableStyle : newLayerLableHoverStyle,
        onMouseOver: function onMouseOver() {
          return _this2.setState({
            headHovered: true
          });
        },
        onMouseOut: function onMouseOut() {
          return _this2.setState({
            headHovered: false
          });
        },
        onClick: function onClick(e) {
          return _this2.addLayer(e);
        }
      }, !this.state.layerAddUIVisible ? /*#__PURE__*/_react["default"].createElement(_ti.TiPlus, null) : /*#__PURE__*/_react["default"].createElement(_ti.TiDelete, null), /*#__PURE__*/_react["default"].createElement("b", {
        style: styleAddLabel
      }, this.context.translator.t('New layer'))), this.state.layerAddUIVisible && this.state.editingLayer ? /*#__PURE__*/_react["default"].createElement("table", {
        style: layerInputTableStyle
      }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", {
        style: {
          marginTop: '1em'
        }
      }, /*#__PURE__*/_react["default"].createElement("td", {
        style: firstTdStyle
      }, this.context.translator.t('Name'), ":"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_export.FormTextInput, {
        value: this.state.editingLayer.get('name'),
        onChange: function onChange(e) {
          return _this2.setState({
            editingLayer: _this2.state.editingLayer.merge({
              name: e.target.value
            })
          });
        }
      }))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        style: firstTdStyle
      }, this.context.translator.t('opacity'), ":"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_export.FormSlider, {
        min: 0,
        max: 100,
        value: Math.round(this.state.editingLayer.get('opacity') * 100),
        onChange: function onChange(e) {
          return _this2.setState({
            editingLayer: _this2.state.editingLayer.merge({
              opacity: e.target.value / 100
            })
          });
        }
      }))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        style: firstTdStyle
      }, this.context.translator.t('altitude'), ":"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_export.FormNumberInput, {
        value: this.state.editingLayer.get('altitude'),
        onChange: function onChange(e) {
          return _this2.setState({
            editingLayer: _this2.state.editingLayer.merge({
              altitude: e.target.value
            })
          });
        }
      }))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        style: firstTdStyle
      }, this.context.translator.t('order'), ":"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_export.FormNumberInput, {
        value: this.state.editingLayer.get('order'),
        onChange: function onChange(e) {
          return _this2.setState({
            editingLayer: _this2.state.editingLayer.merge({
              order: e.target.value
            })
          });
        }
      }))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        colSpan: "2"
      }, /*#__PURE__*/_react["default"].createElement("table", {
        style: inputTableButtonStyle
      }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_export.CancelButton, {
        size: "small",
        onClick: function onClick(e) {
          _this2.resetLayerMod(e);
        }
      }, this.context.translator.t('Reset'))), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_export.FormSubmitButton, {
        size: "small",
        onClick: function onClick(e) {
          _this2.updateLayer(e, _this2.state.editingLayer);
        }
      }, this.context.translator.t('Save')))))))))) : null);
    }
  }]);
}(_react.Component);
PanelLayers.propTypes = {
  state: _propTypes["default"].object.isRequired
};
PanelLayers.contextTypes = {
  sceneActions: _propTypes["default"].object.isRequired,
  translator: _propTypes["default"].object.isRequired
};