"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vertex = exports.State = exports.Scene = exports.Line = exports.Layer = exports.Item = exports.Hole = exports.HistoryStructure = exports.Group = exports.Grid = exports.ElementsSet = exports.DefaultLayers = exports.DefaultGrids = exports.CatalogElement = exports.Catalog = exports.Area = void 0;
var _immutable = require("immutable");
var _constants = require("./constants");
var _snap = require("./utils/snap");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var safeLoadMapList = function safeLoadMapList(mapList, Model, defaultMap) {
  return mapList ? new _immutable.Map(mapList).map(function (m) {
    return new Model(m);
  }).toMap() : defaultMap || new _immutable.Map();
};
var Grid = exports.Grid = /*#__PURE__*/function (_Record) {
  function Grid() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Grid);
    return _callSuper(this, Grid, [_objectSpread(_objectSpread({}, json), {}, {
      properties: (0, _immutable.fromJS)(json.properties || {})
    })]);
  }
  _inherits(Grid, _Record);
  return _createClass(Grid);
}((0, _immutable.Record)({
  id: '',
  type: '',
  properties: (0, _immutable.Map)()
}, 'Grid'));
var DefaultGrids = exports.DefaultGrids = new _immutable.Map({
  'h1': new Grid({
    id: 'h1',
    type: 'horizontal-streak',
    properties: {
      step: 20,
      colors: ['#808080', '#ddd', '#ddd', '#ddd', '#ddd']
    }
  }),
  'v1': new Grid({
    id: 'v1',
    type: 'vertical-streak',
    properties: {
      step: 20,
      colors: ['#808080', '#ddd', '#ddd', '#ddd', '#ddd']
    }
  })
});
var ElementsSet = exports.ElementsSet = /*#__PURE__*/function (_Record2) {
  function ElementsSet() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, ElementsSet);
    return _callSuper(this, ElementsSet, [{
      vertices: new _immutable.List(json.vertices || []),
      lines: new _immutable.List(json.lines || []),
      holes: new _immutable.List(json.holes || []),
      areas: new _immutable.List(json.areas || []),
      items: new _immutable.List(json.items || [])
    }]);
  }
  _inherits(ElementsSet, _Record2);
  return _createClass(ElementsSet);
}((0, _immutable.Record)({
  vertices: new _immutable.List(),
  lines: new _immutable.List(),
  holes: new _immutable.List(),
  areas: new _immutable.List(),
  items: new _immutable.List()
}, 'ElementsSet'));
var sharedAttributes = {
  id: '',
  type: '',
  prototype: '',
  name: '',
  misc: new _immutable.Map(),
  selected: false,
  properties: new _immutable.Map(),
  visible: true
};
var Vertex = exports.Vertex = /*#__PURE__*/function (_Record3) {
  function Vertex() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Vertex);
    return _callSuper(this, Vertex, [_objectSpread(_objectSpread({}, json), {}, {
      lines: new _immutable.List(json.lines || []),
      areas: new _immutable.List(json.areas || [])
    })]);
  }
  _inherits(Vertex, _Record3);
  return _createClass(Vertex);
}((0, _immutable.Record)(_objectSpread(_objectSpread({}, sharedAttributes), {}, {
  x: -1,
  y: -1,
  prototype: 'vertices',
  lines: new _immutable.List(),
  areas: new _immutable.List()
}), 'Vertex'));
var Line = exports.Line = /*#__PURE__*/function (_Record4) {
  function Line() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Line);
    return _callSuper(this, Line, [_objectSpread(_objectSpread({}, json), {}, {
      properties: (0, _immutable.fromJS)(json.properties || {}),
      vertices: new _immutable.List(json.vertices || []),
      holes: new _immutable.List(json.holes || [])
    })]);
  }
  _inherits(Line, _Record4);
  return _createClass(Line);
}((0, _immutable.Record)(_objectSpread(_objectSpread({}, sharedAttributes), {}, {
  prototype: 'lines',
  vertices: new _immutable.List(),
  holes: new _immutable.List()
}), 'Line'));
var Hole = exports.Hole = /*#__PURE__*/function (_Record5) {
  function Hole() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Hole);
    return _callSuper(this, Hole, [_objectSpread(_objectSpread({}, json), {}, {
      properties: (0, _immutable.fromJS)(json.properties || {})
    })]);
  }
  _inherits(Hole, _Record5);
  return _createClass(Hole);
}((0, _immutable.Record)(_objectSpread(_objectSpread({}, sharedAttributes), {}, {
  prototype: 'holes',
  offset: -1,
  line: ''
}), 'Hole'));
var Area = exports.Area = /*#__PURE__*/function (_Record6) {
  function Area() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Area);
    return _callSuper(this, Area, [_objectSpread(_objectSpread({}, json), {}, {
      properties: (0, _immutable.fromJS)(json.properties || {}),
      vertices: new _immutable.List(json.vertices || [])
    })]);
  }
  _inherits(Area, _Record6);
  return _createClass(Area);
}((0, _immutable.Record)(_objectSpread(_objectSpread({}, sharedAttributes), {}, {
  prototype: 'areas',
  vertices: new _immutable.List(),
  holes: new _immutable.List()
}), 'Area'));
var Item = exports.Item = /*#__PURE__*/function (_Record7) {
  function Item() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Item);
    return _callSuper(this, Item, [_objectSpread(_objectSpread({}, json), {}, {
      properties: (0, _immutable.fromJS)(json.properties || {})
    })]);
  }
  _inherits(Item, _Record7);
  return _createClass(Item);
}((0, _immutable.Record)(_objectSpread(_objectSpread({}, sharedAttributes), {}, {
  prototype: 'items',
  x: 0,
  y: 0,
  rotation: 0
}), 'Item'));
var Layer = exports.Layer = /*#__PURE__*/function (_Record8) {
  function Layer() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Layer);
    return _callSuper(this, Layer, [_objectSpread(_objectSpread({}, json), {}, {
      vertices: safeLoadMapList(json.vertices, Vertex),
      lines: safeLoadMapList(json.lines, Line),
      holes: safeLoadMapList(json.holes, Hole),
      areas: safeLoadMapList(json.areas, Area),
      items: safeLoadMapList(json.items, Item),
      selected: new ElementsSet(json.selected)
    })]);
  }
  _inherits(Layer, _Record8);
  return _createClass(Layer);
}((0, _immutable.Record)({
  id: '',
  altitude: 0,
  order: 0,
  opacity: 1,
  name: '',
  visible: true,
  vertices: new _immutable.Map(),
  lines: new _immutable.Map(),
  holes: new _immutable.Map(),
  areas: new _immutable.Map(),
  items: new _immutable.Map(),
  selected: new ElementsSet()
}, 'Layer'));
var Group = exports.Group = /*#__PURE__*/function (_Record9) {
  function Group() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Group);
    return _callSuper(this, Group, [_objectSpread(_objectSpread({}, json), {}, {
      properties: (0, _immutable.fromJS)(json.properties || {}),
      elements: (0, _immutable.fromJS)(json.elements || {})
    })]);
  }
  _inherits(Group, _Record9);
  return _createClass(Group);
}((0, _immutable.Record)(_objectSpread(_objectSpread({}, sharedAttributes), {}, {
  prototype: 'groups',
  x: 0,
  y: 0,
  rotation: 0,
  elements: new _immutable.Map()
}), 'Group'));
var DefaultLayers = exports.DefaultLayers = new _immutable.Map({
  'layer-1': new Layer({
    id: 'layer-1',
    name: 'default'
  })
});
var Scene = exports.Scene = /*#__PURE__*/function (_Record10) {
  function Scene() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Scene);
    var layers = safeLoadMapList(json.layers, Layer, DefaultLayers);
    return _callSuper(this, Scene, [_objectSpread(_objectSpread({}, json), {}, {
      grids: safeLoadMapList(json.grids, Grid, DefaultGrids),
      layers: layers,
      selectedLayer: layers.first().id,
      groups: safeLoadMapList(json.groups || {}, Group),
      meta: json.meta ? (0, _immutable.fromJS)(json.meta) : new _immutable.Map(),
      guides: json.guides ? (0, _immutable.fromJS)(json.guides) : new _immutable.Map({
        horizontal: new _immutable.Map(),
        vertical: new _immutable.Map(),
        circular: new _immutable.Map()
      })
    })]);
  }
  _inherits(Scene, _Record10);
  return _createClass(Scene);
}((0, _immutable.Record)({
  unit: 'cm',
  layers: new _immutable.Map(),
  grids: new _immutable.Map(),
  selectedLayer: null,
  groups: new _immutable.Map(),
  width: 3000,
  height: 2000,
  meta: new _immutable.Map(),
  //additional info
  guides: new _immutable.Map()
}, 'Scene'));
var CatalogElement = exports.CatalogElement = /*#__PURE__*/function (_Record11) {
  function CatalogElement() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, CatalogElement);
    return _callSuper(this, CatalogElement, [_objectSpread(_objectSpread({}, json), {}, {
      info: (0, _immutable.fromJS)(json.info),
      properties: (0, _immutable.fromJS)(json.properties)
    })]);
  }
  _inherits(CatalogElement, _Record11);
  return _createClass(CatalogElement);
}((0, _immutable.Record)({
  name: '',
  prototype: '',
  info: new _immutable.Map(),
  properties: new _immutable.Map()
}, 'CatalogElement'));
var Catalog = exports.Catalog = /*#__PURE__*/function (_Record12) {
  function Catalog() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Catalog);
    var elements = safeLoadMapList(json.elements, CatalogElement);
    return _callSuper(this, Catalog, [{
      elements: elements,
      ready: !elements.isEmpty()
    }]);
  }
  _inherits(Catalog, _Record12);
  return _createClass(Catalog, [{
    key: "factoryElement",
    value: function factoryElement(type, options, initialProperties) {
      if (!this.elements.has(type)) {
        var catList = this.elements.map(function (element) {
          return element.name;
        }).toArray();
        throw new Error("Element ".concat(type, " does not exist in catalog ").concat(catList));
      }
      var element = this.elements.get(type);
      var properties = element.properties.map(function (value, key) {
        return initialProperties && initialProperties.has(key) ? initialProperties.get(key) : value.get('defaultValue');
      });
      switch (element.prototype) {
        case 'lines':
          return new Line(options).merge({
            properties: properties
          });
        case 'holes':
          return new Hole(options).merge({
            properties: properties
          });
        case 'areas':
          return new Area(options).merge({
            properties: properties
          });
        case 'items':
          return new Item(options).merge({
            properties: properties
          });
        default:
          throw new Error('prototype not valid');
      }
    }
  }]);
}((0, _immutable.Record)({
  ready: false,
  page: 'root',
  path: new _immutable.List(),
  elements: new _immutable.Map()
}, 'Catalog'));
var HistoryStructure = exports.HistoryStructure = /*#__PURE__*/function (_Record13) {
  function HistoryStructure() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, HistoryStructure);
    return _callSuper(this, HistoryStructure, [{
      list: (0, _immutable.fromJS)(json.list || []),
      first: new Scene(json.scene),
      last: new Scene(json.last || json.scene)
    }]);
  }
  _inherits(HistoryStructure, _Record13);
  return _createClass(HistoryStructure);
}((0, _immutable.Record)({
  list: new _immutable.List(),
  first: null,
  last: null
}, 'HistoryStructure'));
var State = exports.State = /*#__PURE__*/function (_Record14) {
  function State() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, State);
    return _callSuper(this, State, [_objectSpread(_objectSpread({}, json), {}, {
      scene: new Scene(json.scene),
      sceneHistory: new HistoryStructure(json),
      catalog: new Catalog(json.catalog || {}),
      viewer2D: new _immutable.Map(json.viewer2D || {}),
      drawingSupport: new _immutable.Map(json.drawingSupport || {}),
      draggingSupport: new _immutable.Map(json.draggingSupport || {}),
      rotatingSupport: new _immutable.Map(json.rotatingSupport || {}),
      misc: json.misc ? (0, _immutable.fromJS)(json.misc) : new _immutable.Map()
    })]);
  }
  _inherits(State, _Record14);
  return _createClass(State);
}((0, _immutable.Record)({
  mode: _constants.MODE_IDLE,
  scene: new Scene(),
  sceneHistory: new HistoryStructure(),
  catalog: new Catalog(),
  viewer2D: new _immutable.Map(),
  mouse: new _immutable.Map({
    x: 0,
    y: 0
  }),
  zoom: 0,
  snapMask: _snap.SNAP_MASK,
  snapElements: new _immutable.List(),
  activeSnapElement: null,
  drawingSupport: new _immutable.Map(),
  draggingSupport: new _immutable.Map(),
  rotatingSupport: new _immutable.Map(),
  errors: new _immutable.List(),
  warnings: new _immutable.List(),
  clipboardProperties: new _immutable.Map(),
  selectedElementsHistory: new _immutable.List(),
  misc: new _immutable.Map(),
  //additional info
  alterate: false
}, 'State'));