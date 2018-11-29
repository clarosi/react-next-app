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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTogglePicHandler", function () {
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
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onTogglePicHandler();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_hoc_Layout___WEBPACK_IMPORTED_MODULE_6__["default"], {
        headerTitle: _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_5__["headerTitle_1"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2847105418" + " " + "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
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
          lineNumber: 154
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
          lineNumber: 160
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_Box___WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "We do our best to give you a great experience, we'll be sad to see you leave us.",
        show: function show() {
          return _this2.showHandler(_this2.state.size, 'delete');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2847105418" + " " + "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_Box___WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: _shared_utils_stringConstants__WEBPACK_IMPORTED_MODULE_5__["boxTitle_3"],
        show: function show() {
          return _this2.showHandler(_this2.state.size, 'delete');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_Modal___WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: this.state.size,
        open: this.state.openUpdate,
        close: this.closeHandler,
        title: "Upate your account.",
        question: "Are you sure you want to update your account?",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
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
          lineNumber: 185
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2847105418",
        css: ".left{width:60%;}.right{width:30%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdF9BcHBzXFx3aXRoLXJlZHV4LWFwcFxcY29tcG9uZW50c1xcQWNjb3VudFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0wyQixBQUlVLEFBR0EsVUFIQyxBQUdBIiwiZmlsZSI6IkQ6XFxSZWFjdF9BcHBzXFx3aXRoLXJlZHV4LWFwcFxcY29tcG9uZW50c1xcQWNjb3VudFxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge2NoYW5nZVVzZXJQaWN9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvJztcclxuaW1wb3J0IHtiaW5kRm9ybUVsZW1lbnRWYWx1ZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzL2hlbHBlckZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7Ym94VGl0bGVfMSwgYm94VGl0bGVfMiwgYm94VGl0bGVfMywgaGVhZGVyVGl0bGVfMX0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzL3N0cmluZ0NvbnN0YW50cyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vaG9jL0xheW91dC8nO1xyXG5pbXBvcnQgQm94IGZyb20gJy4uL1VJL0JveC8nO1xyXG5pbXBvcnQgU2VtYW50aWNNb2RhbCBmcm9tICcuLi9VSS9Nb2RhbC8nO1xyXG5pbXBvcnQge01vZGFsLCBCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuY2xhc3MgQWNjb3VudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICAgIHNpemU6ICd0aW55JyxcclxuICAgICAgb3BlbkRlbGV0ZTogZmFsc2UsXHJcbiAgICAgIG9wZW5VcGRhdGU6IGZhbHNlLFxyXG4gICAgICBmb3JtSGFzRXJyb3I6IGZhbHNlLFxyXG4gICAgICBmb3JtRGF0YToge1xyXG4gICAgICAgIHR4dE5hbWU6IHtcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiAnaW5wdXQnLFxyXG4gICAgICAgICAgdmFsdWU6ICdJYW4gUi4gQ2xhcm9zJyxcclxuICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICBuYW1lOiAndHh0TmFtZScsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdFbnRlciB5b3VyIG5hbWUuJyxcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MCxcclxuICAgICAgICAgICAgbGFiZWw6ICdGdWxsIE5hbWUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNob3dMYWJlbDogdHJ1ZSxcclxuICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNUb3VjaGVkOiBmYWxzZSxcclxuICAgICAgICAgIHZhbGlkYXRpb25Nc2c6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eHRFbWFpbDoge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6ICdpbnB1dCcsXHJcbiAgICAgICAgICB2YWx1ZTogJ2NsYXJvc2lhbkB5YWhvby5jb20nLFxyXG4gICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd0eHRFbWFpbCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgeW91ciBlbWFpbC4nLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IDUwLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0VtYWlsJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGlzVmFsaWRFbWFpbDogdHJ1ZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNob3dMYWJlbDogdHJ1ZSxcclxuICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNUb3VjaGVkOiBmYWxzZSxcclxuICAgICAgICAgIHZhbGlkYXRpb25Nc2c6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eHRDdXJyZW50UGFzc3dvcmQ6IHtcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiAnaW5wdXQnLFxyXG4gICAgICAgICAgdmFsdWU6ICcxMjM0NTYnLFxyXG4gICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd0eHRDdXJyZW50UGFzc3dvcmQnLFxyXG4gICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0VudGVyIHlvdXIgY3VycmVudCBwYXNzd29yZC4nLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IDUwLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0N1cnJlbnQgcGFzc3dvcmQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNob3dMYWJlbDogdHJ1ZSxcclxuICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNUb3VjaGVkOiBmYWxzZSxcclxuICAgICAgICAgIHZhbGlkYXRpb25Nc2c6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eHROZXdQYXNzd29yZDoge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6ICdpbnB1dCcsXHJcbiAgICAgICAgICB2YWx1ZTogJzY1NDMyMScsXHJcbiAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgbmFtZTogJ3R4dE5ld1Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdFbnRlciB5b3VyIG5ldyBwYXNzd29yZC4nLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IDUwLFxyXG4gICAgICAgICAgICBsYWJlbDogJ05ldyBwYXNzd29yZCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2hvd0xhYmVsOiB0cnVlLFxyXG4gICAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgICBpc1RvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgdmFsaWRhdGlvbk1zZzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR4dENvbmZpcm1QYXNzd29yZDoge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6ICdpbnB1dCcsXHJcbiAgICAgICAgICB2YWx1ZTogJzY1NDMyMScsXHJcbiAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgbmFtZTogJ3R4dENvbmZpcm1QYXNzd29yZCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQ29uZmlybSB5b3VyIHBhc3N3b3JkLicsXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogNTAsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnY29uZmlybSBwYXNzd29yZCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtOiAndHh0TmV3UGFzc3dvcmQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2hvd0xhYmVsOiB0cnVlLFxyXG4gICAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgICBpc1RvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgdmFsaWRhdGlvbk1zZzogJydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMub25Ub2dnbGVQaWNIYW5kbGVyKCk7XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZVBpY0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGNoYW5nZVVzZXJQaWMoJ2h0dHBzOi8vc2NvbnRlbnQuZm1ubDYtMi5mbmEuZmJjZG4ubmV0L3YvdDEuMC0xL3AxNjB4MTYwLzIxNzI4NTU2XzE1NTY5NTc2Mzc2NzYwMTlfMjY1Mjg1NTIzMzg4NDU3Nzc4NF9uLmpwZz9fbmNfY2F0PTEwOSZfbmNfaHQ9c2NvbnRlbnQuZm1ubDYtMi5mbmEmb2g9ZjljYjg4NGZlM2IwZjc1OTcwN2MzMThlMzllOTQwN2Ymb2U9NUM2NDlCODInKSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUhhbmRsZXIgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgbmV3Rm9ybURhdGEgPSBiaW5kRm9ybUVsZW1lbnRWYWx1ZShlbGVtZW50LCB0aGlzLnN0YXRlLmZvcm1EYXRhKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtmb3JtSGFzRXJyb3I6IGZhbHNlfSk7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdGb3JtRGF0YSkgeyAgICAgIFxyXG4gICAgICBpZiAobmV3Rm9ybURhdGFba2V5XS52YWxpZGF0aW9uTXNnICE9PSAnJykgXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybUhhc0Vycm9yOiB0cnVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGZvcm1EYXRhOiBuZXdGb3JtRGF0YVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93SGFuZGxlciA9IChzaXplLCB0eXBlKSA9PiAoKSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gJ2RlbGV0ZScpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3NpemUsIG9wZW5EZWxldGU6IHRydWV9KTtcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2l6ZSwgb3BlblVwZGF0ZTogdHJ1ZX0pO1xyXG4gIH1cclxuICBcclxuICBjbG9zZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgb3BlbkRlbGV0ZTogZmFsc2UsXHJcbiAgICAgIG9wZW5VcGRhdGU6IGZhbHNlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgaGVhZGVyVGl0bGU9e2hlYWRlclRpdGxlXzF9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgPEJveCBcclxuICAgICAgICAgICAgdGl0bGU9e2JveFRpdGxlXzF9XHJcbiAgICAgICAgICAgIHRleHQ9e1wiQnkgbGV0dGluZyB1cyBrbm93IHlvdXIgbmFtZSwgd2UgY2FuIG1ha2UgeW91ciBleHBlcmllbmNlIG1vcmUgcGVyc29uYWwuXCJ9XHJcbiAgICAgICAgICAgIGZvcm1EYXRhPXt0aGlzLnN0YXRlLmZvcm1EYXRhfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGVsZW1lbnQpID0+IHRoaXMub25DaGFuZ2VIYW5kbGVyKGVsZW1lbnQpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCb3ggXHJcbiAgICAgICAgICAgIHRpdGxlPXtib3hUaXRsZV8yfVxyXG4gICAgICAgICAgICBmb3JtRGF0YT17dGhpcy5zdGF0ZS5mb3JtRGF0YX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlbGVtZW50KSA9PiB0aGlzLm9uQ2hhbmdlSGFuZGxlcihlbGVtZW50KX1cclxuICAgICAgICAgICAgc2hvdz17KCkgPT4gdGhpcy5zaG93SGFuZGxlcih0aGlzLnN0YXRlLnNpemUsICd1cGRhdGUnKX1cclxuICAgICAgICAgICAgaGFzRXJyb3I9e3RoaXMuc3RhdGUuZm9ybUhhc0Vycm9yfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCb3ggXHJcbiAgICAgICAgICAgIHRleHQ9e1wiV2UgZG8gb3VyIGJlc3QgdG8gZ2l2ZSB5b3UgYSBncmVhdCBleHBlcmllbmNlLCB3ZSdsbCBiZSBzYWQgdG8gc2VlIHlvdSBsZWF2ZSB1cy5cIn1cclxuICAgICAgICAgICAgc2hvdz17KCkgPT4gdGhpcy5zaG93SGFuZGxlcih0aGlzLnN0YXRlLnNpemUsICdkZWxldGUnKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgPEJveCBcclxuICAgICAgICAgICAgdGl0bGU9e2JveFRpdGxlXzN9XHJcbiAgICAgICAgICAgIHNob3c9eygpID0+IHRoaXMuc2hvd0hhbmRsZXIodGhpcy5zdGF0ZS5zaXplLCAnZGVsZXRlJyl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxTZW1hbnRpY01vZGFsIFxyXG4gICAgICAgICAgc2l6ZT17dGhpcy5zdGF0ZS5zaXplfVxyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVuVXBkYXRlfVxyXG4gICAgICAgICAgY2xvc2U9e3RoaXMuY2xvc2VIYW5kbGVyfVxyXG4gICAgICAgICAgdGl0bGU9e1wiVXBhdGUgeW91ciBhY2NvdW50LlwifVxyXG4gICAgICAgICAgcXVlc3Rpb249e1wiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHVwZGF0ZSB5b3VyIGFjY291bnQ/XCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8U2VtYW50aWNNb2RhbCBcclxuICAgICAgICAgIHNpemU9e3RoaXMuc3RhdGUuc2l6ZX1cclxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3BlbkRlbGV0ZX1cclxuICAgICAgICAgIGNsb3NlPXt0aGlzLmNsb3NlSGFuZGxlcn1cclxuICAgICAgICAgIHRpdGxlPXtcIkRlbGV0ZSB5b3VyIGFjY291bnQuXCJ9XHJcbiAgICAgICAgICBxdWVzdGlvbj17XCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHlvdXIgYWNjb3VudD9cIn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCVcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShBY2NvdW50KTtcclxuIl19 */\n/*@ sourceURL=D:\\React_Apps\\with-redux-app\\components\\Account\\index.js */",
        __self: this
      }));
    }
  }]);

  return Account;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])()(Account));

/***/ })

})
//# sourceMappingURL=index.js.6453b5cb80df3c55e19f.hot-update.js.map