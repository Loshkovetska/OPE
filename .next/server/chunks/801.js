"use strict";
exports.id = 801;
exports.ids = [801];
exports.modules = {

/***/ 5668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Boom = function Boom(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
      d: "M26.356 32.093c4.299-5.056 6.711-21.106 6.75-27.935.003-.986-.344-1.864-1.003-2.54A3.76 3.76 0 0 0 29.536.51C23.78.343 6.76 2.29 1.311 6.653.438 7.349.193 7.879.081 8.213c-.158.478-.088.847.213 1.154 1.249 1.278 5.866 1.024 10.337.78 5.087-.279 9.894-.54 11.51 1.115 1.68 1.717 1.305 6.842.944 11.793-.32 4.355-.645 8.86.54 10.072.354.363.747.303 1.006.223.593-.178 1.14-.578 1.722-1.261l.003.004Z",
      fill: "#000"
    })
  }));
};

Boom.defaultProps = {
  viewBox: "0 0 34 34",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

const Button = ({
  isLink = false,
  isTarget,
  content,
  link,
  classStr,
  isSubmit = false,
  onClick
}) => {
  if (isSubmit) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('button', classStr),
      type: "submit",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        children: [" ", content]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Boom, {
        className: "button__anim"
      })]
    });
  }

  if (isLink && link) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: link,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button", classStr),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        children: [" ", content]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Boom, {
        className: "button__anim"
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('button', classStr),
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
      children: [" ", content]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Boom, {
      className: "button__anim"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ 4694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8342);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6595);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const ContactButton = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(() => {
  const {
    header: {
      contactPop
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__/* .useContentState */ .b3)();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!ref.current) return;

    if (!_stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isTouch */ .ZP.isTouch) {
      _stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* ["default"].locoScroll */ .ZP.locoScroll?.on('scroll', args => {
        if (args?.scroll.y <= window.innerHeight) {
          ref.current?.classList.add('hidden');
        } else ref.current?.classList.remove('hidden');
      });
    }

    if (_stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isTouch */ .ZP.isTouch) {
      let scrollPos = 0;
      window.addEventListener('scroll', () => {
        const y = window.pageYOffset;
        const direction = scrollPos > y ? 'up' : 'down';

        if (direction != 'up') {
          ref.current?.classList.add('pop-open');
        } else ref.current?.classList.remove('pop-open');

        scrollPos = window.pageYOffset;
      });
    }
  }, [_stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* ["default"].locoScroll */ .ZP.locoScroll, _stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isTouch */ .ZP.isTouch]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (_stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isContactPop */ .ZP.isContactPop) {
      ref.current?.classList.add('pop-open');
    } else {
      ref.current?.classList.remove('pop-open');
    }
  }, [_stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isContactPop */ .ZP.isContactPop]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "contact-button hidden",
      onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* .changeContactState */ .wX,
      ref: ref,
      children: contactPop?.button_title
    })
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactButton);

/***/ }),

/***/ 7626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_ContactPop)
});

// EXTERNAL MODULE: ./src/hooks/RootStoreProvider.tsx
var RootStoreProvider = __webpack_require__(8342);
// EXTERNAL MODULE: ./src/stores/GlobalState.ts
var GlobalState = __webpack_require__(6595);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__(2062);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/common/H2/index.tsx
var H2 = __webpack_require__(6109);
// EXTERNAL MODULE: ./src/components/common/Text18/index.tsx
var Text18 = __webpack_require__(9501);
// EXTERNAL MODULE: ./src/components/common/ReviewsList/index.tsx + 1 modules
var ReviewsList = __webpack_require__(4274);
// EXTERNAL MODULE: ./src/hooks/funs.ts
var funs = __webpack_require__(5590);
// EXTERNAL MODULE: ./src/stores/ContentState.ts + 1 modules
var ContentState = __webpack_require__(8290);
// EXTERNAL MODULE: ./src/components/common/Button/index.tsx
var Button = __webpack_require__(5668);
// EXTERNAL MODULE: ./src/components/common/Input/index.tsx
var Input = __webpack_require__(4541);
// EXTERNAL MODULE: ./src/components/common/Select/index.tsx
var Select = __webpack_require__(28);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/common/ContactPopForm/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const ContactPopForm = () => {
  const {
    contactPop: contact,
    // content: { contact },
    eventsType
  } = (0,RootStoreProvider/* useContentState */.b3)();
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)({
    msg: "",
    destination: "",
    eventType: ""
  });
  const {
    0: fname,
    1: setFname
  } = (0,external_react_.useState)("");
  const {
    0: lname,
    1: setLname
  } = (0,external_react_.useState)("");
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)("");
  const {
    0: errors,
    1: setErrors
  } = (0,external_react_.useState)({
    fname: "",
    lname: "",
    email: "",
    msg: "",
    destination: "",
    eventType: ""
  });
  const {
    0: clearAllFields,
    1: setClear
  } = (0,external_react_.useState)(false);

  const submit = () => {
    const ers = {
      fname: !fname?.length ? "Enter First Name" : "",
      lname: !lname?.length ? "Enter Last Name" : "",
      email: !email?.length ? "Enter Email" : email?.length && !(0,funs/* emailValidate */.DW)(email) ? "Incorrect email" : "",
      msg: !state.msg?.length ? "Enter Message" : "",
      destination: !state.destination?.length ? "Enter Destination" : "",
      eventType: !state.eventType?.length ? "Choose Event Type" : ""
    };
    const isCorrect = Object.values(ers).every(v => !v.length);
    setErrors(_objectSpread(_objectSpread({}, errors), ers));

    if (isCorrect) {
      (0,ContentState/* contactPopForm */.PL)(_objectSpread(_objectSpread({}, state), {}, {
        email,
        fname,
        lname
      })).then(() => {
        (0,GlobalState/* changeThanksPopState */.Yu)();
        setClear(true);
        setState(_objectSpread(_objectSpread({}, state), {}, {
          eventType: "",
          msg: "",
          destination: ""
        }));
        setTimeout(() => {
          setClear(false);
        }, 5000);
      });
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "contact-form",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
      needToClear: clearAllFields,
      isRequired: true,
      name: "name",
      content: {
        label: contact?.label_firstname,
        placeholder: contact?.placeholder_firstname,
        error_icon: contact?.error_icon,
        success_icon: contact?.success_icon
      },
      returnValue: value => setFname(value),
      error: errors?.fname
    }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
      needToClear: clearAllFields,
      isRequired: true,
      name: "lname",
      content: {
        label: contact?.label_lastname,
        placeholder: contact?.placeholder_lastname,
        error_icon: contact?.error_icon,
        success_icon: contact?.success_icon
      },
      returnValue: value => setLname(value),
      error: errors?.lname
    }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
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
      returnValue: value => setEmail(value),
      error: errors?.email
    }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
      needToClear: clearAllFields,
      isRequired: true,
      name: "destination",
      type: "text",
      content: {
        label: contact?.label_destination,
        placeholder: contact?.placeholder_destination,
        error_icon: contact?.error_icon,
        success_icon: contact?.success_icon
      },
      returnValue: value => setState(_objectSpread(_objectSpread({}, state), {}, {
        destination: value
      })),
      error: errors?.destination
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: external_classnames_default()("contact-pop__select", errors.eventType?.length > 0 && "error", state.eventType?.length && !errors.eventType?.length && "success"),
      children: [/*#__PURE__*/jsx_runtime_.jsx(Select/* default */.Z, {
        label: contact?.label_event,
        placeHolder: contact?.placeholder_event,
        dt: eventsType?.map(c => c.name),
        needToClear: clearAllFields,
        returnValue: value => setState(_objectSpread(_objectSpread({}, state), {}, {
          eventType: value
        }))
      }), errors.eventType?.length > 0 && /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "input__error",
        children: errors.eventType
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
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
    }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
      onClick: submit,
      isLink: false,
      classStr: "black w100",
      content: contact?.button_text
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "contact-block__bottom",
      dangerouslySetInnerHTML: {
        __html: contact?.subtext
      }
    })]
  });
};

/* harmony default export */ const common_ContactPopForm = (ContactPopForm);
;// CONCATENATED MODULE: ./src/components/common/Tabs/index.tsx




const Tabs = ({
  tabs,
  activeTab,
  setActive
}) => {
  const ref = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    if (ref.current) {
      ref.current?.style?.setProperty('--count-ch', tabs?.length + '');
    }
  }, [tabs]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "tabs",
    ref: ref,
    children: tabs?.map((ta, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_classnames_default()('tabs__item', activeTab == i && 'active'),
      onClick: () => setActive(i),
      children: ta
    }, i))
  });
};

/* harmony default export */ const common_Tabs = (Tabs);
// EXTERNAL MODULE: ./src/components/common/ListSmallIcon/index.tsx
var ListSmallIcon = __webpack_require__(9197);
// EXTERNAL MODULE: ./src/components/common/Text16/index.tsx
var Text16 = __webpack_require__(4730);
;// CONCATENATED MODULE: ./src/components/common/RequestCall/index.tsx







const RequestCall = () => {
  const {
    header: {
      contactPop
    },
    icons
  } = (0,RootStoreProvider/* useContentState */.b3)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "contact-pop__phone",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "contact-pop__phone-row",
      children: [/*#__PURE__*/jsx_runtime_.jsx(ListSmallIcon/* default */.Z, {
        icon: icons?.phone_icon
      }), /*#__PURE__*/jsx_runtime_.jsx(Text16/* default */.Z, {
        content: contactPop.call_text,
        color: "black"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
      isLink: true,
      link: `tel:${contactPop?.button_call}`,
      classStr: "black w100",
      content: `Call ${contactPop?.button_call}`
    })]
  });
};

/* harmony default export */ const common_RequestCall = (RequestCall);
;// CONCATENATED MODULE: ./src/components/common/ContactPop/index.tsx














const ContactPop = (0,external_mobx_react_.observer)(() => {
  const {
    header: {
      contactPop,
      menu_close
    },
    header,
    content: {
      reviews_list,
      contact
    }
  } = (0,RootStoreProvider/* useContentState */.b3)();
  const {
    0: tab,
    1: setTab
  } = (0,external_react_.useState)(0);
  const {
    0: isShow,
    1: setShow
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (GlobalState/* default.isContactPop */.ZP.isContactPop) {
      setTimeout(() => {
        setShow(true);
      }, 1500);
    } else {
      setShow(false);
    }
  }, [GlobalState/* default.isContactPop */.ZP.isContactPop]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_classnames_default()("contact-pop__bg", GlobalState/* default.isContactPop */.ZP.isContactPop && "anim")
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: external_classnames_default()("contact-pop", GlobalState/* default.isContactPop */.ZP.isContactPop && "anim", isShow && GlobalState/* default.isContactPop */.ZP.isContactPop && "show"),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "contact-pop__container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "contact-pop__row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "contact-pop__reviews",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: header?.logotype?.url,
              alt: header?.logotype?.alt,
              className: "contact-pop__logo"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "contact-pop__reviews-col",
              children: [/*#__PURE__*/jsx_runtime_.jsx(H2/* default */.Z, {
                content: contactPop?.title,
                color: "white"
              }), /*#__PURE__*/jsx_runtime_.jsx(Text18/* default */.Z, {
                content: contactPop?.text,
                color: "white"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "contact-pop__reviews-list",
              children: /*#__PURE__*/jsx_runtime_.jsx(ReviewsList/* default */.Z, {
                items: contactPop?.reviewsList
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "contact-pop__form",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "contact-pop__close",
              onClick: GlobalState/* changeContactState */.wX,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: menu_close?.url,
                alt: menu_close?.alt
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "contact-pop__form-top",
              children: [/*#__PURE__*/jsx_runtime_.jsx(H2/* default */.Z, {
                content: contactPop?.title,
                color: "white"
              }), /*#__PURE__*/jsx_runtime_.jsx(Text18/* default */.Z, {
                content: contactPop?.text,
                color: "white"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(common_Tabs, {
              tabs: contactPop?.tabs?.map(t => t.tab_title),
              activeTab: tab,
              setActive: setTab
            }), !tab && /*#__PURE__*/jsx_runtime_.jsx(common_ContactPopForm, {}), tab > 0 && /*#__PURE__*/jsx_runtime_.jsx(common_RequestCall, {})]
          })]
        })
      })
    })]
  });
});
/* harmony default export */ const common_ContactPop = (ContactPop);

/***/ }),

/***/ 6372:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8342);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5668);
/* harmony import */ var _Text16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4730);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9915);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_5__]);
js_cookie__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const CookiePop = () => {
  const {
    0: isShow,
    1: setShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    cookies
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__/* .useContentState */ .b3)();

  const closeModal = () => setShow(false);

  const accept = () => {
    if (document.cookie.length) {
      js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].set("hideModal", "true", {
        expires: 7
      });
    } else {
      js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].set("hideModal", "true", {
        expires: 7
      });
    }

    closeModal();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].get("hideModal")) {
      setTimeout(() => {
        setShow(true);
      }, 1300);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("cookies", isShow && "show"),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text16__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      content: cookies?.text,
      color: "black"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "cookies__btns",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        isLink: false,
        onClick: closeModal,
        classStr: "white",
        content: cookies?.decline_btn
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        isLink: false,
        onClick: accept,
        classStr: "black",
        content: cookies?.accept_btn
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CookiePop);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Footer)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/hooks/RootStoreProvider.tsx
var RootStoreProvider = __webpack_require__(8342);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/hooks/getWindowDimensions.tsx
var getWindowDimensions = __webpack_require__(7542);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/common/Text16/index.tsx
var Text16 = __webpack_require__(4730);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/common/FooterCol/index.tsx









const FooterCol = ({
  item
}) => {
  const {
    header
  } = (0,RootStoreProvider/* useContentState */.b3)();
  const {
    width
  } = (0,getWindowDimensions/* useWindowDimensions */.d)();
  const {
    0: isActive,
    1: setActive
  } = (0,external_react_.useState)(false);
  const ref = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    if (width > 670) {
      if (!ref.current) return;
      requestAnimationFrame(() => {
        if (!ref.current) return;
        ref.current.style.height = `auto`;
      });
      return;
    }

    if (ref.current) {
      if (isActive) {
        const height = ref.current.scrollHeight;
        requestAnimationFrame(() => {
          if (!ref.current) return;
          ref.current.style.height = `${height + 16}px`;
        });
      } else {
        ref.current.style.height = "0";
      }
    }
  }, [isActive, width]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()("footer-col", isActive && "active"),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "footer-col__top",
      onClick: () => setActive(!isActive),
      children: [/*#__PURE__*/jsx_runtime_.jsx(Text16/* default */.Z, {
        content: item?.title,
        color: "white"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "footer-col__icon",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: header?.arrow_down?.url,
          alt: header?.arrow_down?.alt
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "footer-col__list",
      ref: ref,
      children: item?.children?.map((ch, i) => /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: ch.url,
        className: "footer__link",
        "aria-label": ch?.title || ``,
        children: ch?.title
      }, i))
    })]
  });
};

/* harmony default export */ const common_FooterCol = (FooterCol);
// EXTERNAL MODULE: ./src/components/common/ImageComponent/index.tsx
var ImageComponent = __webpack_require__(1778);
;// CONCATENATED MODULE: ./src/components/common/Footer/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Sustain = function Sustain(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      opacity: ".6",
      clipPath: "url(#a)",
      children: [/*#__PURE__*/jsx_runtime_.jsx("mask", {
        id: "b",
        style: {
          maskType: "luminance"
        },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "122",
        height: "11",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M122 0H0v10.936h122V0Z",
          fill: "#fff"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("g", {
        mask: "url(#b)",
        fill: "#fff",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M73.96 3.683v7.015h6.76c1.867 0 3.38-1.57 3.38-3.509V.175h-6.76c-1.866 0-3.38 1.57-3.38 3.508Zm1.127 0c0-.307.058-.611.17-.895a2.333 2.333 0 0 1 .958-1.132V7.53L75.087 8.7V3.684Zm7.227 5.16c-.209.218-.457.391-.73.509a2.167 2.167 0 0 1-.863.176h-4.837L77.01 8.36h5.662c-.099.177-.219.34-.358.483Zm.66-3.991h-2.585l2.585-2.683v2.683Zm-3.379-3.508h2.58l-2.58 2.678V1.344Zm3.379 4.677v1.17h-4.838l1.127-1.17h3.71Zm-5.632-4.677h1.126v3.848l-1.127 1.17.001-5.018ZM5.24 4.374l-1.391-.291c-.703-.16-1.18-.54-1.18-1.065 0-.656.688-1.02 1.615-1.02 1.025 0 1.77.452 2.009 1.239h2.373C8.316.904 6.42 0 4.424 0 2.43 0 .197 1.006.197 3.164c0 1.896 1.503 2.712 3.16 3.077l1.236.262c1.11.248 1.896.583 1.896 1.269 0 .874-.927 1.152-1.741 1.152-1.25 0-2.093-.51-2.36-1.62H0c.365 2.276 2.079 3.632 4.691 3.632 2.121 0 4.27-1.254 4.27-3.47 0-2.217-2.079-2.742-3.722-3.092ZM17.768 6.343c0 1.56-.295 2.551-1.98 2.551-1.672 0-2.023-.86-2.023-2.406V.175h-2.402v6.05c0 3.486 1.377 4.71 4.425 4.71 3.174 0 4.382-1.545 4.382-4.797V.175h-2.402v6.168ZM27.836 4.374l-1.39-.291c-.703-.16-1.18-.54-1.18-1.065 0-.656.688-1.02 1.615-1.02 1.025 0 1.77.452 2.008 1.239h2.374C30.912.904 29.016 0 27.021 0c-1.994 0-4.228 1.006-4.228 3.164 0 1.896 1.503 2.712 3.16 3.077l1.237.262c1.11.248 1.896.583 1.896 1.269 0 .874-.927 1.152-1.742 1.152-1.25 0-2.093-.51-2.36-1.62h-2.387c.365 2.276 2.078 3.632 4.691 3.632 2.12 0 4.27-1.254 4.27-3.47 0-2.217-2.079-2.742-3.722-3.092ZM32.621 2.362h3.259v8.384h2.416V2.362h3.272V.175h-8.947v2.187ZM45.85.175l-3.835 10.57h2.556l.604-1.88h3.933l.618 1.88h2.613L48.49.176h-2.64Zm-.014 6.663 1.32-4.024 1.306 4.024h-2.626ZM56.866.175h-2.402v10.57h2.402V.176ZM66.883 7.465 62.796.175h-2.922v10.57h2.318v-7.29l4.087 7.29h2.922V.176h-2.318v7.29ZM91.268.175h-2.402v10.57h7.29v-2.2h-4.888V.174ZM100.98.175h-2.403v10.57h2.403V.176ZM103.987 10.746h2.403v-4.33h4.79V4.214h-4.79V2.362h5.098V.175h-7.501v10.57ZM121.999 2.362V.175h-7.81v10.57h7.81v-2.2h-5.408v-2.13h5.114V4.215h-5.114V2.362h5.408Z"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/jsx_runtime_.jsx("clipPath", {
        id: "a",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#fff",
          d: "M0 0h122v11H0z"
        })
      })
    })]
  }));
};

Sustain.defaultProps = {
  viewBox: "0 0 122 11",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

const Footer = () => {
  const {
    footer,
    header,
    footerMenu
  } = (0,RootStoreProvider/* useContentState */.b3)();
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: "footer",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "footer__container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "footer__row",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "footer__left",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "footer__logo",
            src: header?.logotype?.url,
            alt: header?.logotype?.alt
          }), /*#__PURE__*/jsx_runtime_.jsx(Text16/* default */.Z, {
            content: footer?.text,
            color: "white"
          }), /*#__PURE__*/jsx_runtime_.jsx(Sustain, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "footer__socials",
            children: footer?.socials?.map((so, i) => /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "footer__socials-item",
              href: so?.link,
              target: "_blank",
              rel: "noreferrer",
              children: /*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
                img: so?.icon
              })
            }, i))
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "footer__cols",
          children: footerMenu?.map((fo, i) => /*#__PURE__*/jsx_runtime_.jsx(common_FooterCol, {
            item: fo
          }, i))
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "footer__bottom",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "footer__bottom-left",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "footer__text footer__copy",
            children: ["On purpose events ", new Date().getFullYear(), ". All Rights Reserved"]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "footer__bottom-links",
            children: footer?.links?.map((c, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "footer__separator",
                children: "|"
              }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: c?.link?.url,
                className: "footer__link",
                "aria-label": c?.link?.title || ``,
                children: c?.link?.title
              })]
            }, i))
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "footer__socials",
          children: footer?.socials?.map((so, i) => /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "footer__socials-item",
            href: so?.link,
            target: "_blank",
            rel: "noreferrer",
            children: /*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
              img: so?.icon
            })
          }, i))
        })]
      })]
    })
  });
};

/* harmony default export */ const common_Footer = (Footer);

/***/ }),

/***/ 9555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const H1 = ({
  content,
  color
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h1", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("title", color),
    dangerouslySetInnerHTML: {
      __html: content
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (H1);

/***/ }),

/***/ 6109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const H2 = ({
  content,
  color
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h2", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("title2", color),
    dangerouslySetInnerHTML: {
      __html: content
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (H2);

/***/ }),

/***/ 3339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Header)
});

// EXTERNAL MODULE: ./src/hooks/RootStoreProvider.tsx
var RootStoreProvider = __webpack_require__(8342);
// EXTERNAL MODULE: ./src/stores/GlobalState.ts
var GlobalState = __webpack_require__(6595);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__(2062);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/common/Button/index.tsx
var Button = __webpack_require__(5668);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/common/ImageComponent/index.tsx
var ImageComponent = __webpack_require__(1778);
// EXTERNAL MODULE: ./src/components/common/ListSmallIcon/index.tsx
var ListSmallIcon = __webpack_require__(9197);
// EXTERNAL MODULE: ./src/components/common/Text18/index.tsx
var Text18 = __webpack_require__(9501);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/common/Navigation/index.tsx








const Navigation = () => {
  const {
    header,
    icons
  } = (0,RootStoreProvider/* useContentState */.b3)();

  const toggleClasses = mode => {
    const header = document.querySelector(".header"),
          nav = document.querySelector(".navigation");
    if (!header || !nav) return;
    setTimeout(() => {
      if (mode == "enter") {
        if (!header.classList.contains("fixed")) {
          header?.classList.add("white");
        }

        document.querySelector(".navigation__link.sublist")?.classList.add("visible");
      } else {
        if (!header.classList.contains("fixed")) {
          header?.classList.remove("white");
        }

        document.querySelector(".navigation__link.sublist")?.classList.remove("visible");
      }
    }, 30);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: "navigation",
    children: header?.menu?.map((m, i) => {
      if (m.children) {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "navigation__link sublist",
          onMouseEnter: () => toggleClasses("enter"),
          onMouseLeave: () => toggleClasses("leave"),
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            children: [m.title, /*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
              img: header?.arrow_down
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "navigation__sublist",
            onMouseEnter: e => {
              e.stopPropagation();
            },
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "navigation__sublist-block",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "navigation__sublist-left",
                children: m.children?.map((ci, id) => /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: `/${ci.object}/${ci.object_slug}`,
                  legacyBehavior: true,
                  "aria-label": ci.title || ``,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "navigation__subitem",
                    onClick: () => {
                      toggleClasses("leave");
                    },
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "navigation__subitem-left",
                      children: [/*#__PURE__*/jsx_runtime_.jsx(ListSmallIcon/* default */.Z, {
                        icon: ci?.icon
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: ci.title
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "navigation__subitem-right",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
                        img: icons?.arrow_right
                      })
                    })]
                  })
                }, id))
              }), header?.menuPost?.map((post, idx) => /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: `/${post?.type}/${post?.slug}`,
                legacyBehavior: true,
                "aria-label": post.title?.rendered || ``,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "navigation__sublist-right",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
                    img: post?.acf?.img
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "navigation__sublist-content",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "navigation__sublist-cont",
                      children: [/*#__PURE__*/jsx_runtime_.jsx(Text18/* default */.Z, {
                        color: "white",
                        content: post.title?.rendered
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "navigation__sublist-subtext",
                        children: "Learn more about it from our blog"
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "navigation__subitem-right",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
                        img: icons?.arrow_right
                      })
                    })]
                  })]
                })
              }, idx))]
            })
          })]
        }, i);
      }

      return /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: `${m.url}`,
        legacyBehavior: true,
        "aria-label": m?.title || ``,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "navigation__link",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: m.title
          })
        })
      }, i);
    })
  });
};

/* harmony default export */ const common_Navigation = (Navigation);
;// CONCATENATED MODULE: ./src/components/common/Header/index.tsx









const Header = (0,external_mobx_react_.observer)(() => {
  const {
    header
  } = (0,RootStoreProvider/* useContentState */.b3)();
  const ref = (0,external_react_.useRef)(null);

  const touchScroll = scrollPos => {
    const y = window.pageYOffset;
    const direction = scrollPos > y ? "up" : "down";
    if (!ref.current) return;
    const headerHeight = ref.current?.getBoundingClientRect().height + +getComputedStyle(ref.current).top.replaceAll("px", "");

    if (y > headerHeight) {
      ref.current.classList.add("hidden");
      ref.current.classList.add("fixed");

      if (direction == "up") {
        ref.current.classList.remove("hidden");
      }
    } else {
      ref.current.classList.remove("hidden");
      ref.current.classList.remove("fixed");
    }

    return y || 0;
  };

  const deskScroll = args => {
    const {
      direction,
      scroll: {
        y
      }
    } = args;
    if (!ref.current) return;
    const headerHeight = ref.current?.getBoundingClientRect().height + +getComputedStyle(ref.current).top.replaceAll("px", "");

    if (y > headerHeight) {
      ref.current.classList.add("hidden");
      ref.current.classList.add("fixed");

      if (direction == "up") {
        ref.current.classList.remove("hidden");
      }
    } else {
      ref.current.classList.remove("hidden");
      ref.current.classList.remove("fixed");
    }
  };

  (0,external_react_.useEffect)(() => {
    if (!ref.current) return;

    if (GlobalState/* default.isTouch */.ZP.isTouch) {
      let scrollY = 0;
      window.addEventListener("scroll", () => {
        scrollY = touchScroll(scrollY) || 0;
      });
      return;
    }

    if (GlobalState/* default.locoScroll */.ZP.locoScroll) {
      GlobalState/* default.locoScroll */.ZP.locoScroll?.on("scroll", args => {
        deskScroll(args);
      });
    }
  }, [GlobalState/* default.locoScroll */.ZP.locoScroll, GlobalState/* default.isTouch */.ZP.isTouch]);
  (0,external_react_.useEffect)(() => {
    if (GlobalState/* default.isMenuOpen */.ZP.isMenuOpen) {
      ref.current?.classList.add("menu-open");
    } else {
      ref.current?.classList.remove("menu-open");
    }
  }, [GlobalState/* default.isMenuOpen */.ZP.isMenuOpen]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: external_classnames_default()("header"),
    ref: ref,
    children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "header__left",
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        className: "header__logo",
        alt: header?.logotype?.alt,
        src: header?.logotype?.url
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(common_Navigation, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "header__func",
      children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        classStr: "white",
        content: header?.getin,
        onClick: GlobalState/* changeContactState */.wX
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "header__hamburger",
      onClick: GlobalState/* changeMenuState */.bT,
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: header?.menu_open?.url,
        alt: header?.menu_open?.alt,
        className: GlobalState/* default.isMenuOpen */.ZP.isMenuOpen ? "hidden" : ""
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: header?.menu_close?.url,
        alt: header?.menu_close?.alt,
        className: !GlobalState/* default.isMenuOpen */.ZP.isMenuOpen ? "hidden" : ""
      })]
    })]
  });
});
/* harmony default export */ const common_Header = (Header);

/***/ }),

/***/ 1778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const ImageComponent = ({
  img
}) => {
  if (!img?.sizes) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      src: img.url,
      alt: img.alt,
      width: img.width,
      height: img.height,
      srcSet: `${img.sizes["2048x2048"]} 2048w,${img.sizes["1536x1536"]} 1536w`,
      sizes: "(min-width: 1024px) 2048vw,(max-width: 1024px) 1536vw",
      style: {
        objectFit: "cover"
      }
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageComponent);

/***/ }),

/***/ 4541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1778);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const Input = ({
  type = "text",
  content,
  returnValue,
  isTextArea = false,
  isPhone = false,
  name,
  isRequired = false,
  error = "",
  needToClear = false
}) => {
  const {
    0: isFocus,
    1: setFocus
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: isTyping,
    1: setTyping
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const changeInputValue = event => {
    if (isPhone) {
      {
        if (!/[A-Za-zА-Яа-яїі]/g.test(event.target.value) && event.target.value.length <= 15) {
          setValue(event?.target?.value);
        }
      }
    } else {
      setValue(event?.target?.value);
    }

    setTyping(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    returnValue(value);
  }, [value]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (needToClear) {
      setValue("");
    }
  }, [needToClear]);
  const isSuccess = value?.length && !error.length;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
    className: "input",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
      className: "input__label",
      children: content?.label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("input__block", isTextArea && "textarea-block", isFocus && !isSuccess && "focused", isTyping && !isSuccess && "typing", isSuccess && "success", error?.length > 0 && "error"),
      children: [isTextArea ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("textarea", {
        required: isRequired,
        onChange: changeInputValue,
        className: "input__field",
        name: name,
        value: value,
        placeholder: content?.placeholder,
        onFocus: () => setFocus(true),
        onBlur: () => {
          setFocus(false);
          setTyping(false);
        }
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
        required: isRequired,
        name: name,
        type: type,
        onChange: changeInputValue,
        className: "input__field",
        placeholder: content?.placeholder,
        onFocus: () => setFocus(true),
        onBlur: () => {
          setFocus(false);
          setTyping(false);
        },
        value: value
      }), error?.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ImageComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        img: content?.error_icon
      }), !!isSuccess && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ImageComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        img: content?.success_icon
      })]
    }), error?.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
      className: "input__error",
      children: error
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ 1878:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6595);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ContactPop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7626);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8013);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3339);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5555);
/* harmony import */ var _SeoHeaders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4328);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3599);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ContactButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4694);
/* harmony import */ var _CookiePop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6372);
/* harmony import */ var _ThanksPop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9481);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CookiePop__WEBPACK_IMPORTED_MODULE_10__]);
_CookiePop__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const Layout = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(({
  children
}) => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);

  const isTouch = () => {
    return react_device_detect__WEBPACK_IMPORTED_MODULE_8__.isTablet || react_device_detect__WEBPACK_IMPORTED_MODULE_8__.isMobile;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (_stores_GlobalState__WEBPACK_IMPORTED_MODULE_0__/* ["default"].isContactPop */ .ZP.isContactPop || _stores_GlobalState__WEBPACK_IMPORTED_MODULE_0__/* ["default"].isMenuOpen */ .ZP.isMenuOpen || _stores_GlobalState__WEBPACK_IMPORTED_MODULE_0__/* ["default"].isBottomSheetOpen */ .ZP.isBottomSheetOpen || _stores_GlobalState__WEBPACK_IMPORTED_MODULE_0__/* ["default"].isThanksPOP */ .ZP.isThanksPOP) {
      document.querySelector("body, html, #__next")?.classList.add("hidden-menu");
      _stores_GlobalState__WEBPACK_IMPORTED_MODULE_0__/* ["default"].locoScroll */ .ZP.locoScroll?.stop();
    } else {
      document.querySelector("body, html, #__next")?.classList.remove("hidden-menu");
      _stores_GlobalState__WEBPACK_IMPORTED_MODULE_0__/* ["default"].locoScroll */ .ZP.locoScroll?.start();
    }
  }, [_stores_GlobalState__WEBPACK_IMPORTED_MODULE_0__/* ["default"].isContactPop */ .ZP.isContactPop, _stores_GlobalState__WEBPACK_IMPORTED_MODULE_0__/* ["default"].isMenuOpen */ .ZP.isMenuOpen, _stores_GlobalState__WEBPACK_IMPORTED_MODULE_0__/* ["default"].locoScroll */ .ZP.locoScroll, _stores_GlobalState__WEBPACK_IMPORTED_MODULE_0__/* ["default"].isBottomSheetOpen */ .ZP.isBottomSheetOpen, _stores_GlobalState__WEBPACK_IMPORTED_MODULE_0__/* ["default"].isThanksPOP */ .ZP.isThanksPOP]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    (0,_stores_GlobalState__WEBPACK_IMPORTED_MODULE_0__/* .changeIsTouch */ .Uw)(isTouch());

    if (isTouch()) {
      document.querySelector("html")?.classList.add("touch-device");
    } else document.querySelector("html")?.classList.remove("touch-device");
  }, []);

  const updateScroll = () => {
    const smooth = document.querySelector(".smooth");

    if (smooth && window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          if (entry.contentBoxSize) {
            _stores_GlobalState__WEBPACK_IMPORTED_MODULE_0__/* ["default"].locoScroll */ .ZP.locoScroll && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_0__/* ["default"].locoScroll */ .ZP.locoScroll?.update();
          }
        }
      });
      resizeObserver.observe(smooth);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setTimeout(() => {
      updateScroll();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_SeoHeaders__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Header__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "smooth",
      ref: ref,
      "data-scroll-container": true,
      children: [children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Menu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ContactPop__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ContactButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_CookiePop__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ThanksPop__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImageComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1778);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const ListSmallIcon = ({
  icon
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: "small-icon",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_ImageComponent__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      img: icon
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListSmallIcon);

/***/ }),

/***/ 5555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8342);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6595);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ListSmallIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9197);
/* harmony import */ var _ImageComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1778);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const Menu = (0,mobx_react__WEBPACK_IMPORTED_MODULE_3__.observer)(() => {
  const {
    header,
    footer,
    icons
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__/* .useContentState */ .b3)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("menu", _stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isMenuOpen */ .ZP.isMenuOpen && "open"),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
      className: "menu__list",
      children: header?.menu?.map((m, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(MenuItem, {
        m: m,
        header: header,
        icons: icons
      }, i))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "menu__bottom",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
        className: "menu__bottom-copy",
        children: ["On purpose events ", new Date().getFullYear(), ". All Rights Reserved"]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "menu__bottom-list",
        children: footer?.links?.map((li, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
          href: li?.link?.url,
          className: "menu__bottom-link",
          "aria-label": li?.link?.title || ``,
          children: li?.link?.title
        }, i))
      })]
    })]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);
const MenuItem = (0,mobx_react__WEBPACK_IMPORTED_MODULE_3__.observer)(({
  m,
  header,
  icons
}) => {
  const {
    0: isOpen,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (!_stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isMenuOpen */ .ZP.isMenuOpen) {
      setOpen(false);
    }
  }, [_stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isMenuOpen */ .ZP.isMenuOpen]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: m.children ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("menu__item", isOpen && "active"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "menu__item-top",
        onClick: () => setOpen(!isOpen),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          children: m.title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("img", {
          src: header?.arrow_down?.url,
          alt: header?.arrow_down?.alt
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "menu__item-list",
        children: m.children?.map((ci, id) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
          href: `/${ci.object}/${ci.object_slug}`,
          legacyBehavior: true,
          "aria-label": ci.title || ``,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
            className: "menu__item-sub",
            onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* .changeMenuState */ .bT,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ListSmallIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              icon: ci?.icon
            }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              className: "menu__item-content",
              children: ci.title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              className: "menu__item-arrow",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ImageComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                img: icons?.arrow_right
              })
            })]
          })
        }, id))
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: m.url,
      className: "menu__item",
      "aria-label": m.title || ``,
      onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* .changeMenuState */ .bT,
      children: m.title
    })
  });
});
const MenuLocale = (0,mobx_react__WEBPACK_IMPORTED_MODULE_3__.observer)(({
  header
}) => {
  const {
    0: isOpen,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (!_stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isMenuOpen */ .ZP.isMenuOpen) {
      setOpen(false);
    }
  }, [_stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isMenuOpen */ .ZP.isMenuOpen]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("menu__locale", isOpen && "active"),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "menu__locale-top",
      onClick: () => setOpen(!isOpen),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("img", {
          src: header?.locale_icon?.url,
          alt: header?.locale_icon?.alt
        }), header?.locales?.title]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("img", {
        src: header?.arrow_down?.url,
        alt: header?.arrow_down?.alt
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
      className: "menu__locale-list",
      children: header?.locales?.list?.map((li, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "menu__locale-item",
        onClick: () => (0,_stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* .changeLocale */ .wo)(li),
        children: li.lang
      }, i))
    })]
  });
});

/***/ }),

/***/ 4274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_ReviewsList)
});

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/common/ReviewItem/index.tsx




const ReviewItem = ({
  item,
  isSecond
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()('reviews-item', isSecond && 'second'),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "reviews-item__content",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "reviews-item__text",
        dangerouslySetInnerHTML: {
          __html: item?.text
        }
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "reviews-item__subtext",
        children: item?.author_name
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "reviews-item__bottom",
        children: item?.author_position
      })]
    })
  });
};

/* harmony default export */ const common_ReviewItem = (ReviewItem);
// EXTERNAL MODULE: ./src/hooks/getWindowDimensions.tsx
var getWindowDimensions = __webpack_require__(7542);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/components/common/ReviewsList/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const ReviewsList = ({
  items
}) => {
  const {
    width
  } = (0,getWindowDimensions/* useWindowDimensions */.d)();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    variableWidth: true,
    initialSlide: 0
  };
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "reviews-list",
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
      children: items?.map((it, i) => /*#__PURE__*/jsx_runtime_.jsx(common_ReviewItem, {
        item: it,
        isSecond: (i + 1) % 2 == 0
      }, i))
    }))
  });
};

/* harmony default export */ const common_ReviewsList = (ReviewsList);

/***/ }),

/***/ 28:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Text16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8342);
/* harmony import */ var _ImageComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1778);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6595);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const Select = ({
  placeHolder = "",
  label = "",
  dt,
  returnValue,
  needToClear = false
}) => {
  const {
    header,
    icons
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__/* .useContentState */ .b3)();
  const selectRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: selectValue,
    1: setSelect
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!selectRef.current) return;
    document.addEventListener("click", e => {
      const target = e.target;
      if (!target) return;

      if (!selectRef.current?.contains(target)) {
        setOpen(false);
      }
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    returnValue(selectValue);
  }, [selectValue]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!open) {
      _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locoScroll */ .ZP.locoScroll?.start();
    }
  }, [open]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (needToClear) {
      setSelect("");
    }
  }, [needToClear]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("select", open && "open"),
    ref: selectRef,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
      className: "select__label",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("select__top", selectValue?.length && "selected"),
      onClick: () => setOpen(!open),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Text16__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        content: selectValue?.length ? selectValue : placeHolder,
        color: "black"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ImageComponent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        img: header?.arrow_down
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "select__list",
      onScroll: () => {
        _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locoScroll */ .ZP.locoScroll?.stop();
      },
      children: [selectValue?.length > 0 && open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "select__clear",
        onClick: () => {
          setOpen(false);
          setSelect("");
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ImageComponent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          img: icons?.refresh_icon
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Text16__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          color: "black",
          content: "Clear"
        })]
      }), dt?.map((c, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("select__item", c == selectValue && "selected"),
        onClick: () => {
          setOpen(false);
          setSelect(c);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Text16__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          color: "black",
          content: c
        })
      }, i))]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react__WEBPACK_IMPORTED_MODULE_5__.observer)(Select));

/***/ }),

/***/ 4328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8342);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const SeoHeaders = () => {
  const content = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__/* .useContentState */ .b3)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!content?.seo) return;
    document.head.insertAdjacentHTML('afterbegin', content?.seo);
  }, [content?.seo]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeoHeaders);

/***/ }),

/***/ 4730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const Text16 = ({
  content,
  color
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("text16", color),
    dangerouslySetInnerHTML: {
      __html: content
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text16);

/***/ }),

/***/ 9501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const Text18 = ({
  content,
  color
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('text18', color),
    dangerouslySetInnerHTML: {
      __html: content
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text18);

/***/ }),

/***/ 9481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8342);
/* harmony import */ var _H2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6109);
/* harmony import */ var _Text16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4730);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5668);
/* harmony import */ var _ImageComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1778);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6595);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const ThanksPop = () => {
  const {
    thanks
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__/* .useContentState */ .b3)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("thanks-pop", _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* ["default"].isThanksPOP */ .ZP.isThanksPOP && "show"),
    onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* .changeThanksPopState */ .Yu,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "thanks-pop__container",
      onClick: e => e.stopPropagation(),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "thanks-pop__image",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ImageComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          img: thanks?.image
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_H2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        content: thanks?.title,
        color: "black"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text16__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        content: thanks?.text,
        color: "black"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        classStr: "black",
        content: thanks?.button_title,
        isLink: false,
        onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* .changeThanksPopState */ .Yu
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react__WEBPACK_IMPORTED_MODULE_7__.observer)(ThanksPop));

/***/ }),

/***/ 5590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DW": () => (/* binding */ emailValidate),
/* harmony export */   "GE": () => (/* binding */ getGeneralDate)
/* harmony export */ });
/* unused harmony exports formateDDMMYY, transform, getTranslate */
const emailValidate = email => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
const formateDDMMYY = dt => {
  return `${String(dt.getDate())?.length > 1 ? dt.getDate() : `0${dt.getDate()}`}-${String(dt.getMonth() + 1)?.length > 1 ? dt.getMonth() + 1 : `0${dt.getMonth() + 1}`}-${dt.getFullYear()}`;
};
const getGeneralDate = date => {
  return new Date(date).toLocaleDateString("en", {
    dateStyle: "long"
  });
};
function transform(el, transformValue) {
  el.style.transform = transformValue;
}
function getTranslate(el) {
  const translate = {};
  if (!window.getComputedStyle) return;
  const style = getComputedStyle(el);
  const transform = style.transform || style.webkitTransform;
  let mat = transform.match(/^matrix3d\((.+)\)$/);

  if (mat) {
    translate.x = mat ? parseFloat(mat[1].split(", ")[12]) : 0;
    translate.y = mat ? parseFloat(mat[1].split(", ")[13]) : 0;
  } else {
    mat = transform.match(/^matrix\((.+)\)$/);
    translate.x = mat ? parseFloat(mat[1].split(", ")[4]) : 0;
    translate.y = mat ? parseFloat(mat[1].split(", ")[5]) : 0;
  }

  return translate;
}

/***/ }),

/***/ 7542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useWindowDimensions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6595);


const useWindowDimensions = () => {
  const {
    0: width,
    1: setWidth
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: height,
    1: setHeight
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener('resize', () => {
      _stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* ["default"].locoScroll */ .ZP.locoScroll && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* ["default"].locoScroll.update */ .ZP.locoScroll.update();
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
  }, [_stores_GlobalState__WEBPACK_IMPORTED_MODULE_1__/* ["default"].locoScroll */ .ZP.locoScroll]);
  return {
    width,
    height
  };
};

/***/ }),

/***/ 936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useLocoScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6595);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _getWindowDimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7542);





function useLocoScroll(start) {
  const {
    asPath: pathname
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    width
  } = (0,_getWindowDimensions__WEBPACK_IMPORTED_MODULE_4__/* .useWindowDimensions */ .d)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!start) return;
    let locoScroll = null;

    const load = async () => {
      if (!document) return;
      const scrollEl = document.querySelector(".smooth");
      if (!scrollEl) return;
      const LocomotiveScroll = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 1834, 23))).default;

      if (LocomotiveScroll) {
        locoScroll = new LocomotiveScroll({
          el: scrollEl,
          smooth: true,
          multiplier: 0.8,
          touchMultiplier: 2,
          elMobile: scrollEl,
          firefoxMultiplier: 60,
          getDirection: true,
          smartphone: {
            breakpoint: 0,
            smooth: false //true

          },
          tablet: {
            breakpoint: 0,
            smooth: false //true

          },
          reloadOnContextChange: true,
          scrollFromAnywhere: true
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.runInAction)(() => {
          _stores_GlobalState__WEBPACK_IMPORTED_MODULE_2__/* ["default"].locoScroll */ .ZP.locoScroll = locoScroll;
        });
      }
    };

    load();
    return () => {
      if (locoScroll) {
        locoScroll.destroy();
        locoScroll = null;
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.runInAction)(() => {
          _stores_GlobalState__WEBPACK_IMPORTED_MODULE_2__/* ["default"].locoScroll */ .ZP.locoScroll = locoScroll;
        });
      }
    };
  }, [start, pathname]);
}

/***/ }),

/***/ 73:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getCommon)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8290);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const getCommon = async options => {
  const footerMenu = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getFooterMenu */ .qL)();
  let topMenu = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getMenu */ .r7)();
  const ids = options?.acf?.header?.post_in_menu?.map(c => c.ID);
  let menuPost = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getPostsById */ .yg)(ids.join(","));
  const eventsType = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getEventsType */ .hM)();

  if (topMenu?.items) {
    let itIds = [];
    topMenu.items.forEach(c => {
      if (c?.children) {
        itIds = c?.children?.map(c => c.object_id);
      }
    });
    const eventsByIds = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getEventsByIds */ .tO)(itIds.join(","));
    topMenu.items = topMenu.items.map(c => {
      if (c.children) {
        c.children = c.children?.map(ci => {
          const item = eventsByIds.find(ev => ev.id == ci.object_id);
          return _objectSpread(_objectSpread({}, ci), {}, {
            icon: item?.acf?.menu_icon
          });
        });
        return c;
      }

      return c;
    });
  }

  return {
    header: _objectSpread(_objectSpread({}, options?.acf?.header), {}, {
      menu: topMenu?.items,
      contactPop: _objectSpread(_objectSpread({}, options?.acf?.contact_pop), {}, {
        contactForm: options?.acf?.contact_form,
        reviewsList: options?.acf?.reviews_?.reviews
      }),
      menuPost
    }),
    faqCTA: options?.acf?.faqs_cta,
    eventsType,
    contactPop: options.acf?.contact_form,
    thanks: options.acf?.thanks_pop,
    cookies: options.acf?.cookies,
    footerMenu,
    icons: options?.acf?.icons,
    footer: options?.acf?.footer
  };
};

/***/ }),

/***/ 6595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dt": () => (/* binding */ bottomSheetState),
/* harmony export */   "Uw": () => (/* binding */ changeIsTouch),
/* harmony export */   "Yu": () => (/* binding */ changeThanksPopState),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bT": () => (/* binding */ changeMenuState),
/* harmony export */   "sK": () => (/* binding */ setBottomSheetValue),
/* harmony export */   "wX": () => (/* binding */ changeContactState),
/* harmony export */   "wo": () => (/* binding */ changeLocale)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);

const GlobalState = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observable)({
  locoScroll: null,
  isMenuOpen: false,
  lang: {
    lang: "English",
    short_lang: "en"
  },
  isContactPop: false,
  isTouch: false,
  isBottomSheetOpen: false,
  bottomSheetValue: "",
  isThanksPOP: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalState);
const changeIsTouch = touch => {
  (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(() => {
    GlobalState.isTouch = touch;
  });
};
const changeThanksPopState = () => {
  (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(() => {
    GlobalState.isThanksPOP = !GlobalState.isThanksPOP;
  });
};
const changeMenuState = () => {
  (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(() => {
    GlobalState.isMenuOpen = !GlobalState.isMenuOpen;
  });
};
const changeContactState = () => {
  (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(() => {
    GlobalState.isContactPop = !GlobalState.isContactPop;
  });
};
const changeLocale = obj => {
  (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(() => {
    GlobalState.lang = obj;
  });
};
const bottomSheetState = () => {
  (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(() => {
    GlobalState.isBottomSheetOpen = !GlobalState.isBottomSheetOpen;
  });
};
const setBottomSheetValue = value => {
  (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(() => {
    GlobalState.bottomSheetValue = value;
    GlobalState.isBottomSheetOpen = !GlobalState.isBottomSheetOpen;
  });
};

/***/ })

};
;