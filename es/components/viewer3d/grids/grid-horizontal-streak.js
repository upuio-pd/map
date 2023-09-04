"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var Three = _interopRequireWildcard(require("three"));
var _immutable = require("immutable");
var _sharedStyle = require("../../../shared-style");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _default(width, height, grid, font) {
  var step = grid.properties.get('step');
  var colors = grid.properties.has('color') ? new _immutable.List([grid.properties.get('color')]) : grid.properties.get('colors');
  var streak = new Three.Object3D();
  streak.name = 'streak';
  var counter = 0;
  for (var i = 0; i <= height; i += step) {
    var geometry = new Three.Geometry();
    geometry.vertices.push(new Three.Vector3(0, 0, -i));
    geometry.vertices.push(new Three.Vector3(width, 0, -i));
    var color = colors.get(counter % colors.size);
    var material = new Three.LineBasicMaterial({
      color: color
    });
    if (counter % 5 == 0) {
      var shape = new Three.TextGeometry('' + counter * step, {
        size: 16,
        height: 1,
        font: font
      });
      var wrapper = new Three.MeshBasicMaterial({
        color: _sharedStyle.COLORS.black
      });
      var words = new Three.Mesh(shape, wrapper);
      words.rotation.x -= Math.PI / 2;
      words.position.set(-90, 0, -i);
      streak.add(words);
    }
    streak.add(new Three.LineSegments(geometry, material));
    counter++;
  }
  return streak;
}