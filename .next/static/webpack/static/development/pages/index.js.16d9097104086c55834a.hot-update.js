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
    className: "jsx-3790137538" + " " + "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3790137538" + " " + "alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.title ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3790137538",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.title) : null, props.text ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3790137538",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.text) : null, props.formData && props.title === _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_4__["boxTitle_1"] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3790137538",
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
    className: "jsx-3790137538",
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
    className: "jsx-3790137538",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3790137538",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: props.imgUrl,
    size: "mini",
    circular: true,
    verticalAlign: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3790137538",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: props.imgUrl,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }))) : null, !props.title ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: props.show(),
    href: "javascript:void(0)",
    className: "jsx-3790137538",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Delete account") : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3790137538",
    css: ".box{padding:20px 0 20px 0;}.alert{background-color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdF9BcHBzXFx3aXRoLXJlZHV4LWFwcFxcY29tcG9uZW50c1xcVUlcXEJveFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZ5QixBQUdpQyxBQUdHLHNCQUYzQixHQUdBIiwiZmlsZSI6IkQ6XFxSZWFjdF9BcHBzXFx3aXRoLXJlZHV4LWFwcFxcY29tcG9uZW50c1xcVUlcXEJveFxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7Q29udGFpbmVyLCBCdXR0b24sIE1lc3NhZ2UsIEltYWdlfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7Ym94VGl0bGVfMSwgYm94VGl0bGVfMiwgYm94VGl0bGVfM30gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzL3N0cmluZ0NvbnN0YW50cyc7XHJcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuLi9Gb3JtRWxlbWVudC8nO1xyXG5cclxuY29uc3QgQm94ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRcIj5cclxuICAgICAgICB7cHJvcHMudGl0bGUgPyA8aDI+e3Byb3BzLnRpdGxlfTwvaDI+IDogbnVsbH1cclxuICAgICAgICB7cHJvcHMudGV4dCA/IDxwPntwcm9wcy50ZXh0fTwvcD4gOiBudWxsfVxyXG5cclxuICAgICAgICB7cHJvcHMuZm9ybURhdGEgJiYgcHJvcHMudGl0bGUgPT09IGJveFRpdGxlXzEgP1xyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvcm1FbGVtZW50IFxyXG4gICAgICAgICAgICAgIGlkPXtwcm9wcy5mb3JtRGF0YS50eHROYW1lLmNvbmZpZy5uYW1lfVxyXG4gICAgICAgICAgICAgIGZvcm1EYXRhPXtwcm9wcy5mb3JtRGF0YS50eHROYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZWxlbWVudCkgPT4gcHJvcHMub25DaGFuZ2UoZWxlbWVudCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtRWxlbWVudCBcclxuICAgICAgICAgICAgICBpZD17cHJvcHMuZm9ybURhdGEudHh0RW1haWwuY29uZmlnLm5hbWV9XHJcbiAgICAgICAgICAgICAgZm9ybURhdGE9e3Byb3BzLmZvcm1EYXRhLnR4dEVtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZWxlbWVudCkgPT4gcHJvcHMub25DaGFuZ2UoZWxlbWVudCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgIG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHtwcm9wcy5mb3JtRGF0YSAmJiBwcm9wcy50aXRsZSA9PT0gYm94VGl0bGVfMiA/XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybUVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgaWQ9e3Byb3BzLmZvcm1EYXRhLnR4dEN1cnJlbnRQYXNzd29yZC5jb25maWcubmFtZX1cclxuICAgICAgICAgICAgICBmb3JtRGF0YT17cHJvcHMuZm9ybURhdGEudHh0Q3VycmVudFBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZWxlbWVudCkgPT4gcHJvcHMub25DaGFuZ2UoZWxlbWVudCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtRWxlbWVudCBcclxuICAgICAgICAgICAgICBpZD17cHJvcHMuZm9ybURhdGEudHh0TmV3UGFzc3dvcmQuY29uZmlnLm5hbWV9XHJcbiAgICAgICAgICAgICAgZm9ybURhdGE9e3Byb3BzLmZvcm1EYXRhLnR4dE5ld1Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZWxlbWVudCkgPT4gcHJvcHMub25DaGFuZ2UoZWxlbWVudCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtRWxlbWVudCBcclxuICAgICAgICAgICAgICBpZD17cHJvcHMuZm9ybURhdGEudHh0Q29uZmlybVBhc3N3b3JkLmNvbmZpZy5uYW1lfVxyXG4gICAgICAgICAgICAgIGZvcm1EYXRhPXtwcm9wcy5mb3JtRGF0YS50eHRDb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlbGVtZW50KSA9PiBwcm9wcy5vbkNoYW5nZShlbGVtZW50KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICBjb250ZW50PXtwcm9wcy5oYXNFcnJvciA/ICdGb3JtIEVycm9yJyA6ICdVcGRhdGUgcGFzc3dvcmQnfVxyXG4gICAgICAgICAgICAgIGNvbG9yPXtwcm9wcy5oYXNFcnJvciA/ICdyZWQnIDogJ2JsdWUnfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLnNob3coKX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuaGFzRXJyb3J9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgIG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHtwcm9wcy50aXRsZSA9PT0gYm94VGl0bGVfMyA/XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgIHNyYz17cHJvcHMuaW1nVXJsfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIm1pbmlcIiBcclxuICAgICAgICAgICAgICAgIGNpcmN1bGFyICBcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249XCJ0b3BcIiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb3BzLmltZ1VybH0gc2l6ZT0nc21hbGwnIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7IXByb3BzLnRpdGxlID9cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3Byb3BzLnNob3coKX0gaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPkRlbGV0ZSBhY2NvdW50PC9hPlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgLmJveCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWxlcnQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGltZ1VybDogc3RhdGUuaW1nVXJsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShCb3gpO1xyXG4iXX0= */\n/*@ sourceURL=D:\\React_Apps\\with-redux-app\\components\\UI\\Box\\index.js */",
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
//# sourceMappingURL=index.js.16d9097104086c55834a.hot-update.js.map