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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_USER_PICTURE; });
var CHANGE_USER_PICTURE = 'CHANGE_USER_PICTURE';

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(4);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./store/actions/actionTypes.js
var actionTypes = __webpack_require__(9);

// CONCATENATED MODULE: ./store/actions/user.js

var user_changeUserPic = function changeUserPic(imgUrl) {
  return {
    type: actionTypes["a" /* CHANGE_USER_PICTURE */],
    imgUrl: imgUrl
  };
};
// CONCATENATED MODULE: ./store/actions/index.js

// CONCATENATED MODULE: ./shared/utils/helperFunctions.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var validateFormElement = function validateFormElement(element) {
  var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var result = [true, ''];

  if (element.validation.isValidEmail) {
    var valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(element.value);
    var msg = "".concat(!valid ? 'Please enter valid email.' : '');
    result = !valid ? [valid, msg] : result;
  }

  if (element.validation.confirm) {
    var _valid = element.value.trim() === formData[element.validation.confirm].value;

    var _msg = "".concat(!_valid ? 'Password didn\'t match.' : '');

    result = !_valid ? [_valid, _msg] : result;
  }

  if (element.validation.required) {
    var _valid2 = element.value.trim() !== '';

    var _msg2 = "".concat(!_valid2 ? 'This field is required.' : '');

    result = !_valid2 ? [_valid2, _msg2] : result;
  }

  return result;
};
var bindFormElementValue = function bindFormElementValue(element, formData) {
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var newFormData = _objectSpread({}, formData);

  var newElement = _objectSpread({}, newFormData[element.id]); //


  if (value === '') {
    if (newElement.config.type === 'number') {
      var regex = /^[0-9]*$/;

      if (regex.test(element.event.target.value)) {
        newElement.value = element.event.target.value;
      } else {
        newElement.value = '';
      }
    } else {
      newElement.value = element.event.target.value;
    }
  } else {
    newElement.value = value;
  } //


  var result = validateFormElement(newElement, formData);
  newElement.isValid = result[0];
  newElement.validationMsg = result[1];
  newElement.isTouched = element.blur; //

  newFormData[element.id] = newElement; //

  return newFormData;
};
// EXTERNAL MODULE: ./shared/utils/stringConstants.js
var stringConstants = __webpack_require__(3);

// EXTERNAL MODULE: ./hoc/Layout/index.js + 2 modules
var Layout = __webpack_require__(8);

// EXTERNAL MODULE: ./components/UI/Box/index.js + 1 modules
var Box = __webpack_require__(6);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1);

// CONCATENATED MODULE: ./components/UI/Modal/index.js



var Modal_SemanticModal = function SemanticModal(props) {
  return external_react_default.a.createElement(external_semantic_ui_react_["Modal"], {
    size: props.size,
    open: props.open,
    onClose: props.close,
    centered: false,
    style: {
      height: '20%'
    }
  }, external_react_default.a.createElement(external_semantic_ui_react_["Modal"].Header, null, props.title), external_react_default.a.createElement(external_semantic_ui_react_["Modal"].Content, null, external_react_default.a.createElement("div", null, props.question)), external_react_default.a.createElement(external_semantic_ui_react_["Modal"].Actions, null, external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
    onClick: props.close,
    negative: true
  }, "No"), external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
    onClick: props.close,
    positive: true,
    icon: "checkmark",
    labelPosition: "right",
    content: "Yes"
  })));
};

/* harmony default export */ var Modal = (Modal_SemanticModal);
// CONCATENATED MODULE: ./components/Account/index.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Account_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Account_Account =
/*#__PURE__*/
function (_Component) {
  _inherits(Account, _Component);

  function Account() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Account);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Account)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Account_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      size: 'tiny',
      openDelete: false,
      openUpdate: false,
      formHasError: false,
      isImgUrl_1: true,
      formData: {
        txtName: {
          elementType: 'input',
          value: 'Ian R. Claros',
          config: {
            name: 'txtName',
            type: 'text',
            placeholder: 'Enter your name.',
            maxLength: 50,
            label: 'Full Name'
          },
          validation: {
            required: true
          },
          showLabel: true,
          isValid: false,
          isTouched: false,
          validationMsg: ''
        },
        txtEmail: {
          elementType: 'input',
          value: 'clarosian@yahoo.com',
          config: {
            name: 'txtEmail',
            type: 'email',
            placeholder: 'Enter your email.',
            maxLength: 50,
            label: 'Email'
          },
          validation: {
            required: true,
            isValidEmail: true
          },
          showLabel: true,
          isValid: false,
          isTouched: false,
          validationMsg: ''
        },
        txtCurrentPassword: {
          elementType: 'input',
          value: '123456',
          config: {
            name: 'txtCurrentPassword',
            type: 'password',
            placeholder: 'Enter your current password.',
            maxLength: 50,
            label: 'Current password'
          },
          validation: {
            required: true
          },
          showLabel: true,
          isValid: false,
          isTouched: false,
          validationMsg: ''
        },
        txtNewPassword: {
          elementType: 'input',
          value: '654321',
          config: {
            name: 'txtNewPassword',
            type: 'password',
            placeholder: 'Enter your new password.',
            maxLength: 50,
            label: 'New password'
          },
          validation: {
            required: true
          },
          showLabel: true,
          isValid: false,
          isTouched: false,
          validationMsg: ''
        },
        txtConfirmPassword: {
          elementType: 'input',
          value: '654321',
          config: {
            name: 'txtConfirmPassword',
            type: 'password',
            placeholder: 'Confirm your password.',
            maxLength: 50,
            label: 'confirm password'
          },
          validation: {
            required: true,
            confirm: 'txtNewPassword'
          },
          showLabel: true,
          isValid: false,
          isTouched: false,
          validationMsg: ''
        }
      }
    });

    Account_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeUserPicHandler", function () {
      var imgUrl;
      if (!_this.state.isImgUrl_1) imgUrl = 'https://media.licdn.com/dms/image/C5103AQH5WDn7Y5ImIQ/profile-displayphoto-shrink_100_100/0?e=1548892800&v=beta&t=crZ-OQoJpS37yPA7j-r4Vpd8TKzrTT3bYJaGpQRM-Jk';else imgUrl = 'https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.0-1/p160x160/21728556_1556957637676019_2652855233884577784_n.jpg?_nc_cat=109&_nc_ht=scontent.fmnl6-2.fna&oh=f9cb884fe3b0f759707c318e39e9407f&oe=5C649B82';

      _this.setState(function (prevState) {
        return {
          isImgUrl_1: !prevState.isImgUrl_1
        };
      });

      _this.props.dispatch(user_changeUserPic(imgUrl));
    });

    Account_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeHandler", function (element) {
      var newFormData = bindFormElementValue(element, _this.state.formData);

      _this.setState({
        formHasError: false
      });

      for (var key in newFormData) {
        if (newFormData[key].validationMsg !== '') _this.setState({
          formHasError: true
        });
      }

      _this.setState({
        formData: newFormData
      });
    });

    Account_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showHandler", function (size, type) {
      return function () {
        if (type === 'delete') _this.setState({
          size: size,
          openDelete: true
        });else _this.setState({
          size: size,
          openUpdate: true
        });
      };
    });

    Account_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeHandler", function () {
      _this.setState({
        openDelete: false,
        openUpdate: false
      });
    });

    return _this;
  }

  _createClass(Account, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(Layout["a" /* default */], {
        headerTitle: stringConstants["d" /* headerTitle_1 */]
      }, external_react_default.a.createElement("div", {
        className: "jsx-333281740" + " " + "div_wrapper"
      }, external_react_default.a.createElement("div", {
        className: "jsx-333281740" + " " + "left"
      }, external_react_default.a.createElement(Box["a" /* default */], {
        title: stringConstants["a" /* boxTitle_1 */],
        text: "By letting us know your name, we can make your experience more personal.",
        formData: this.state.formData,
        onChange: function onChange(element) {
          return _this2.onChangeHandler(element);
        }
      }), external_react_default.a.createElement(Box["a" /* default */], {
        title: stringConstants["b" /* boxTitle_2 */],
        formData: this.state.formData,
        onChange: function onChange(element) {
          return _this2.onChangeHandler(element);
        },
        show: function show() {
          return _this2.showHandler(_this2.state.size, 'update');
        },
        hasError: this.state.formHasError
      }), external_react_default.a.createElement(Box["a" /* default */], {
        text: "We do our best to give you a great experience, we'll be sad to see you leave us.",
        show: function show() {
          return _this2.showHandler(_this2.state.size, 'delete');
        }
      })), external_react_default.a.createElement("div", {
        className: "jsx-333281740" + " " + "right"
      }, external_react_default.a.createElement(Box["a" /* default */], {
        title: stringConstants["c" /* boxTitle_3 */],
        changeUserPic: function changeUserPic() {
          return _this2.changeUserPicHandler;
        }
      }))), external_react_default.a.createElement(Modal, {
        size: this.state.size,
        open: this.state.openUpdate,
        close: this.closeHandler,
        title: "Upate your account.",
        question: "Are you sure you want to update your account?"
      }), external_react_default.a.createElement(Modal, {
        size: this.state.size,
        open: this.state.openDelete,
        close: this.closeHandler,
        title: "Delete your account.",
        question: "Are you sure you want to delete your account?"
      }), external_react_default.a.createElement(style_default.a, {
        styleId: "333281740",
        css: [".div_wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".left{margin-right:3%;width:65%;}", ".right{width:30%;}"]
      }));
    }
  }]);

  return Account;
}(external_react_["Component"]);

/* harmony default export */ var components_Account = (Object(external_react_redux_["connect"])()(Account_Account));
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/index.js





var pages_Index = function Index() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css",
    integrity: "sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B",
    crossOrigin: "anonymous"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"
  })), external_react_default.a.createElement(components_Account, null));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);