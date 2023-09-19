"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fitToViewer = void 0;
var _transformationMatrix = require("transformation-matrix");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var limitZoomLevel = function limitZoomLevel(value, matrix) {
  var scaleLevel = matrix.a;
  if (value.scaleFactorMin != null) {
    // limit minimum zoom
    scaleLevel = Math.max(scaleLevel, value.scaleFactorMin);
  }
  if (value.scaleFactorMax != null) {
    // limit maximum zoom
    scaleLevel = Math.min(scaleLevel, value.scaleFactorMax);
  }
  return set(matrix, {
    a: scaleLevel,
    d: scaleLevel
  });
};
var set = function set(value, patch) {
  var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  value = Object.assign({}, value, patch, {
    lastAction: action
  });
  return Object.freeze(value);
};
var decompose = function decompose(value) {
  var matrix = (0, _transformationMatrix.fromObject)(value);
  return {
    scaleFactor: matrix.a,
    translationX: matrix.e,
    translationY: matrix.f
  };
};
var fitToViewer = function fitToViewer(value) {
  var SVGAlignX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ALIGN_COVER";
  var SVGAlignY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ALIGN_COVER";
  var viewerWidth = value.viewerWidth,
    viewerHeight = value.viewerHeight,
    SVGMinX = value.SVGMinX,
    SVGMinY = value.SVGMinY,
    SVGWidth = value.SVGWidth,
    SVGHeight = value.SVGHeight;
  var scaleX = viewerWidth / SVGWidth;
  var scaleY = viewerHeight / SVGHeight;
  var scaleLevel = Math.min(scaleX, scaleY);
  var scaleMatrix = (0, _transformationMatrix.scale)(scaleLevel, scaleLevel);
  var translateX = -SVGMinX * scaleX;
  var translateY = -SVGMinY * scaleY;

  // after fitting, SVG and the viewer will match in width (1) or in height (2) or SVG will cover the container with preserving aspect ratio (0)
  if (scaleX < scaleY) {
    var remainderY = viewerHeight - scaleX * SVGHeight;

    //(1) match in width, meaning scaled SVGHeight <= viewerHeight
    switch (SVGAlignY) {
      case "ALIGN_TOP":
        translateY = -SVGMinY * scaleLevel;
        break;
      case "ALIGN_CENTER":
        translateY = Math.round(remainderY / 2) - SVGMinY * scaleLevel;
        break;
      case "ALIGN_BOTTOM":
        translateY = remainderY - SVGMinY * scaleLevel;
        break;
      case "ALIGN_COVER":
        scaleMatrix = (0, _transformationMatrix.scale)(scaleY, scaleY); // (0) we must now match to short edge, in this case - height
        var remainderX = viewerWidth - scaleY * SVGWidth; // calculate remainder in the other scale

        translateX = SVGMinX + Math.round(remainderX / 2); // center by the long edge
        break;
      default:
      //no op
    }
  } else {
    var _remainderX = viewerWidth - scaleY * SVGWidth;

    //(2) match in height, meaning scaled SVGWidth <= viewerWidth
    switch (SVGAlignX) {
      case "ALIGN_LEFT":
        translateX = -SVGMinX * scaleLevel;
        break;
      case "ALIGN_CENTER":
        translateX = Math.round(_remainderX / 2) - SVGMinX * scaleLevel;
        break;
      case "ALIGN_RIGHT":
        translateX = _remainderX - SVGMinX * scaleLevel;
        break;
      case "ALIGN_COVER":
        scaleMatrix = (0, _transformationMatrix.scale)(scaleX, scaleX); // (0) we must now match to short edge, in this case - width
        var _remainderY = viewerHeight - scaleX * SVGHeight; // calculate remainder in the other scale

        translateY = SVGMinY + Math.round(_remainderY / 2); // center by the long edge
        break;
      default:
      //no op
    }
  }

  var isZoomLevelGoingOutOfBounds = function isZoomLevelGoingOutOfBounds(value, scaleFactor) {
    var _decompose = decompose(value),
      curScaleFactor = _decompose.scaleFactor;
    var lessThanScaleFactorMin = value.scaleFactorMin && curScaleFactor * scaleFactor < value.scaleFactorMin;
    var moreThanScaleFactorMax = value.scaleFactorMax && curScaleFactor * scaleFactor > value.scaleFactorMax;
    return lessThanScaleFactorMin && scaleFactor < 1 || moreThanScaleFactorMax && scaleFactor > 1;
  };
  var translationMatrix = (0, _transformationMatrix.translate)(translateX, translateY);
  var matrix = (0, _transformationMatrix.transform)(translationMatrix,
  //2
  scaleMatrix //1
  );

  if (isZoomLevelGoingOutOfBounds(value, scaleLevel / value.d)) {
    // Do not allow scale and translation
    return set(value, {
      mode: "MODE_IDLE",
      startX: null,
      startY: null,
      endX: null,
      endY: null
    });
  }
  return set(value, _objectSpread(_objectSpread({
    mode: "MODE_IDLE"
  }, limitZoomLevel(value, matrix)), {}, {
    startX: null,
    startY: null,
    endX: null,
    endY: null
  }), "ACTION_ZOOM");
};
exports.fitToViewer = fitToViewer;