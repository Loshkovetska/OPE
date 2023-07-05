"use strict";
(() => {
var exports = {};
exports.id = 192;
exports.ids = [192];
exports.modules = {

/***/ 1982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5668);
/* harmony import */ var _components_common_ContactForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7859);
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6109);
/* harmony import */ var _components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1778);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8342);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6595);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const ContactContent = () => {
  const {
    content: {
      chat_block,
      contacts
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__/* .useContentState */ .b3)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("section", {
    className: "contact-content",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "contact-content__block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "contact-content__block-top",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          content: chat_block?.title,
          color: "black"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          content: chat_block?.text,
          color: "black"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          content: chat_block?.button,
          classStr: "black w100",
          isLink: false,
          onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* .changeContactState */ .wX
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "contact-content__list",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "contact-content__list-line",
          children: chat_block?.list?.map((c, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: "contact-content__item",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
              img: c.image
            })
          }, i))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "contact-content__list-line",
          children: chat_block?.list?.map((c, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: "contact-content__item",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
              img: c.image
            })
          }, i))
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "contact-content__block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "contact-content__block-top",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          content: contacts?.title,
          color: "black"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          content: contacts?.text,
          color: "black"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_ContactForm__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactContent);

/***/ }),

/***/ 7818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_H1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9555);
/* harmony import */ var _components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1778);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const ContactIntro = () => {
  const {
    content: {
      block_1
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__/* .useContentState */ .b3)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("section", {
    className: "general-intro contact-intro",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "general-intro__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "general-intro__top",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_H1__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          content: block_1?.title,
          color: "white"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          content: block_1?.text,
          color: "white"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "general-intro__image",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          img: block_1?.image
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactIntro);

/***/ }),

/***/ 8883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ getContactPage)
/* harmony export */ });
/* harmony import */ var _mocks_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8290);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getContactPage = async () => {
  const options = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getOptions */ .FW)();
  const page = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getPage */ .fx)(298);
  const menu = await (0,_mocks_common__WEBPACK_IMPORTED_MODULE_0__/* .getCommon */ .e)(options);
  return _objectSpread(_objectSpread({}, menu), {}, {
    content: _objectSpread(_objectSpread({}, page?.acf), {}, {
      contact: options?.acf?.contact_form
    }),
    seo: page?.yoast_head
  });
};

/***/ }),

/***/ 5804:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1878);
/* harmony import */ var _hooks_useLoco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(936);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_getContactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8883);
/* harmony import */ var _components_pages_contact_ContactIntro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7818);
/* harmony import */ var _components_pages_contact_ContactContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1982);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__]);
_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function Home({
  hydrationData: props
}) {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  (0,_hooks_useLoco__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(!loading);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!loading) {
      if (true) {
        return;
      }
    }
  }, [loading]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (props?.content) {
      setLoading(false);
    }
  }, [props]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_pages_contact_ContactIntro__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_pages_contact_ContactContent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "space"
      })]
    })
  });
}
async function getStaticProps() {
  const response = await (0,_api_getContactPage__WEBPACK_IMPORTED_MODULE_3__/* .getContactPage */ .J)();
  return {
    props: {
      hydrationData: _objectSpread({}, response)
    },
    revalidate: 10
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 1834:
/***/ ((module) => {

module.exports = require("locomotive-scroll");

/***/ }),

/***/ 6211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 2062:
/***/ ((module) => {

module.exports = require("mobx-react");

/***/ }),

/***/ 5944:
/***/ ((module) => {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3599:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,342,801,859], () => (__webpack_exec__(5804)));
module.exports = __webpack_exports__;

})();