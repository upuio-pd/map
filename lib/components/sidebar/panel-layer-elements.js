"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _panel = _interopRequireDefault(require("./panel"));
var _constants = require("../../constants");
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
var _md = require("react-icons/md");
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
var contentArea = {
  height: 'auto',
  maxHeight: '15em',
  overflowY: 'auto',
  padding: '0.25em 1.15em',
  cursor: 'pointer',
  marginBottom: '1em',
  userSelect: 'none'
};
var elementStyle = {
  width: 'auto',
  height: '2.5em',
  margin: '0.25em 0.25em 0 0',
  padding: '0.5em',
  textAlign: 'center',
  display: 'inline-block',
  border: '1px solid #CCC',
  borderRadius: '0.2em'
};
var elementSelectedStyle = _objectSpread(_objectSpread({}, elementStyle), {}, {
  color: SharedStyle.SECONDARY_COLOR.main,
  borderColor: SharedStyle.SECONDARY_COLOR.main
});
var categoryDividerStyle = {
  paddingBottom: '0.5em',
  borderBottom: '1px solid #888'
};
var tableSearchStyle = {
  width: '100%',
  marginTop: '0.8em'
};
var searchIconStyle = {
  fontSize: '1.5em'
};
var searchInputStyle = {
  fontSize: '1em',
  width: '100%',
  height: '1em',
  padding: '1em 0.5em'
};
var PanelLayerElement = /*#__PURE__*/function (_Component) {
  _inherits(PanelLayerElement, _Component);
  var _super = _createSuper(PanelLayerElement);
  function PanelLayerElement(props, context) {
    var _this;
    _classCallCheck(this, PanelLayerElement);
    _this = _super.call(this, props, context);
    var layer = props.layers.get(props.selectedLayer);
    var elements = {
      lines: layer.lines,
      holes: layer.holes,
      items: layer.items
    };
    _this.state = {
      elements: elements,
      matchString: '',
      matchedElements: elements
    };
    return _this;
  }
  _createClass(PanelLayerElement, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.state.matchString !== nextState.matchString) return true;
      var oldElements = this.state.elements;
      var newElements = nextState.elements;
      if (oldElements.lines.hashCode() !== newElements.lines.hashCode() || oldElements.holes.hashCode() !== newElements.holes.hashCode() || oldElements.items.hashCode() !== newElements.items.hashCode()) return true;
      return false;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var layer = nextProps.layers.get(nextProps.selectedLayer);
      if (this.props.layers.hashCode() === nextProps.layers.hashCode()) return;
      var elements = {
        lines: layer.lines,
        holes: layer.holes,
        items: layer.items
      };
      if (this.state.matchString !== '') {
        var regexp = new RegExp(this.state.matchString, 'i');
        var filterCb = function filterCb(el) {
          return regexp.test(el.get('name'));
        };
        this.setState({
          matchedElements: {
            elements: elements,
            lines: elements.lines.filter(filterCb),
            holes: elements.holes.filter(filterCb),
            items: elements.items.filter(filterCb)
          }
        });
      } else {
        this.setState({
          elements: elements,
          matchedElements: elements
        });
      }
    }
  }, {
    key: "matcharray",
    value: function matcharray(text) {
      if (text === '') {
        this.setState({
          matchString: '',
          matchedElements: this.state.elements
        });
        return;
      }
      var regexp = new RegExp(text, 'i');
      var filterCb = function filterCb(el) {
        return regexp.test(el.get('name'));
      };
      this.setState({
        matchString: text,
        matchedElements: {
          lines: this.state.elements.lines.filter(filterCb),
          holes: this.state.elements.holes.filter(filterCb),
          items: this.state.elements.items.filter(filterCb)
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      if (!VISIBILITY_MODE[this.props.mode]) return null;
      var layer = this.props.layers.get(this.props.selectedLayer);
      return /*#__PURE__*/_react["default"].createElement(_panel["default"], {
        name: this.context.translator.t('Elements on layer {0}', layer.name)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: contentArea,
        onWheel: function onWheel(e) {
          e.stopPropagation(), {
            capture: false,
            passive: false
          };
        }
      }, /*#__PURE__*/_react["default"].createElement("table", {
        style: tableSearchStyle
      }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_md.MdSearch, {
        style: searchIconStyle
      })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        style: searchInputStyle,
        onChange: function onChange(e) {
          _this2.matcharray(e.target.value);
        }
      }))))), this.state.matchedElements.lines.count() ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
        style: categoryDividerStyle
      }, this.context.translator.t('Lines')), this.state.matchedElements.lines.entrySeq().map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          lineID = _ref2[0],
          line = _ref2[1];
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: lineID,
          onClick: function onClick(e) {
            return _this2.context.linesActions.selectLine(layer.id, line.id);
          },
          style: line.selected ? elementSelectedStyle : elementStyle
        }, line.name);
      })) : null, this.state.matchedElements.holes.count() ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
        style: categoryDividerStyle
      }, this.context.translator.t('Holes')), this.state.matchedElements.holes.entrySeq().map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          holeID = _ref4[0],
          hole = _ref4[1];
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: holeID,
          onClick: function onClick(e) {
            return _this2.context.holesActions.selectHole(layer.id, hole.id);
          },
          style: hole.selected ? elementSelectedStyle : elementStyle
        }, hole.name);
      })) : null, this.state.matchedElements.items.count() ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
        style: categoryDividerStyle
      }, this.context.translator.t('Items')), this.state.matchedElements.items.entrySeq().map(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          itemID = _ref6[0],
          item = _ref6[1];
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: itemID,
          onClick: function onClick(e) {
            return _this2.context.itemsActions.selectItem(layer.id, item.id);
          },
          style: item.selected ? elementSelectedStyle : elementStyle
        }, item.name);
      })) : null));
    }
  }]);
  return PanelLayerElement;
}(_react.Component);
exports["default"] = PanelLayerElement;
PanelLayerElement.propTypes = {
  mode: _propTypes["default"].string.isRequired,
  layers: _propTypes["default"].object.isRequired
};
PanelLayerElement.contextTypes = {
  catalog: _propTypes["default"].object.isRequired,
  translator: _propTypes["default"].object.isRequired,
  itemsActions: _propTypes["default"].object.isRequired,
  linesActions: _propTypes["default"].object.isRequired,
  holesActions: _propTypes["default"].object.isRequired,
  projectActions: _propTypes["default"].object.isRequired
};