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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\React_Apps\\with-redux-app\\components\\Footer\\index.js";




var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-140136961",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-140136961" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-140136961",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-140136961",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-140136961",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/privacy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-140136961",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Privacy"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-140136961",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/terms",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-140136961",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Terms and Conditions")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "140136961",
    css: "a:hover{-webkit-text-decoration:underline;text-decoration:underline;}.footer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-bottom:20px;}.footer a{color:#6c757d;}.footer div{margin-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdF9BcHBzXFx3aXRoLXJlZHV4LWFwcFxcY29tcG9uZW50c1xcRm9vdGVyXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQitCLEFBRytDLEFBR2IsQUFJQyxBQUdJLGNBRnRCLElBR0EsMENBVkEsY0FHd0Isb0JBQ3hCIiwiZmlsZSI6IkQ6XFxSZWFjdF9BcHBzXFx3aXRoLXJlZHV4LWFwcFxcY29tcG9uZW50c1xcRm9vdGVyXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmRleFwiPjxhPkhvbWU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcml2YWN5XCI+PGE+UHJpdmFjeTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZXJtc1wiPjxhPlRlcm1zIGFuZCBDb25kaXRpb25zPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mb290ZXIgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdfQ== */\n/*@ sourceURL=D:\\React_Apps\\with-redux-app\\components\\Footer\\index.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\React_Apps\\with-redux-app\\components\\Header\\index.js";





var Headers = function Headers(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1268984712" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1268984712" + " " + "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: props.imgUrl,
    size: "mini",
    circular: true,
    verticalAlign: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1268984712",
    css: ".wrapper{padding-top:2rem;}.header{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdF9BcHBzXFx3aXRoLXJlZHV4LWFwcFxcY29tcG9uZW50c1xcSGVhZGVyXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQitCLEFBR3NDLEFBR04sV0FDZixNQUhBIiwiZmlsZSI6IkQ6XFxSZWFjdF9BcHBzXFx3aXRoLXJlZHV4LWFwcFxcY29tcG9uZW50c1xcSGVhZGVyXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEhlYWRlciwgSW1hZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5jb25zdCBIZWFkZXJzID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDFcIj57cHJvcHMudGl0bGV9PC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvcHMuaW1nVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtaW5pXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY3VsYXIgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249XCJ0b3BcIiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC53cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbWdVcmw6IHN0YXRlLmltZ1VybFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIZWFkZXJzKTsiXX0= */\n/*@ sourceURL=D:\\React_Apps\\with-redux-app\\components\\Header\\index.js */",
    __self: this
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    imgUrl: state.imgUrl
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Headers));

/***/ }),

/***/ "./components/Privacy/index.js":
/*!*************************************!*\
  !*** ./components/Privacy/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_Layout___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hoc/Layout/ */ "./hoc/Layout/index.js");
/* harmony import */ var _UI_Box___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Box/ */ "./components/UI/Box/index.js");
/* harmony import */ var _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/stringConstants */ "./shared/utils/stringConstants.js");
var _jsxFileName = "D:\\React_Apps\\with-redux-app\\components\\Privacy\\index.js";





var Privacy = function Privacy() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Layout___WEBPACK_IMPORTED_MODULE_1__["default"], {
    headerTitle: _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_3__["headerTitle_2"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Box___WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_3__["headerTitle_2"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Privacy);

/***/ }),

/***/ "./components/UI/Box/index.js":
/*!************************************!*\
  !*** ./components/UI/Box/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/utils/stringConstants */ "./shared/utils/stringConstants.js");
/* harmony import */ var _FormElement___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormElement/ */ "./components/UI/FormElement/index.js");
var _jsxFileName = "D:\\React_Apps\\with-redux-app\\components\\UI\\Box\\index.js";







var Box = function Box(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-165851275" + " " + "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-165851275" + " " + "alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.title ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-165851275",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.title) : null, props.text ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-165851275",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.text) : null, props.formData && props.title === _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_4__["boxTitle_1"] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-165851275",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormElement___WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: props.formData.txtName.config.name,
    formData: props.formData.txtName,
    onChange: function onChange(element) {
      return props.onChange(element);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormElement___WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: props.formData.txtEmail.config.name,
    formData: props.formData.txtEmail,
    onChange: function onChange(element) {
      return props.onChange(element);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })) : null, props.formData && props.title === _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_4__["boxTitle_2"] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-165851275",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormElement___WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: props.formData.txtCurrentPassword.config.name,
    formData: props.formData.txtCurrentPassword,
    onChange: function onChange(element) {
      return props.onChange(element);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormElement___WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: props.formData.txtNewPassword.config.name,
    formData: props.formData.txtNewPassword,
    onChange: function onChange(element) {
      return props.onChange(element);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormElement___WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: props.formData.txtConfirmPassword.config.name,
    formData: props.formData.txtConfirmPassword,
    onChange: function onChange(element) {
      return props.onChange(element);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    content: props.hasError ? 'Form Error' : 'Update password',
    color: props.hasError ? 'red' : 'blue',
    onClick: props.show(),
    disabled: props.hasError,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })) : null, props.title === _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_4__["boxTitle_3"] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-165851275" + " " + "img_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-165851275" + " " + "div_leftImg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: props.imgUrl,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-165851275",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: props.imgUrl,
    size: "mini",
    circular: true,
    verticalAlign: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'block',
      marginTop: '10px'
    },
    className: "jsx-165851275",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: props.changeUserPic(),
    href: "javascript:void(0)",
    className: "jsx-165851275",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Change user pic"))) : null, !props.title ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: props.show(),
    href: "javascript:void(0)",
    className: "jsx-165851275",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Delete account") : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "165851275",
    css: ".box{padding:20px 0 20px 0;}.alert{background-color:#ffffff;}.img_wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.div_leftImg{width:70%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdF9BcHBzXFx3aXRoLXJlZHV4LWFwcFxcY29tcG9uZW50c1xcVUlcXEJveFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZ5QixBQUdpQyxBQUdHLEFBSTVCLEFBR0EsVUFBQyxZQVRBLEdBR0EsaURBR0EiLCJmaWxlIjoiRDpcXFJlYWN0X0FwcHNcXHdpdGgtcmVkdXgtYXBwXFxjb21wb25lbnRzXFxVSVxcQm94XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtDb250YWluZXIsIEJ1dHRvbiwgTWVzc2FnZSwgSW1hZ2V9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHtib3hUaXRsZV8xLCBib3hUaXRsZV8yLCBib3hUaXRsZV8zfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvc3RyaW5nQ29uc3RhbnRzJztcclxuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4uL0Zvcm1FbGVtZW50Lyc7XHJcblxyXG5jb25zdCBCb3ggPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydFwiPlxyXG4gICAgICAgIHtwcm9wcy50aXRsZSA/IDxoMj57cHJvcHMudGl0bGV9PC9oMj4gOiBudWxsfVxyXG4gICAgICAgIHtwcm9wcy50ZXh0ID8gPHA+e3Byb3BzLnRleHR9PC9wPiA6IG51bGx9XHJcblxyXG4gICAgICAgIHtwcm9wcy5mb3JtRGF0YSAmJiBwcm9wcy50aXRsZSA9PT0gYm94VGl0bGVfMSA/XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybUVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgaWQ9e3Byb3BzLmZvcm1EYXRhLnR4dE5hbWUuY29uZmlnLm5hbWV9XHJcbiAgICAgICAgICAgICAgZm9ybURhdGE9e3Byb3BzLmZvcm1EYXRhLnR4dE5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlbGVtZW50KSA9PiBwcm9wcy5vbkNoYW5nZShlbGVtZW50KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm1FbGVtZW50IFxyXG4gICAgICAgICAgICAgIGlkPXtwcm9wcy5mb3JtRGF0YS50eHRFbWFpbC5jb25maWcubmFtZX1cclxuICAgICAgICAgICAgICBmb3JtRGF0YT17cHJvcHMuZm9ybURhdGEudHh0RW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlbGVtZW50KSA9PiBwcm9wcy5vbkNoYW5nZShlbGVtZW50KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAge3Byb3BzLmZvcm1EYXRhICYmIHByb3BzLnRpdGxlID09PSBib3hUaXRsZV8yID9cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb3JtRWxlbWVudCBcclxuICAgICAgICAgICAgICBpZD17cHJvcHMuZm9ybURhdGEudHh0Q3VycmVudFBhc3N3b3JkLmNvbmZpZy5uYW1lfVxyXG4gICAgICAgICAgICAgIGZvcm1EYXRhPXtwcm9wcy5mb3JtRGF0YS50eHRDdXJyZW50UGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlbGVtZW50KSA9PiBwcm9wcy5vbkNoYW5nZShlbGVtZW50KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm1FbGVtZW50IFxyXG4gICAgICAgICAgICAgIGlkPXtwcm9wcy5mb3JtRGF0YS50eHROZXdQYXNzd29yZC5jb25maWcubmFtZX1cclxuICAgICAgICAgICAgICBmb3JtRGF0YT17cHJvcHMuZm9ybURhdGEudHh0TmV3UGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlbGVtZW50KSA9PiBwcm9wcy5vbkNoYW5nZShlbGVtZW50KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm1FbGVtZW50IFxyXG4gICAgICAgICAgICAgIGlkPXtwcm9wcy5mb3JtRGF0YS50eHRDb25maXJtUGFzc3dvcmQuY29uZmlnLm5hbWV9XHJcbiAgICAgICAgICAgICAgZm9ybURhdGE9e3Byb3BzLmZvcm1EYXRhLnR4dENvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGVsZW1lbnQpID0+IHByb3BzLm9uQ2hhbmdlKGVsZW1lbnQpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb3BzLmhhc0Vycm9yID8gJ0Zvcm0gRXJyb3InIDogJ1VwZGF0ZSBwYXNzd29yZCd9XHJcbiAgICAgICAgICAgICAgY29sb3I9e3Byb3BzLmhhc0Vycm9yID8gJ3JlZCcgOiAnYmx1ZSd9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMuc2hvdygpfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5oYXNFcnJvcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAge3Byb3BzLnRpdGxlID09PSBib3hUaXRsZV8zID9cclxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdfd3JhcHBlclwiPiAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdl9sZWZ0SW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9wcy5pbWdVcmx9IHNpemU9J3NtYWxsJyAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17cHJvcHMuaW1nVXJsfVxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwibWluaVwiIFxyXG4gICAgICAgICAgICAgICAgICBjaXJjdWxhciAgXHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249XCJ0b3BcIiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogJzEwcHgnXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17cHJvcHMuY2hhbmdlVXNlclBpYygpfSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+Q2hhbmdlIHVzZXIgcGljPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7IXByb3BzLnRpdGxlID9cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3Byb3BzLnNob3coKX0gaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPkRlbGV0ZSBhY2NvdW50PC9hPlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgLmJveCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWxlcnQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ193cmFwcGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpdl9sZWZ0SW1nIHtcclxuICAgICAgICAgIHdpZHRoOiA3MCVcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGltZ1VybDogc3RhdGUuaW1nVXJsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShCb3gpO1xyXG4iXX0= */\n/*@ sourceURL=D:\\React_Apps\\with-redux-app\\components\\UI\\Box\\index.js */",
    __self: this
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    imgUrl: state.imgUrl
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Box));

/***/ }),

/***/ "./components/UI/FormElement/index.js":
/*!********************************************!*\
  !*** ./components/UI/FormElement/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\React_Apps\\with-redux-app\\components\\UI\\FormElement\\index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var FormElement = function FormElement(_ref) {
  var id = _ref.id,
      formData = _ref.formData,
      _onChange = _ref.onChange;

  var showErrorHandler = function showErrorHandler() {
    var errorMsg = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        color: '#dc143c'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, formData.validation && !formData.isValid ? formData.validationMsg : null);
    return errorMsg;
  };

  var formTempleteHandler = function formTempleteHandler() {
    var formTemplete = null;

    switch (formData.elementType) {
      case 'input':
        formTemplete = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            marginBottom: '20px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, formData.showLabel ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], _extends({
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
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        })), showErrorHandler());
        break;

      default:
        formTemplete = null;
        break;
    }

    return formTemplete;
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, formTempleteHandler());
};

/* harmony default export */ __webpack_exports__["default"] = (FormElement);

/***/ }),

/***/ "./hoc/Layout/index.js":
/*!*****************************!*\
  !*** ./hoc/Layout/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header/ */ "./components/Header/index.js");
/* harmony import */ var _components_Footer___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Footer/ */ "./components/Footer/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\React_Apps\\with-redux-app\\hoc\\Layout\\index.js";






var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header___WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: props.headerTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer___WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4031101610",
    css: ".container{background-color:#f7f4f4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdF9BcHBzXFx3aXRoLXJlZHV4LWFwcFxcaG9jXFxMYXlvdXRcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVl5QixBQUdvQyx5QkFDM0IiLCJmaWxlIjoiRDpcXFJlYWN0X0FwcHNcXHdpdGgtcmVkdXgtYXBwXFxob2NcXExheW91dFxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyLyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXIvJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBEaXZpZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPENvbnRhaW5lcj5cclxuICAgICAgPEhlYWRlciB0aXRsZT17cHJvcHMuaGVhZGVyVGl0bGV9IC8+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjRmNDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICA8L0NvbnRhaW5lcj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=D:\\React_Apps\\with-redux-app\\hoc\\Layout\\index.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/privacy.js":
/*!**************************!*\
  !*** ./pages/privacy.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Privacy___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Privacy/ */ "./components/Privacy/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\React_Apps\\with-redux-app\\pages\\privacy.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var PrivacyIndex =
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css",
        integrity: "sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Privacy___WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }));
    }
  }]);

  return PrivacyIndex;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(PrivacyIndex));

/***/ }),

/***/ "./shared/utils/stringConstants.js":
/*!*****************************************!*\
  !*** ./shared/utils/stringConstants.js ***!
  \*****************************************/
/*! exports provided: boxTitle_1, boxTitle_2, boxTitle_3, headerTitle_1, headerTitle_2, headerTitle_3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxTitle_1", function() { return boxTitle_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxTitle_2", function() { return boxTitle_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxTitle_3", function() { return boxTitle_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerTitle_1", function() { return headerTitle_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerTitle_2", function() { return headerTitle_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerTitle_3", function() { return headerTitle_3; });
var boxTitle_1 = 'General settings';
var boxTitle_2 = 'Change password';
var boxTitle_3 = 'User picture';
var headerTitle_1 = 'Account settings';
var headerTitle_2 = 'Privacy';
var headerTitle_3 = 'Terms And Conditions';

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/privacy.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/privacy.js */"./pages/privacy.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=privacy.js.map