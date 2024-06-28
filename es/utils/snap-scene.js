"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sceneSnapElements = sceneSnapElements;
var _snap = require("./snap");
var _export = require("./export");
var _immutable = require("immutable");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function sceneSnapElements(scene) {
  var snapElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _immutable.List();
  var snapMask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _immutable.Map();
  var width = scene.width,
    height = scene.height;
  var a, b, c;
  return snapElements.withMutations(function (snapElements) {
    scene.layers.forEach(function (layer) {
      var lines = layer.lines,
        vertices = layer.vertices;
      vertices.forEach(function (_ref) {
        var vertexID = _ref.id,
          x = _ref.x,
          y = _ref.y;
        if (snapMask.get(_snap.SNAP_POINT)) {
          (0, _snap.addPointSnap)(snapElements, x, y, 10, 10, vertexID);
        }
        if (snapMask.get(_snap.SNAP_LINE)) {
          var _GeometryUtils$horizo = _export.GeometryUtils.horizontalLine(y);
          a = _GeometryUtils$horizo.a;
          b = _GeometryUtils$horizo.b;
          c = _GeometryUtils$horizo.c;
          (0, _snap.addLineSnap)(snapElements, a, b, c, 10, 1, vertexID);
          var _GeometryUtils$vertic = _export.GeometryUtils.verticalLine(x);
          a = _GeometryUtils$vertic.a;
          b = _GeometryUtils$vertic.b;
          c = _GeometryUtils$vertic.c;
          (0, _snap.addLineSnap)(snapElements, a, b, c, 10, 1, vertexID);
        }
      });
      if (snapMask.get(_snap.SNAP_SEGMENT)) {
        lines.forEach(function (_ref2) {
          var lineID = _ref2.id,
            _ref2$vertices = _slicedToArray(_ref2.vertices, 2),
            v0 = _ref2$vertices[0],
            v1 = _ref2$vertices[1];
          var _vertices$get = vertices.get(v0),
            x1 = _vertices$get.x,
            y1 = _vertices$get.y;
          var _vertices$get2 = vertices.get(v1),
            x2 = _vertices$get2.x,
            y2 = _vertices$get2.y;
          (0, _snap.addLineSegmentSnap)(snapElements, x1, y1, x2, y2, 20, 1, lineID);
        });
      }
    });
    if (snapMask.get(_snap.SNAP_GRID)) {
      var divider = 5;
      var gridCellSize = 100 / divider;
      var xCycle = width / gridCellSize;
      var yCycle = height / gridCellSize;
      for (var x = 0; x < xCycle; x++) {
        var xMul = x * gridCellSize;
        for (var y = 0; y < yCycle; y++) {
          var yMul = y * gridCellSize;
          var onXCross = !(x % divider) ? true : false;
          var onYCross = !(y % divider) ? true : false;
          (0, _snap.addGridSnap)(snapElements, xMul, yMul, 10, onXCross && onYCross ? 15 : 10, null);
        }
      }
    }
    if (snapMask.get(_snap.SNAP_GUIDE)) {
      var horizontal = scene.getIn(['guides', 'horizontal']);
      var vertical = scene.getIn(['guides', 'vertical']);
      var hValues = horizontal.valueSeq();
      var vValues = vertical.valueSeq();
      hValues.forEach(function (hVal) {
        vValues.forEach(function (vVal) {
          (0, _snap.addPointSnap)(snapElements, vVal, hVal, 10, 10);
        });
      });
      hValues.forEach(function (hVal) {
        return (0, _snap.addLineSegmentSnap)(snapElements, 0, hVal, width, hVal, 20, 1);
      });
      vValues.forEach(function (vVal) {
        return (0, _snap.addLineSegmentSnap)(snapElements, vVal, 0, vVal, height, 20, 1);
      });
    }
  });
}