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
        className: "jsx-10213813" + " " + "left",
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
        className: "jsx-10213813" + " " + "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_Box___WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "We do our best to give you a great experience, we'll be sad to see you leave us.",
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
        styleId: "10213813",
        css: ".left{display:-webkit-inline-box;display:-webkit-flex, width:60%;display:-ms-flex, width:60%box;display:flex, width:60%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdF9BcHBzXFx3aXRoLXJlZHV4LWFwcFxcY29tcG9uZW50c1xcQWNjb3VudFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0wyQixBQUl1QixrSEFDWiIsImZpbGUiOiJEOlxcUmVhY3RfQXBwc1xcd2l0aC1yZWR1eC1hcHBcXGNvbXBvbmVudHNcXEFjY291bnRcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtjaGFuZ2VVc2VyUGljfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zLyc7XHJcbmltcG9ydCB7YmluZEZvcm1FbGVtZW50VmFsdWV9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy9oZWxwZXJGdW5jdGlvbnMnO1xyXG5pbXBvcnQge2JveFRpdGxlXzEsIGJveFRpdGxlXzIsIGhlYWRlclRpdGxlXzF9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy9zdHJpbmdDb25zdGFudHMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2hvYy9MYXlvdXQvJztcclxuaW1wb3J0IEJveCBmcm9tICcuLi9VSS9Cb3gvJztcclxuaW1wb3J0IFNlbWFudGljTW9kYWwgZnJvbSAnLi4vVUkvTW9kYWwvJztcclxuaW1wb3J0IHtNb2RhbCwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuXHJcbmNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgICBzaXplOiAndGlueScsXHJcbiAgICAgIG9wZW5EZWxldGU6IGZhbHNlLFxyXG4gICAgICBvcGVuVXBkYXRlOiBmYWxzZSxcclxuICAgICAgZm9ybUhhc0Vycm9yOiBmYWxzZSxcclxuICAgICAgZm9ybURhdGE6IHtcclxuICAgICAgICB0eHROYW1lOiB7XHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogJ2lucHV0JyxcclxuICAgICAgICAgIHZhbHVlOiAnSWFuIFIuIENsYXJvcycsXHJcbiAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgbmFtZTogJ3R4dE5hbWUnLFxyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgeW91ciBuYW1lLicsXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogNTAsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnRnVsbCBOYW1lJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzaG93TGFiZWw6IHRydWUsXHJcbiAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgIGlzVG91Y2hlZDogZmFsc2UsXHJcbiAgICAgICAgICB2YWxpZGF0aW9uTXNnOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHh0RW1haWw6IHtcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiAnaW5wdXQnLFxyXG4gICAgICAgICAgdmFsdWU6ICdjbGFyb3NpYW5AeWFob28uY29tJyxcclxuICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICBuYW1lOiAndHh0RW1haWwnLFxyXG4gICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0VudGVyIHlvdXIgZW1haWwuJyxcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MCxcclxuICAgICAgICAgICAgbGFiZWw6ICdFbWFpbCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICBpc1ZhbGlkRW1haWw6IHRydWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzaG93TGFiZWw6IHRydWUsXHJcbiAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgIGlzVG91Y2hlZDogZmFsc2UsXHJcbiAgICAgICAgICB2YWxpZGF0aW9uTXNnOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHh0Q3VycmVudFBhc3N3b3JkOiB7XHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogJ2lucHV0JyxcclxuICAgICAgICAgIHZhbHVlOiAnMTIzNDU2JyxcclxuICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICBuYW1lOiAndHh0Q3VycmVudFBhc3N3b3JkJyxcclxuICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdFbnRlciB5b3VyIGN1cnJlbnQgcGFzc3dvcmQuJyxcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MCxcclxuICAgICAgICAgICAgbGFiZWw6ICdDdXJyZW50IHBhc3N3b3JkJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzaG93TGFiZWw6IHRydWUsXHJcbiAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgIGlzVG91Y2hlZDogZmFsc2UsXHJcbiAgICAgICAgICB2YWxpZGF0aW9uTXNnOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHh0TmV3UGFzc3dvcmQ6IHtcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiAnaW5wdXQnLFxyXG4gICAgICAgICAgdmFsdWU6ICc2NTQzMjEnLFxyXG4gICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd0eHROZXdQYXNzd29yZCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgeW91ciBuZXcgcGFzc3dvcmQuJyxcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MCxcclxuICAgICAgICAgICAgbGFiZWw6ICdOZXcgcGFzc3dvcmQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNob3dMYWJlbDogdHJ1ZSxcclxuICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNUb3VjaGVkOiBmYWxzZSxcclxuICAgICAgICAgIHZhbGlkYXRpb25Nc2c6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eHRDb25maXJtUGFzc3dvcmQ6IHtcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiAnaW5wdXQnLFxyXG4gICAgICAgICAgdmFsdWU6ICc2NTQzMjEnLFxyXG4gICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd0eHRDb25maXJtUGFzc3dvcmQnLFxyXG4gICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0NvbmZpcm0geW91ciBwYXNzd29yZC4nLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IDUwLFxyXG4gICAgICAgICAgICBsYWJlbDogJ2NvbmZpcm0gcGFzc3dvcmQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybTogJ3R4dE5ld1Bhc3N3b3JkJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNob3dMYWJlbDogdHJ1ZSxcclxuICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNUb3VjaGVkOiBmYWxzZSxcclxuICAgICAgICAgIHZhbGlkYXRpb25Nc2c6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm9uVG9nZ2xlUGljSGFuZGxlcigpO1xyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVQaWNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjaGFuZ2VVc2VyUGljKCdodHRwczovL3Njb250ZW50LmZtbmw2LTIuZm5hLmZiY2RuLm5ldC92L3QxLjAtMS9wMTYweDE2MC8yMTcyODU1Nl8xNTU2OTU3NjM3Njc2MDE5XzI2NTI4NTUyMzM4ODQ1Nzc3ODRfbi5qcGc/X25jX2NhdD0xMDkmX25jX2h0PXNjb250ZW50LmZtbmw2LTIuZm5hJm9oPWY5Y2I4ODRmZTNiMGY3NTk3MDdjMzE4ZTM5ZTk0MDdmJm9lPTVDNjQ5QjgyJykpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VIYW5kbGVyID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0Zvcm1EYXRhID0gYmluZEZvcm1FbGVtZW50VmFsdWUoZWxlbWVudCwgdGhpcy5zdGF0ZS5mb3JtRGF0YSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybUhhc0Vycm9yOiBmYWxzZX0pO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmV3Rm9ybURhdGEpIHsgICAgICBcclxuICAgICAgaWYgKG5ld0Zvcm1EYXRhW2tleV0udmFsaWRhdGlvbk1zZyAhPT0gJycpIFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1IYXNFcnJvcjogdHJ1ZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBmb3JtRGF0YTogbmV3Rm9ybURhdGFcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd0hhbmRsZXIgPSAoc2l6ZSwgdHlwZSkgPT4gKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09ICdkZWxldGUnKVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtzaXplLCBvcGVuRGVsZXRlOiB0cnVlfSk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3NpemUsIG9wZW5VcGRhdGU6IHRydWV9KTtcclxuICB9XHJcbiAgXHJcbiAgY2xvc2VIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG9wZW5EZWxldGU6IGZhbHNlLFxyXG4gICAgICBvcGVuVXBkYXRlOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IGhlYWRlclRpdGxlPXtoZWFkZXJUaXRsZV8xfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgIDxCb3ggXHJcbiAgICAgICAgICAgIHRpdGxlPXtib3hUaXRsZV8xfVxyXG4gICAgICAgICAgICB0ZXh0PXtcIkJ5IGxldHRpbmcgdXMga25vdyB5b3VyIG5hbWUsIHdlIGNhbiBtYWtlIHlvdXIgZXhwZXJpZW5jZSBtb3JlIHBlcnNvbmFsLlwifVxyXG4gICAgICAgICAgICBmb3JtRGF0YT17dGhpcy5zdGF0ZS5mb3JtRGF0YX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlbGVtZW50KSA9PiB0aGlzLm9uQ2hhbmdlSGFuZGxlcihlbGVtZW50KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Qm94IFxyXG4gICAgICAgICAgICB0aXRsZT17Ym94VGl0bGVfMn1cclxuICAgICAgICAgICAgZm9ybURhdGE9e3RoaXMuc3RhdGUuZm9ybURhdGF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZWxlbWVudCkgPT4gdGhpcy5vbkNoYW5nZUhhbmRsZXIoZWxlbWVudCl9XHJcbiAgICAgICAgICAgIHNob3c9eygpID0+IHRoaXMuc2hvd0hhbmRsZXIodGhpcy5zdGF0ZS5zaXplLCAndXBkYXRlJyl9XHJcbiAgICAgICAgICAgIGhhc0Vycm9yPXt0aGlzLnN0YXRlLmZvcm1IYXNFcnJvcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Qm94IFxyXG4gICAgICAgICAgICB0ZXh0PXtcIldlIGRvIG91ciBiZXN0IHRvIGdpdmUgeW91IGEgZ3JlYXQgZXhwZXJpZW5jZSwgd2UnbGwgYmUgc2FkIHRvIHNlZSB5b3UgbGVhdmUgdXMuXCJ9XHJcbiAgICAgICAgICAgIHNob3c9eygpID0+IHRoaXMuc2hvd0hhbmRsZXIodGhpcy5zdGF0ZS5zaXplLCAnZGVsZXRlJyl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgIDxCb3ggXHJcbiAgICAgICAgICAgIHRleHQ9e1wiV2UgZG8gb3VyIGJlc3QgdG8gZ2l2ZSB5b3UgYSBncmVhdCBleHBlcmllbmNlLCB3ZSdsbCBiZSBzYWQgdG8gc2VlIHlvdSBsZWF2ZSB1cy5cIn1cclxuICAgICAgICAgICAgc2hvdz17KCkgPT4gdGhpcy5zaG93SGFuZGxlcih0aGlzLnN0YXRlLnNpemUsICdkZWxldGUnKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFNlbWFudGljTW9kYWwgXHJcbiAgICAgICAgICBzaXplPXt0aGlzLnN0YXRlLnNpemV9XHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW5VcGRhdGV9XHJcbiAgICAgICAgICBjbG9zZT17dGhpcy5jbG9zZUhhbmRsZXJ9XHJcbiAgICAgICAgICB0aXRsZT17XCJVcGF0ZSB5b3VyIGFjY291bnQuXCJ9XHJcbiAgICAgICAgICBxdWVzdGlvbj17XCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdXBkYXRlIHlvdXIgYWNjb3VudD9cIn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTZW1hbnRpY01vZGFsIFxyXG4gICAgICAgICAgc2l6ZT17dGhpcy5zdGF0ZS5zaXplfVxyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVuRGVsZXRlfVxyXG4gICAgICAgICAgY2xvc2U9e3RoaXMuY2xvc2VIYW5kbGVyfVxyXG4gICAgICAgICAgdGl0bGU9e1wiRGVsZXRlIHlvdXIgYWNjb3VudC5cIn1cclxuICAgICAgICAgIHF1ZXN0aW9uPXtcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgeW91ciBhY2NvdW50P1wifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgIC5sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleCxcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKEFjY291bnQpO1xyXG4iXX0= */\n/*@ sourceURL=D:\\React_Apps\\with-redux-app\\components\\Account\\index.js */",
        __self: this
      }));
    }
  }]);

  return Account;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])()(Account));

/***/ })

})
//# sourceMappingURL=index.js.ca9209b4ce07430f33f6.hot-update.js.map