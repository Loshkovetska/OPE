"use strict";
(() => {
var exports = {};
exports.id = 472;
exports.ids = [472];
exports.modules = {

/***/ 4131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ blog_PostsList)
});

// EXTERNAL MODULE: ./src/components/common/BlogCard/index.tsx
var BlogCard = __webpack_require__(180);
// EXTERNAL MODULE: ./src/components/common/ImageComponent/index.tsx
var ImageComponent = __webpack_require__(1778);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/common/Text16/index.tsx
var Text16 = __webpack_require__(4730);
// EXTERNAL MODULE: ./src/hooks/RootStoreProvider.tsx
var RootStoreProvider = __webpack_require__(8342);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/common/Radio/index.tsx
var Radio = __webpack_require__(497);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/common/SelectRadio/index.tsx









const SelectRadio = ({
  placeHolder = "",
  dt,
  returnValue
}) => {
  const {
    header,
    icons
  } = (0,RootStoreProvider/* useContentState */.b3)();
  const selectRef = (0,external_react_.useRef)(null);
  const {
    0: selectValue,
    1: setSelect
  } = (0,external_react_.useState)("");
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (!selectRef.current) return;
    document.addEventListener("click", e => {
      const target = e.target;
      if (!target) return;

      if (!selectRef.current?.contains(target)) {
        setOpen(false);
      }
    });
  }, []);
  (0,external_react_.useEffect)(() => {
    returnValue(selectValue);
  }, [selectValue]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()("select", open && "open"),
    ref: selectRef,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: external_classnames_default()("select__top", selectValue?.length && "selected"),
      onClick: () => setOpen(!open),
      children: [/*#__PURE__*/jsx_runtime_.jsx(Text16/* default */.Z, {
        content: selectValue?.length ? selectValue : placeHolder,
        color: "black"
      }), /*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
        img: header?.arrow_down
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "select__list",
      children: [selectValue?.length > 0 && open && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "select__clear",
        onClick: () => {
          setOpen(false);
          setSelect("");
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
          img: icons?.refresh_icon
        }), /*#__PURE__*/jsx_runtime_.jsx(Text16/* default */.Z, {
          color: "black",
          content: "Clear"
        })]
      }), dt?.map((c, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()("select__item"),
        onClick: () => {
          setOpen(false);
          setSelect(c);
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(Text16/* default */.Z, {
          color: "black",
          content: c
        }), /*#__PURE__*/jsx_runtime_.jsx(Radio/* default */.Z, {
          isSelected: c == selectValue
        })]
      }, i))]
    })]
  });
};

/* harmony default export */ const common_SelectRadio = (SelectRadio);
// EXTERNAL MODULE: ./src/hooks/getWindowDimensions.tsx
var getWindowDimensions = __webpack_require__(7542);
// EXTERNAL MODULE: ./src/stores/GlobalState.ts
var GlobalState = __webpack_require__(6595);
// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__(2062);
;// CONCATENATED MODULE: ./src/components/pages/blog/PostsList/index.tsx











const PostsList = (0,external_mobx_react_.observer)(() => {
  const {
    content: {
      block_2_filter
    },
    posts,
    cats,
    icons
  } = (0,RootStoreProvider/* useContentState */.b3)();
  const postListRef = (0,external_react_.useRef)(null);
  const {
    width
  } = (0,getWindowDimensions/* useWindowDimensions */.d)();
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,external_react_.useState)(1);
  const {
    0: lastPage,
    1: setLastPage
  } = (0,external_react_.useState)(0);
  const {
    0: showMore,
    1: setMore
  } = (0,external_react_.useState)(0);
  const {
    0: countPerPage,
    1: setCount
  } = (0,external_react_.useState)(width >= 1024 ? 7 : 8);
  const {
    0: count,
    1: setPageCount
  } = (0,external_react_.useState)(Array());
  const {
    0: filter,
    1: setFilter
  } = (0,external_react_.useState)("");

  const getCardsByFilter = filter => {
    return posts.filter(c => {
      const currentCat = c.cats.find(ci => ci.name.includes(filter));

      if (currentCat) {
        return c;
      }
    });
  };

  const currentItems = (0,external_react_.useMemo)(() => {
    if (!filter.length) return posts;
    return getCardsByFilter(filter);
  }, [filter, posts]);
  const currentTableData = (0,external_react_.useMemo)(() => {
    let prev = 0;

    if (currentPage - 1) {
      for (let i = currentPage - 2; i >= 0; i--) {
        prev += count[i];
      }
    }

    const firstPageIndex = prev;
    const lastPageIndex = firstPageIndex + (count?.length ? count[currentPage - 1] : 1);
    return currentItems?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, currentItems, count, filter]);
  (0,external_react_.useEffect)(() => {
    setMore(0);
    const cnt = Math.ceil(currentItems.length / countPerPage);
    const arr = [];
    let maxLength = currentItems.length;

    for (let i = cnt - 1; i >= 0; i--) {
      arr.push(maxLength - countPerPage * i);
      maxLength -= maxLength - countPerPage * i;
    }

    setPageCount(arr.reverse());
  }, [currentItems]);
  (0,external_react_.useEffect)(() => {
    setCurrentPage(1);
  }, [filter]);
  (0,external_react_.useEffect)(() => {
    if (showMore) {
      let arr = count;
      arr[currentPage - 1] += count[currentPage] ? count[currentPage] : 0;
      arr.splice(currentPage, 1);
      setPageCount([...arr]);
    }
  }, [showMore]);
  (0,external_react_.useEffect)(() => {
    setMore(0);
  }, [currentPage]);
  (0,external_react_.useEffect)(() => {
    setFilter(GlobalState/* default.bottomSheetValue */.ZP.bottomSheetValue);
  }, [GlobalState/* default.bottomSheetValue */.ZP.bottomSheetValue]);
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "posts-list",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "posts-list__container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "posts-list__top",
        ref: postListRef,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Text16/* default */.Z, {
          content: `${currentItems?.length}
            ${!currentItems?.length || currentItems?.length > 1 ? "articles" : "article"}`,
          color: "black"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "posts-list__select",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Text16/* default */.Z, {
            content: block_2_filter?.filter_title,
            color: "black"
          }), /*#__PURE__*/jsx_runtime_.jsx(common_SelectRadio, {
            dt: cats?.map(c => c.name),
            placeHolder: block_2_filter.default_,
            returnValue: value => setFilter(value)
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "posts-list__filter",
            onClick: GlobalState/* bottomSheetState */.Dt,
            children: /*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
              img: icons?.filter_icon
            })
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "posts-list__list",
        children: currentTableData.map((c, i) => /*#__PURE__*/jsx_runtime_.jsx(BlogCard/* default */.Z, {
          item: c,
          withText: true
        }, i))
      })]
    })
  });
});
/* harmony default export */ const blog_PostsList = (PostsList);

/***/ }),

/***/ 3997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ getBlogPage)
/* harmony export */ });
/* harmony import */ var _mocks_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8290);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getBlogPage = async () => {
  const options = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getOptions */ .FW)();
  const page = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getPage */ .fx)(371);
  const cats = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getBlogCats */ .uO)();
  const posts = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getPosts */ .Jq)();
  const postsList = posts.map(re => {
    return _objectSpread(_objectSpread({}, re), {}, {
      cats: cats?.filter(c => re["category-blog"]?.includes(c.id))
    });
  });
  const menu = await (0,_mocks_common__WEBPACK_IMPORTED_MODULE_0__/* .getCommon */ .e)(options);
  return _objectSpread(_objectSpread({}, menu), {}, {
    content: _objectSpread(_objectSpread({}, page?.acf), {}, {
      acf_help: options?.acf?.help
    }),
    cats,
    posts: postsList,
    seo: page?.yoast_head
  });
};

/***/ }),

/***/ 1439:
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
/* harmony import */ var _components_common_SecondIntro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5222);
/* harmony import */ var _api_getBlogPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3997);
/* harmony import */ var _components_pages_blog_PostsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4131);
/* harmony import */ var _components_common_SelectBottomSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7223);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8342);
/* harmony import */ var _components_common_Puzzle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3349);
/* harmony import */ var _components_pages_home_BlackTouch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8074);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__, _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_3__]);
([_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__, _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function Cases({
  hydrationData: props
}) {
  const {
    cats
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_8__/* .useContentState */ .b3)();
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_common_SecondIntro__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_common_Puzzle__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
        className: "cases-width"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_pages_blog_PostsList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
        className: "space big hidden"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_pages_home_BlackTouch__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        color: "white",
        withCircle: false,
        block_9: props.content?.block_3
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
        className: "space big"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_common_SelectBottomSheet__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      dt: cats?.map(c => c.name),
      withSelects: false
    })]
  });
}
async function getStaticProps() {
  const response = await (0,_api_getBlogPage__WEBPACK_IMPORTED_MODULE_5__/* .getBlogPage */ .U)();
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
var __webpack_exports__ = __webpack_require__.X(0, [664,342,801,910,212,180,747], () => (__webpack_exec__(1439)));
module.exports = __webpack_exports__;

})();