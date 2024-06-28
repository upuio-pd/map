"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _export = require("../style/export");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
var ProjectConfigurator = exports["default"] = /*#__PURE__*/function (_Component) {
  function ProjectConfigurator(props, context) {
    var _this;
    _classCallCheck(this, ProjectConfigurator);
    _this = _callSuper(this, ProjectConfigurator, [props, context]);
    var scene = props.state.scene;
    _this.state = {
      dataWidth: scene.width,
      dataHeight: scene.height
    };
    return _this;
  }
  _inherits(ProjectConfigurator, _Component);
  return _createClass(ProjectConfigurator, [{
    key: "onSubmit",
    value: function onSubmit(event) {
      // event.preventDefault();

      var projectActions = this.context.projectActions;
      var _this$state = this.state,
        dataWidth = _this$state.dataWidth,
        dataHeight = _this$state.dataHeight;
      dataWidth = parseInt(dataWidth);
      dataHeight = parseInt(dataHeight);
      if (dataWidth <= 100 || dataHeight <= 100) {
        alert('Scene size too small');
      } else {
        projectActions.setProjectProperties({
          width: dataWidth,
          height: dataHeight
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        width = _this$props.width,
        height = _this$props.height;
      var _this$state2 = this.state,
        dataWidth = _this$state2.dataWidth,
        dataHeight = _this$state2.dataHeight;
      var _this$context = this.context,
        projectActions = _this$context.projectActions,
        translator = _this$context.translator;
      return /*#__PURE__*/_react["default"].createElement(_export.ContentContainer, {
        width: width,
        height: height
      }, /*#__PURE__*/_react["default"].createElement(_export.ContentTitle, null, translator.t('Project config')), /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: function onSubmit(e) {
          return _this2.onSubmit(e);
        }
      }, /*#__PURE__*/_react["default"].createElement(_export.FormBlock, null, /*#__PURE__*/_react["default"].createElement(_export.FormLabel, {
        htmlFor: "width"
      }, translator.t('width')), /*#__PURE__*/_react["default"].createElement(_export.FormNumberInput, {
        id: "width",
        placeholder: "width",
        value: dataWidth,
        onChange: function onChange(e) {
          return _this2.setState({
            dataWidth: e.target.value
          });
        }
      })), /*#__PURE__*/_react["default"].createElement(_export.FormBlock, null, /*#__PURE__*/_react["default"].createElement(_export.FormLabel, {
        htmlFor: "height"
      }, translator.t('height')), /*#__PURE__*/_react["default"].createElement(_export.FormNumberInput, {
        id: "height",
        placeholder: "height",
        value: dataHeight,
        onChange: function onChange(e) {
          return _this2.setState({
            dataHeight: e.target.value
          });
        }
      })), /*#__PURE__*/_react["default"].createElement("table", {
        style: {
          "float": 'right'
        }
      }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_export.CancelButton, {
        size: "large",
        onClick: function onClick(e) {
          return projectActions.rollback();
        }
      }, translator.t('Cancel'))), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_export.FormSubmitButton, {
        size: "large"
      }, translator.t('Save'))))))));
    }
  }]);
}(_react.Component);
ProjectConfigurator.propTypes = {
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  state: _propTypes["default"].object.isRequired
};
ProjectConfigurator.contextTypes = {
  projectActions: _propTypes["default"].object.isRequired,
  translator: _propTypes["default"].object.isRequired
};