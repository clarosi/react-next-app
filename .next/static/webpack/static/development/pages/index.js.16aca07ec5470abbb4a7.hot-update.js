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

/***/ })

})
//# sourceMappingURL=index.js.16aca07ec5470abbb4a7.hot-update.js.map