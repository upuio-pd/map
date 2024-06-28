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
var PanelGuides = exports["default"] = /*#__PURE__*/function (_Component) {
  function PanelGuides(props, context) {
    var _this;
    _classCallCheck(this, PanelGuides);
    _this = _callSuper(this, PanelGuides, [props, context]);
    _this.state = {
      addHGVisible: true,
      addVGVisible: true,
      addCGVisible: true
    };
    return _this;
  }
  _inherits(PanelGuides, _Component);
  return _createClass(PanelGuides, [{
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
}(_react.Component);
PanelGuides.propTypes = {
  state: _propTypes["default"].object.isRequired
};
PanelGuides.contextTypes = {
  translator: _propTypes["default"].object.isRequired,
  projectActions: _propTypes["default"].object.isRequired
};