"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Viewer2D;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactSvgPanZoom = require("react-svg-pan-zoom");
var constants = _interopRequireWildcard(require("../../constants"));
var _state = _interopRequireDefault(require("./state"));
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
var _gi = require("react-icons/gi");
var _fa = require("react-icons/fa");
var _fi = require("react-icons/fi");
var _md = require("react-icons/md");
var _fitToViewer = require("./fitToViewer");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function mode2Tool(mode) {
  switch (mode) {
    case constants.MODE_2D_PAN:
      return _reactSvgPanZoom.TOOL_PAN;
    case constants.MODE_2D_ZOOM_IN:
      return _reactSvgPanZoom.TOOL_ZOOM_IN;
    case constants.MODE_2D_ZOOM_OUT:
      return _reactSvgPanZoom.TOOL_ZOOM_OUT;
    case constants.MODE_IDLE:
      return _reactSvgPanZoom.TOOL_AUTO;
    default:
      return _reactSvgPanZoom.TOOL_NONE;
  }
}
function mode2PointerEvents(mode) {
  switch (mode) {
    case constants.MODE_DRAWING_LINE:
    case constants.MODE_DRAWING_HOLE:
    case constants.MODE_DRAWING_ITEM:
    case constants.MODE_DRAGGING_HOLE:
    case constants.MODE_DRAGGING_ITEM:
    case constants.MODE_DRAGGING_LINE:
    case constants.MODE_DRAGGING_VERTEX:
      return {
        pointerEvents: "none"
      };
    default:
      return {};
  }
}
function mode2Cursor(mode) {
  switch (mode) {
    case constants.MODE_DRAGGING_HOLE:
    case constants.MODE_DRAGGING_LINE:
    case constants.MODE_DRAGGING_VERTEX:
    case constants.MODE_DRAGGING_ITEM:
      return {
        cursor: "move"
      };
    case constants.MODE_ROTATING_ITEM:
      return {
        cursor: "ew-resize"
      };
    case constants.MODE_WAITING_DRAWING_LINE:
    case constants.MODE_DRAWING_LINE:
      return {
        cursor: "crosshair"
      };
    default:
      return {
        cursor: "default"
      };
  }
}
function mode2DetectAutopan(mode) {
  switch (mode) {
    case constants.MODE_DRAWING_LINE:
    case constants.MODE_DRAGGING_LINE:
    case constants.MODE_DRAGGING_VERTEX:
    case constants.MODE_DRAGGING_HOLE:
    case constants.MODE_DRAGGING_ITEM:
    case constants.MODE_DRAWING_HOLE:
    case constants.MODE_DRAWING_ITEM:
      return true;
    default:
      return false;
  }
}
function extractElementData(node) {
  while (!node.attributes.getNamedItem("data-element-root") && node.tagName !== "svg") {
    node = node.parentNode;
  }
  if (node.tagName === "svg") return null;
  return {
    part: node.attributes.getNamedItem("data-part") ? node.attributes.getNamedItem("data-part").value : undefined,
    layer: node.attributes.getNamedItem("data-layer").value,
    prototype: node.attributes.getNamedItem("data-prototype").value,
    selected: node.attributes.getNamedItem("data-selected").value === "true",
    id: node.attributes.getNamedItem("data-id").value
  };
}
function Viewer2D(_ref, _ref2) {
  var state = _ref.state,
    width = _ref.width,
    height = _ref.height,
    viewOnly = _ref.viewOnly,
    onClickOnItem = _ref.onClickOnItem;
  var viewer2DActions = _ref2.viewer2DActions,
    linesActions = _ref2.linesActions,
    holesActions = _ref2.holesActions,
    verticesActions = _ref2.verticesActions,
    itemsActions = _ref2.itemsActions,
    areaActions = _ref2.areaActions,
    projectActions = _ref2.projectActions,
    catalog = _ref2.catalog;
  var viewer2D = state.viewer2D,
    mode = state.mode,
    scene = state.scene;
  var layerID = scene.selectedLayer;
  var mapCursorPosition = function mapCursorPosition(_ref3) {
    var x = _ref3.x,
      y = _ref3.y;
    return {
      x: x,
      y: -y + scene.height
    };
  };
  var onMouseMove = function onMouseMove(viewerEvent) {
    //workaround that allow imageful component to work
    var evt = new Event("mousemove-planner-event");
    evt.viewerEvent = viewerEvent;
    document.dispatchEvent(evt);
    var _mapCursorPosition = mapCursorPosition(viewerEvent),
      x = _mapCursorPosition.x,
      y = _mapCursorPosition.y;
    projectActions.updateMouseCoord({
      x: x,
      y: y
    });
    switch (mode) {
      case constants.MODE_DRAWING_LINE:
        linesActions.updateDrawingLine(x, y, state.snapMask);
        break;
      case constants.MODE_DRAWING_HOLE:
        holesActions.updateDrawingHole(layerID, x, y);
        break;
      case constants.MODE_DRAWING_ITEM:
        itemsActions.updateDrawingItem(layerID, x, y);
        break;
      case constants.MODE_DRAGGING_HOLE:
        holesActions.updateDraggingHole(x, y);
        break;
      case constants.MODE_DRAGGING_LINE:
        linesActions.updateDraggingLine(x, y, state.snapMask);
        break;
      case constants.MODE_DRAGGING_VERTEX:
        verticesActions.updateDraggingVertex(x, y, state.snapMask);
        break;
      case constants.MODE_DRAGGING_ITEM:
        itemsActions.updateDraggingItem(x, y);
        break;
      case constants.MODE_ROTATING_ITEM:
        itemsActions.updateRotatingItem(x, y);
        break;
    }
    viewerEvent.originalEvent.stopPropagation();
  };
  var onMouseDown = function onMouseDown(viewerEvent) {
    var event = viewerEvent.originalEvent;

    //workaround that allow imageful component to work
    var evt = new Event("mousedown-planner-event");
    evt.viewerEvent = viewerEvent;
    document.dispatchEvent(evt);
    var _mapCursorPosition2 = mapCursorPosition(viewerEvent),
      x = _mapCursorPosition2.x,
      y = _mapCursorPosition2.y;
    if (mode === constants.MODE_IDLE) {
      var elementData = extractElementData(event.target);
      if (!elementData || !elementData.selected) return;
      switch (elementData.prototype) {
        case "lines":
          if (!viewOnly) linesActions.beginDraggingLine(elementData.layer, elementData.id, x, y, state.snapMask);
          break;
        case "vertices":
          if (!viewOnly) verticesActions.beginDraggingVertex(elementData.layer, elementData.id, x, y, state.snapMask);
          break;
        case "items":
          if (!viewOnly) if (elementData.part === "rotation-anchor") itemsActions.beginRotatingItem(elementData.layer, elementData.id, x, y);else itemsActions.beginDraggingItem(elementData.layer, elementData.id, x, y);
          break;
        case "holes":
          if (!viewOnly) holesActions.beginDraggingHole(elementData.layer, elementData.id, x, y);
          break;
        default:
          break;
      }
    }
    event.stopPropagation();
  };
  var onMouseUp = function onMouseUp(viewerEvent) {
    var event = viewerEvent.originalEvent;
    var evt = new Event("mouseup-planner-event");
    evt.viewerEvent = viewerEvent;
    document.dispatchEvent(evt);
    var _mapCursorPosition3 = mapCursorPosition(viewerEvent),
      x = _mapCursorPosition3.x,
      y = _mapCursorPosition3.y;
    switch (mode) {
      case constants.MODE_IDLE:
        var elementData = extractElementData(event.target);
        if (elementData && elementData.selected) return;
        if (viewOnly) {
          projectActions.unselectAll();
        }
        switch (elementData ? elementData.prototype : "none") {
          case "areas":
            if (!viewOnly) areaActions.selectArea(elementData.layer, elementData.id);
            break;
          case "lines":
            if (!viewOnly) linesActions.selectLine(elementData.layer, elementData.id);
            break;
          case "holes":
            if (!viewOnly) holesActions.selectHole(elementData.layer, elementData.id);
            break;
          case "items":
            if (!viewOnly) itemsActions.selectItem(elementData.layer, elementData.id);else onClickOnItem(elementData.id);
            break;
          case "none":
            projectActions.unselectAll();
            break;
        }
        break;
      case constants.MODE_WAITING_DRAWING_LINE:
        linesActions.beginDrawingLine(layerID, x, y, state.snapMask);
        break;
      case constants.MODE_DRAWING_LINE:
        linesActions.endDrawingLine(x, y, state.snapMask);
        linesActions.beginDrawingLine(layerID, x, y, state.snapMask);
        break;
      case constants.MODE_DRAWING_HOLE:
        holesActions.endDrawingHole(layerID, x, y);
        break;
      case constants.MODE_DRAWING_ITEM:
        itemsActions.endDrawingItem(layerID, x, y);
        projectActions.rollback();
        break;
      case constants.MODE_DRAGGING_LINE:
        linesActions.endDraggingLine(x, y, state.snapMask);
        break;
      case constants.MODE_DRAGGING_VERTEX:
        verticesActions.endDraggingVertex(x, y, state.snapMask);
        break;
      case constants.MODE_DRAGGING_ITEM:
        itemsActions.endDraggingItem(x, y);
        break;
      case constants.MODE_DRAGGING_HOLE:
        holesActions.endDraggingHole(x, y);
        break;
      case constants.MODE_ROTATING_ITEM:
        itemsActions.endRotatingItem(x, y);
        break;
    }
    event.stopPropagation();
  };
  var _onChangeValue = function onChangeValue(value) {
    projectActions.updateZoomScale(value.a);
    return viewer2DActions.updateCameraView(value);
  };

  //reset to width height
  // useEffect(() => {
  //     let newValue = fitToViewer({
  //         SVGHeight: state.toJS().scene.height,
  //         SVGWidth: state.toJS().scene.width,
  //         viewerHeight: height,
  //         viewerWidth: width,
  //     });
  //     onChangeValue({...newValue, e: 0, f: 0});
  // }, []);

  var onChangeTool = function onChangeTool(tool) {
    console.log('tool', tool);
    switch (tool) {
      case _reactSvgPanZoom.TOOL_NONE:
        projectActions.selectToolEdit();
        break;
      case _reactSvgPanZoom.TOOL_PAN:
        viewer2DActions.selectToolPan();
        break;
      case _reactSvgPanZoom.TOOL_ZOOM_IN:
        viewer2DActions.selectToolZoomIn();
        break;
      case _reactSvgPanZoom.TOOL_ZOOM_OUT:
        viewer2DActions.selectToolZoomOut();
        break;
    }
  };
  var _state$get$toJS = state.get("viewer2D").toJS(),
    e = _state$get$toJS.e,
    f = _state$get$toJS.f,
    SVGWidth = _state$get$toJS.SVGWidth,
    SVGHeight = _state$get$toJS.SVGHeight;
  var rulerSize = 0; //px
  var rulerUnitPixelSize = 100;
  var rulerBgColor = SharedStyle.COLORS.black;
  var rulerFnColor = SharedStyle.COLORS.white;
  var rulerMkColor = SharedStyle.SECONDARY_COLOR.main;
  var sceneWidth = SVGWidth || state.getIn(["scene", "width"]);
  var sceneHeight = SVGHeight || state.getIn(["scene", "height"]);
  var sceneZoom = state.zoom || 1;
  var rulerXElements = Math.ceil(sceneWidth / rulerUnitPixelSize) + 1;
  var rulerYElements = Math.ceil(sceneHeight / rulerUnitPixelSize) + 1;
  var EVENTS_TO_MODIFY = ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'wheel'];
  var originalAddEventListener = document.addEventListener.bind();
  document.addEventListener = function (type, listener, options, wantsUntrusted) {
    var modOptions = options;
    if (EVENTS_TO_MODIFY.includes(type)) {
      if (typeof options === 'boolean') {
        modOptions = {
          capture: options,
          passive: false
        };
      } else if (_typeof(options) === 'object') {
        modOptions = _objectSpread(_objectSpread({}, options), {}, {
          passive: false
        });
      }
    }
    return originalAddEventListener(type, listener, modOptions, wantsUntrusted);
  };
  var originalRemoveEventListener = document.removeEventListener.bind();
  document.removeEventListener = function (type, listener, options) {
    var modOptions = options;
    if (EVENTS_TO_MODIFY.includes(type)) {
      if (typeof options === 'boolean') {
        modOptions = {
          capture: options,
          passive: false
        };
      } else if (_typeof(options) === 'object') {
        modOptions = _objectSpread(_objectSpread({}, options), {}, {
          passive: false
        });
      }
    }
    return originalRemoveEventListener(type, listener, modOptions);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      margin: 0,
      padding: 0,
      display: "grid",
      gridRowGap: "0",
      gridColumnGap: "0",
      gridTemplateColumns: "".concat(rulerSize, "px ").concat(width - rulerSize, "px"),
      gridTemplateRows: "".concat(rulerSize, "px ").concat(height - rulerSize, "px"),
      position: "relative"
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactSvgPanZoom.ReactSVGPanZoom, {
    passiveValues: false,
    onClick: function onClick(event) {
      return event.x, event.y, event.originalEvent;
    },
    width: width,
    height: height,
    value: viewer2D.isEmpty() ? null : viewer2D.toJS(),
    onChangeValue: function onChangeValue(value) {
      value ? (console.log('valuee'), _onChangeValue(value)) : console.log('no vlaue'), _onChangeValue({
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
      });
    },
    tool: mode2Tool(mode),
    onChangeTool: onChangeTool,
    detectAutoPan: mode2DetectAutopan(mode),
    onMouseDown: onMouseDown
    // background={ localStorage.theme == 'dark' ? '#141414' : "#fff"}
    ,
    miniatureBackground: "#fff",
    onMouseMove: onMouseMove
    // customToolbar={customToolBar}
    ,
    onMouseUp: onMouseUp,
    miniaturePosition: "none",
    toolbarPosition: "none",
    scaleFactorOnWheel: 1.1,
    background: "red"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    width: scene.width,
    height: scene.height
  }, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("pattern", {
    id: "diagonalFill",
    patternUnits: "userSpaceOnUse",
    width: "4",
    height: "4",
    fill: localStorage.theme == 'dark' ? "#737373" : "#FFF"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "4",
    fill: localStorage.theme == 'dark' ? "#737373" : "#FFF"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2",
    style: {
      stroke: localStorage.theme == 'dark' ? "#737373" : "#7F56D9",
      strokeWidth: 2
    }
  }))), /*#__PURE__*/_react["default"].createElement("g", {
    style: Object.assign(mode2Cursor(mode), mode2PointerEvents(mode))
  }, /*#__PURE__*/_react["default"].createElement(_state["default"], {
    state: state,
    catalog: catalog
  })))));
}
Viewer2D.propTypes = {
  state: _propTypes["default"].object.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired
};
Viewer2D.contextTypes = {
  viewer2DActions: _propTypes["default"].object.isRequired,
  linesActions: _propTypes["default"].object.isRequired,
  holesActions: _propTypes["default"].object.isRequired,
  verticesActions: _propTypes["default"].object.isRequired,
  itemsActions: _propTypes["default"].object.isRequired,
  areaActions: _propTypes["default"].object.isRequired,
  projectActions: _propTypes["default"].object.isRequired,
  catalog: _propTypes["default"].object.isRequired
};