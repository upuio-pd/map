"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewer3DActions = exports.viewer2DActions = exports.verticesActions = exports.sceneActions = exports.projectActions = exports.linesActions = exports.itemsActions = exports.holesActions = exports.groupsActions = exports["default"] = exports.areaActions = void 0;
var projectActions = _interopRequireWildcard(require("./project-actions"));
exports.projectActions = projectActions;
var viewer2DActions = _interopRequireWildcard(require("./viewer2d-actions"));
exports.viewer2DActions = viewer2DActions;
var viewer3DActions = _interopRequireWildcard(require("./viewer3d-actions"));
exports.viewer3DActions = viewer3DActions;
var linesActions = _interopRequireWildcard(require("./lines-actions"));
exports.linesActions = linesActions;
var holesActions = _interopRequireWildcard(require("./holes-actions"));
exports.holesActions = holesActions;
var sceneActions = _interopRequireWildcard(require("./scene-actions"));
exports.sceneActions = sceneActions;
var verticesActions = _interopRequireWildcard(require("./vertices-actions"));
exports.verticesActions = verticesActions;
var itemsActions = _interopRequireWildcard(require("./items-actions"));
exports.itemsActions = itemsActions;
var areaActions = _interopRequireWildcard(require("./area-actions"));
exports.areaActions = areaActions;
var groupsActions = _interopRequireWildcard(require("./groups-actions"));
exports.groupsActions = groupsActions;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var _default = exports["default"] = {
  projectActions: projectActions,
  viewer2DActions: viewer2DActions,
  viewer3DActions: viewer3DActions,
  linesActions: linesActions,
  holesActions: holesActions,
  sceneActions: sceneActions,
  verticesActions: verticesActions,
  itemsActions: itemsActions,
  areaActions: areaActions,
  groupsActions: groupsActions
};