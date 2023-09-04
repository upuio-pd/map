"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PanelElementEditor;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _panel = _interopRequireDefault(require("../panel"));
var _immutable = require("immutable");
var _constants = require("../../../constants");
var _elementEditor = _interopRequireDefault(require("./element-editor"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function PanelElementEditor(_ref, _ref2) {
  var state = _ref.state;
  var projectActions = _ref2.projectActions,
    translator = _ref2.translator;
  var scene = state.scene,
    mode = state.mode,
    viewOnly = state.viewOnly;
  if (![_constants.MODE_IDLE, _constants.MODE_2D_ZOOM_IN, _constants.MODE_2D_ZOOM_OUT, _constants.MODE_2D_PAN, _constants.MODE_3D_VIEW, _constants.MODE_3D_FIRST_PERSON, _constants.MODE_WAITING_DRAWING_LINE, _constants.MODE_DRAWING_LINE, _constants.MODE_DRAWING_HOLE, _constants.MODE_DRAWING_ITEM, _constants.MODE_DRAGGING_LINE, _constants.MODE_DRAGGING_VERTEX, _constants.MODE_DRAGGING_ITEM, _constants.MODE_DRAGGING_HOLE, _constants.MODE_ROTATING_ITEM, _constants.MODE_UPLOADING_IMAGE, _constants.MODE_FITTING_IMAGE].includes(mode)) return null;
  var componentRenderer = function componentRenderer(element, layer) {
    if (element.type === "wall" || element.type === "square column" || element.type === "round column") return /*#__PURE__*/_react["default"].createElement(_panel["default"], {
      key: element.id,
      name: element.type,
      opened: true
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        padding: "5px 15px"
      }
    }, /*#__PURE__*/_react["default"].createElement(_elementEditor["default"], {
      viewOnly: viewOnly,
      element: element,
      layer: layer,
      state: state
    })));
  };
  var layerRenderer = function layerRenderer(layer) {
    return (0, _immutable.Seq)().concat(layer.lines, layer.holes, layer.areas, layer.items).filter(function (element) {
      return element.selected;
    }).map(function (element) {
      return componentRenderer(element, layer);
    }).valueSeq();
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, scene.layers.valueSeq().map(layerRenderer));
}
PanelElementEditor.propTypes = {
  state: _propTypes["default"].object.isRequired
};
PanelElementEditor.contextTypes = {
  projectActions: _propTypes["default"].object.isRequired,
  translator: _propTypes["default"].object.isRequired
};