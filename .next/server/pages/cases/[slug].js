"use strict";
(() => {
var exports = {};
exports.id = 124;
exports.ids = [124];
exports.modules = {

/***/ 4729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8342);
/* harmony import */ var _event_EventQuote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6798);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const CaseContent = () => {
  const {
    content: {
      acf: {
        info,
        quote_block
      },
      content
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__/* .useContentState */ .b3)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("section", {
    className: "case-content",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "case-content__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "case-content__top",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "case-content__left",
          dangerouslySetInnerHTML: {
            __html: info?.left_column
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "case-content__right",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "case-content__right-title",
            children: info?.right_columnTitle
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "case-content__right-list",
            dangerouslySetInnerHTML: {
              __html: info?.list
            }
          })]
        })]
      }), quote_block?.text?.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_event_EventQuote__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "case-content__content",
        dangerouslySetInnerHTML: {
          __html: content.rendered
        }
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaseContent);

/***/ }),

/***/ 9374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_H1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9555);
/* harmony import */ var _components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1778);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const CaseIntro = () => {
  const {
    content,
    eventsType
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__/* .useContentState */ .b3)();
  const events = eventsType?.filter(c => content["event-type"].includes(c.id));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
    className: "general-intro case-intro",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "general-intro__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "general-intro__top",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_common_H1__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          content: content?.acf?.main_title,
          color: "white"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "case-intro__tags",
          children: events?.map((c, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "text16 white",
            children: c.name
          }, i))
        })]
      }), content?.acf?.main_picture && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "general-intro__image",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          img: content?.acf?.main_picture
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaseIntro);

/***/ }),

/***/ 4660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5668);
/* harmony import */ var _components_common_CaseItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3541);
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6109);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const RelatedCases = () => {
  const {
    content: {
      related_cases,
      relatedList
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__/* .useContentState */ .b3)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("section", {
    className: "related-cases cases",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "related-cases__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "related-cases__top",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          color: "black",
          content: related_cases?.title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          content: related_cases?.button?.title,
          classStr: "black",
          isLink: true,
          link: related_cases?.button?.url
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "related-cases__list",
        children: relatedList?.map((c, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_CaseItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          item: c
        }, i))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        content: related_cases?.button?.title,
        classStr: "black",
        isLink: true,
        link: related_cases?.button?.url
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedCases);

/***/ }),

/***/ 1970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ getCasePage)
/* harmony export */ });
/* harmony import */ var _mocks_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8290);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getCasePage = async slug => {
  const options = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getOptions */ .FW)();
  const page = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getSingleCase */ .Jb)(slug);
  const eventsType = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getEventsType */ .hM)();
  const ids = page[0]?.acf?.related_cases?.list?.map(c => c.ID);
  let relatedList = [];

  if (ids?.length) {
    relatedList = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getCasesById */ ._v)(ids.join(","));
  }

  if (relatedList) {
    relatedList = relatedList.map(c => {
      return _objectSpread(_objectSpread({}, c), {}, {
        event_type: eventsType.filter(ci => c["event-type"].includes(ci.id)),
        link: `/cases/${c.slug}`,
        preview_image: c.acf.preview_image
      });
    });
  }

  const menu = await (0,_mocks_common__WEBPACK_IMPORTED_MODULE_0__/* .getCommon */ .e)(options);
  return _objectSpread(_objectSpread({}, menu), {}, {
    content: _objectSpread(_objectSpread({}, page[0]), {}, {
      contact: _objectSpread(_objectSpread({}, options?.acf?.contact_form), {}, {
        img: page[0].acf?.contact_image
      }),
      acf_help: options?.acf?.help,
      block_2: _objectSpread(_objectSpread({}, options?.acf?.logotypes), {}, {
        title: ""
      }),
      related_cases: options?.acf?.related_cases,
      relatedList
    }),
    eventsType,
    seo: page[0]?.yoast_head
  });
};

/***/ }),

/***/ 9292:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cases),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1878);
/* harmony import */ var _hooks_useLoco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(936);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8290);
/* harmony import */ var _api_getCasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1970);
/* harmony import */ var _components_pages_case_CaseIntro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9374);
/* harmony import */ var _components_pages_case_CaseContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4729);
/* harmony import */ var _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7092);
/* harmony import */ var _components_pages_home_Logotypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9276);
/* harmony import */ var _components_pages_home_ContactBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7653);
/* harmony import */ var _components_pages_case_RelatedCases__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4660);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__, _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_7__]);
([_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__, _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function Cases({
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
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_pages_case_CaseIntro__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_pages_case_CaseContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "gen-block",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_pages_case_RelatedCases__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_pages_home_Logotypes__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          style: "center",
          content: props?.content?.acf?.logotypes
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_pages_home_ContactBlock__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
        className: "space"
      })]
    })
  });
}
async function getStaticPaths() {
  const cases = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_3__/* .getCases */ .cJ)();
  const paths = [];
  cases?.forEach(p => {
    paths.push({
      params: {
        slug: p.slug,
        path: `/${p.type}/${p.slug}`
      }
    });
  });
  return {
    paths: paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const response = await (0,_api_getCasePage__WEBPACK_IMPORTED_MODULE_4__/* .getCasePage */ .S)(params.slug);
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

/***/ }),

/***/ 4009:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,342,801,910,859,930,276,798,541], () => (__webpack_exec__(9292)));
module.exports = __webpack_exports__;

})();