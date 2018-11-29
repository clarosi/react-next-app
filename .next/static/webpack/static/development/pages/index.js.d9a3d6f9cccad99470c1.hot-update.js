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
      if (_this.state.isImgUrl_1) imgUrl = 'https://media.licdn.com/dms/image/C5103AQH5WDn7Y5ImIQ/profile-displayphoto-shrink_100_100/0?e=1548892800&v=beta&t=crZ-OQoJpS37yPA7j-r4Vpd8TKzrTT3bYJaGpQRM-Jk';else imgUrl = 'https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.0-1/p160x160/21728556_1556957637676019_2652855233884577784_n.jpg?_nc_cat=109&_nc_ht=scontent.fmnl6-2.fna&oh=f9cb884fe3b0f759707c318e39e9407f&oe=5C649B82';

      _this.setState(prevState, {});

      _this.props.dispatch(Object(_store_actions___WEBPACK_IMPORTED_MODULE_3__["changeUserPic"])(imgUrl));
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
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-333281740" + " " + "div_wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-333281740" + " " + "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
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
          lineNumber: 159
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
          lineNumber: 165
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_Box___WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "We do our best to give you a great experience, we'll be sad to see you leave us.",
        show: function show() {
          return _this2.showHandler(_this2.state.size, 'delete');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-333281740" + " " + "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_Box___WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_5__["boxTitle_3"],
        changeUserPic: function changeUserPic() {
          return _this2.changeUserPicHandler;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
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
          lineNumber: 184
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
          lineNumber: 191
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "333281740",
        css: ".div_wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.left{margin-right:3%;width:65%;}.right{width:30%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdF9BcHBzXFx3aXRoLXJlZHV4LWFwcFxcY29tcG9uZW50c1xcQWNjb3VudFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcU0yQixBQUcwQixBQUdHLEFBSU4sVUFDWixNQUpZLFVBQ1osZ0RBSkEiLCJmaWxlIjoiRDpcXFJlYWN0X0FwcHNcXHdpdGgtcmVkdXgtYXBwXFxjb21wb25lbnRzXFxBY2NvdW50XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7Y2hhbmdlVXNlclBpY30gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy8nO1xyXG5pbXBvcnQge2JpbmRGb3JtRWxlbWVudFZhbHVlfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMvaGVscGVyRnVuY3Rpb25zJztcclxuaW1wb3J0IHtib3hUaXRsZV8xLCBib3hUaXRsZV8yLCBib3hUaXRsZV8zLCBoZWFkZXJUaXRsZV8xfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMvc3RyaW5nQ29uc3RhbnRzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9ob2MvTGF5b3V0Lyc7XHJcbmltcG9ydCBCb3ggZnJvbSAnLi4vVUkvQm94Lyc7XHJcbmltcG9ydCBTZW1hbnRpY01vZGFsIGZyb20gJy4uL1VJL01vZGFsLyc7XHJcbmltcG9ydCB7TW9kYWwsIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcblxyXG5jbGFzcyBBY2NvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgICAgc2l6ZTogJ3RpbnknLFxyXG4gICAgICBvcGVuRGVsZXRlOiBmYWxzZSxcclxuICAgICAgb3BlblVwZGF0ZTogZmFsc2UsXHJcbiAgICAgIGZvcm1IYXNFcnJvcjogZmFsc2UsXHJcbiAgICAgIGlzSW1nVXJsXzE6IHRydWUsXHJcbiAgICAgIGZvcm1EYXRhOiB7XHJcbiAgICAgICAgdHh0TmFtZToge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6ICdpbnB1dCcsXHJcbiAgICAgICAgICB2YWx1ZTogJ0lhbiBSLiBDbGFyb3MnLFxyXG4gICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd0eHROYW1lJyxcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0VudGVyIHlvdXIgbmFtZS4nLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IDUwLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0Z1bGwgTmFtZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2hvd0xhYmVsOiB0cnVlLFxyXG4gICAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgICBpc1RvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgdmFsaWRhdGlvbk1zZzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR4dEVtYWlsOiB7XHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogJ2lucHV0JyxcclxuICAgICAgICAgIHZhbHVlOiAnY2xhcm9zaWFuQHlhaG9vLmNvbScsXHJcbiAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgbmFtZTogJ3R4dEVtYWlsJyxcclxuICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdFbnRlciB5b3VyIGVtYWlsLicsXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogNTAsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnRW1haWwnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgaXNWYWxpZEVtYWlsOiB0cnVlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2hvd0xhYmVsOiB0cnVlLFxyXG4gICAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgICBpc1RvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgdmFsaWRhdGlvbk1zZzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR4dEN1cnJlbnRQYXNzd29yZDoge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6ICdpbnB1dCcsXHJcbiAgICAgICAgICB2YWx1ZTogJzEyMzQ1NicsXHJcbiAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgbmFtZTogJ3R4dEN1cnJlbnRQYXNzd29yZCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgeW91ciBjdXJyZW50IHBhc3N3b3JkLicsXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogNTAsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnQ3VycmVudCBwYXNzd29yZCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2hvd0xhYmVsOiB0cnVlLFxyXG4gICAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgICBpc1RvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgdmFsaWRhdGlvbk1zZzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR4dE5ld1Bhc3N3b3JkOiB7XHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogJ2lucHV0JyxcclxuICAgICAgICAgIHZhbHVlOiAnNjU0MzIxJyxcclxuICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICBuYW1lOiAndHh0TmV3UGFzc3dvcmQnLFxyXG4gICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0VudGVyIHlvdXIgbmV3IHBhc3N3b3JkLicsXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogNTAsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnTmV3IHBhc3N3b3JkJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzaG93TGFiZWw6IHRydWUsXHJcbiAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgIGlzVG91Y2hlZDogZmFsc2UsXHJcbiAgICAgICAgICB2YWxpZGF0aW9uTXNnOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHh0Q29uZmlybVBhc3N3b3JkOiB7XHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogJ2lucHV0JyxcclxuICAgICAgICAgIHZhbHVlOiAnNjU0MzIxJyxcclxuICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICBuYW1lOiAndHh0Q29uZmlybVBhc3N3b3JkJyxcclxuICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdDb25maXJtIHlvdXIgcGFzc3dvcmQuJyxcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MCxcclxuICAgICAgICAgICAgbGFiZWw6ICdjb25maXJtIHBhc3N3b3JkJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm06ICd0eHROZXdQYXNzd29yZCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzaG93TGFiZWw6IHRydWUsXHJcbiAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgIGlzVG91Y2hlZDogZmFsc2UsXHJcbiAgICAgICAgICB2YWxpZGF0aW9uTXNnOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH07XHJcblxyXG4gIGNoYW5nZVVzZXJQaWNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgbGV0IGltZ1VybDtcclxuICAgIGlmICh0aGlzLnN0YXRlLmlzSW1nVXJsXzEpXHJcbiAgICAgIGltZ1VybCA9ICdodHRwczovL21lZGlhLmxpY2RuLmNvbS9kbXMvaW1hZ2UvQzUxMDNBUUg1V0RuN1k1SW1JUS9wcm9maWxlLWRpc3BsYXlwaG90by1zaHJpbmtfMTAwXzEwMC8wP2U9MTU0ODg5MjgwMCZ2PWJldGEmdD1jclotT1FvSnBTMzd5UEE3ai1yNFZwZDhUS3pyVFQzYllKYUdwUVJNLUprJztcclxuICAgIGVsc2VcclxuICAgICAgaW1nVXJsID0gJ2h0dHBzOi8vc2NvbnRlbnQuZm1ubDYtMi5mbmEuZmJjZG4ubmV0L3YvdDEuMC0xL3AxNjB4MTYwLzIxNzI4NTU2XzE1NTY5NTc2Mzc2NzYwMTlfMjY1Mjg1NTIzMzg4NDU3Nzc4NF9uLmpwZz9fbmNfY2F0PTEwOSZfbmNfaHQ9c2NvbnRlbnQuZm1ubDYtMi5mbmEmb2g9ZjljYjg4NGZlM2IwZjc1OTcwN2MzMThlMzllOTQwN2Ymb2U9NUM2NDlCODInO1xyXG4gICAgXHJcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSwgKHt9KSlcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goY2hhbmdlVXNlclBpYyhpbWdVcmwpKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlSGFuZGxlciA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBuZXdGb3JtRGF0YSA9IGJpbmRGb3JtRWxlbWVudFZhbHVlKGVsZW1lbnQsIHRoaXMuc3RhdGUuZm9ybURhdGEpO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1IYXNFcnJvcjogZmFsc2V9KTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG5ld0Zvcm1EYXRhKSB7ICAgICAgXHJcbiAgICAgIGlmIChuZXdGb3JtRGF0YVtrZXldLnZhbGlkYXRpb25Nc2cgIT09ICcnKSBcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtSGFzRXJyb3I6IHRydWV9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZm9ybURhdGE6IG5ld0Zvcm1EYXRhXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNob3dIYW5kbGVyID0gKHNpemUsIHR5cGUpID0+ICgpID0+IHtcclxuICAgIGlmICh0eXBlID09PSAnZGVsZXRlJylcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2l6ZSwgb3BlbkRlbGV0ZTogdHJ1ZX0pO1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtzaXplLCBvcGVuVXBkYXRlOiB0cnVlfSk7XHJcbiAgfVxyXG4gIFxyXG4gIGNsb3NlSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBvcGVuRGVsZXRlOiBmYWxzZSxcclxuICAgICAgb3BlblVwZGF0ZTogZmFsc2VcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dCBoZWFkZXJUaXRsZT17aGVhZGVyVGl0bGVfMX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZfd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgIDxCb3ggXHJcbiAgICAgICAgICAgICAgdGl0bGU9e2JveFRpdGxlXzF9XHJcbiAgICAgICAgICAgICAgdGV4dD17XCJCeSBsZXR0aW5nIHVzIGtub3cgeW91ciBuYW1lLCB3ZSBjYW4gbWFrZSB5b3VyIGV4cGVyaWVuY2UgbW9yZSBwZXJzb25hbC5cIn1cclxuICAgICAgICAgICAgICBmb3JtRGF0YT17dGhpcy5zdGF0ZS5mb3JtRGF0YX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGVsZW1lbnQpID0+IHRoaXMub25DaGFuZ2VIYW5kbGVyKGVsZW1lbnQpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Qm94IFxyXG4gICAgICAgICAgICAgIHRpdGxlPXtib3hUaXRsZV8yfVxyXG4gICAgICAgICAgICAgIGZvcm1EYXRhPXt0aGlzLnN0YXRlLmZvcm1EYXRhfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZWxlbWVudCkgPT4gdGhpcy5vbkNoYW5nZUhhbmRsZXIoZWxlbWVudCl9XHJcbiAgICAgICAgICAgICAgc2hvdz17KCkgPT4gdGhpcy5zaG93SGFuZGxlcih0aGlzLnN0YXRlLnNpemUsICd1cGRhdGUnKX1cclxuICAgICAgICAgICAgICBoYXNFcnJvcj17dGhpcy5zdGF0ZS5mb3JtSGFzRXJyb3J9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCb3ggXHJcbiAgICAgICAgICAgICAgdGV4dD17XCJXZSBkbyBvdXIgYmVzdCB0byBnaXZlIHlvdSBhIGdyZWF0IGV4cGVyaWVuY2UsIHdlJ2xsIGJlIHNhZCB0byBzZWUgeW91IGxlYXZlIHVzLlwifVxyXG4gICAgICAgICAgICAgIHNob3c9eygpID0+IHRoaXMuc2hvd0hhbmRsZXIodGhpcy5zdGF0ZS5zaXplLCAnZGVsZXRlJyl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgPEJveCBcclxuICAgICAgICAgICAgICB0aXRsZT17Ym94VGl0bGVfM31cclxuICAgICAgICAgICAgICBjaGFuZ2VVc2VyUGljPXsoKSA9PiB0aGlzLmNoYW5nZVVzZXJQaWNIYW5kbGVyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFNlbWFudGljTW9kYWwgXHJcbiAgICAgICAgICBzaXplPXt0aGlzLnN0YXRlLnNpemV9XHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW5VcGRhdGV9XHJcbiAgICAgICAgICBjbG9zZT17dGhpcy5jbG9zZUhhbmRsZXJ9XHJcbiAgICAgICAgICB0aXRsZT17XCJVcGF0ZSB5b3VyIGFjY291bnQuXCJ9XHJcbiAgICAgICAgICBxdWVzdGlvbj17XCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdXBkYXRlIHlvdXIgYWNjb3VudD9cIn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTZW1hbnRpY01vZGFsIFxyXG4gICAgICAgICAgc2l6ZT17dGhpcy5zdGF0ZS5zaXplfVxyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVuRGVsZXRlfVxyXG4gICAgICAgICAgY2xvc2U9e3RoaXMuY2xvc2VIYW5kbGVyfVxyXG4gICAgICAgICAgdGl0bGU9e1wiRGVsZXRlIHlvdXIgYWNjb3VudC5cIn1cclxuICAgICAgICAgIHF1ZXN0aW9uPXtcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgeW91ciBhY2NvdW50P1wifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgIC5kaXZfd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKEFjY291bnQpO1xyXG4iXX0= */\n/*@ sourceURL=D:\\React_Apps\\with-redux-app\\components\\Account\\index.js */",
        __self: this
      }));
    }
  }]);

  return Account;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])()(Account));

/***/ })

})
//# sourceMappingURL=index.js.d9a3d6f9cccad99470c1.hot-update.js.map