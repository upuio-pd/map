"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _export = require("./properties/export");
var _constants = require("../constants");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Catalog = exports["default"] = /*#__PURE__*/function () {
  function Catalog() {
    var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.UNIT_CENTIMETER;
    _classCallCheck(this, Catalog);
    this.elements = {};
    this.categories = {
      root: {
        name: 'root',
        label: '/',
        elements: [],
        categories: []
      }
    };
    this.propertyTypes = {};
    this.unit = unit;
    this.registerMultiplePropertyType([['color', _export.PropertyColor, _export.PropertyColor], ['enum', _export.PropertyEnum, _export.PropertyEnum], ['string', _export.PropertyString, _export.PropertyString], ['number', _export.PropertyNumber, _export.PropertyNumber], ['length-measure', _export.PropertyLengthMeasure, _export.PropertyLengthMeasure], ['toggle', _export.PropertyToggle, _export.PropertyToggle], ['checkbox', _export.PropertyCheckbox, _export.PropertyCheckbox], ['hidden', _export.PropertyHidden, _export.PropertyHidden], ['read-only', _export.PropertyReadOnly, _export.PropertyReadOnly]]);
  }

  /** @description Get catalog's element
   *  @param {string} type Element's type
   *  @return {?object} Element
  */
  return _createClass(Catalog, [{
    key: "getElement",
    value: function getElement(type) {
      if (this.hasElement(type)) {
        return this.elements[type];
      }
      throw new Error("Element ".concat(type, " does not exist in catalog"));
    }

    /** @description Get catalog category
     *  @param {string} categoryName Name of category
     *  @return {object} Category
    */
  }, {
    key: "getCategory",
    value: function getCategory(categoryName) {
      if (this.hasCategory(categoryName)) {
        return this.categories[categoryName];
      }
      throw new Error("Category ".concat(categoryName, " does not exist in catalog"));
    }

    /** @description Return type of a specfied property
     *  @param {string} type Property type
     *  @return {?object} Property
    */
  }, {
    key: "getPropertyType",
    value: function getPropertyType(type) {
      if (this.propertyTypes.hasOwnProperty(type)) {
        return this.propertyTypes[type];
      }
      throw new Error("Element ".concat(type, " does not exist in catalog"));
    }

    /** @description Register a new element
     *  @param {object} json Element structure
     *  @return {void}
    */
  }, {
    key: "registerElement",
    value: function registerElement(json) {
      json.properties = json.properties || {};
      if (this.validateElement(json)) {
        this.elements[json.name] = json;
        this.categories.root.elements.push(this.elements[json.name]);
      }
    }

    /** @description Register multiple elements
     *  @param {array} [elementArray] Array of elements
     *  @return {void}
    */
  }, {
    key: "registerMultipleElements",
    value: function registerMultipleElements(elementArray) {
      var _this = this;
      elementArray.forEach(function (el) {
        return _this.registerElement(el);
      });
    }

    /** @description Register a new property
     *  @param {string} type Type of property
     *  @param {object} Viewer Property viewer component
     *  @param {object} Editor Property editor component
     *  @return {void}
    */
  }, {
    key: "registerPropertyType",
    value: function registerPropertyType(type, Viewer, Editor) {
      this.propertyTypes[type] = {
        type: type,
        Viewer: Viewer,
        Editor: Editor
      };
    }

    /** @description Register multiple property
     *  @param {array} propertyTypeArray Array of properties
     *  @return {void}
    */
  }, {
    key: "registerMultiplePropertyType",
    value: function registerMultiplePropertyType(propertyTypeArray) {
      var _this2 = this;
      propertyTypeArray.forEach(function (el) {
        return _this2.registerPropertyType.apply(_this2, _toConsumableArray(el));
      });
    }

    /** @description Validate an element
     *  @param {object} json Element's structure
     *  @return {?boolean}
    */
  }, {
    key: "validateElement",
    value: function validateElement(json) {
      if (!json.hasOwnProperty('name')) throw new Error('Element not valid');
      var name = json.name;
      if (!json.hasOwnProperty('prototype')) throw new Error("Element ".concat(name, " doesn't have prototype"));
      if (!json.hasOwnProperty('info')) throw new Error("Element ".concat(name, " doesn't have info"));
      if (!json.info.hasOwnProperty('tag')) throw new Error("Element ".concat(name, " doesn't have tag"));
      if (!json.info.hasOwnProperty('description')) throw new Error("Element ".concat(name, " doesn't have description"));
      if (!json.info.hasOwnProperty('image')) throw new Error("Element ".concat(name, " doesn't have image"));
      if (!json.hasOwnProperty('render2D')) throw new Error("Element ".concat(name, " doesn't have render2D handler"));
      if (!json.hasOwnProperty('render3D')) throw new Error("Element ".concat(name, " doesn't have render3D handler"));
      if (!json.hasOwnProperty('properties')) throw new Error("Element ".concat(name, " doesn't have properties"));
      for (var propertyName in json.properties) {
        var propertyConfigs = json.properties[propertyName];
        if (!propertyConfigs.hasOwnProperty('type')) throw new Error("Element ".concat(name, ", Property ").concat(propertyName, " doesn't have type"));
        if (!propertyConfigs.hasOwnProperty('defaultValue')) throw new Error("Element ".concat(name, ", Property ").concat(propertyName, " doesn't have defaultValue"));
      }
      return true;
    }

    /** @description Check if catalog has element
     *  @param {string} type Element's type
     *  @return {boolean}
    */
  }, {
    key: "hasElement",
    value: function hasElement(type) {
      return this.elements.hasOwnProperty(type);
    }

    /** @description Register a new category
     *  @param {string} name Name of category
     *  @param {string} label Label of category
     *  @param {array} [childs] Category's childs
     *  @return {?object} Registered category
    */
  }, {
    key: "registerCategory",
    value: function registerCategory(name, label, childs) {
      var _this3 = this;
      if (this.validateCategory(name, label)) {
        this.categories[name] = {
          name: name,
          label: label,
          categories: [],
          elements: []
        };
        this.categories.root.categories.push(this.categories[name]);
        if (childs && childs.length) {
          childs.forEach(function (el) {
            return _this3.addToCategory(name, el);
          });
        }
        return this.categories[name];
      }
      return null;
    }

    /** @description Add an element to the specified category
     *  @param {string} name Name of category
     *  @param {object} child Element's structure
     *  @return {?void}
    */
  }, {
    key: "addToCategory",
    value: function addToCategory(name, child) {
      if (this.hasElement(child.name)) {
        this.categories[name].elements.push(child);
        this.categories.root.elements.splice(this.categories.root.elements.indexOf(child), 1);
      } else if (this.hasCategory(child.name)) {
        this.categories[name].categories.push(child);
        this.categories.root.categories.splice(this.categories.root.categories.indexOf(child), 1);
      } else {
        throw new Error("child ".concat(child, " is either category nor element"));
      }
    }

    /** @description Check if category contain element
     *  @param {string} categoryName Name of category
     *  @param {string} elementName Name of element
     *  @return {boolean}
    */
  }, {
    key: "categoryHasElement",
    value: function categoryHasElement(categoryName, elementName) {
      return this.hasCategory(categoryName) && this.categories[categoryName].elements.some(function (el) {
        return el.name === elementName;
      });
    }

    /** @description Validate a category
     *  @param {string} name Name of category
     *  @param {string} label Label of category
     *  @return {?boolean}
    */
  }, {
    key: "validateCategory",
    value: function validateCategory(name, label) {
      if (!name) {
        throw new Error('Category has undefined name');
      }
      if (name === '') {
        throw new Error('Category has empty name');
      }
      if (this.hasCategory(name)) {
        throw new Error('Category has already been registered');
      }
      return true;
    }

    /** @description Verify if catalog already contain a category with specified name
     *  @param {string} categoryName Name of category
     *  @return {boolean}
    */
  }, {
    key: "hasCategory",
    value: function hasCategory(categoryName) {
      return this.categories.hasOwnProperty(categoryName);
    }
  }]);
}();