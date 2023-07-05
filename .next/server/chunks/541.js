"use strict";
exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 3541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8342);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1778);
/* harmony import */ var _Text18__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9501);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const CaseItem = ({
  item
}) => {
  const {
    content: {
      acf_help
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__/* .useContentState */ .b3)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: item?.link,
    className: "case-item blog-card",
    "aria-label": item?.title?.rendered || ``,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "blog-card__img",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "blog-card__image",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ImageComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          img: item?.preview_image
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "blog-card__pop",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ImageComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          img: acf_help?.arrow_icon
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "blog-card__content",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "blog-card__title",
        dangerouslySetInnerHTML: {
          __html: item?.title?.rendered
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text18__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        content: item?.preview_text,
        color: "black"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "blog-card__tags",
        children: item?.event_type?.map((c, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "blog-card__tag",
          children: c?.name
        }, i))
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaseItem);

/***/ })

};
;