"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildWall = buildWall;
exports.updatedWall = updatedWall;
var _three = require("three");
var _threeCSG = _interopRequireDefault(require("../../utils/threeCSG.es6"));
var _geometry = require("../../utils/geometry");
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var halfPI = Math.PI / 2;

/**
 * Apply a texture to a wall face
 * @param material: The material of the face
 * @param texture: The texture to load
 * @param length: The lenght of the face
 * @param height: The height of the face
 */
var applyTexture = function applyTexture(material, texture, length, height) {
  var loader = new _three.TextureLoader();
  if (texture) {
    material.map = loader.load(texture.uri);
    material.needsUpdate = true;
    material.map.wrapS = _three.RepeatWrapping;
    material.map.wrapT = _three.RepeatWrapping;
    material.map.repeat.set(length * texture.lengthRepeatScale, height * texture.heightRepeatScale);
    if (texture.normal) {
      material.normalMap = loader.load(texture.normal.uri);
      material.normalScale = new _three.Vector2(texture.normal.normalScaleX, texture.normal.normalScaleY);
      material.normalMap.wrapS = _three.RepeatWrapping;
      material.normalMap.wrapT = _three.RepeatWrapping;
      material.normalMap.repeat.set(length * texture.normal.lengthRepeatScale, height * texture.normal.heightRepeatScale);
    }
  }
};
function buildWall(element, layer, scene, textures) {
  // Get the two vertices of the wall
  var vertex0 = layer.vertices.get(element.vertices.get(0));
  var vertex1 = layer.vertices.get(element.vertices.get(1));
  var inverted = false;

  // The first vertex is the smaller one
  if (vertex0.x > vertex1.x) {
    var app = vertex0;
    vertex0 = vertex1;
    vertex1 = app;
    inverted = true;
  }

  // Get height and thickness of the wall converting them into the current scene units
  var height = element.properties.getIn(['height', 'length']);
  var thickness = element.properties.getIn(['thickness', 'length']);
  var halfThickness = thickness / 2;
  var faceThickness = 0.2;
  var faceDistance = 1;
  var distance = (0, _geometry.verticesDistance)(vertex0, vertex1);
  var halfDistance = distance / 2;
  var soulMaterial = new _three.MeshBasicMaterial({
    color: element.selected ? SharedStyle.MESH_SELECTED : 0xD3D3D3
  });
  var soul = new _three.Mesh(new _three.BoxGeometry(distance, height, thickness), soulMaterial);
  var alpha = Math.asin((vertex1.y - vertex0.y) / distance);
  var sinAlpha = Math.sin(alpha);
  var cosAlpha = Math.cos(alpha);
  soul.position.y += height / 2;
  soul.position.x += halfDistance * cosAlpha;
  soul.position.z -= halfDistance * sinAlpha;
  soul.rotation.y = alpha;
  element.holes.forEach(function (holeID) {
    var holeData = layer.holes.get(holeID);
    var holeWidth = holeData.properties.getIn(['width', 'length']);
    var holeHeight = holeData.properties.getIn(['height', 'length']);
    var holeAltitude = holeData.properties.getIn(['altitude', 'length']);
    var offset = inverted ? 1 - holeData.offset : holeData.offset;
    var holeDistance = offset * distance;
    var holeGeometry = new _three.BoxGeometry(holeWidth, holeHeight, thickness);
    var holeMesh = new _three.Mesh(holeGeometry);
    holeMesh.position.y += holeHeight / 2 + holeAltitude;
    holeMesh.position.x += holeDistance * cosAlpha;
    holeMesh.position.z -= holeDistance * sinAlpha;
    holeMesh.rotation.y = alpha;
    var wallBSP = new _threeCSG["default"](soul);
    var holeBSP = new _threeCSG["default"](holeMesh);
    var wallWithHoleBSP = wallBSP.subtract(holeBSP);
    soul = wallWithHoleBSP.toMesh(soulMaterial);
  });
  soul.name = 'soul';
  var frontMaterial = new _three.MeshBasicMaterial();
  var backMaterial = new _three.MeshBasicMaterial();
  applyTexture(frontMaterial, textures[element.properties.get('textureB')], distance, height);
  applyTexture(backMaterial, textures[element.properties.get('textureA')], distance, height);
  var scaleFactor = faceThickness / thickness;
  var texturedFaceDistance = halfThickness + faceDistance;
  var frontFace = soul.clone();
  frontFace.material = frontMaterial;
  frontFace.scale.set(1, 1, scaleFactor);
  frontFace.position.x += texturedFaceDistance * Math.cos(alpha - halfPI);
  frontFace.position.z -= texturedFaceDistance * Math.sin(alpha - halfPI);
  frontFace.name = 'frontFace';
  var backFace = soul.clone();
  backFace.material = backMaterial;
  backFace.scale.set(1, 1, scaleFactor);
  backFace.position.x += texturedFaceDistance * Math.cos(alpha + halfPI);
  backFace.position.z -= texturedFaceDistance * Math.sin(alpha + halfPI);
  backFace.name = 'backFace';
  var merged = new _three.Group();
  merged.add(soul, frontFace, backFace);
  return Promise.resolve(merged);
}
function updatedWall(element, layer, scene, textures, mesh, oldElement, differences, selfDestroy, selfBuild) {
  var noPerf = function noPerf() {
    selfDestroy();
    return selfBuild();
  };
  var soul = mesh.getObjectByName('soul');
  var frontFace = mesh.getObjectByName('frontFace');
  var backFace = mesh.getObjectByName('backFace');
  if (differences[0] == 'selected') {
    soul.material = new _three.MeshBasicMaterial({
      color: element.selected ? SharedStyle.MESH_SELECTED : 0xD3D3D3
    });
  } else if (differences[0] == 'properties') {
    if (differences[1] == 'thickness') {
      var newThickness = element.getIn(['properties', 'thickness', 'length']);
      var oldThickness = oldElement.getIn(['properties', 'thickness', 'length']);
      var halfNewThickness = newThickness / 2;
      var texturedFaceDistance = halfNewThickness + 1;
      var originalThickness = oldThickness / soul.scale.z;
      var alpha = soul.rotation.y;
      var xTemp = texturedFaceDistance * Math.cos(alpha - halfPI);
      var zTemp = texturedFaceDistance * Math.sin(alpha - halfPI);
      soul.scale.set(1, 1, newThickness / originalThickness);
      frontFace.position.x = soul.position.x + xTemp;
      frontFace.position.z = soul.position.z + zTemp;
      backFace.position.x = soul.position.x - xTemp;
      backFace.position.z = soul.position.z - zTemp;
    } else return noPerf();
  } else return noPerf();
  return Promise.resolve(mesh);
}