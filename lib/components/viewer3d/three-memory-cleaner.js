"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disposeObject = disposeObject;
exports.disposeScene = disposeScene;
var Three = _interopRequireWildcard(require("three"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function disposeGeometry(geometry) {
  geometry.dispose();
}
function disposeTexture(texture) {
  if (!texture) {
    return;
  }
  texture.dispose();
}
function disposeMultimaterial(material) {
  if (!(material instanceof Three.MultiMaterial)) {
    return;
  }
  material.materials.forEach(function (material) {
    disposeMaterial(material);
  });
}
function disposeMaterial(material) {
  if (!(material instanceof Three.Material)) {
    return;
  }
  disposeTexture(material.map);
  material.map = null;
  material.dispose();
}
function disposeMesh(mesh) {
  if (!(mesh instanceof Three.Mesh || mesh instanceof Three.BoxHelper || mesh instanceof Three.LineSegments)) {
    return;
  }
  disposeGeometry(mesh.geometry);
  disposeMultimaterial(mesh.material);
  disposeMaterial(mesh.material);
  mesh.geometry = null;
  mesh.material = null;
}
function disposeScene(scene3D) {
  scene3D.traverse(function (child) {
    disposeMesh(child);
    child = null;
  });
}
function disposeObject(object) {
  object.traverse(function (child) {
    disposeMesh(child);
    child = null;
  });
}