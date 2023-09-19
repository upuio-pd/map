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
var _immutablediff = _interopRequireDefault(require("immutablediff"));
var _pointerLockNavigation = require("./pointer-lock-navigation");
var _firstPersonControls = require("./libs/first-person-controls");
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Viewer3DFirstPerson = /*#__PURE__*/function (_React$Component) {
  _inherits(Viewer3DFirstPerson, _React$Component);
  var _super = _createSuper(Viewer3DFirstPerson);
  function Viewer3DFirstPerson(props) {
    var _this;
    _classCallCheck(this, Viewer3DFirstPerson);
    _this = _super.call(this, props);
    _this.width = props.width;
    _this.height = props.height;
    _this.stopRendering = false;
    _this.renderer = window.__threeRenderer || new Three.WebGLRenderer({
      preserveDrawingBuffer: true
    });
    window.__threeRenderer = _this.renderer;
    return _this;
  }
  _createClass(Viewer3DFirstPerson, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      /** Variables for movement control **/
      var prevTime = performance.now();
      var velocity = new Three.Vector3();
      var direction = new Three.Vector3();
      var moveForward = false;
      var moveBackward = false;
      var moveLeft = false;
      var moveRight = false;
      var canJump = false;
      var catalog = this.context.catalog;
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

      // As I need to show the pointer above all scene objects, I use this workaround http://stackoverflow.com/a/13309722
      var sceneOnTop = new Three.Scene();

      //RENDERER
      this.renderer.setClearColor(new Three.Color(SharedStyle.COLORS.white));
      this.renderer.setSize(this.width, this.height);

      // LOAD DATA
      this.planData = (0, _sceneCreator.parseData)(data, actions, catalog);
      scene3D.add(this.planData.plan);

      // CAMERA
      var aspectRatio = this.width / this.height;
      var camera = new Three.PerspectiveCamera(45, aspectRatio, 0.1, 300000);
      sceneOnTop.add(camera); // The pointer is on the camera so I show it above all

      // Set position for the camera
      camera.position.set(0, 0, 0);
      camera.up = new Three.Vector3(0, 1, 0);

      // HELPER AXIS
      // let axisHelper = new Three.AxisHelper(100);
      // scene3D.add(axisHelper);

      // LIGHT
      var light = new Three.AmbientLight(0xafafaf); // soft white light
      scene3D.add(light);

      // Add another light
      var pointLight = new Three.PointLight(SharedStyle.COLORS.white, 0.4, 1000);
      pointLight.position.set(0, 0, 0);
      scene3D.add(pointLight);

      // POINTER LOCK

      document.body.requestPointerLock = document.body.requestPointerLock || document.body.mozRequestPointerLock || document.body.webkitRequestPointerLock;
      document.body.requestPointerLock();
      var _initPointerLock = (0, _pointerLockNavigation.initPointerLock)(camera, this.renderer.domElement),
        controls = _initPointerLock.controls,
        pointerlockChangeEvent = _initPointerLock.pointerlockChangeEvent,
        requestPointerLockEvent = _initPointerLock.requestPointerLockEvent;
      this.controls = controls;
      this.pointerlockChangeListener = pointerlockChangeEvent;
      this.requestPointerLockEvent = requestPointerLockEvent;

      /* Set user initial position */
      var humanHeight = 170; // 170 cm

      var yInitialPosition = this.planData.boundingBox.min.y + (this.planData.boundingBox.min.y - this.planData.boundingBox.max.y) / 2 + humanHeight;
      this.controls.getObject().position.set(-50, yInitialPosition, -100);
      sceneOnTop.add(this.controls.getObject()); // Add the pointer lock controls to the scene that will be rendered on top

      // Add move controls on the page
      this.keyDownEvent = function (event) {
        var moveResult = (0, _firstPersonControls.firstPersonOnKeyDown)(event, moveForward, moveLeft, moveBackward, moveRight, canJump, velocity);
        moveForward = moveResult.moveForward;
        moveLeft = moveResult.moveLeft;
        moveBackward = moveResult.moveBackward;
        moveRight = moveResult.moveRight;
        canJump = moveResult.canJump;
      };
      this.keyUpEvent = function (event) {
        var moveResult = (0, _firstPersonControls.firstPersonOnKeyUp)(event, moveForward, moveLeft, moveBackward, moveRight, canJump);
        moveForward = moveResult.moveForward;
        moveLeft = moveResult.moveLeft;
        moveBackward = moveResult.moveBackward;
        moveRight = moveResult.moveRight;
        canJump = moveResult.canJump;
      };
      document.addEventListener("keydown", this.keyDownEvent);
      document.addEventListener("keyup", this.keyUpEvent);

      // Add a pointer to the scene

      var pointer = new Three.Object3D();
      pointer.name = "pointer";
      var pointerMaterial = new Three.MeshBasicMaterial({
        depthTest: false,
        depthWrite: false,
        color: SharedStyle.COLORS.black
      });
      var pointerGeometry1 = new Three.Geometry();
      pointerGeometry1.vertices.push(new Three.Vector3(-10, 0, 0));
      pointerGeometry1.vertices.push(new Three.Vector3(10, 0, 0));
      var linePointer1 = new Three.Line(pointerGeometry1, pointerMaterial);
      linePointer1.position.z -= 100;
      var pointerGeometry2 = new Three.Geometry();
      pointerGeometry2.vertices.push(new Three.Vector3(0, 10, 0));
      pointerGeometry2.vertices.push(new Three.Vector3(0, -10, 0));
      var linePointer2 = new Three.Line(pointerGeometry2, pointerMaterial);
      linePointer2.renderDepth = 1e20;
      linePointer2.position.z -= 100;
      var pointerGeometry3 = new Three.Geometry();
      pointerGeometry3.vertices.push(new Three.Vector3(-1, 1, 0));
      pointerGeometry3.vertices.push(new Three.Vector3(1, 1, 0));
      pointerGeometry3.vertices.push(new Three.Vector3(1, -1, 0));
      pointerGeometry3.vertices.push(new Three.Vector3(-1, -1, 0));
      pointerGeometry3.vertices.push(new Three.Vector3(-1, 1, 0));
      var linePointer3 = new Three.Line(pointerGeometry3, pointerMaterial);
      linePointer3.position.z -= 100;
      pointer.add(linePointer1);
      pointer.add(linePointer2);
      pointer.add(linePointer3);
      camera.add(pointer); // Add the pointer to the camera

      // OBJECT PICKING
      var toIntersect = [this.planData.plan];
      var mouseVector = new Three.Vector2(0, 0);
      var raycaster = new Three.Raycaster();
      this.firstPersonMouseDown = function (event) {
        // First of all I check if controls are enabled

        if (_this2.controls.enabled) {
          // event.preventDefault();

          /* Per avere la direzione da assegnare al raycaster, chiamo il metodo getDirection di PointerLockControls,
           * che restituisce una funzione che a sua volta prende un vettore, vi scrive i valori degli oggetti
           * pitch e yaw e lo restituisce */

          raycaster.setFromCamera(mouseVector, camera);
          var intersects = raycaster.intersectObjects(toIntersect, true);
          if (intersects.length > 0 && !isNaN(intersects[0].distance)) {
            intersects[0].object.interact && intersects[0].object.interact();
          } else {
            _this2.context.projectActions.unselectAll();
          }
        }
      };
      document.addEventListener("mousedown", this.firstPersonMouseDown, false);
      this.renderer.domElement.style.display = "block";

      // add the output of the renderer to the html element
      canvasWrapper.appendChild(this.renderer.domElement);
      this.renderer.autoClear = false;
      var render = function render() {
        if (!_this2.stopRendering) {
          yInitialPosition = _this2.planData.boundingBox.min.y + humanHeight;
          var multiplier = 5;
          var time = performance.now();
          var delta = (time - prevTime) / 1000 * multiplier;
          velocity.x -= velocity.x * 10.0 * delta;
          velocity.z -= velocity.z * 10.0 * delta;
          velocity.y -= 9.8 * 100.0 * delta / multiplier; // 100.0 = mass

          direction.z = Number(moveForward) - Number(moveBackward);
          direction.x = Number(moveLeft) - Number(moveRight);
          direction.normalize(); // this ensures consistent movements in all directions

          if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
          if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;
          _this2.controls.getObject().translateX(velocity.x * delta);
          _this2.controls.getObject().translateY(velocity.y * delta);
          _this2.controls.getObject().translateZ(velocity.z * delta);
          if (_this2.controls.getObject().position.y < yInitialPosition) {
            velocity.y = 0;
            _this2.controls.getObject().position.y = yInitialPosition;
            canJump = true;
          }
          prevTime = time;

          // Set light position
          var controlObjectPosition = _this2.controls.getObject().position;
          pointLight.position.set(controlObjectPosition.x, controlObjectPosition.y, controlObjectPosition.z);
          for (var elemID in _this2.planData.sceneGraph.LODs) {
            _this2.planData.sceneGraph.LODs[elemID].update(camera);
          }
          _this2.renderer.clear(); // clear buffers
          _this2.renderer.render(scene3D, camera); // render scene 1
          _this2.renderer.clearDepth(); // clear depth buffer
          _this2.renderer.render(sceneOnTop, camera); // render scene 2

          requestAnimationFrame(render);
        }
      };
      render();
      this.camera = camera;
      this.scene3D = scene3D;
      this.sceneOnTop = sceneOnTop;
      // this.planData = planData;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopRendering = true;
      this.renderer.autoClear = true;
      document.removeEventListener("mousedown", this.firstPersonMouseDown);
      document.removeEventListener("keydown", this.keyDownEvent);
      document.removeEventListener("keyup", this.keyUpEvent);
      document.removeEventListener("pointerlockchange", this.pointerlockChangeEvent);
      document.removeEventListener("mozpointerlockchange", this.pointerlockChangeEvent);
      document.removeEventListener("webkitpointerlockchange", this.pointerlockChangeEvent);
      this.renderer.domElement.removeEventListener("click", this.requestPointerLockEvent);
      (0, _threeMemoryCleaner.disposeScene)(this.scene3D);
      this.scene3D.remove(this.planData.plan);
      this.scene3D = null;
      this.planData = null;
      this.renderer.renderLists.dispose();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var width = nextProps.width,
        height = nextProps.height;
      var camera = this.camera,
        renderer = this.renderer,
        scene3D = this.scene3D,
        sceneOnTop = this.sceneOnTop,
        planData = this.planData;
      var actions = {
        areaActions: this.context.areaActions,
        holesActions: this.context.holesActions,
        itemsActions: this.context.itemsActions,
        linesActions: this.context.linesActions,
        projectActions: this.context.projectActions
      };
      this.width = width;
      this.height = height;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      if (nextProps.scene !== this.props.state.scene) {
        var changedValues = (0, _immutablediff["default"])(this.props.state.scene, nextProps.state.scene);
        (0, _sceneCreator.updateScene)(planData, nextProps.state.scene, this.props.state.scene, changedValues.toJS(), actions, this.context.catalog);
      }
      renderer.setSize(width, height);
      renderer.clear(); // clear buffers
      renderer.render(scene3D, camera); // render scene 1
      renderer.clearDepth(); // clear depth buffer
      renderer.render(sceneOnTop, camera); // render scene 2
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: "canvasWrapper"
      });
    }
  }]);
  return Viewer3DFirstPerson;
}(_react["default"].Component);
exports["default"] = Viewer3DFirstPerson;
Viewer3DFirstPerson.propTypes = {
  state: _propTypes["default"].object.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired
};
Viewer3DFirstPerson.contextTypes = {
  areaActions: _propTypes["default"].object.isRequired,
  holesActions: _propTypes["default"].object.isRequired,
  itemsActions: _propTypes["default"].object.isRequired,
  linesActions: _propTypes["default"].object.isRequired,
  projectActions: _propTypes["default"].object.isRequired,
  catalog: _propTypes["default"].object
};