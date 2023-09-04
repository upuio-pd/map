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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
var FormNumberInput = /*#__PURE__*/function (_Component) {
  _inherits(FormNumberInput, _Component);
  var _super = _createSuper(FormNumberInput);
  function FormNumberInput(props, context) {
    var _this;
    _classCallCheck(this, FormNumberInput);
    _this = _super.call(this, props, context);
    _this.state = {
      focus: false,
      valid: true,
      showedValue: props.value
    };
    return _this;
  }
  _createClass(FormNumberInput, [{
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
  return FormNumberInput;
}(_react.Component);
exports["default"] = FormNumberInput;
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