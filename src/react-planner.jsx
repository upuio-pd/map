import React, { Component , useEffect } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Translator from "./translator/translator";
import Catalog from "./catalog/catalog";
import actions from "./actions/export";
import { objectsMap } from "./utils/objects-utils";
import {
  ToolbarComponents,
  Content,
  SidebarComponents,
  FooterBarComponents,
} from "./components/export";
import { VERSION } from "./version";
import "./styles/export";

const { Toolbar } = ToolbarComponents;
const { Sidebar } = SidebarComponents;
const { FooterBar } = FooterBarComponents;

const toolbarW = 400;
const sidebarW = 300;
const footerBarH = 20;

var localStorage = window.hasOwnProperty('localStorage') ? window.localStorage : false;


const wrapperStyle = {
  display: "flex",
  flexFlow: "row nowrap",
};

class ReactPlanner extends Component {
  getChildContext() {
    return {
      ...objectsMap(actions, (actionNamespace) => this.props[actionNamespace]),
      translator: this.props.translator,
      catalog: this.props.catalog,
    };
  }

  componentWillMount() {
    let { store } = this.context;
    let { projectActions, catalog, stateExtractor, plugins } = this.props;

    plugins.forEach((plugin) => plugin(store, stateExtractor));
    projectActions.initCatalog(catalog);
  }

  componentWillReceiveProps(nextProps) {
    let { stateExtractor, state, projectActions, catalog } = nextProps;
    let plannerState = stateExtractor(state);

    let catalogReady = plannerState.getIn(["catalog", "ready"]);
    if (!catalogReady) {
      projectActions.initCatalog(catalog);
    }
  }




  render() {
    let {
      width,
      height,
      state,
      stateExtractor,
      viewOnly,
      onClickOnItem,
      theme = 'light' , 
      ...props
    } = this.props;


localStorage && localStorage.setItem('color_theme', `${props.theme == 'dark' ? 'dark' : 'light'}`);
    // const theme = 'light';

    //let contentW = !viewOnly ? width - toolbarW : width;
    let contentW = width;
    let toolbarH = height;
    let contentH = height;
    let sidebarH = height;

    let extractedState = stateExtractor(state);

    return (
      <div style={{ ...wrapperStyle, height  }}>
        {/* <Toolbar
          width={toolbarW}
          height={toolbarH}
          state={extractedState}
          {...props}
        /> */}

        <Content
          width={contentW}
          height={contentH}
          state={extractedState}
          viewOnly={viewOnly}
          onClickOnItem={onClickOnItem}
          theme={theme} 
          {...props}
          onWheel={(event) => {
            console.log('wheel', event) , {
              capture: false,
              passive: false
            }}}
        />

        {/* <Sidebar
          width={sidebarW}
          height={sidebarH}
          state={extractedState}
          {...props}
        /> */}

        {/* <FooterBar
          width={width}
          height={footerBarH}
          state={extractedState}
          {...props}
        /> */}
      </div>
    );
  }
}

ReactPlanner.propTypes = {
  translator: PropTypes.instanceOf(Translator),
  catalog: PropTypes.instanceOf(Catalog),
  allowProjectFileSupport: PropTypes.bool,
  plugins: PropTypes.arrayOf(PropTypes.func),
  autosaveKey: PropTypes.string,
  autosaveDelay: PropTypes.number,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  stateExtractor: PropTypes.func.isRequired,
  toolbarButtons: PropTypes.array,
  sidebarComponents: PropTypes.array,
  footerbarComponents: PropTypes.array,
  customContents: PropTypes.object,
  softwareSignature: PropTypes.string,
};

ReactPlanner.contextTypes = {
  store: PropTypes.object.isRequired,
};

ReactPlanner.childContextTypes = {
  ...objectsMap(actions, () => PropTypes.object),
  translator: PropTypes.object,
  catalog: PropTypes.object,
};

ReactPlanner.defaultProps = {
  translator: new Translator(),
  catalog: new Catalog(),
  plugins: [],
  allowProjectFileSupport: true,
  softwareSignature: `React-Planner ${VERSION}`,
  toolbarButtons: [],
  sidebarComponents: [],
  footerbarComponents: [],
  customContents: {},
};

//redux connect
function mapStateToProps(reduxState) {
  return {
    state: reduxState,
  };
}

function mapDispatchToProps(dispatch) {
  return objectsMap(actions, (actionNamespace) =>
    bindActionCreators(actions[actionNamespace], dispatch)
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactPlanner);
