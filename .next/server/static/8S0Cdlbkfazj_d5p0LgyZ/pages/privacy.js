module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return boxTitle_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return boxTitle_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return boxTitle_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return headerTitle_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return headerTitle_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return headerTitle_3; });
var boxTitle_1 = 'General settings';
var boxTitle_2 = 'Change password';
var boxTitle_3 = 'User picture';
var headerTitle_1 = 'Account settings';
var headerTitle_2 = 'Privacy';
var headerTitle_3 = 'Terms And Conditions';

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(4);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1);

// EXTERNAL MODULE: ./shared/utils/stringConstants.js
var stringConstants = __webpack_require__(3);

// CONCATENATED MODULE: ./components/UI/FormElement/index.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var FormElement_FormElement = function FormElement(_ref) {
  var id = _ref.id,
      formData = _ref.formData,
      _onChange = _ref.onChange;

  var showErrorHandler = function showErrorHandler() {
    var errorMsg = external_react_default.a.createElement("div", {
      style: {
        color: '#dc143c'
      }
    }, formData.validation && !formData.isValid ? formData.validationMsg : null);
    return errorMsg;
  };

  var formTempleteHandler = function formTempleteHandler() {
    var formTemplete = null;

    switch (formData.elementType) {
      case 'input':
        formTemplete = external_react_default.a.createElement("div", {
          style: {
            marginBottom: '20px'
          }
        }, formData.showLabel ? external_react_default.a.createElement("div", null) : null, external_react_default.a.createElement(external_semantic_ui_react_["Input"], _extends({
          size: "large",
          fluid: true
        }, formData.config, {
          value: formData.value,
          onChange: function onChange(event) {
            return _onChange({
              event: event,
              id: id
            });
          },
          onBlur: function onBlur(event) {
            return _onChange({
              event: event,
              id: id,
              blur: true
            });
          }
        })), showErrorHandler());
        break;

      default:
        formTemplete = null;
        break;
    }

    return formTemplete;
  };

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, formTempleteHandler());
};

/* harmony default export */ var UI_FormElement = (FormElement_FormElement);
// CONCATENATED MODULE: ./components/UI/Box/index.js







var Box_Box = function Box(props) {
  return external_react_default.a.createElement("div", {
    className: "jsx-165851275" + " " + "box"
  }, external_react_default.a.createElement("div", {
    className: "jsx-165851275" + " " + "alert"
  }, props.title ? external_react_default.a.createElement("h2", {
    className: "jsx-165851275"
  }, props.title) : null, props.text ? external_react_default.a.createElement("p", {
    className: "jsx-165851275"
  }, props.text) : null, props.formData && props.title === stringConstants["a" /* boxTitle_1 */] ? external_react_default.a.createElement("div", {
    className: "jsx-165851275"
  }, external_react_default.a.createElement(UI_FormElement, {
    id: props.formData.txtName.config.name,
    formData: props.formData.txtName,
    onChange: function onChange(element) {
      return props.onChange(element);
    }
  }), external_react_default.a.createElement(UI_FormElement, {
    id: props.formData.txtEmail.config.name,
    formData: props.formData.txtEmail,
    onChange: function onChange(element) {
      return props.onChange(element);
    }
  })) : null, props.formData && props.title === stringConstants["b" /* boxTitle_2 */] ? external_react_default.a.createElement("div", {
    className: "jsx-165851275"
  }, external_react_default.a.createElement(UI_FormElement, {
    id: props.formData.txtCurrentPassword.config.name,
    formData: props.formData.txtCurrentPassword,
    onChange: function onChange(element) {
      return props.onChange(element);
    }
  }), external_react_default.a.createElement(UI_FormElement, {
    id: props.formData.txtNewPassword.config.name,
    formData: props.formData.txtNewPassword,
    onChange: function onChange(element) {
      return props.onChange(element);
    }
  }), external_react_default.a.createElement(UI_FormElement, {
    id: props.formData.txtConfirmPassword.config.name,
    formData: props.formData.txtConfirmPassword,
    onChange: function onChange(element) {
      return props.onChange(element);
    }
  }), external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
    content: props.hasError ? 'Form Error' : 'Update password',
    color: props.hasError ? 'red' : 'blue',
    onClick: props.show(),
    disabled: props.hasError
  })) : null, props.title === stringConstants["c" /* boxTitle_3 */] ? external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
    className: "jsx-165851275" + " " + "img_wrapper"
  }, external_react_default.a.createElement("div", {
    className: "jsx-165851275" + " " + "div_leftImg"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Image"], {
    src: props.imgUrl,
    size: "small"
  })), external_react_default.a.createElement("div", {
    className: "jsx-165851275"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Image"], {
    src: props.imgUrl,
    size: "mini",
    circular: true,
    verticalAlign: "top"
  }))), external_react_default.a.createElement("div", {
    style: {
      display: 'block',
      marginTop: '10px'
    },
    className: "jsx-165851275"
  }, external_react_default.a.createElement("a", {
    onClick: props.changeUserPic(),
    href: "javascript:void(0)",
    className: "jsx-165851275"
  }, "Change user pic"))) : null, !props.title ? external_react_default.a.createElement("a", {
    onClick: props.show(),
    href: "javascript:void(0)",
    className: "jsx-165851275"
  }, "Delete account") : null), external_react_default.a.createElement(style_default.a, {
    styleId: "165851275",
    css: [".box{padding:20px 0 20px 0;}", ".alert{background-color:#ffffff;}", ".img_wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".div_leftImg{width:70%;}"]
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    imgUrl: state.imgUrl
  };
};

/* harmony default export */ var UI_Box = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(mapStateToProps)(Box_Box));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(4);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Header/index.js





var Header_Headers = function Headers(props) {
  return external_react_default.a.createElement("div", {
    className: "jsx-1268984712" + " " + "wrapper"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    as: "h1"
  }, props.title), external_react_default.a.createElement("div", {
    className: "jsx-1268984712" + " " + "text-right"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Image"], {
    src: props.imgUrl,
    size: "mini",
    circular: true,
    verticalAlign: "top"
  })), external_react_default.a.createElement(style_default.a, {
    styleId: "1268984712",
    css: [".wrapper{padding-top:2rem;}", ".header{float:left;}"]
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    imgUrl: state.imgUrl
  };
};

/* harmony default export */ var Header = (Object(external_react_redux_["connect"])(mapStateToProps)(Header_Headers));
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Footer/index.js




var Footer_Footer = function Footer() {
  return external_react_default.a.createElement("div", {
    className: "jsx-140136961"
  }, external_react_default.a.createElement("footer", {
    className: "jsx-140136961" + " " + "footer"
  }, external_react_default.a.createElement("div", {
    className: "jsx-140136961"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/index"
  }, external_react_default.a.createElement("a", {
    className: "jsx-140136961"
  }, "Home"))), external_react_default.a.createElement("div", {
    className: "jsx-140136961"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/privacy"
  }, external_react_default.a.createElement("a", {
    className: "jsx-140136961"
  }, "Privacy"))), external_react_default.a.createElement("div", {
    className: "jsx-140136961"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/terms"
  }, external_react_default.a.createElement("a", {
    className: "jsx-140136961"
  }, "Terms and Conditions")))), external_react_default.a.createElement(style_default.a, {
    styleId: "140136961",
    css: ["a:hover{-webkit-text-decoration:underline;text-decoration:underline;}", ".footer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-bottom:20px;}", ".footer a{color:#6c757d;}", ".footer div{margin-right:20px;}"]
  }));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./hoc/Layout/index.js






var Layout_Layout = function Layout(props) {
  return external_react_default.a.createElement(external_semantic_ui_react_["Container"], null, external_react_default.a.createElement(Header, {
    title: props.headerTitle
  }), external_react_default.a.createElement(external_semantic_ui_react_["Divider"], null), props.children, external_react_default.a.createElement(external_semantic_ui_react_["Divider"], null), external_react_default.a.createElement(components_Footer, null), external_react_default.a.createElement(style_default.a, {
    styleId: "4031101610",
    css: [".container{background-color:#f7f4f4;}"]
  }));
};

/* harmony default export */ var hoc_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(4);

// EXTERNAL MODULE: ./hoc/Layout/index.js + 2 modules
var Layout = __webpack_require__(8);

// EXTERNAL MODULE: ./components/UI/Box/index.js + 1 modules
var Box = __webpack_require__(6);

// EXTERNAL MODULE: ./shared/utils/stringConstants.js
var stringConstants = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Privacy/index.js





var Privacy_Privacy = function Privacy() {
  return external_react_default.a.createElement(Layout["a" /* default */], {
    headerTitle: stringConstants["e" /* headerTitle_2 */]
  }, external_react_default.a.createElement(Box["a" /* default */], {
    title: stringConstants["e" /* headerTitle_2 */],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }));
};

/* harmony default export */ var components_Privacy = (Privacy_Privacy);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/privacy.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var privacy_PrivacyIndex =
/*#__PURE__*/
function (_Component) {
  _inherits(PrivacyIndex, _Component);

  function PrivacyIndex() {
    _classCallCheck(this, PrivacyIndex);

    return _possibleConstructorReturn(this, _getPrototypeOf(PrivacyIndex).apply(this, arguments));
  }

  _createClass(PrivacyIndex, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css",
        integrity: "sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B",
        crossOrigin: "anonymous"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"
      })), external_react_default.a.createElement(components_Privacy, null));
    }
  }]);

  return PrivacyIndex;
}(external_react_["Component"]);

/* harmony default export */ var privacy = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])()(privacy_PrivacyIndex));

/***/ })
/******/ ]);