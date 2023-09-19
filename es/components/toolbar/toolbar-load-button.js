"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ToolbarLoadButton;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _fa = require("react-icons/fa");
var _toolbarButton = _interopRequireDefault(require("./toolbar-button"));
var _browser = require("../../utils/browser");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ToolbarLoadButton(_ref, _ref2) {
  var state = _ref.state;
  var translator = _ref2.translator,
    projectActions = _ref2.projectActions;
  var loadProjectFromFile = function loadProjectFromFile(event) {
    // event.preventDefault();
    (0, _browser.browserUpload)().then(function (data) {
      projectActions.loadProject(JSON.parse(data));
    });
  };
  return /*#__PURE__*/_react["default"].createElement(_toolbarButton["default"], {
    active: false,
    tooltip: translator.t("Load project"),
    onClick: loadProjectFromFile
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaFolderOpen, null));
}
ToolbarLoadButton.propTypes = {
  state: _propTypes["default"].object.isRequired
};
ToolbarLoadButton.contextTypes = {
  projectActions: _propTypes["default"].object.isRequired,
  translator: _propTypes["default"].object.isRequired
};