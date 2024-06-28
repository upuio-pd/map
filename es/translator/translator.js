"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _en = _interopRequireDefault(require("./en"));
var _it = _interopRequireDefault(require("./it"));
var _ru = _interopRequireDefault(require("./ru"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DEFAULT_LOCALE = 'en';
var Translator = exports["default"] = /*#__PURE__*/function () {
  function Translator() {
    _classCallCheck(this, Translator);
    this.locale = null;
    this.translations = {};
    this.registerTranslation('en', _en["default"]);
    this.registerTranslation('it', _it["default"]);
    this.registerTranslation('ru', _ru["default"]);
    var locale = null;
    var languages = Translator.getBrowserLanguages();
    for (var i = 0; i < languages.length; i++) {
      var lang = languages[i];
      if (this.translations.hasOwnProperty(lang)) {
        locale = lang;
        break;
      }
    }
    locale = locale ? locale : DEFAULT_LOCALE;
    this.setLocale(locale);
  }
  return _createClass(Translator, [{
    key: "t",
    value: function t(phrase) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }
      return this.translate.apply(this, [phrase].concat(params));
    }
  }, {
    key: "translate",
    value: function translate(phrase) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }
      var locale = this.locale;
      var translation = this.translations[locale];
      if (!translation.hasOwnProperty(phrase)) {
        console.warn("translation '".concat(phrase, "' not found in language '").concat(locale, "'"));
        return phrase;
      }
      var translatedPhrase = translation[phrase];
      translatedPhrase = translatedPhrase.replace(/{(\d+)}/g, function (match, number) {
        return typeof params[number] != 'undefined' ? params[number] : match;
      });
      return translatedPhrase;
    }
  }, {
    key: "setLocale",
    value: function setLocale(locale) {
      locale = locale.toLowerCase();
      if (this.translations.hasOwnProperty(locale)) {
        this.locale = locale;
      } else {
        console.warn("locale '".concat(locale, "' not available, switch to ").concat(DEFAULT_LOCALE));
        this.locale = DEFAULT_LOCALE.toLowerCase();
      }
    }
  }, {
    key: "registerTranslation",
    value: function registerTranslation(locale, translations) {
      if (!this.translations.hasOwnProperty(locale)) {
        this.translations[locale] = translations;
      } else {
        Object.assign(this.translations[locale], translations);
      }
    }
  }], [{
    key: "getBrowserLanguages",
    value: function getBrowserLanguages() {
      return navigator.languages ? navigator.languages : [navigator.language || navigator.userLanguage];
    }
  }]);
}();