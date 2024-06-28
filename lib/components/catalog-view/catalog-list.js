"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _catalogItem = _interopRequireDefault(require("./catalog-item"));
var _catalogBreadcrumb = _interopRequireDefault(require("./catalog-breadcrumb"));
var _catalogPageItem = _interopRequireDefault(require("./catalog-page-item"));
var _catalogTurnBackPageItem = _interopRequireDefault(require("./catalog-turn-back-page-item"));
var _contentContainer = _interopRequireDefault(require("../style/content-container"));
var _contentTitle = _interopRequireDefault(require("../style/content-title"));
var SharedStyle = _interopRequireWildcard(require("../../shared-style"));
var _md = require("react-icons/md");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var containerStyle = {
  position: "absolute",
  width: "100vw",
  height: "100vh",
  backgroundColor: "#FFF",
  padding: "1em",
  overflowY: "auto",
  overflowX: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10
};
var itemsStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(14em, 1fr))",
  gridGap: "10px",
  marginTop: "1em"
};
var searchContainer = {
  width: "100%",
  height: "3em",
  padding: "0.625em",
  background: "#f7f7f9",
  border: "1px solid #e1e1e8",
  cursor: "pointer",
  position: "relative",
  boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.11), 0 1px 4px 0 rgba(0, 0, 0, 0.11)",
  borderRadius: "2px",
  transition: "all .2s ease-in-out",
  WebkitTransition: "all .2s ease-in-out",
  marginBottom: "1em"
};
var searchText = {
  width: "8em",
  display: "inline-block"
};
var searchInput = {
  width: "calc( 100% - 10em )",
  height: "2em",
  margin: "0",
  padding: "0 1em",
  border: "1px solid #EEE"
};
var historyContainer = _objectSpread(_objectSpread({}, searchContainer), {}, {
  padding: "0.2em 0.625em"
});
var historyElementStyle = {
  width: "auto",
  height: "2em",
  lineHeight: "2em",
  textAlign: "center",
  borderRadius: "1em",
  display: "inline-block",
  cursor: "pointer",
  backgroundColor: SharedStyle.PRIMARY_COLOR.alt,
  color: SharedStyle.PRIMARY_COLOR.text_main,
  textTransform: "capitalize",
  margin: "0.25em",
  padding: "0 1em"
};
var CatalogList = exports["default"] = /*#__PURE__*/function (_Component) {
  function CatalogList(props, context) {
    var _this;
    _classCallCheck(this, CatalogList);
    _this = _callSuper(this, CatalogList, [props]);
    var page = props.state.catalog.page;
    var currentCategory = context.catalog.getCategory(page);
    var categoriesToDisplay = currentCategory.categories;
    var elementsToDisplay = currentCategory.elements.filter(function (element) {
      return element.info.visibility ? element.info.visibility.catalog : true;
    });
    _this.state = {
      categories: currentCategory.categories,
      elements: elementsToDisplay,
      matchString: "",
      matchedElements: []
    };
    return _this;
  }
  _inherits(CatalogList, _Component);
  return _createClass(CatalogList, [{
    key: "flattenCategories",
    value: function flattenCategories(categories) {
      var toRet = [];
      for (var x = 0; x < categories.length; x++) {
        var curr = categories[x];
        toRet = toRet.concat(curr.elements);
        if (curr.categories.length) toRet = toRet.concat(this.flattenCategories(curr.categories));
      }
      return toRet;
    }
  }, {
    key: "matcharray",
    value: function matcharray(text) {
      var array = this.state.elements.concat(this.flattenCategories(this.state.categories));
      var filtered = [];
      if (text != "") {
        var regexp = new RegExp(text, "i");
        for (var i = 0; i < array.length; i++) {
          if (regexp.test(array[i].info.title)) {
            filtered.push(array[i]);
          }
        }
      }
      this.setState({
        matchString: text,
        matchedElements: filtered
      });
    }
  }, {
    key: "select",
    value: function select(element) {
      switch (element.prototype) {
        case "lines":
          this.context.linesActions.selectToolDrawingLine(element.name);
          break;
        case "items":
          this.context.itemsActions.selectToolDrawingItem(element.name);
          break;
        case "holes":
          this.context.holesActions.selectToolDrawingHole(element.name);
          break;
      }
      this.context.projectActions.pushLastSelectedCatalogElementToHistory(element);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var page = this.props.state.catalog.page;
      var currentCategory = this.context.catalog.getCategory(page);
      var categoriesToDisplay = currentCategory.categories;
      var elementsToDisplay = currentCategory.elements.filter(function (element) {
        return element.info.visibility ? element.info.visibility.catalog : true;
      });
      var breadcrumbComponent = null;
      if (page !== "root") {
        var breadcrumbsNames = [];
        this.props.state.catalog.path.forEach(function (pathName) {
          breadcrumbsNames.push({
            name: _this2.context.catalog.getCategory(pathName).label,
            action: function action() {
              return projectActions.goBackToCatalogPage(pathName);
            }
          });
        });
        breadcrumbsNames.push({
          name: currentCategory.label,
          action: ""
        });
        breadcrumbComponent = /*#__PURE__*/_react["default"].createElement(_catalogBreadcrumb["default"], {
          names: breadcrumbsNames
        });
      }
      var pathSize = this.props.state.catalog.path.size;
      var turnBackButton = pathSize > 0 ? /*#__PURE__*/_react["default"].createElement(_catalogTurnBackPageItem["default"], {
        key: pathSize,
        page: this.context.catalog.categories[this.props.state.catalog.path.get(pathSize - 1)]
      }) : null;
      var selectedHistory = this.props.state.get("selectedElementsHistory");
      var selectedHistoryElements = selectedHistory.map(function (el, ind) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: ind,
          style: historyElementStyle,
          title: el.name,
          onClick: function onClick() {
            return _this2.select(el);
          }
        }, el.name);
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread(_objectSpread({}, containerStyle), this.props.style)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: "flex",
          margin: "auto",
          flexDirection: "column",
          width: 450,
          height: "100%"
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5px",
          paddingTop: 5,
          paddingBottom: 5
        }
      }, /*#__PURE__*/_react["default"].createElement("h5", {
        className: "text-2xl font-bold font-manrope text-secondary",
        style: {
          fontSize: 25,
          padding: 0,
          margin: 0
        }
      }, "E\u015Fyalar"), /*#__PURE__*/_react["default"].createElement("button", {
        className: "flex justify-center w-8 min-w-11 min-h-11 h-11 bg-ghost-default text-primary1",
        style: {
          borderRadius: "100%",
          height: 45,
          width: 45,
          border: 0,
          backgroundColor: "#8E43E7",
          color: "white",
          fontSize: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer"
        }
      }, /*#__PURE__*/_react["default"].createElement(_md.MdClose, null))), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          marginBottom: "auto",
          marginTop: 20
        }
      }, /*#__PURE__*/_react["default"].createElement("input", {
        className: "relative block w-full p-4 text-base font-medium bg-white border-black border-solid text-primary-default border-primary border-default font-manrope focus:outline-none rounded rounded-12 ",
        onChange: function onChange(e) {
          _this2.matcharray(e.target.value);
        },
        style: {
          width: "100%",
          padding: 5,
          paddingBottom: 10,
          paddingTop: 10,
          borderRadius: 5,
          border: "1px solid #CCCCCC"
        }
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: itemsStyle
      }, this.state.matchString === "" ? [turnBackButton, Object.values(this.state.categories).map(function (category) {
        return category.elements.map(function (elem, i) {
          return /*#__PURE__*/_react["default"].createElement(_catalogItem["default"], {
            key: elem.name,
            element: elem
          });
        });
      }), elementsToDisplay.map(function (elem) {
        return /*#__PURE__*/_react["default"].createElement(_catalogItem["default"], {
          key: elem.name,
          element: elem
        });
      })] : this.state.matchedElements.map(function (elem) {
        return /*#__PURE__*/_react["default"].createElement(_catalogItem["default"], {
          key: elem.name,
          element: elem
        });
      }))));
    }
  }]);
}(_react.Component);
CatalogList.propTypes = {
  state: _propTypes["default"].object.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  style: _propTypes["default"].object
};
CatalogList.contextTypes = {
  catalog: _propTypes["default"].object.isRequired,
  translator: _propTypes["default"].object.isRequired,
  itemsActions: _propTypes["default"].object.isRequired,
  linesActions: _propTypes["default"].object.isRequired,
  holesActions: _propTypes["default"].object.isRequired,
  projectActions: _propTypes["default"].object.isRequired
};