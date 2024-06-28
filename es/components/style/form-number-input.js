"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
var _md = require("react-icons/md");
var _constants = require("../../constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
var STYLE_INPUT = {
  display: 'block',
  width: '100%',
  padding: '0 2px',
  fontSize: '13px',
  lineHeight: '1.25',
  color: SharedStyle.PRIMARY_COLOR.input,
  backgroundColor: SharedStyle.COLORS.white,
  backgroundImage: 'none',
  border: '1px solid rgba(0,0,0,.15)',
  outline: 'none',
  height: '30px'
};
var confirmStyle = {
  position: 'absolute',
  cursor: 'pointer',
  width: '2em',
  height: '2em',
  right: '0.35em',
  top: '0.35em',
  backgroundColor: SharedStyle.SECONDARY_COLOR.main,
  color: '#FFF',
  transition: 'all 0.1s linear'
};
var FormNumberInput = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormNumberInput(props, context) {
    var _this;
    _classCallCheck(this, FormNumberInput);
    _this = _callSuper(this, FormNumberInput, [props, context]);
    _this.state = {
      focus: false,
      valid: true,
      showedValue: props.value
    };
    return _this;
  }
  _inherits(FormNumberInput, _Component);
  return _createClass(FormNumberInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        this.setState({
          showedValue: nextProps.value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        value = _this$props.value,
        min = _this$props.min,
        max = _this$props.max,
        precision = _this$props.precision,
        onChange = _this$props.onChange,
        onValid = _this$props.onValid,
        onInvalid = _this$props.onInvalid,
        style = _this$props.style,
        placeholder = _this$props.placeholder;
      var numericInputStyle = _objectSpread(_objectSpread({}, STYLE_INPUT), style);
      if (this.state.focus) numericInputStyle.border = "1px solid ".concat(SharedStyle.SECONDARY_COLOR.main);
      var regexp = new RegExp("^-?([0-9]+)?\\.?([0-9]{0,".concat(precision, "})?$"));
      if (!isNaN(min) && isFinite(min) && this.state.showedValue < min) this.setState({
        showedValue: min
      }); // value = min;
      if (!isNaN(max) && isFinite(max) && this.state.showedValue > max) this.setState({
        showedValue: max
      }); // value = max;

      var currValue = regexp.test(this.state.showedValue) ? this.state.showedValue : parseFloat(this.state.showedValue).toFixed(precision);
      var different = parseFloat(this.props.value).toFixed(precision) !== parseFloat(this.state.showedValue).toFixed(precision);
      var saveFn = function saveFn(e) {
        e.stopPropagation();
        if (_this2.state.valid) {
          var savedValue = _this2.state.showedValue !== '' && _this2.state.showedValue !== '-' ? parseFloat(_this2.state.showedValue) : 0;
          _this2.setState({
            showedValue: savedValue
          });
          onChange({
            target: {
              value: savedValue
            }
          });
        }
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: 'relative'
        }
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: currValue,
        style: numericInputStyle,
        onChange: function onChange(evt) {
          var valid = regexp.test(evt.nativeEvent.target.value);
          if (valid) {
            _this2.setState({
              showedValue: evt.nativeEvent.target.value
            });
            if (onValid) onValid(evt.nativeEvent);
          } else {
            if (onInvalid) onInvalid(evt.nativeEvent);
          }
          _this2.setState({
            valid: valid
          });
        },
        onFocus: function onFocus(e) {
          return _this2.setState({
            focus: true
          });
        },
        onBlur: function onBlur(e) {
          return _this2.setState({
            focus: false
          });
        },
        onKeyDown: function onKeyDown(e) {
          var keyCode = e.keyCode || e.which;
          if ((keyCode == _constants.KEYBOARD_BUTTON_CODE.ENTER || keyCode == _constants.KEYBOARD_BUTTON_CODE.TAB) && different) {
            saveFn(e);
          }
        },
        placeholder: placeholder
      }), /*#__PURE__*/_react["default"].createElement("div", {
        onClick: function onClick(e) {
          if (different) saveFn(e);
        },
        title: this.context.translator.t('Confirm'),
        style: _objectSpread(_objectSpread({}, confirmStyle), {}, {
          visibility: different ? 'visible' : 'hidden',
          opacity: different ? '1' : '0'
        })
      }, /*#__PURE__*/_react["default"].createElement(_md.MdUpdate, {
        style: {
          width: '100%',
          height: '100%',
          padding: '0.2em',
          color: '#FFF'
        }
      })));
    }
  }]);
}(_react.Component);
FormNumberInput.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  style: _propTypes["default"].object,
  onChange: _propTypes["default"].func.isRequired,
  onValid: _propTypes["default"].func,
  onInvalid: _propTypes["default"].func,
  min: _propTypes["default"].number,
  max: _propTypes["default"].number,
  precision: _propTypes["default"].number,
  placeholder: _propTypes["default"].string
};
FormNumberInput.contextTypes = {
  translator: _propTypes["default"].object.isRequired
};
FormNumberInput.defaultProps = {
  value: 0,
  style: {},
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  precision: 3
};