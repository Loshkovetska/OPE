"use strict";
(() => {
var exports = {};
exports.id = 796;
exports.ids = [796];
exports.modules = {

/***/ 5847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_CaseItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3541);
/* harmony import */ var _components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1778);
/* harmony import */ var _components_common_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8342);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6595);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const CasesList = () => {
  const {
    content: {
      block_2_filters,
      industries
    },
    cases,
    eventsType,
    icons
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__/* .useContentState */ .b3)();
  const {
    0: filters,
    1: setFilters
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    f1: "",
    f2: ""
  });
  const casesList = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => {
    let result = cases.sort((c, b) => new Date(c.date).getTime() - new Date(b.date).getTime());
    if (!filters.f1.length && !filters.f2.length) return result;

    if (filters?.f1?.length) {
      result = result.filter(c => {
        const el = c.event_type?.find(c => c.name == filters?.f1);

        if (el) {
          return c;
        }
      });
    }

    if (filters?.f2?.length) {
      result = result.filter(c => {
        const el = c.industries?.find(c => c.name == filters?.f2);

        if (el) {
          return c;
        }
      });
    }

    return result;
  }, [filters, cases]);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (window.innerWidth <= 480 && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_5__/* ["default"].bottomSheetValue */ .ZP.bottomSheetValue) {
      const fils = JSON.parse(_stores_GlobalState__WEBPACK_IMPORTED_MODULE_5__/* ["default"].bottomSheetValue */ .ZP.bottomSheetValue);

      if (typeof fils == "object") {
        setFilters(_objectSpread(_objectSpread({}, filters), fils));
      }
    }
  }, [_stores_GlobalState__WEBPACK_IMPORTED_MODULE_5__/* ["default"].bottomSheetValue */ .ZP.bottomSheetValue]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("section", {
    className: "cases-list",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "cases-list__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "cases-list__selects",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_common_Select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          label: block_2_filters?.filter1_title,
          placeHolder: block_2_filters?.filter1,
          dt: eventsType?.map(c => c.name),
          returnValue: value => setFilters(_objectSpread(_objectSpread({}, filters), {}, {
            f1: value
          }))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_common_Select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          label: block_2_filters?.filter2_title,
          placeHolder: block_2_filters?.filter2,
          dt: industries?.map(c => c.name),
          returnValue: value => setFilters(_objectSpread(_objectSpread({}, filters), {}, {
            f2: value
          }))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          content: `${casesList?.length}
            ${!casesList?.length || casesList?.length > 1 ? "cases" : "case"}`,
          color: "black"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "posts-list__filter",
          onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_5__/* .bottomSheetState */ .Dt,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            img: icons?.filter_icon
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "cases-list__list",
        children: [casesList?.slice(0, 2).map((c, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_common_CaseItem__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          item: c
        }, i)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "cases-list__row",
          children: casesList?.slice(2, 3).map((c, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_common_CaseItem__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
            item: c
          }, i))
        }), casesList?.slice(3).map((c, i) => {
          if (i && !((i + 1) % 7)) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
              className: "cases-list__row",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_common_CaseItem__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
                item: c
              }, i)
            });
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_common_CaseItem__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
            item: c
          }, i);
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react__WEBPACK_IMPORTED_MODULE_6__.observer)(CasesList));

/***/ }),

/***/ 5629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ getCasesPage)
/* harmony export */ });
/* harmony import */ var _mocks_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8290);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getCasesPage = async () => {
  const options = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getOptions */ .FW)();
  const page = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getPage */ .fx)(329);
  const eventsType = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getEventsType */ .hM)();
  const industries = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getIndustryType */ .jp)();
  const cases = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getCases */ .cJ)();
  const casesList = [];
  cases.forEach(c => {
    casesList.push(_objectSpread(_objectSpread({}, c), {}, {
      event_type: eventsType.filter(ci => c["event-type"].includes(ci.id)),
      link: `/cases/${c.slug}`,
      industries: industries.filter(ci => c["industry"].includes(ci.id)),
      preview_image: c.acf.preview_image,
      preview_text: c.acf.preview_text
    }));
  });
  const menu = await (0,_mocks_common__WEBPACK_IMPORTED_MODULE_0__/* .getCommon */ .e)(options);
  return _objectSpread(_objectSpread({}, menu), {}, {
    eventsType,
    content: _objectSpread(_objectSpread({}, page?.acf), {}, {
      industries,
      acf_help: options?.acf?.help
    }),
    cases: casesList,
    seo: page?.yoast_head
  });
};

/***/ }),

/***/ 3984:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cases),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1878);
/* harmony import */ var _hooks_useLoco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(936);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7092);
/* harmony import */ var _api_getCasesPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5629);
/* harmony import */ var _components_common_SecondIntro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5222);
/* harmony import */ var _components_pages_cases_CasesList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5847);
/* harmony import */ var _components_common_Puzzle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3349);
/* harmony import */ var _components_pages_home_BlackTouch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8074);
/* harmony import */ var _components_common_SelectBottomSheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7223);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__, _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_3__]);
([_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__, _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_common_SecondIntro__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_common_Puzzle__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: "cases-width"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_pages_cases_CasesList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: "space big hidden"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_pages_home_BlackTouch__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        color: "white",
        withCircle: false,
        block_9: props.content?.block_3
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: "space big"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_common_SelectBottomSheet__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      dt: [],
      withSelects: true
    })]
  });
}
async function getStaticProps() {
  const response = await (0,_api_getCasesPage__WEBPACK_IMPORTED_MODULE_4__/* .getCasesPage */ .I)();
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,342,801,910,212,747,541], () => (__webpack_exec__(3984)));
module.exports = __webpack_exports__;

})();