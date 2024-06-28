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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var SNAP_POINT = exports.SNAP_POINT = 'SNAP_POINT';
var SNAP_LINE = exports.SNAP_LINE = 'SNAP_LINE';
var SNAP_SEGMENT = exports.SNAP_SEGMENT = 'SNAP_SEGMENT';
var SNAP_GRID = exports.SNAP_GRID = 'SNAP_GRID';
var SNAP_GUIDE = exports.SNAP_GUIDE = 'SNAP_GUIDE';
var SNAP_MASK = exports.SNAP_MASK = new _immutable.Map({
  SNAP_POINT: true,
  SNAP_LINE: true,
  SNAP_SEGMENT: true,
  SNAP_GRID: false,
  SNAP_GUIDE: true
});
var PointSnap = /*#__PURE__*/function (_Record) {
  function PointSnap() {
    _classCallCheck(this, PointSnap);
    return _callSuper(this, PointSnap, arguments);
  }
  _inherits(PointSnap, _Record);
  return _createClass(PointSnap, [{
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
}((0, _immutable.Record)({
  type: 'point',
  x: -1,
  y: -1,
  radius: 1,
  priority: 1,
  related: new _immutable.List()
}));
var LineSnap = /*#__PURE__*/function (_Record2) {
  function LineSnap() {
    _classCallCheck(this, LineSnap);
    return _callSuper(this, LineSnap, arguments);
  }
  _inherits(LineSnap, _Record2);
  return _createClass(LineSnap, [{
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
  function LineSegmentSnap() {
    _classCallCheck(this, LineSegmentSnap);
    return _callSuper(this, LineSegmentSnap, arguments);
  }
  _inherits(LineSegmentSnap, _Record3);
  return _createClass(LineSegmentSnap, [{
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
  function GridSnap() {
    _classCallCheck(this, GridSnap);
    return _callSuper(this, GridSnap, arguments);
  }
  _inherits(GridSnap, _Record4);
  return _createClass(GridSnap, [{
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