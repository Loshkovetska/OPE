"use strict";
exports.id = 859;
exports.ids = [859];
exports.modules = {

/***/ 7859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_funs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5590);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8342);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8290);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5668);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4541);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6595);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const ContactForm = () => {
  const {
    content: {
      contact
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__/* .useContentState */ .b3)();
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    full: "",
    email: "",
    msg: ""
  });
  const {
    0: errors,
    1: setErrors
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    full: "",
    email: "",
    msg: ""
  });
  const {
    0: clearAllFields,
    1: setClear
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const submit = () => {
    const ers = {
      full: !state.full?.length ? "Enter Full Name" : "",
      email: !state.email?.length ? "Enter Email" : state.email?.length && !(0,_hooks_funs__WEBPACK_IMPORTED_MODULE_7__/* .emailValidate */ .DW)(state.email) ? "Incorrect email" : "",
      msg: !state.msg?.length ? "Enter Message" : ""
    };
    const isCorrect = Object.values(ers).every(v => !v.length);
    setErrors(_objectSpread(_objectSpread({}, errors), ers));

    if (isCorrect) {
      (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .contactForm */ .N3)({
        full_name: state.full,
        email: state.email,
        msg: state.msg
      }).then(() => {
        (0,_stores_GlobalState__WEBPACK_IMPORTED_MODULE_5__/* .changeThanksPopState */ .Yu)();
        setClear(true);
        setTimeout(() => {
          setClear(false);
        }, 5000);
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
    className: "contact-form",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      needToClear: clearAllFields,
      isRequired: true,
      name: "full-name",
      content: {
        label: contact?.label_full,
        placeholder: contact?.placeholder_full,
        error_icon: contact?.error_icon,
        success_icon: contact?.success_icon
      },
      returnValue: value => setState(_objectSpread(_objectSpread({}, state), {}, {
        full: value
      })),
      error: errors?.full
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      needToClear: clearAllFields,
      isRequired: true,
      name: "email",
      type: "email",
      content: {
        label: contact?.label_email,
        placeholder: contact?.placeholder_email,
        error_icon: contact?.error_icon,
        success_icon: contact?.success_icon
      },
      returnValue: value => setState(_objectSpread(_objectSpread({}, state), {}, {
        email: value
      })),
      error: errors?.email
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      needToClear: clearAllFields,
      isRequired: true,
      name: "msg",
      content: {
        label: contact?.label_msg,
        placeholder: contact?.placeholder_msg,
        error_icon: contact?.error_icon,
        success_icon: contact?.success_icon
      },
      returnValue: value => setState(_objectSpread(_objectSpread({}, state), {}, {
        msg: value
      })),
      isTextArea: true,
      error: errors?.msg
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      onClick: submit,
      isLink: false,
      classStr: "black w100",
      content: contact?.button_text
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: "contact-block__bottom",
      dangerouslySetInnerHTML: {
        __html: contact?.subtext
      }
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ })

};
;