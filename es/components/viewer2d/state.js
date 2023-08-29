import React from "react";
import PropTypes from "prop-types";
import Scene from "./scene";
import Snap from "./snap";
import * as SharedStyle from "../../shared-style";

var guideStyle = {
  stroke: SharedStyle.SECONDARY_COLOR.main,
  strokewidth: "2.5px",
};

export default function State(_ref) {
  var state = _ref.state,
    catalog = _ref.catalog,
    theme = _ref.theme;
  var activeSnapElement = state.activeSnapElement,
    snapElements = state.snapElements,
    scene = state.scene;
  var width = scene.width,
    height = scene.height;

  activeSnapElement = activeSnapElement
    ? React.createElement(Snap, {
        snap: activeSnapElement,
        width: scene.width,
        height: scene.height,
      })
    : null;
  // snapElements = snapElements.map((snap,id) => <Snap key={id} snap={snap} width={scene.width} height={scene.height}/>);
  snapElements = null; //only for debug purpose

  return React.createElement(
    "g",
    null,
    React.createElement("rect", {
      x: "0",
      y: "0",
      width: width,
      height: height,
      fill: localStorage.theme ? "#292929" : "#FFF",
    }),
    React.createElement(
      "g",
      {
        transform: "translate(0, " + scene.height + ") scale(1, -1)",
        id: "svg-drawing-paper",
      },
      React.createElement(Scene, {
        scene: scene,
        catalog: catalog,
        theme: theme,
      }),
      activeSnapElement,
      snapElements
    )
  );
}

State.propTypes = {
  state: PropTypes.object.isRequired,
  catalog: PropTypes.object.isRequired,
};
