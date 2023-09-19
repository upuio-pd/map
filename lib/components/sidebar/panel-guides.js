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
var _reactTabs = require("react-tabs");
var _fa = require("react-icons/fa");
var _export = require("../../components/style/export");
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
var tabStyle = {
  margin: '1em'
};
var iconStyle = {
  fontSize: '14px',
  margin: '2px',
  cursor: 'pointer'
};
var addGuideStyle = {
  cursor: 'pointer',
  height: '2em'
};
var tableTabStyle = {
  width: '100%',
  textAlign: 'center'
};
var PanelGuides = /*#__PURE__*/function (_Component) {
  _inherits(PanelGuides, _Component);
  var _super = _createSuper(PanelGuides);
  function PanelGuides(props, context) {
    var _this;
    _classCallCheck(this, PanelGuides);
    _this = _super.call(this, props, context);
    _this.state = {
      addHGVisible: true,
      addVGVisible: true,
      addCGVisible: true
    };
    return _this;
  }
  _createClass(PanelGuides, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.addHGVisible !== nextState.addHGVisible || this.state.addVGVisible !== nextState.addVGVisible || this.state.addCGVisible !== nextState.addCGVisible || this.props.state.getIn(['scene', 'guides']).hashCode() !== nextProps.state.getIn(['scene', 'guides']).hashCode();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var state = this.props.state;
      var _this$context = this.context,
        projectActions = _this$context.projectActions,
        translator = _this$context.translator;
      var guides = state.scene.guides;
      return /*#__PURE__*/_react["default"].createElement(_panel["default"], {
        name: translator.t('Guides')
      }, /*#__PURE__*/_react["default"].createElement(_reactTabs.Tabs, {
        id: "guidesTabs",
        style: tabStyle
      }, /*#__PURE__*/_react["default"].createElement(_reactTabs.TabList, null, /*#__PURE__*/_react["default"].createElement(_reactTabs.Tab, null, translator.t('Horizontal')), /*#__PURE__*/_react["default"].createElement(_reactTabs.Tab, null, translator.t('Vertical'))), /*#__PURE__*/_react["default"].createElement(_reactTabs.TabPanel, null, /*#__PURE__*/_react["default"].createElement("table", {
        style: tableTabStyle
      }, /*#__PURE__*/_react["default"].createElement("tbody", null, guides.get('horizontal').entrySeq().map(function (_ref, ind) {
        var _ref2 = _slicedToArray(_ref, 2),
          hgKey = _ref2[0],
          hgVal = _ref2[1];
        return /*#__PURE__*/_react["default"].createElement("tr", {
          key: hgKey
        }, /*#__PURE__*/_react["default"].createElement("td", {
          style: {
            width: '2em'
          }
        }, ind + 1), /*#__PURE__*/_react["default"].createElement("td", null, hgVal), /*#__PURE__*/_react["default"].createElement("td", {
          style: {
            width: '5em'
          }
        }, /*#__PURE__*/_react["default"].createElement(_fa.FaTrash, {
          style: iconStyle,
          onClick: function onClick(e) {
            return projectActions.removeHorizontalGuide(hgKey);
          }
        })));
      }), this.state.addHGVisible ? /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        colSpan: "3",
        style: addGuideStyle,
        onClick: function onClick(e) {
          return _this2.setState({
            addHGVisible: false
          });
        }
      }, translator.t('+ Add Horizontal Giude'))) : /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        colSpan: "2"
      }, /*#__PURE__*/_react["default"].createElement(_export.FormNumberInput, {
        value: 0,
        onChange: function onChange(e) {
          projectActions.addHorizontalGuide(e.target.value);
          return _this2.setState({
            addHGVisible: true
          });
        },
        min: 0,
        max: this.props.state.getIn(['scene', 'height'])
      })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_fa.FaTimes, {
        style: iconStyle,
        onClick: function onClick(e) {
          return _this2.setState({
            addHGVisible: true
          });
        }
      })))))), /*#__PURE__*/_react["default"].createElement(_reactTabs.TabPanel, null, /*#__PURE__*/_react["default"].createElement("table", {
        style: tableTabStyle
      }, /*#__PURE__*/_react["default"].createElement("tbody", null, guides.get('vertical').entrySeq().map(function (_ref3, ind) {
        var _ref4 = _slicedToArray(_ref3, 2),
          hgKey = _ref4[0],
          hgVal = _ref4[1];
        return /*#__PURE__*/_react["default"].createElement("tr", {
          key: hgKey
        }, /*#__PURE__*/_react["default"].createElement("td", {
          style: {
            width: '2em'
          }
        }, ind + 1), /*#__PURE__*/_react["default"].createElement("td", null, hgVal), /*#__PURE__*/_react["default"].createElement("td", {
          style: {
            width: '5em'
          }
        }, /*#__PURE__*/_react["default"].createElement(_fa.FaTrash, {
          style: iconStyle,
          onClick: function onClick(e) {
            return projectActions.removeVerticalGuide(hgKey);
          }
        })));
      }), this.state.addVGVisible ? /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        colSpan: "3",
        style: addGuideStyle,
        onClick: function onClick(e) {
          return _this2.setState({
            addVGVisible: false
          });
        }
      }, translator.t('+ Add Vertical Giude'))) : /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        colSpan: "2"
      }, /*#__PURE__*/_react["default"].createElement(_export.FormNumberInput, {
        value: 0,
        onChange: function onChange(e) {
          projectActions.addVerticalGuide(e.target.value);
          return _this2.setState({
            addVGVisible: true
          });
        },
        min: 0,
        max: this.props.state.getIn(['scene', 'height'])
      })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_fa.FaTimes, {
        style: iconStyle,
        onClick: function onClick(e) {
          return _this2.setState({
            addVGVisible: true
          });
        }
      }))))))));
    }
  }]);
  return PanelGuides;
}(_react.Component);
exports["default"] = PanelGuides;
PanelGuides.propTypes = {
  state: _propTypes["default"].object.isRequired
};
PanelGuides.contextTypes = {
  translator: _propTypes["default"].object.isRequired,
  projectActions: _propTypes["default"].object.isRequired
};