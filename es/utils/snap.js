"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SNAP_SEGMENT = exports.SNAP_POINT = exports.SNAP_MASK = exports.SNAP_LINE = exports.SNAP_GUIDE = exports.SNAP_GRID = void 0;
exports.addGridSnap = addGridSnap;
exports.addLineSegmentSnap = addLineSegmentSnap;
exports.addLineSnap = addLineSnap;
exports.addPointSnap = addPointSnap;
exports.nearestSnap = nearestSnap;
var _immutable = require("immutable");
var Geometry = _interopRequireWildcard(require("./geometry"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var SNAP_POINT = 'SNAP_POINT';
exports.SNAP_POINT = SNAP_POINT;
var SNAP_LINE = 'SNAP_LINE';
exports.SNAP_LINE = SNAP_LINE;
var SNAP_SEGMENT = 'SNAP_SEGMENT';
exports.SNAP_SEGMENT = SNAP_SEGMENT;
var SNAP_GRID = 'SNAP_GRID';
exports.SNAP_GRID = SNAP_GRID;
var SNAP_GUIDE = 'SNAP_GUIDE';
exports.SNAP_GUIDE = SNAP_GUIDE;
var SNAP_MASK = new _immutable.Map({
  SNAP_POINT: true,
  SNAP_LINE: true,
  SNAP_SEGMENT: true,
  SNAP_GRID: false,
  SNAP_GUIDE: true
});
exports.SNAP_MASK = SNAP_MASK;
var PointSnap = /*#__PURE__*/function (_Record) {
  _inherits(PointSnap, _Record);
  var _super = _createSuper(PointSnap);
  function PointSnap() {
    _classCallCheck(this, PointSnap);
    return _super.apply(this, arguments);
  }
  _createClass(PointSnap, [{
    key: "nearestPoint",
    value: function nearestPoint(x, y) {
      return {
        x: this.x,
        y: this.y,
        distance: Geometry.pointsDistance(this.x, this.y, x, y)
      };
    }
  }, {
    key: "isNear",
    value: function isNear(x, y, distance) {
      return ~(this.x - x) + 1 < distance && ~(this.y - y) + 1 < distance;
    }
  }]);
  return PointSnap;
}((0, _immutable.Record)({
  type: 'point',
  x: -1,
  y: -1,
  radius: 1,
  priority: 1,
  related: new _immutable.List()
}));
var LineSnap = /*#__PURE__*/function (_Record2) {
  _inherits(LineSnap, _Record2);
  var _super2 = _createSuper(LineSnap);
  function LineSnap() {
    _classCallCheck(this, LineSnap);
    return _super2.apply(this, arguments);
  }
  _createClass(LineSnap, [{
    key: "nearestPoint",
    value: function nearestPoint(x, y) {
      return _objectSpread(_objectSpread({}, Geometry.closestPointFromLine(this.a, this.b, this.c, x, y)), {}, {
        distance: Geometry.distancePointFromLine(this.a, this.b, this.c, x, y)
      });
    }
  }, {
    key: "isNear",
    value: function isNear(x, y, distance) {
      return true;
    }
  }]);
  return LineSnap;
}((0, _immutable.Record)({
  type: 'line',
  a: -1,
  b: -1,
  c: -1,
  radius: 1,
  priority: 1,
  related: new _immutable.List()
}));
var LineSegmentSnap = /*#__PURE__*/function (_Record3) {
  _inherits(LineSegmentSnap, _Record3);
  var _super3 = _createSuper(LineSegmentSnap);
  function LineSegmentSnap() {
    _classCallCheck(this, LineSegmentSnap);
    return _super3.apply(this, arguments);
  }
  _createClass(LineSegmentSnap, [{
    key: "nearestPoint",
    value: function nearestPoint(x, y) {
      return _objectSpread(_objectSpread({}, Geometry.closestPointFromLineSegment(this.x1, this.y1, this.x2, this.y2, x, y)), {}, {
        distance: Geometry.distancePointFromLineSegment(this.x1, this.y1, this.x2, this.y2, x, y)
      });
    }
  }, {
    key: "isNear",
    value: function isNear(x, y, distance) {
      return true;
    }
  }]);
  return LineSegmentSnap;
}((0, _immutable.Record)({
  type: 'line-segment',
  x1: -1,
  y1: -1,
  x2: -1,
  y2: -1,
  radius: 1,
  priority: 1,
  related: new _immutable.List()
}));
var GridSnap = /*#__PURE__*/function (_Record4) {
  _inherits(GridSnap, _Record4);
  var _super4 = _createSuper(GridSnap);
  function GridSnap() {
    _classCallCheck(this, GridSnap);
    return _super4.apply(this, arguments);
  }
  _createClass(GridSnap, [{
    key: "nearestPoint",
    value: function nearestPoint(x, y) {
      return {
        x: this.x,
        y: this.y,
        distance: Geometry.pointsDistance(this.x, this.y, x, y)
      };
    }
  }, {
    key: "isNear",
    value: function isNear(x, y, distance) {
      return ~(this.x - x) + 1 < distance && ~(this.y - y) + 1 < distance;
    }
  }]);
  return GridSnap;
}((0, _immutable.Record)({
  type: 'grid',
  x: -1,
  y: -1,
  radius: 1,
  priority: 1,
  related: new _immutable.List()
}));
function nearestSnap(snapElements, x, y, snapMask) {
  var filter = {
    'point': snapMask.get(SNAP_POINT),
    'line': snapMask.get(SNAP_LINE),
    'line-segment': snapMask.get(SNAP_SEGMENT),
    'grid': snapMask.get(SNAP_GRID)
  };
  return snapElements.valueSeq().filter(function (el) {
    return filter[el.type] && el.isNear(x, y, el.radius);
  }).map(function (snap) {
    return {
      snap: snap,
      point: snap.nearestPoint(x, y)
    };
  }).filter(function (_ref) {
    var radius = _ref.snap.radius,
      distance = _ref.point.distance;
    return distance < radius;
  }).min(function (_ref2, _ref3) {
    var p1 = _ref2.snap.priority,
      d1 = _ref2.point.distance;
    var p2 = _ref3.snap.priority,
      d2 = _ref3.point.distance;
    return p1 === p2 ? d1 < d2 ? -1 : 1 : p1 > p2 ? -1 : 1;
  });
}
function addPointSnap(snapElements, x, y, radius, priority, related) {
  related = new _immutable.List([related]);
  return snapElements.push(new PointSnap({
    x: x,
    y: y,
    radius: radius,
    priority: priority,
    related: related
  }));
}
function addLineSnap(snapElements, a, b, c, radius, priority, related) {
  related = new _immutable.List([related]);
  return snapElements.withMutations(function (snapElements) {
    var alreadyPresent = snapElements.some(function (lineSnap) {
      return lineSnap.type === 'line' && a === lineSnap.a && b === lineSnap.b && c === lineSnap.c;
    });
    if (alreadyPresent) return snapElements;
    var intersections = snapElements.valueSeq().filter(function (snap) {
      return snap.type === 'line';
    }).map(function (snap) {
      return Geometry.twoLinesIntersection(snap.a, snap.b, snap.c, a, b, c);
    }).filter(function (intersection) {
      return intersection !== undefined;
    }).forEach(function (_ref4) {
      var x = _ref4.x,
        y = _ref4.y;
      return addPointSnap(snapElements, x, y, 20, 40);
    });
    snapElements.push(new LineSnap({
      a: a,
      b: b,
      c: c,
      radius: radius,
      priority: priority,
      related: related
    }));
  });
}
function addLineSegmentSnap(snapElements, x1, y1, x2, y2, radius, priority, related) {
  related = new _immutable.List([related]);
  return snapElements.push(new LineSegmentSnap({
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    radius: radius,
    priority: priority,
    related: related
  }));
}
function addGridSnap(snapElements, x, y, radius, priority, related) {
  related = new _immutable.List([related]);
  return snapElements.push(new GridSnap({
    x: x,
    y: y,
    radius: radius,
    priority: priority,
    related: related
  }));
}