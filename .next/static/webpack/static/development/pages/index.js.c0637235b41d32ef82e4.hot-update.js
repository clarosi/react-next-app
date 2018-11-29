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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/utils/stringConstants */ "./shared/utils/stringConstants.js");
/* harmony import */ var _FormElement___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormElement/ */ "./components/UI/FormElement/index.js");
var _jsxFileName = "D:\\React_Apps\\with-redux-app\\components\\UI\\Box\\index.js";







var Box = function Box(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-911533603" + " " + "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-911533603" + " " + "alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.title ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-911533603",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.title) : null, props.text ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-911533603",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.text) : null, props.formData && props.title === _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_4__["boxTitle_1"] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-911533603",
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
    className: "jsx-911533603",
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
  })) : null, props.title === _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_4__["boxTitle_3"] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-911533603" + " " + "img_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-911533603" + " " + "div_left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: props.imgUrl,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-911533603",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: props.imgUrl,
    size: "mini",
    circular: true,
    verticalAlign: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }))) : null, !props.title ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: props.show(),
    href: "javascript:void(0)",
    className: "jsx-911533603",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Delete account") : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "911533603",
    css: ".box{padding:20px 0 20px 0;}.alert{background-color:#ffffff;}.img_wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdF9BcHBzXFx3aXRoLXJlZHV4LWFwcFxcY29tcG9uZW50c1xcVUlcXEJveFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZ5QixBQUdpQyxBQUdHLEFBSTVCLHNCQU5DLEdBR0EsaURBR0EiLCJmaWxlIjoiRDpcXFJlYWN0X0FwcHNcXHdpdGgtcmVkdXgtYXBwXFxjb21wb25lbnRzXFxVSVxcQm94XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtDb250YWluZXIsIEJ1dHRvbiwgTWVzc2FnZSwgSW1hZ2V9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHtib3hUaXRsZV8xLCBib3hUaXRsZV8yLCBib3hUaXRsZV8zfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvc3RyaW5nQ29uc3RhbnRzJztcclxuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4uL0Zvcm1FbGVtZW50Lyc7XHJcblxyXG5jb25zdCBCb3ggPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydFwiPlxyXG4gICAgICAgIHtwcm9wcy50aXRsZSA/IDxoMj57cHJvcHMudGl0bGV9PC9oMj4gOiBudWxsfVxyXG4gICAgICAgIHtwcm9wcy50ZXh0ID8gPHA+e3Byb3BzLnRleHR9PC9wPiA6IG51bGx9XHJcblxyXG4gICAgICAgIHtwcm9wcy5mb3JtRGF0YSAmJiBwcm9wcy50aXRsZSA9PT0gYm94VGl0bGVfMSA/XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybUVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgaWQ9e3Byb3BzLmZvcm1EYXRhLnR4dE5hbWUuY29uZmlnLm5hbWV9XHJcbiAgICAgICAgICAgICAgZm9ybURhdGE9e3Byb3BzLmZvcm1EYXRhLnR4dE5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlbGVtZW50KSA9PiBwcm9wcy5vbkNoYW5nZShlbGVtZW50KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm1FbGVtZW50IFxyXG4gICAgICAgICAgICAgIGlkPXtwcm9wcy5mb3JtRGF0YS50eHRFbWFpbC5jb25maWcubmFtZX1cclxuICAgICAgICAgICAgICBmb3JtRGF0YT17cHJvcHMuZm9ybURhdGEudHh0RW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlbGVtZW50KSA9PiBwcm9wcy5vbkNoYW5nZShlbGVtZW50KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAge3Byb3BzLmZvcm1EYXRhICYmIHByb3BzLnRpdGxlID09PSBib3hUaXRsZV8yID9cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb3JtRWxlbWVudCBcclxuICAgICAgICAgICAgICBpZD17cHJvcHMuZm9ybURhdGEudHh0Q3VycmVudFBhc3N3b3JkLmNvbmZpZy5uYW1lfVxyXG4gICAgICAgICAgICAgIGZvcm1EYXRhPXtwcm9wcy5mb3JtRGF0YS50eHRDdXJyZW50UGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlbGVtZW50KSA9PiBwcm9wcy5vbkNoYW5nZShlbGVtZW50KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm1FbGVtZW50IFxyXG4gICAgICAgICAgICAgIGlkPXtwcm9wcy5mb3JtRGF0YS50eHROZXdQYXNzd29yZC5jb25maWcubmFtZX1cclxuICAgICAgICAgICAgICBmb3JtRGF0YT17cHJvcHMuZm9ybURhdGEudHh0TmV3UGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlbGVtZW50KSA9PiBwcm9wcy5vbkNoYW5nZShlbGVtZW50KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm1FbGVtZW50IFxyXG4gICAgICAgICAgICAgIGlkPXtwcm9wcy5mb3JtRGF0YS50eHRDb25maXJtUGFzc3dvcmQuY29uZmlnLm5hbWV9XHJcbiAgICAgICAgICAgICAgZm9ybURhdGE9e3Byb3BzLmZvcm1EYXRhLnR4dENvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGVsZW1lbnQpID0+IHByb3BzLm9uQ2hhbmdlKGVsZW1lbnQpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb3BzLmhhc0Vycm9yID8gJ0Zvcm0gRXJyb3InIDogJ1VwZGF0ZSBwYXNzd29yZCd9XHJcbiAgICAgICAgICAgICAgY29sb3I9e3Byb3BzLmhhc0Vycm9yID8gJ3JlZCcgOiAnYmx1ZSd9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMuc2hvdygpfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5oYXNFcnJvcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAge3Byb3BzLnRpdGxlID09PSBib3hUaXRsZV8zID9cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nX3dyYXBwZXJcIj4gICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2X2xlZnRcIj5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9wcy5pbWdVcmx9IHNpemU9J3NtYWxsJyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLmltZ1VybH1cclxuICAgICAgICAgICAgICAgIHNpemU9XCJtaW5pXCIgXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhciAgXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduPVwidG9wXCIgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgeyFwcm9wcy50aXRsZSA/XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtwcm9wcy5zaG93KCl9IGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj5EZWxldGUgYWNjb3VudDwvYT5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgIC5ib3gge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFsZXJ0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWdfd3JhcHBlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBpbWdVcmw6IHN0YXRlLmltZ1VybFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQm94KTtcclxuIl19 */\n/*@ sourceURL=D:\\React_Apps\\with-redux-app\\components\\UI\\Box\\index.js */",
    __self: this
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    imgUrl: state.imgUrl
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Box));

/***/ })

})
//# sourceMappingURL=index.js.c0637235b41d32ef82e4.hot-update.js.map