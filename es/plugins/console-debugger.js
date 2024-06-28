"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = consoleDebugger;
var _export = _interopRequireDefault(require("../actions/export"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function consoleDebugger() {
  return function (store, stateExtractor) {
    window.ReactPlanner = _objectSpread(_objectSpread({}, _export["default"]), {}, {
      getStore: function getStore() {
        return store;
      },
      getState: function getState() {
        return stateExtractor(store.getState());
      },
      "do": function _do(actions) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
        actions = actions.reverse();
        var dispatch = store.dispatch;
        var dispatchAction = function dispatchAction() {
          console.info("There are other ".concat(actions.length, " actions on stack"));
          if (actions.length === 0) return;
          dispatch(actions.pop());
          if (actions.length === 0) return;
          setTimeout(dispatchAction, delay);
        };
        setTimeout(dispatchAction, 0);
      }
    });
    console.groupCollapsed("ReactPlanner");
    console.info("ReactPlanner is ready");
    console.info("console.log(ReactPlanner)");
    console.log(window.ReactPlanner);
    console.groupEnd();
  };
}