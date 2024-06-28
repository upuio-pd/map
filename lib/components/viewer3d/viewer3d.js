"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var Three = _interopRequireWildcard(require("three"));
var _sceneCreator = require("./scene-creator");
var _threeMemoryCleaner = require("./three-memory-cleaner");
var _orbitControls = _interopRequireDefault(require("./libs/orbit-controls"));
var _immutablediff = _interopRequireDefault(require("immutablediff"));
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var Scene3DViewer = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function Scene3DViewer(props) {
    var _this;
    _classCallCheck(this, Scene3DViewer);
    _this = _callSuper(this, Scene3DViewer, [props]);
    _this.lastMousePosition = {};
    _this.width = props.width;
    _this.height = props.height;
    _this.renderingID = 0;
    _this.renderer = window.__threeRenderer || new Three.WebGLRenderer({
      preserveDrawingBuffer: true
    });
    window.__threeRenderer = _this.renderer;
    return _this;
  }
  _inherits(Scene3DViewer, _React$Component);
  return _createClass(Scene3DViewer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var actions = {
        areaActions: this.context.areaActions,
        holesActions: this.context.holesActions,
        itemsActions: this.context.itemsActions,
        linesActions: this.context.linesActions,
        projectActions: this.context.projectActions
      };
      var state = this.props.state;
      var data = state.scene;
      var canvasWrapper = _reactDom["default"].findDOMNode(this.refs.canvasWrapper);
      var scene3D = new Three.Scene();

      //RENDERER
      this.renderer.setClearColor(new Three.Color(SharedStyle.COLORS.white));
      this.renderer.setSize(this.width, this.height);

      // LOAD DATA
      var planData = (0, _sceneCreator.parseData)(data, actions, this.context.catalog);
      scene3D.add(planData.plan);
      scene3D.add(planData.grid);
      var aspectRatio = this.width / this.height;
      var camera = new Three.PerspectiveCamera(45, aspectRatio, 1, 300000);
      scene3D.add(camera);

      // Set position for the camera
      var cameraPositionX = -(planData.boundingBox.max.x - planData.boundingBox.min.x) / 2;
      var cameraPositionY = (planData.boundingBox.max.y - planData.boundingBox.min.y) / 2 * 10;
      var cameraPositionZ = (planData.boundingBox.max.z - planData.boundingBox.min.z) / 2;
      camera.position.set(cameraPositionX, cameraPositionY, cameraPositionZ);
      camera.up = new Three.Vector3(0, 1, 0);

      // HELPER AXIS
      // let axisHelper = new Three.AxisHelper(100);
      // scene3D.add(axisHelper);

      // LIGHT
      var light = new Three.AmbientLight(0xafafaf); // soft white light
      scene3D.add(light);

      // Add another light

      var spotLight1 = new Three.SpotLight(SharedStyle.COLORS.white, 0.3);
      spotLight1.position.set(cameraPositionX, cameraPositionY, cameraPositionZ);
      scene3D.add(spotLight1);

      // OBJECT PICKING
      var toIntersect = [planData.plan];
      var mouse = new Three.Vector2();
      var raycaster = new Three.Raycaster();
      this.mouseDownEvent = function (event) {
        _this2.lastMousePosition.x = event.offsetX / _this2.width * 2 - 1;
        _this2.lastMousePosition.y = -event.offsetY / _this2.height * 2 + 1;
      };
      this.mouseUpEvent = function (event) {
        // event.preventDefault();

        mouse.x = event.offsetX / _this2.width * 2 - 1;
        mouse.y = -(event.offsetY / _this2.height) * 2 + 1;
        if (Math.abs(mouse.x - _this2.lastMousePosition.x) <= 0.02 && Math.abs(mouse.y - _this2.lastMousePosition.y) <= 0.02) {
          raycaster.setFromCamera(mouse, camera);
          var intersects = raycaster.intersectObjects(toIntersect, true);
          if (intersects.length > 0 && !isNaN(intersects[0].distance)) {
            intersects[0].object.interact && intersects[0].object.interact();
          } else {
            _this2.context.projectActions.unselectAll();
          }
        }
      };
      this.renderer.domElement.addEventListener("mousedown", this.mouseDownEvent);
      this.renderer.domElement.addEventListener("mouseup", this.mouseUpEvent);
      this.renderer.domElement.style.display = "block";

      // add the output of the renderer to the html element
      canvasWrapper.appendChild(this.renderer.domElement);

      // create orbit controls
      var orbitController = new _orbitControls["default"](camera, this.renderer.domElement);
      var spotLightTarget = new Three.Object3D();
      spotLightTarget.name = "spotLightTarget";
      spotLightTarget.position.set(orbitController.target.x, orbitController.target.y, orbitController.target.z);
      scene3D.add(spotLightTarget);
      spotLight1.target = spotLightTarget;
      var render = function render() {
        orbitController.update();
        spotLight1.position.set(camera.position.x, camera.position.y, camera.position.z);
        spotLightTarget.position.set(orbitController.target.x, orbitController.target.y, orbitController.target.z);
        camera.updateMatrix();
        camera.updateMatrixWorld();
        for (var elemID in planData.sceneGraph.LODs) {
          planData.sceneGraph.LODs[elemID].update(camera);
        }
        _this2.renderer.render(scene3D, camera);
        _this2.renderingID = requestAnimationFrame(render);
      };
      render();
      this.orbitControls = orbitController;
      this.camera = camera;
      this.scene3D = scene3D;
      this.planData = planData;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cancelAnimationFrame(this.renderingID);
      this.orbitControls.dispose();
      this.renderer.domElement.removeEventListener("mousedown", this.mouseDownEvent);
      this.renderer.domElement.removeEventListener("mouseup", this.mouseUpEvent);
      (0, _threeMemoryCleaner.disposeScene)(this.scene3D);
      this.scene3D.remove(this.planData.plan);
      this.scene3D.remove(this.planData.grid);
      this.scene3D = null;
      this.planData = null;
      this.camera = null;
      this.orbitControls = null;
      this.renderer.renderLists.dispose();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var width = nextProps.width,
        height = nextProps.height;
      var actions = {
        areaActions: this.context.areaActions,
        holesActions: this.context.holesActions,
        itemsActions: this.context.itemsActions,
        linesActions: this.context.linesActions,
        projectActions: this.context.projectActions
      };
      this.width = width;
      this.height = height;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      if (nextProps.state.scene !== this.props.state.scene) {
        var changedValues = (0, _immutablediff["default"])(this.props.state.scene, nextProps.state.scene);
        (0, _sceneCreator.updateScene)(this.planData, nextProps.state.scene, this.props.state.scene, changedValues.toJS(), actions, this.context.catalog);
      }
      this.renderer.setSize(width, height);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: "canvasWrapper"
      });
    }
  }]);
}(_react["default"].Component);
Scene3DViewer.propTypes = {
  state: _propTypes["default"].object.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired
};
Scene3DViewer.contextTypes = {
  areaActions: _propTypes["default"].object.isRequired,
  holesActions: _propTypes["default"].object.isRequired,
  itemsActions: _propTypes["default"].object.isRequired,
  linesActions: _propTypes["default"].object.isRequired,
  projectActions: _propTypes["default"].object.isRequired,
  catalog: _propTypes["default"].object
};