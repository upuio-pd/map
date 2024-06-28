"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WallFactory;
var _react = _interopRequireDefault(require("react"));
var _wallFactory3d = require("./wall-factory-3d");
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
var Geometry = _interopRequireWildcard(require("../../utils/geometry"));
var _translator = _interopRequireDefault(require("../../translator/translator"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var epsilon = 20;
var STYLE_TEXT = {
  textAnchor: 'middle'
};
var STYLE_LINE = {
  stroke: SharedStyle.LINE_MESH_COLOR.selected
};
//wall color 
var STYLE_RECT = {
  strokeWidth: 1,
  stroke: '#202020',
  fill: 'url(#diagonalFill)'
};
var STYLE_RECT_SELECTED = _objectSpread(_objectSpread({}, STYLE_RECT), {}, {
  stroke: SharedStyle.LINE_MESH_COLOR.selected
});
var translator = new _translator["default"]();
function WallFactory(name, info, textures) {
  var wallElement = {
    name: name,
    prototype: 'lines',
    info: info,
    properties: {
      height: {
        label: translator.t('height'),
        type: 'length-measure',
        defaultValue: {
          length: 300
        }
      },
      thickness: {
        label: translator.t('thickness'),
        type: 'length-measure',
        defaultValue: {
          length: 20
        }
      }
    },
    render2D: function render2D(element, layer, scene) {
      var _layer$vertices$get = layer.vertices.get(element.vertices.get(0)),
        x1 = _layer$vertices$get.x,
        y1 = _layer$vertices$get.y;
      var _layer$vertices$get2 = layer.vertices.get(element.vertices.get(1)),
        x2 = _layer$vertices$get2.x,
        y2 = _layer$vertices$get2.y;
      var length = Geometry.pointsDistance(x1, y1, x2, y2);
      var length_5 = length / 5;
      var thickness = element.getIn(['properties', 'thickness', 'length']);
      var half_thickness = thickness / 2;
      var half_thickness_eps = half_thickness + epsilon;
      var char_height = 11;
      var extra_epsilon = 5;
      var textDistance = half_thickness + epsilon + extra_epsilon;
      return element.selected ? /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("rect", {
        x: "0",
        y: -half_thickness,
        width: length,
        height: thickness,
        style: STYLE_RECT_SELECTED
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: length_5,
        y1: -half_thickness_eps,
        x2: length_5,
        y2: half_thickness_eps,
        style: STYLE_LINE
      }), /*#__PURE__*/_react["default"].createElement("text", {
        x: length_5,
        y: textDistance + char_height,
        style: STYLE_TEXT
      }, "A"), /*#__PURE__*/_react["default"].createElement("text", {
        x: length_5,
        y: -textDistance,
        style: STYLE_TEXT
      }, "B")) : /*#__PURE__*/_react["default"].createElement("rect", {
        x: "0",
        y: -half_thickness,
        width: length,
        height: thickness,
        style: STYLE_RECT
      });
    },
    render3D: function render3D(element, layer, scene) {
      return (0, _wallFactory3d.buildWall)(element, layer, scene, textures);
    },
    updateRender3D: function updateRender3D(element, layer, scene, mesh, oldElement, differences, selfDestroy, selfBuild) {
      return (0, _wallFactory3d.updatedWall)(element, layer, scene, textures, mesh, oldElement, differences, selfDestroy, selfBuild);
    }
  };
  if (textures && textures !== {}) {
    var textureValues = {
      'none': 'None'
    };
    for (var textureName in textures) {
      textureValues[textureName] = textures[textureName].name;
    }
    wallElement.properties.textureA = {
      label: translator.t('texture') + ' A',
      type: 'enum',
      defaultValue: textureValues.bricks ? 'bricks' : 'none',
      values: textureValues
    };
    wallElement.properties.textureB = {
      label: translator.t('texture') + ' B',
      type: 'enum',
      defaultValue: textureValues.bricks ? 'bricks' : 'none',
      values: textureValues
    };
  }
  return wallElement;
}