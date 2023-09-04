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
var PanelGroups = /*#__PURE__*/function (_Component) {
  _inherits(PanelGroups, _Component);
  var _super = _createSuper(PanelGroups);
  function PanelGroups(props, context) {
    var _this;
    _classCallCheck(this, PanelGroups);
    _this = _super.call(this, props, context);
    _this.state = {
      newEmptyHover: false,
      newSelectedHover: false
    };
    return _this;
  }
  _createClass(PanelGroups, [{
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
  return PanelGroups;
}(_react.Component);
exports["default"] = PanelGroups;
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