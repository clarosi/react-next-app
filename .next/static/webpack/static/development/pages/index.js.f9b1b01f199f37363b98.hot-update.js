webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Account/index.js":
/*!*************************************!*\
  !*** ./components/Account/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/ */ "./store/actions/index.js");
/* harmony import */ var _shared_utils_helperFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils/helperFunctions */ "./shared/utils/helperFunctions.js");
/* harmony import */ var _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/utils/stringConstants */ "./shared/utils/stringConstants.js");
/* harmony import */ var _hoc_Layout___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hoc/Layout/ */ "./hoc/Layout/index.js");
/* harmony import */ var _UI_Box___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UI/Box/ */ "./components/UI/Box/index.js");
/* harmony import */ var _UI_Modal___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UI/Modal/ */ "./components/UI/Modal/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "D:\\React_Apps\\with-redux-app\\components\\Account\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var IMG_URL_1 = 'https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.0-1/p160x160/21728556_1556957637676019_2652855233884577784_n.jpg?_nc_cat=109&_nc_ht=scontent.fmnl6-2.fna&oh=f9cb884fe3b0f759707c318e39e9407f&oe=5C649B82';
var IMG_URL_2 = 'https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.0-1/p160x160/21728556_1556957637676019_2652855233884577784_n.jpg?_nc_cat=109&_nc_ht=scontent.fmnl6-2.fna&oh=f9cb884fe3b0f759707c318e39e9407f&oe=5C649B82';

var Account =
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeUserPicHandler", function () {
      var imgUrl;
      if (_this.state.isImgUrl_1) img;

      _this.props.dispatch(Object(_store_actions___WEBPACK_IMPORTED_MODULE_3__["changeUserPic"])('https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.0-1/p160x160/21728556_1556957637676019_2652855233884577784_n.jpg?_nc_cat=109&_nc_ht=scontent.fmnl6-2.fna&oh=f9cb884fe3b0f759707c318e39e9407f&oe=5C649B82'));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeHandler", function (element) {
      var newFormData = Object(_shared_utils_helperFunctions__WEBPACK_IMPORTED_MODULE_4__["bindFormElementValue"])(element, _this.state.formData);

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showHandler", function (size, type) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeHandler", function () {
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

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_hoc_Layout___WEBPACK_IMPORTED_MODULE_6__["default"], {
        headerTitle: _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_5__["headerTitle_1"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-333281740" + " " + "div_wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-333281740" + " " + "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_Box___WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_5__["boxTitle_1"],
        text: "By letting us know your name, we can make your experience more personal.",
        formData: this.state.formData,
        onChange: function onChange(element) {
          return _this2.onChangeHandler(element);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_Box___WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_5__["boxTitle_2"],
        formData: this.state.formData,
        onChange: function onChange(element) {
          return _this2.onChangeHandler(element);
        },
        show: function show() {
          return _this2.showHandler(_this2.state.size, 'update');
        },
        hasError: this.state.formHasError,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_Box___WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "We do our best to give you a great experience, we'll be sad to see you leave us.",
        show: function show() {
          return _this2.showHandler(_this2.state.size, 'delete');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-333281740" + " " + "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_Box___WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_5__["boxTitle_3"],
        changeUserPic: function changeUserPic() {
          return _this2.changeUserPicHandler;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_Modal___WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: this.state.size,
        open: this.state.openUpdate,
        close: this.closeHandler,
        title: "Upate your account.",
        question: "Are you sure you want to update your account?",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_Modal___WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: this.state.size,
        open: this.state.openDelete,
        close: this.closeHandler,
        title: "Delete your account.",
        question: "Are you sure you want to delete your account?",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "333281740",
        css: ".div_wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.left{margin-right:3%;width:65%;}.right{width:30%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdF9BcHBzXFx3aXRoLXJlZHV4LWFwcFxcY29tcG9uZW50c1xcQWNjb3VudFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb00yQixBQUcwQixBQUdHLEFBSU4sVUFDWixNQUpZLFVBQ1osZ0RBSkEiLCJmaWxlIjoiRDpcXFJlYWN0X0FwcHNcXHdpdGgtcmVkdXgtYXBwXFxjb21wb25lbnRzXFxBY2NvdW50XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7Y2hhbmdlVXNlclBpY30gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy8nO1xyXG5pbXBvcnQge2JpbmRGb3JtRWxlbWVudFZhbHVlfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMvaGVscGVyRnVuY3Rpb25zJztcclxuaW1wb3J0IHtib3hUaXRsZV8xLCBib3hUaXRsZV8yLCBib3hUaXRsZV8zLCBoZWFkZXJUaXRsZV8xfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMvc3RyaW5nQ29uc3RhbnRzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9ob2MvTGF5b3V0Lyc7XHJcbmltcG9ydCBCb3ggZnJvbSAnLi4vVUkvQm94Lyc7XHJcbmltcG9ydCBTZW1hbnRpY01vZGFsIGZyb20gJy4uL1VJL01vZGFsLyc7XHJcbmltcG9ydCB7TW9kYWwsIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcblxyXG5jb25zdCBJTUdfVVJMXzEgPSAnaHR0cHM6Ly9zY29udGVudC5mbW5sNi0yLmZuYS5mYmNkbi5uZXQvdi90MS4wLTEvcDE2MHgxNjAvMjE3Mjg1NTZfMTU1Njk1NzYzNzY3NjAxOV8yNjUyODU1MjMzODg0NTc3Nzg0X24uanBnP19uY19jYXQ9MTA5Jl9uY19odD1zY29udGVudC5mbW5sNi0yLmZuYSZvaD1mOWNiODg0ZmUzYjBmNzU5NzA3YzMxOGUzOWU5NDA3ZiZvZT01QzY0OUI4Mic7XHJcbmNvbnN0IElNR19VUkxfMiA9ICdodHRwczovL3Njb250ZW50LmZtbmw2LTIuZm5hLmZiY2RuLm5ldC92L3QxLjAtMS9wMTYweDE2MC8yMTcyODU1Nl8xNTU2OTU3NjM3Njc2MDE5XzI2NTI4NTUyMzM4ODQ1Nzc3ODRfbi5qcGc/X25jX2NhdD0xMDkmX25jX2h0PXNjb250ZW50LmZtbmw2LTIuZm5hJm9oPWY5Y2I4ODRmZTNiMGY3NTk3MDdjMzE4ZTM5ZTk0MDdmJm9lPTVDNjQ5QjgyJztcclxuXHJcbmNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgICBzaXplOiAndGlueScsXHJcbiAgICAgIG9wZW5EZWxldGU6IGZhbHNlLFxyXG4gICAgICBvcGVuVXBkYXRlOiBmYWxzZSxcclxuICAgICAgZm9ybUhhc0Vycm9yOiBmYWxzZSxcclxuICAgICAgaXNJbWdVcmxfMTogdHJ1ZSxcclxuICAgICAgZm9ybURhdGE6IHtcclxuICAgICAgICB0eHROYW1lOiB7XHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogJ2lucHV0JyxcclxuICAgICAgICAgIHZhbHVlOiAnSWFuIFIuIENsYXJvcycsXHJcbiAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgbmFtZTogJ3R4dE5hbWUnLFxyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgeW91ciBuYW1lLicsXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogNTAsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnRnVsbCBOYW1lJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzaG93TGFiZWw6IHRydWUsXHJcbiAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgIGlzVG91Y2hlZDogZmFsc2UsXHJcbiAgICAgICAgICB2YWxpZGF0aW9uTXNnOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHh0RW1haWw6IHtcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiAnaW5wdXQnLFxyXG4gICAgICAgICAgdmFsdWU6ICdjbGFyb3NpYW5AeWFob28uY29tJyxcclxuICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICBuYW1lOiAndHh0RW1haWwnLFxyXG4gICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0VudGVyIHlvdXIgZW1haWwuJyxcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MCxcclxuICAgICAgICAgICAgbGFiZWw6ICdFbWFpbCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICBpc1ZhbGlkRW1haWw6IHRydWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzaG93TGFiZWw6IHRydWUsXHJcbiAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgIGlzVG91Y2hlZDogZmFsc2UsXHJcbiAgICAgICAgICB2YWxpZGF0aW9uTXNnOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHh0Q3VycmVudFBhc3N3b3JkOiB7XHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogJ2lucHV0JyxcclxuICAgICAgICAgIHZhbHVlOiAnMTIzNDU2JyxcclxuICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICBuYW1lOiAndHh0Q3VycmVudFBhc3N3b3JkJyxcclxuICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdFbnRlciB5b3VyIGN1cnJlbnQgcGFzc3dvcmQuJyxcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MCxcclxuICAgICAgICAgICAgbGFiZWw6ICdDdXJyZW50IHBhc3N3b3JkJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzaG93TGFiZWw6IHRydWUsXHJcbiAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgIGlzVG91Y2hlZDogZmFsc2UsXHJcbiAgICAgICAgICB2YWxpZGF0aW9uTXNnOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHh0TmV3UGFzc3dvcmQ6IHtcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiAnaW5wdXQnLFxyXG4gICAgICAgICAgdmFsdWU6ICc2NTQzMjEnLFxyXG4gICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd0eHROZXdQYXNzd29yZCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgeW91ciBuZXcgcGFzc3dvcmQuJyxcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MCxcclxuICAgICAgICAgICAgbGFiZWw6ICdOZXcgcGFzc3dvcmQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNob3dMYWJlbDogdHJ1ZSxcclxuICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNUb3VjaGVkOiBmYWxzZSxcclxuICAgICAgICAgIHZhbGlkYXRpb25Nc2c6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eHRDb25maXJtUGFzc3dvcmQ6IHtcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiAnaW5wdXQnLFxyXG4gICAgICAgICAgdmFsdWU6ICc2NTQzMjEnLFxyXG4gICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd0eHRDb25maXJtUGFzc3dvcmQnLFxyXG4gICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0NvbmZpcm0geW91ciBwYXNzd29yZC4nLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IDUwLFxyXG4gICAgICAgICAgICBsYWJlbDogJ2NvbmZpcm0gcGFzc3dvcmQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybTogJ3R4dE5ld1Bhc3N3b3JkJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNob3dMYWJlbDogdHJ1ZSxcclxuICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNUb3VjaGVkOiBmYWxzZSxcclxuICAgICAgICAgIHZhbGlkYXRpb25Nc2c6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfTtcclxuXHJcbiAgY2hhbmdlVXNlclBpY0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgaW1nVXJsO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNJbWdVcmxfMSlcclxuICAgICAgaW1nXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGNoYW5nZVVzZXJQaWMoJ2h0dHBzOi8vc2NvbnRlbnQuZm1ubDYtMi5mbmEuZmJjZG4ubmV0L3YvdDEuMC0xL3AxNjB4MTYwLzIxNzI4NTU2XzE1NTY5NTc2Mzc2NzYwMTlfMjY1Mjg1NTIzMzg4NDU3Nzc4NF9uLmpwZz9fbmNfY2F0PTEwOSZfbmNfaHQ9c2NvbnRlbnQuZm1ubDYtMi5mbmEmb2g9ZjljYjg4NGZlM2IwZjc1OTcwN2MzMThlMzllOTQwN2Ymb2U9NUM2NDlCODInKSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUhhbmRsZXIgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgbmV3Rm9ybURhdGEgPSBiaW5kRm9ybUVsZW1lbnRWYWx1ZShlbGVtZW50LCB0aGlzLnN0YXRlLmZvcm1EYXRhKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtmb3JtSGFzRXJyb3I6IGZhbHNlfSk7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdGb3JtRGF0YSkgeyAgICAgIFxyXG4gICAgICBpZiAobmV3Rm9ybURhdGFba2V5XS52YWxpZGF0aW9uTXNnICE9PSAnJykgXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybUhhc0Vycm9yOiB0cnVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGZvcm1EYXRhOiBuZXdGb3JtRGF0YVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93SGFuZGxlciA9IChzaXplLCB0eXBlKSA9PiAoKSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gJ2RlbGV0ZScpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3NpemUsIG9wZW5EZWxldGU6IHRydWV9KTtcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2l6ZSwgb3BlblVwZGF0ZTogdHJ1ZX0pO1xyXG4gIH1cclxuICBcclxuICBjbG9zZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgb3BlbkRlbGV0ZTogZmFsc2UsXHJcbiAgICAgIG9wZW5VcGRhdGU6IGZhbHNlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgaGVhZGVyVGl0bGU9e2hlYWRlclRpdGxlXzF9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2X3dyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICA8Qm94IFxyXG4gICAgICAgICAgICAgIHRpdGxlPXtib3hUaXRsZV8xfVxyXG4gICAgICAgICAgICAgIHRleHQ9e1wiQnkgbGV0dGluZyB1cyBrbm93IHlvdXIgbmFtZSwgd2UgY2FuIG1ha2UgeW91ciBleHBlcmllbmNlIG1vcmUgcGVyc29uYWwuXCJ9XHJcbiAgICAgICAgICAgICAgZm9ybURhdGE9e3RoaXMuc3RhdGUuZm9ybURhdGF9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlbGVtZW50KSA9PiB0aGlzLm9uQ2hhbmdlSGFuZGxlcihlbGVtZW50KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJveCBcclxuICAgICAgICAgICAgICB0aXRsZT17Ym94VGl0bGVfMn1cclxuICAgICAgICAgICAgICBmb3JtRGF0YT17dGhpcy5zdGF0ZS5mb3JtRGF0YX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGVsZW1lbnQpID0+IHRoaXMub25DaGFuZ2VIYW5kbGVyKGVsZW1lbnQpfVxyXG4gICAgICAgICAgICAgIHNob3c9eygpID0+IHRoaXMuc2hvd0hhbmRsZXIodGhpcy5zdGF0ZS5zaXplLCAndXBkYXRlJyl9XHJcbiAgICAgICAgICAgICAgaGFzRXJyb3I9e3RoaXMuc3RhdGUuZm9ybUhhc0Vycm9yfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Qm94IFxyXG4gICAgICAgICAgICAgIHRleHQ9e1wiV2UgZG8gb3VyIGJlc3QgdG8gZ2l2ZSB5b3UgYSBncmVhdCBleHBlcmllbmNlLCB3ZSdsbCBiZSBzYWQgdG8gc2VlIHlvdSBsZWF2ZSB1cy5cIn1cclxuICAgICAgICAgICAgICBzaG93PXsoKSA9PiB0aGlzLnNob3dIYW5kbGVyKHRoaXMuc3RhdGUuc2l6ZSwgJ2RlbGV0ZScpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxCb3ggXHJcbiAgICAgICAgICAgICAgdGl0bGU9e2JveFRpdGxlXzN9XHJcbiAgICAgICAgICAgICAgY2hhbmdlVXNlclBpYz17KCkgPT4gdGhpcy5jaGFuZ2VVc2VyUGljSGFuZGxlcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxTZW1hbnRpY01vZGFsIFxyXG4gICAgICAgICAgc2l6ZT17dGhpcy5zdGF0ZS5zaXplfVxyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVuVXBkYXRlfVxyXG4gICAgICAgICAgY2xvc2U9e3RoaXMuY2xvc2VIYW5kbGVyfVxyXG4gICAgICAgICAgdGl0bGU9e1wiVXBhdGUgeW91ciBhY2NvdW50LlwifVxyXG4gICAgICAgICAgcXVlc3Rpb249e1wiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHVwZGF0ZSB5b3VyIGFjY291bnQ/XCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8U2VtYW50aWNNb2RhbCBcclxuICAgICAgICAgIHNpemU9e3RoaXMuc3RhdGUuc2l6ZX1cclxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3BlbkRlbGV0ZX1cclxuICAgICAgICAgIGNsb3NlPXt0aGlzLmNsb3NlSGFuZGxlcn1cclxuICAgICAgICAgIHRpdGxlPXtcIkRlbGV0ZSB5b3VyIGFjY291bnQuXCJ9XHJcbiAgICAgICAgICBxdWVzdGlvbj17XCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHlvdXIgYWNjb3VudD9cIn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAuZGl2X3dyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShBY2NvdW50KTtcclxuIl19 */\n/*@ sourceURL=D:\\React_Apps\\with-redux-app\\components\\Account\\index.js */",
        __self: this
      }));
    }
  }]);

  return Account;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])()(Account));

/***/ })

})
//# sourceMappingURL=index.js.f9b1b01f199f37363b98.hot-update.js.map