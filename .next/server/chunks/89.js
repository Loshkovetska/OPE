"use strict";
exports.id = 89;
exports.ids = [89];
exports.modules = {

/***/ 756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5668);
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6109);
/* harmony import */ var _components_common_BlogCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(180);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const Blog = () => {
  const {
    content: {
      news_block
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__/* .useContentState */ .b3)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("section", {
    className: "blog",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "blog__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "blog__top",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          content: news_block?.title,
          color: "black"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          content: news_block?.button?.title,
          classStr: "black",
          isLink: true,
          link: news_block?.button?.url
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "blog__list",
        children: news_block?.cards?.map((c, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_BlogCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          item: c
        }, i))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        content: news_block?.button?.title,
        classStr: "black",
        isLink: true,
        link: news_block?.button?.url
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

/***/ }),

/***/ 3755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ useScroll)
/* harmony export */ });
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6595);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const useScroll = (locoScroll, isTouch) => {
  const {
    0: scrollPos,
    1: setScroll
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!_stores_GlobalState__WEBPACK_IMPORTED_MODULE_0__/* ["default"].isTouch */ .ZP.isTouch) {
      locoScroll && locoScroll.on("scroll", ({
        scroll
      }) => {
        setScroll(scroll.y);
      });
    } else {
      window?.addEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    }
  }, [locoScroll, isTouch]);
  return scrollPos;
};

/***/ })

};
;