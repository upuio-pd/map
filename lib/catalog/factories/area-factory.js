"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AreaFactory;
var _react = _interopRequireDefault(require("react"));
var _areaFactory3d = require("./area-factory-3d");
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
var _translator = _interopRequireDefault(require("../../translator/translator"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var translator = new _translator["default"]();
function AreaFactory(name, info, textures, theme) {
  var localStorage = window.hasOwnProperty('localStorage') ? window.localStorage : false;
  var areaElement = {
    name: name,
    prototype: 'areas',
    info: _objectSpread(_objectSpread({}, info), {}, {
      visibility: {
        catalog: false,
        layerElementsVisible: false
      }
    }),
    properties: {
      patternColor: {
        label: translator.t('color'),
        type: 'color',
        defaultValue: SharedStyle.AREA_MESH_COLOR.unselected
      },
      thickness: {
        label: translator.t('thickness'),
        type: 'length-measure',
        defaultValue: {
          length: 0
        }
      }
    },
    render2D: function render2D(element, layer, scene) {
      var path = '';

      ///print area path
      element.vertices.forEach(function (vertexID, ind) {
        var vertex = layer.vertices.get(vertexID);
        path += (ind ? 'L' : 'M') + vertex.x + ' ' + vertex.y + ' ';
      });

      //add holes
      element.holes.forEach(function (areaID) {
        var area = layer.areas.get(areaID);
        area.vertices.reverse().forEach(function (vertexID, ind) {
          var vertex = layer.vertices.get(vertexID);
          path += (ind ? 'L' : 'M') + vertex.x + ' ' + vertex.y + ' ';
        });
      });
      var fill = element.selected ? localStorage.theme == 'dark' ? '#344054' : '#F9FAFB' : localStorage.theme == 'dark' ? '#202020' : '#FFF';
      return /*#__PURE__*/_react["default"].createElement("path", {
        d: path,
        fill: fill
      });
    },
    render3D: function render3D(element, layer, scene) {
      return (0, _areaFactory3d.createArea)(element, layer, scene, textures);
    },
    updateRender3D: function updateRender3D(element, layer, scene, mesh, oldElement, differences, selfDestroy, selfBuild) {
      return (0, _areaFactory3d.updatedArea)(element, layer, scene, textures, mesh, oldElement, differences, selfDestroy, selfBuild);
    }
  };
  if (textures && textures !== {}) {
    var textureValues = {
      'none': 'None'
    };
    for (var textureName in textures) {
      textureValues[textureName] = textures[textureName].name;
    }
    areaElement.properties.texture = {
      label: translator.t('texture'),
      type: 'enum',
      defaultValue: 'none',
      values: textureValues
    };
  }
  return areaElement;
}