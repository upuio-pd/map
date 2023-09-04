"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ToolbarSaveButton;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _fa = require("react-icons/fa");
var _toolbarButton = _interopRequireDefault(require("./toolbar-button"));
var _browser = require("../../utils/browser");
var _export = require("../../class/export");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ToolbarSaveButton(_ref, _ref2) {
  var state = _ref.state;
  var translator = _ref2.translator;
  var saveProjectToFile = function saveProjectToFile(e) {
    // e.preventDefault();
    state = _export.Project.unselectAll(state).updatedState;
    (0, _browser.browserDownload)(state.get("scene").toJS());
  };
  return /*#__PURE__*/_react["default"].createElement(_toolbarButton["default"], {
    name: "Kaydet",
    active: false,
    tooltip: translator.t("Save project"),
    onClick: saveProjectToFile
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaSave, null));
}
ToolbarSaveButton.propTypes = {
  state: _propTypes["default"].object.isRequired
};
ToolbarSaveButton.contextTypes = {
  translator: _propTypes["default"].object.isRequired
};