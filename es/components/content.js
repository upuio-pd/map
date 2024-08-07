"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Content;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _viewer2d = _interopRequireDefault(require("./viewer2d/viewer2d"));
var _viewer3d = _interopRequireDefault(require("./viewer3d/viewer3d"));
var _viewer3dFirstPerson = _interopRequireDefault(require("./viewer3d/viewer3d-first-person"));
var _catalogList = _interopRequireDefault(require("./catalog-view/catalog-list"));
var _projectConfigurator = _interopRequireDefault(require("./configurator/project-configurator"));
var constants = _interopRequireWildcard(require("../constants"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Content(_ref) {
  var width = _ref.width,
    height = _ref.height,
    viewOnly = _ref.viewOnly,
    state = _ref.state,
    customContents = _ref.customContents,
    onClickOnItem = _ref.onClickOnItem,
    theme = _ref.theme;
  var mode = state.get("mode");
  switch (mode) {
    case constants.MODE_3D_VIEW:
      return /*#__PURE__*/_react["default"].createElement(_viewer3d["default"], {
        state: state,
        width: width,
        height: height
      });
    case constants.MODE_3D_FIRST_PERSON:
      return /*#__PURE__*/_react["default"].createElement(_viewer3dFirstPerson["default"], {
        state: state,
        width: width,
        height: height
      });
    case constants.MODE_VIEWING_CATALOG:
      return /*#__PURE__*/_react["default"].createElement(_catalogList["default"], {
        state: state,
        width: width,
        height: height
      });
    case constants.MODE_IDLE:
    case constants.MODE_2D_ZOOM_IN:
    case constants.MODE_2D_ZOOM_OUT:
    case constants.MODE_2D_PAN:
    case constants.MODE_WAITING_DRAWING_LINE:
    case constants.MODE_DRAGGING_LINE:
    case constants.MODE_DRAGGING_VERTEX:
    case constants.MODE_DRAGGING_ITEM:
    case constants.MODE_DRAWING_LINE:
    case constants.MODE_DRAWING_HOLE:
    case constants.MODE_DRAWING_ITEM:
    case constants.MODE_DRAGGING_HOLE:
    case constants.MODE_ROTATING_ITEM:
      return /*#__PURE__*/_react["default"].createElement(_viewer2d["default"], {
        state: state,
        width: width,
        height: height,
        onClickOnItem: onClickOnItem,
        viewOnly: viewOnly,
        theme: theme
      });
    case constants.MODE_CONFIGURING_PROJECT:
      return /*#__PURE__*/_react["default"].createElement(_projectConfigurator["default"], {
        width: width,
        height: height,
        state: state
      });
    default:
      if (customContents.hasOwnProperty(mode)) {
        var CustomContent = customContents[mode];
        return /*#__PURE__*/_react["default"].createElement(CustomContent, {
          width: width,
          height: height,
          state: state
        });
      } else {
        throw new Error("Mode ".concat(mode, " doesn't have a mapped content"));
      }
  }
}
Content.propTypes = {
  state: _propTypes["default"].object.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired
};