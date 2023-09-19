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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
var PanelLayers = /*#__PURE__*/function (_Component) {
  _inherits(PanelLayers, _Component);
  var _super = _createSuper(PanelLayers);
  function PanelLayers(props) {
    var _this;
    _classCallCheck(this, PanelLayers);
    _this = _super.call(this, props);
    _this.state = {
      headHovered: false,
      layerAddUIVisible: false,
      editingLayer: new _immutable.Map()
    };
    return _this;
  }
  _createClass(PanelLayers, [{
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
  return PanelLayers;
}(_react.Component);
exports["default"] = PanelLayers;
PanelLayers.propTypes = {
  state: _propTypes["default"].object.isRequired
};
PanelLayers.contextTypes = {
  sceneActions: _propTypes["default"].object.isRequired,
  translator: _propTypes["default"].object.isRequired
};