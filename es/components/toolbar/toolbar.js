var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";
import { MdSettings, MdUndo, MdDirectionsRun } from "react-icons/md";
import { FaFile, FaMousePointer, FaPlus } from "react-icons/fa";
import ToolbarButton from "./toolbar-button";
import ToolbarSaveButton from "./toolbar-save-button";
import ToolbarLoadButton from "./toolbar-load-button";
import If from "../../utils/react-if";
import { MODE_IDLE, MODE_3D_VIEW, MODE_3D_FIRST_PERSON, MODE_VIEWING_CATALOG, MODE_CONFIGURING_PROJECT } from "../../constants";
import * as SharedStyle from "../../shared-style";

var iconTextStyle = {
  fontSize: "19px",
  textDecoration: "none",
  fontWeight: "bold",
  margin: "0px",
  userSelect: "none"
};

var Icon2D = function Icon2D(_ref) {
  var style = _ref.style;
  return React.createElement(
    "p",
    { style: _extends({}, iconTextStyle, style) },
    "2D"
  );
};
var Icon3D = function Icon3D(_ref2) {
  var style = _ref2.style;
  return React.createElement(
    "p",
    { style: _extends({}, iconTextStyle, style) },
    "3D"
  );
};

var ASIDE_STYLE = {
  backgroundColor: SharedStyle.PRIMARY_COLOR.main,
  padding: "10px"
};

var sortButtonsCb = function sortButtonsCb(a, b) {
  if (a.index === undefined || a.index === null) {
    a.index = Number.MAX_SAFE_INTEGER;
  }

  if (b.index === undefined || b.index === null) {
    b.index = Number.MAX_SAFE_INTEGER;
  }

  return a.index - b.index;
};

var mapButtonsCb = function mapButtonsCb(el, ind) {
  return React.createElement(
    If,
    { key: ind, condition: el.condition, style: { position: "relative" } },
    el.dom
  );
};

var Toolbar = function (_Component) {
  _inherits(Toolbar, _Component);

  function Toolbar(props, context) {
    _classCallCheck(this, Toolbar);

    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props, context));

    _this.state = {};
    return _this;
  }

  _createClass(Toolbar, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.state.mode !== nextProps.state.mode || this.props.height !== nextProps.height || this.props.width !== nextProps.width || this.props.state.alterate !== nextProps.state.alterate;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          state = _props.state,
          width = _props.width,
          height = _props.height,
          toolbarButtons = _props.toolbarButtons,
          allowProjectFileSupport = _props.allowProjectFileSupport,
          _context = this.context,
          projectActions = _context.projectActions,
          viewer3DActions = _context.viewer3DActions,
          translator = _context.translator;


      var mode = state.get("mode");
      var alterate = state.get("alterate");
      var alterateColor = alterate ? SharedStyle.MATERIAL_COLORS[500].orange : "";

      var sorter = [
      /*
      {
        index: 0,
        condition: allowProjectFileSupport,
        dom: (
          <ToolbarButton
            active={false}
            tooltip={translator.t("New project")}
            onClick={(event) =>
              confirm(translator.t("Would you want to start a new Project?"))
                ? projectActions.newProject()
                : null
            }
          >
            <FaFile />
          </ToolbarButton>
        ),
      },*/
      {
        index: 1,
        condition: allowProjectFileSupport,
        dom: React.createElement(ToolbarSaveButton, { name: "Kaydet", state: state })
      },
      /*{
        index: 2,
        condition: allowProjectFileSupport,
        dom: <ToolbarLoadButton state={state} />,
      },*/
      {
        index: 3,
        condition: true,
        dom: React.createElement(
          ToolbarButton,
          {
            name: "Esyalar",
            active: [MODE_VIEWING_CATALOG].includes(mode),
            tooltip: translator.t("Open catalog"),
            onClick: function onClick(event) {
              return projectActions.openCatalog();
            }
          },
          React.createElement(FaPlus, null)
        )
      }, {
        index: 4,
        condition: true,
        dom: React.createElement(
          ToolbarButton,
          {
            name: "3D Kamerayı Kullan",
            active: [MODE_3D_VIEW].includes(mode),
            tooltip: translator.t("3D View"),
            onClick: function onClick(event) {
              return viewer3DActions.selectTool3DView();
            }
          },
          React.createElement(Icon3D, null)
        )
      }, {
        index: 5,
        condition: true,
        dom: React.createElement(
          ToolbarButton,
          {
            name: "2D Kamerayı Kullan",
            active: [MODE_IDLE].includes(mode),
            tooltip: translator.t("2D View"),
            onClick: function onClick(event) {
              return projectActions.setMode(MODE_IDLE);
            }
          },
          [MODE_3D_FIRST_PERSON, MODE_3D_VIEW].includes(mode) ? React.createElement(Icon2D, { style: { color: alterateColor } }) : React.createElement(FaMousePointer, { style: { color: alterateColor } })
        )
      }, {
        index: 6,
        condition: true,
        dom: React.createElement(
          ToolbarButton,
          {
            name: "3D Kullan\u0131c\u0131 Kameras\u0131",
            active: [MODE_3D_FIRST_PERSON].includes(mode),
            tooltip: translator.t("3D First Person"),
            onClick: function onClick(event) {
              return viewer3DActions.selectTool3DFirstPerson();
            }
          },
          React.createElement(MdDirectionsRun, null)
        )
      }, {
        index: 7,
        condition: true,
        dom: React.createElement(
          ToolbarButton,
          {
            name: "Geri Al",
            active: false,
            tooltip: translator.t("Undo (CTRL-Z)"),
            onClick: function onClick(event) {
              return projectActions.undo();
            }
          },
          React.createElement(MdUndo, null)
        )
      }, {
        index: 8,
        condition: true,
        dom: React.createElement(
          ToolbarButton,
          {
            name: "Proje Ayarlari",
            active: [MODE_CONFIGURING_PROJECT].includes(mode),
            tooltip: translator.t("Configure project"),
            onClick: function onClick(event) {
              return projectActions.openProjectConfigurator();
            }
          },
          React.createElement(MdSettings, null)
        )
      }];

      sorter = sorter.concat(toolbarButtons.map(function (Component, key) {
        return Component.prototype //if is a react component
        ? {
          condition: true,
          dom: React.createElement(Component, { mode: mode, state: state, key: key })
        } : {
          //else is a sortable toolbar button
          index: Component.index,
          condition: Component.condition,
          dom: React.createElement(Component.dom, { mode: mode, state: state, key: key })
        };
      }));

      return React.createElement(
        "div",
        {
          style: {
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(246, 246, 246)",
            minWidth: width,
            width: width,
            padding: 15
          }
        },
        React.createElement(
          "span",
          {
            style: {
              fontSize: "2rem",
              fontWeight: "bold",
              borderBottom: "1px solid rgb(204,204,204)",
              paddingBottom: "2rem"
            }
          },
          "Harita Edit\xF6r\xFC"
        ),
        React.createElement(
          "div",
          {
            style: {
              paddingBottom: 10
            }
          },
          React.createElement(
            "h5",
            {
              style: {
                fontSize: 20
              }
            },
            "\u015Eablonlar"
          ),
          sorter.sort(sortButtonsCb).map(mapButtonsCb)
        )
      );

      return React.createElement(
        "aside",
        {
          style: _extends({}, ASIDE_STYLE, { maxWidth: width, maxHeight: height }),
          className: "toolbar"
        },
        sorter.sort(sortButtonsCb).map(mapButtonsCb)
      );
    }
  }]);

  return Toolbar;
}(Component);

export default Toolbar;


Toolbar.propTypes = {
  state: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  allowProjectFileSupport: PropTypes.bool.isRequired,
  toolbarButtons: PropTypes.array
};

Toolbar.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  viewer2DActions: PropTypes.object.isRequired,
  viewer3DActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  itemsActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired
};