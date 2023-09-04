"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _immutable = require("immutable");
var _attributesEditor = _interopRequireDefault(require("./attributes-editor/attributes-editor"));
var _export = require("../../../utils/export");
var SharedStyle = _interopRequireWildcard(require("../../../shared-style"));
var _convertUnits = _interopRequireDefault(require("convert-units"));
var _md = require("react-icons/md");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var PRECISION = 2;
var attrPorpSeparatorStyle = {
  margin: "0.5em 0.25em 0.5em 0",
  border: "2px solid " + SharedStyle.SECONDARY_COLOR.alt,
  position: "relative",
  height: "2.5em",
  borderRadius: "2px"
};
var headActionStyle = {
  position: "absolute",
  right: "0.5em",
  top: "0.5em"
};
var iconHeadStyle = {
  "float": "right",
  margin: "-3px 4px 0px 0px",
  padding: 0,
  cursor: "pointer",
  fontSize: "1.4em"
};
var ElementEditor = /*#__PURE__*/function (_Component) {
  _inherits(ElementEditor, _Component);
  var _super = _createSuper(ElementEditor);
  function ElementEditor(props, context) {
    var _this;
    _classCallCheck(this, ElementEditor);
    _this = _super.call(this, props, context);
    _this.state = {
      attributesFormData: _this.initAttrData(_this.props.element, _this.props.layer, _this.props.state),
      propertiesFormData: _this.initPropData(_this.props.element, _this.props.layer, _this.props.state)
    };
    _this.updateAttribute = _this.updateAttribute.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(ElementEditor, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.state.attributesFormData.hashCode() !== nextState.attributesFormData.hashCode() || this.state.propertiesFormData.hashCode() !== nextState.propertiesFormData.hashCode() || this.props.state.clipboardProperties.hashCode() !== nextProps.state.clipboardProperties.hashCode()) return true;
      return false;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var element = _ref.element,
        layer = _ref.layer,
        state = _ref.state;
      var prototype = element.prototype,
        id = element.id;
      var scene = this.props.state.get("scene");
      var selectedLayer = scene.getIn(["layers", scene.get("selectedLayer")]);
      var selected = selectedLayer.getIn([prototype, id]);
      if (selectedLayer.hashCode() !== layer.hashCode()) this.setState({
        attributesFormData: this.initAttrData(element, layer, state),
        propertiesFormData: this.initPropData(element, layer, state)
      });
    }
  }, {
    key: "initAttrData",
    value: function initAttrData(element, layer, state) {
      element = _typeof(element.misc) === "object" ? element.set("misc", new _immutable.Map(element.misc)) : element;
      switch (element.prototype) {
        case "items":
          {
            return new _immutable.Map(element);
          }
        case "lines":
          {
            var v_a = layer.vertices.get(element.vertices.get(0));
            var v_b = layer.vertices.get(element.vertices.get(1));
            var distance = _export.GeometryUtils.pointsDistance(v_a.x, v_a.y, v_b.x, v_b.y);
            var _unit = element.misc.get("_unitLength") || this.context.catalog.unit;
            var _length = (0, _convertUnits["default"])(distance).from(this.context.catalog.unit).to(_unit);
            return new _immutable.Map({
              vertexOne: v_a,
              vertexTwo: v_b,
              lineLength: new _immutable.Map({
                length: distance,
                _length: _length,
                _unit: _unit
              })
            });
          }
        case "holes":
          {
            var line = layer.lines.get(element.line);
            var _layer$vertices$get = layer.vertices.get(line.vertices.get(0)),
              x0 = _layer$vertices$get.x,
              y0 = _layer$vertices$get.y;
            var _layer$vertices$get2 = layer.vertices.get(line.vertices.get(1)),
              x1 = _layer$vertices$get2.x,
              y1 = _layer$vertices$get2.y;
            var lineLength = _export.GeometryUtils.pointsDistance(x0, y0, x1, y1);
            var startAt = lineLength * element.offset - element.properties.get("width").get("length") / 2;
            var _unitA = element.misc.get("_unitA") || this.context.catalog.unit;
            var _lengthA = (0, _convertUnits["default"])(startAt).from(this.context.catalog.unit).to(_unitA);
            var endAt = lineLength - lineLength * element.offset - element.properties.get("width").get("length") / 2;
            var _unitB = element.misc.get("_unitB") || this.context.catalog.unit;
            var _lengthB = (0, _convertUnits["default"])(endAt).from(this.context.catalog.unit).to(_unitB);
            return new _immutable.Map({
              offset: element.offset,
              offsetA: new _immutable.Map({
                length: _export.MathUtils.toFixedFloat(startAt, PRECISION),
                _length: _export.MathUtils.toFixedFloat(_lengthA, PRECISION),
                _unit: _unitA
              }),
              offsetB: new _immutable.Map({
                length: _export.MathUtils.toFixedFloat(endAt, PRECISION),
                _length: _export.MathUtils.toFixedFloat(_lengthB, PRECISION),
                _unit: _unitB
              })
            });
          }
        case "areas":
          {
            return new _immutable.Map({});
          }
        default:
          return null;
      }
    }
  }, {
    key: "initPropData",
    value: function initPropData(element, layer, state) {
      var catalog = this.context.catalog;
      var catalogElement = catalog.getElement(element.type);
      var mapped = {};
      for (var name in catalogElement.properties) {
        mapped[name] = new _immutable.Map({
          currentValue: element.properties.has(name) ? element.properties.get(name) : (0, _immutable.fromJS)(catalogElement.properties[name].defaultValue),
          configs: catalogElement.properties[name]
        });
      }
      return new _immutable.Map(mapped);
    }
  }, {
    key: "updateAttribute",
    value: function updateAttribute(attributeName, value) {
      var _this2 = this;
      var attributesFormData = this.state.attributesFormData;
      switch (this.props.element.prototype) {
        case "items":
          {
            attributesFormData = attributesFormData.set(attributeName, value);
            break;
          }
        case "lines":
          {
            switch (attributeName) {
              case "lineLength":
                {
                  var v_0 = attributesFormData.get("vertexOne");
                  var v_1 = attributesFormData.get("vertexTwo");
                  var _GeometryUtils$orderV = _export.GeometryUtils.orderVertices([v_0, v_1]),
                    _GeometryUtils$orderV2 = _slicedToArray(_GeometryUtils$orderV, 2),
                    v_a = _GeometryUtils$orderV2[0],
                    v_b = _GeometryUtils$orderV2[1];
                  var v_b_new = _export.GeometryUtils.extendLine(v_a.x, v_a.y, v_b.x, v_b.y, value.get("length"), PRECISION);
                  attributesFormData = attributesFormData.withMutations(function (attr) {
                    attr.set(v_0 === v_a ? "vertexTwo" : "vertexOne", v_b.merge(v_b_new));
                    attr.set("lineLength", value);
                  });
                  break;
                }
              case "vertexOne":
              case "vertexTwo":
                {
                  attributesFormData = attributesFormData.withMutations(function (attr) {
                    attr.set(attributeName, attr.get(attributeName).merge(value));
                    var newDistance = _export.GeometryUtils.verticesDistance(attr.get("vertexOne"), attr.get("vertexTwo"));
                    attr.mergeIn(["lineLength"], attr.get("lineLength").merge({
                      length: newDistance,
                      _length: (0, _convertUnits["default"])(newDistance).from(_this2.context.catalog.unit).to(attr.get("lineLength").get("_unit"))
                    }));
                  });
                  break;
                }
              default:
                {
                  attributesFormData = attributesFormData.set(attributeName, value);
                  break;
                }
            }
            break;
          }
        case "holes":
          {
            switch (attributeName) {
              case "offsetA":
                {
                  var line = this.props.layer.lines.get(this.props.element.line);
                  var orderedVertices = _export.GeometryUtils.orderVertices([this.props.layer.vertices.get(line.vertices.get(0)), this.props.layer.vertices.get(line.vertices.get(1))]);
                  var _orderedVertices = _slicedToArray(orderedVertices, 2),
                    _orderedVertices$ = _orderedVertices[0],
                    x0 = _orderedVertices$.x,
                    y0 = _orderedVertices$.y,
                    _orderedVertices$2 = _orderedVertices[1],
                    x1 = _orderedVertices$2.x,
                    y1 = _orderedVertices$2.y;
                  var alpha = _export.GeometryUtils.angleBetweenTwoPoints(x0, y0, x1, y1);
                  var lineLength = _export.GeometryUtils.pointsDistance(x0, y0, x1, y1);
                  var widthLength = this.props.element.properties.get("width").get("length");
                  var halfWidthLength = widthLength / 2;
                  var lengthValue = value.get("length");
                  lengthValue = Math.max(lengthValue, 0);
                  lengthValue = Math.min(lengthValue, lineLength - widthLength);
                  var xp = (lengthValue + halfWidthLength) * Math.cos(alpha) + x0;
                  var yp = (lengthValue + halfWidthLength) * Math.sin(alpha) + y0;
                  var offset = _export.GeometryUtils.pointPositionOnLineSegment(x0, y0, x1, y1, xp, yp);
                  var endAt = _export.MathUtils.toFixedFloat(lineLength - lineLength * offset - halfWidthLength, PRECISION);
                  var offsetUnit = attributesFormData.getIn(["offsetB", "_unit"]);
                  var offsetB = new _immutable.Map({
                    length: endAt,
                    _length: (0, _convertUnits["default"])(endAt).from(this.context.catalog.unit).to(offsetUnit),
                    _unit: offsetUnit
                  });
                  attributesFormData = attributesFormData.set("offsetB", offsetB).set("offset", offset);
                  var offsetAttribute = new _immutable.Map({
                    length: _export.MathUtils.toFixedFloat(lengthValue, PRECISION),
                    _unit: value.get("_unit"),
                    _length: _export.MathUtils.toFixedFloat((0, _convertUnits["default"])(lengthValue).from(this.context.catalog.unit).to(value.get("_unit")), PRECISION)
                  });
                  attributesFormData = attributesFormData.set(attributeName, offsetAttribute);
                  break;
                }
              case "offsetB":
                {
                  var _line = this.props.layer.lines.get(this.props.element.line);
                  var _orderedVertices2 = _export.GeometryUtils.orderVertices([this.props.layer.vertices.get(_line.vertices.get(0)), this.props.layer.vertices.get(_line.vertices.get(1))]);
                  var _orderedVertices3 = _slicedToArray(_orderedVertices2, 2),
                    _orderedVertices3$ = _orderedVertices3[0],
                    _x = _orderedVertices3$.x,
                    _y = _orderedVertices3$.y,
                    _orderedVertices3$2 = _orderedVertices3[1],
                    _x2 = _orderedVertices3$2.x,
                    _y2 = _orderedVertices3$2.y;
                  var _alpha = _export.GeometryUtils.angleBetweenTwoPoints(_x, _y, _x2, _y2);
                  var _lineLength = _export.GeometryUtils.pointsDistance(_x, _y, _x2, _y2);
                  var _widthLength = this.props.element.properties.get("width").get("length");
                  var _halfWidthLength = _widthLength / 2;
                  var _lengthValue = value.get("length");
                  _lengthValue = Math.max(_lengthValue, 0);
                  _lengthValue = Math.min(_lengthValue, _lineLength - _widthLength);
                  var _xp = _x2 - (_lengthValue + _halfWidthLength) * Math.cos(_alpha);
                  var _yp = _y2 - (_lengthValue + _halfWidthLength) * Math.sin(_alpha);
                  var _offset = _export.GeometryUtils.pointPositionOnLineSegment(_x, _y, _x2, _y2, _xp, _yp);
                  var startAt = _export.MathUtils.toFixedFloat(_lineLength * _offset - _halfWidthLength, PRECISION);
                  var _offsetUnit = attributesFormData.getIn(["offsetA", "_unit"]);
                  var offsetA = new _immutable.Map({
                    length: startAt,
                    _length: (0, _convertUnits["default"])(startAt).from(this.context.catalog.unit).to(_offsetUnit),
                    _unit: _offsetUnit
                  });
                  attributesFormData = attributesFormData.set("offsetA", offsetA).set("offset", _offset);
                  var _offsetAttribute = new _immutable.Map({
                    length: _export.MathUtils.toFixedFloat(_lengthValue, PRECISION),
                    _unit: value.get("_unit"),
                    _length: _export.MathUtils.toFixedFloat((0, _convertUnits["default"])(_lengthValue).from(this.context.catalog.unit).to(value.get("_unit")), PRECISION)
                  });
                  attributesFormData = attributesFormData.set(attributeName, _offsetAttribute);
                  break;
                }
              default:
                {
                  attributesFormData = attributesFormData.set(attributeName, value);
                  break;
                }
            }
            break;
          }
        default:
          break;
      }
      this.setState({
        attributesFormData: attributesFormData
      });
      this.save({
        attributesFormData: attributesFormData
      });
    }
  }, {
    key: "updateProperty",
    value: function updateProperty(propertyName, value) {
      var propertiesFormData = this.state.propertiesFormData;
      propertiesFormData = propertiesFormData.setIn([propertyName, "currentValue"], value);
      this.setState({
        propertiesFormData: propertiesFormData
      });
      this.save({
        propertiesFormData: propertiesFormData
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        propertiesFormData: this.initPropData(this.props.element, this.props.layer, this.props.state)
      });
    }
  }, {
    key: "save",
    value: function save(_ref2) {
      var propertiesFormData = _ref2.propertiesFormData,
        attributesFormData = _ref2.attributesFormData;
      if (propertiesFormData) {
        var properties = propertiesFormData.map(function (data) {
          return data.get("currentValue");
        });
        console.log(properties);
        this.context.projectActions.setProperties(properties);
      }
      if (attributesFormData) {
        switch (this.props.element.prototype) {
          case "items":
            {
              this.context.projectActions.setItemsAttributes(attributesFormData);
              break;
            }
          case "lines":
            {
              this.context.projectActions.setLinesAttributes(attributesFormData);
              break;
            }
          case "holes":
            {
              this.context.projectActions.setHolesAttributes(attributesFormData);
              break;
            }
        }
      }
    }
  }, {
    key: "copyProperties",
    value: function copyProperties(properties) {
      this.context.projectActions.copyProperties(properties);
    }
  }, {
    key: "pasteProperties",
    value: function pasteProperties() {
      this.context.projectActions.pasteProperties();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$state = this.state,
        propertiesFormData = _this$state.propertiesFormData,
        attributesFormData = _this$state.attributesFormData,
        _this$context = this.context,
        projectActions = _this$context.projectActions,
        catalog = _this$context.catalog,
        translator = _this$context.translator,
        _this$props = this.props,
        appState = _this$props.state,
        element = _this$props.element;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_attributesEditor["default"], {
        element: element,
        onUpdate: this.updateAttribute,
        attributeFormData: attributesFormData,
        state: appState
      }), propertiesFormData.entrySeq().map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          propertyName = _ref4[0],
          data = _ref4[1];
        var currentValue = data.get("currentValue"),
          configs = data.get("configs");
        var _catalog$getPropertyT = catalog.getPropertyType(configs.type),
          Editor = _catalog$getPropertyT.Editor;
        return /*#__PURE__*/_react["default"].createElement(Editor, {
          key: propertyName,
          propertyName: propertyName,
          value: currentValue,
          configs: configs,
          onUpdate: function onUpdate(value) {
            return _this3.updateProperty(propertyName, value);
          },
          state: appState,
          sourceElement: element,
          internalState: _this3.state
        });
      }));
    }
  }]);
  return ElementEditor;
}(_react.Component);
exports["default"] = ElementEditor;
ElementEditor.propTypes = {
  state: _propTypes["default"].object.isRequired,
  element: _propTypes["default"].object.isRequired,
  layer: _propTypes["default"].object.isRequired
};
ElementEditor.contextTypes = {
  projectActions: _propTypes["default"].object.isRequired,
  catalog: _propTypes["default"].object.isRequired,
  translator: _propTypes["default"].object.isRequired
};