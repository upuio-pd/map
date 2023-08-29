import React from 'react';
import PropTypes from 'prop-types';
import Scene from './scene';
import Snap from './snap';
import * as SharedStyle from '../../shared-style';

const guideStyle = {
  stroke: SharedStyle.SECONDARY_COLOR.main,
  strokewidth:'2.5px'
};

export default function State({state, catalog , theme}) {

  let {activeSnapElement, snapElements, scene} = state;
  let {width, height} = scene;

  var localStorage = window.hasOwnProperty('localStorage') ? window.localStorage : false;

  activeSnapElement = activeSnapElement ?
    <Snap snap={activeSnapElement} width={scene.width} height={scene.height}/> : null;
// snapElements = snapElements.map((snap,id) => <Snap key={id} snap={snap} width={scene.width} height={scene.height}/>);
  snapElements = null; //only for debug purpose

  return (
    <g>
      <rect x="0" y="0" width={width} height={height} fill={ localStorage.theme == 'dark' ? "#292929" : "#FFF" }/>
      <g transform={`translate(0, ${scene.height}) scale(1, -1)`} id="svg-drawing-paper">

        <Scene scene={scene} catalog={catalog} theme={theme}/>
        {scene.getIn(['guides','horizontal']).entrySeq().map( ([ hgKey, hgVal ]) => <line id={'hGuide' + hgKey} key={hgKey} x1={0} y1={hgVal} x2={width} y2={hgVal} style={guideStyle}/> )}
        {scene.getIn(['guides','vertical']).entrySeq().map( ([ vgKey, vgVal ]) => <line key={vgKey} x1={vgVal} y1={0} x2={vgVal} y2={height} style={guideStyle}/> )}
        {activeSnapElement}
        {snapElements}

      </g>
    </g>
  )
}

State.propTypes = {
  state: PropTypes.object.isRequired,
  catalog: PropTypes.object.isRequired
};
