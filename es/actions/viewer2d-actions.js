"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectToolPan = selectToolPan;
exports.selectToolZoomIn = selectToolZoomIn;
exports.selectToolZoomOut = selectToolZoomOut;
exports.updateCameraView = updateCameraView;
var _constants = require("../constants");
function updateCameraView(value) {
  return {
    type: _constants.UPDATE_2D_CAMERA,
    value: value
  };
}
function selectToolPan() {
  return {
    type: _constants.SELECT_TOOL_PAN
  };
}
function selectToolZoomOut() {
  return {
    type: _constants.SELECT_TOOL_ZOOM_OUT
  };
}
function selectToolZoomIn() {
  return {
    type: _constants.SELECT_TOOL_ZOOM_IN
  };
}