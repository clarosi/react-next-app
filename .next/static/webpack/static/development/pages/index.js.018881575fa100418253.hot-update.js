webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/UI/Box/index.js":
/*!************************************!*\
  !*** ./components/UI/Box/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/utils/stringConstants */ "./shared/utils/stringConstants.js");
/* harmony import */ var _FormElement___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FormElement/ */ "./components/UI/FormElement/index.js");
var _jsxFileName = "D:\\React_Apps\\with-redux-app\\components\\UI\\Box\\index.js";




 //<Image src='/images/wireframe/image.png' size='small' />

var Box = function Box(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3790137538" + " " + "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3790137538" + " " + "alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.title ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3790137538",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.title) : null, props.text ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3790137538",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.text) : null, props.formData && props.title === _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_3__["boxTitle_1"] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3790137538",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormElement___WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: props.formData.txtName.config.name,
    formData: props.formData.txtName,
    onChange: function onChange(element) {
      return props.onChange(element);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormElement___WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: props.formData.txtEmail.config.name,
    formData: props.formData.txtEmail,
    onChange: function onChange(element) {
      return props.onChange(element);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })) : null, props.formData && props.title === _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_3__["boxTitle_2"] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3790137538",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormElement___WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: props.formData.txtCurrentPassword.config.name,
    formData: props.formData.txtCurrentPassword,
    onChange: function onChange(element) {
      return props.onChange(element);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormElement___WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: props.formData.txtNewPassword.config.name,
    formData: props.formData.txtNewPassword,
    onChange: function onChange(element) {
      return props.onChange(element);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormElement___WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: props.formData.txtConfirmPassword.config.name,
    formData: props.formData.txtConfirmPassword,
    onChange: function onChange(element) {
      return props.onChange(element);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: props.hasError ? 'Form Error' : 'Update password',
    color: props.hasError ? 'red' : 'blue',
    onClick: props.show(),
    disabled: props.hasError,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })) : null, !props.title ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: props.show(),
    href: "javascript:void(0)",
    className: "jsx-3790137538",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Delete account") : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3790137538",
    css: ".box{padding:20px 0 20px 0;}.alert{background-color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdF9BcHBzXFx3aXRoLXJlZHV4LWFwcFxcY29tcG9uZW50c1xcVUlcXEJveFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0V5QixBQUdpQyxBQUdHLHNCQUYzQixHQUdBIiwiZmlsZSI6IkQ6XFxSZWFjdF9BcHBzXFx3aXRoLXJlZHV4LWFwcFxcY29tcG9uZW50c1xcVUlcXEJveFxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCdXR0b24sIE1lc3NhZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7Ym94VGl0bGVfMSwgYm94VGl0bGVfMn0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzL3N0cmluZ0NvbnN0YW50cyc7XHJcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuLi9Gb3JtRWxlbWVudC8nO1xyXG4vLzxJbWFnZSBzcmM9Jy9pbWFnZXMvd2lyZWZyYW1lL2ltYWdlLnBuZycgc2l6ZT0nc21hbGwnIC8+XHJcbmNvbnN0IEJveCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0XCI+XHJcbiAgICAgICAge3Byb3BzLnRpdGxlID8gPGgyPntwcm9wcy50aXRsZX08L2gyPiA6IG51bGx9XHJcbiAgICAgICAge3Byb3BzLnRleHQgPyA8cD57cHJvcHMudGV4dH08L3A+IDogbnVsbH1cclxuXHJcbiAgICAgICAge3Byb3BzLmZvcm1EYXRhICYmIHByb3BzLnRpdGxlID09PSBib3hUaXRsZV8xID9cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb3JtRWxlbWVudCBcclxuICAgICAgICAgICAgICBpZD17cHJvcHMuZm9ybURhdGEudHh0TmFtZS5jb25maWcubmFtZX1cclxuICAgICAgICAgICAgICBmb3JtRGF0YT17cHJvcHMuZm9ybURhdGEudHh0TmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGVsZW1lbnQpID0+IHByb3BzLm9uQ2hhbmdlKGVsZW1lbnQpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybUVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgaWQ9e3Byb3BzLmZvcm1EYXRhLnR4dEVtYWlsLmNvbmZpZy5uYW1lfVxyXG4gICAgICAgICAgICAgIGZvcm1EYXRhPXtwcm9wcy5mb3JtRGF0YS50eHRFbWFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGVsZW1lbnQpID0+IHByb3BzLm9uQ2hhbmdlKGVsZW1lbnQpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7cHJvcHMuZm9ybURhdGEgJiYgcHJvcHMudGl0bGUgPT09IGJveFRpdGxlXzIgP1xyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvcm1FbGVtZW50IFxyXG4gICAgICAgICAgICAgIGlkPXtwcm9wcy5mb3JtRGF0YS50eHRDdXJyZW50UGFzc3dvcmQuY29uZmlnLm5hbWV9XHJcbiAgICAgICAgICAgICAgZm9ybURhdGE9e3Byb3BzLmZvcm1EYXRhLnR4dEN1cnJlbnRQYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGVsZW1lbnQpID0+IHByb3BzLm9uQ2hhbmdlKGVsZW1lbnQpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybUVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgaWQ9e3Byb3BzLmZvcm1EYXRhLnR4dE5ld1Bhc3N3b3JkLmNvbmZpZy5uYW1lfVxyXG4gICAgICAgICAgICAgIGZvcm1EYXRhPXtwcm9wcy5mb3JtRGF0YS50eHROZXdQYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGVsZW1lbnQpID0+IHByb3BzLm9uQ2hhbmdlKGVsZW1lbnQpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybUVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgaWQ9e3Byb3BzLmZvcm1EYXRhLnR4dENvbmZpcm1QYXNzd29yZC5jb25maWcubmFtZX1cclxuICAgICAgICAgICAgICBmb3JtRGF0YT17cHJvcHMuZm9ybURhdGEudHh0Q29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZWxlbWVudCkgPT4gcHJvcHMub25DaGFuZ2UoZWxlbWVudCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgY29udGVudD17cHJvcHMuaGFzRXJyb3IgPyAnRm9ybSBFcnJvcicgOiAnVXBkYXRlIHBhc3N3b3JkJ31cclxuICAgICAgICAgICAgICBjb2xvcj17cHJvcHMuaGFzRXJyb3IgPyAncmVkJyA6ICdibHVlJ31cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5zaG93KCl9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmhhc0Vycm9yfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7fVxyXG5cclxuICAgICAgICB7IXByb3BzLnRpdGxlID9cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3Byb3BzLnNob3coKX0gaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPkRlbGV0ZSBhY2NvdW50PC9hPlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgLmJveCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWxlcnQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3g7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\React_Apps\\with-redux-app\\components\\UI\\Box\\index.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ })

})
//# sourceMappingURL=index.js.018881575fa100418253.hot-update.js.map