"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createGrid;
var Three = _interopRequireWildcard(require("three"));
var _helvetiker_regularTypeface = require("./libs/helvetiker_regular.typeface.js");
var _gridHorizontalStreak = _interopRequireDefault(require("./grids/grid-horizontal-streak"));
var _gridVerticalStreak = _interopRequireDefault(require("./grids/grid-vertical-streak"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function createGrid(scene) {
  var gridMesh = new Three.Object3D();
  gridMesh.name = 'grid';
  var fontLoader = new Three.FontLoader();
  var font = fontLoader.parse(_helvetiker_regularTypeface.HELVETIKER); // For measures
  var grids = scene.grids,
    width = scene.width,
    height = scene.height;
  grids.forEach(function (grid) {
    switch (grid.type) {
      case 'horizontal-streak':
        gridMesh.add((0, _gridHorizontalStreak["default"])(width, height, grid, font));
        break;
      case 'vertical-streak':
        gridMesh.add((0, _gridVerticalStreak["default"])(width, height, grid, font));
        break;
    }
  });
  gridMesh.position.y = -1;
  return gridMesh;
}