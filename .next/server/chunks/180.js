"use strict";
exports.id = 180;
exports.ids = [180];
exports.modules = {

/***/ 180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8342);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1778);
/* harmony import */ var _Text16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4730);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_funs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5590);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









const BlogCard = ({
  item,
  withText = false
}) => {
  const {
    content: {
      acf_help
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__/* .useContentState */ .b3)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    className: "blog-card",
    href: `/${item?.type}/${item?.slug}`,
    "aria-label": item?.title?.rendered || ``,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "blog-card__img",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "blog-card__image",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ImageComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          img: item?.acf?.img
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "blog-card__pop",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ImageComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          img: acf_help?.arrow_icon
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("blog-card__content", withText && "with-text"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
        className: "blog-card__subtitle",
        children: [item?.acf?.author, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "blog-card__date",
          children: ["\xA0\xA0\u2022\xA0\xA0 ", (0,_hooks_funs__WEBPACK_IMPORTED_MODULE_6__/* .getGeneralDate */ .GE)(item.date)]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "blog-card__title",
        dangerouslySetInnerHTML: {
          __html: item?.title?.rendered
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Text16__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        color: "black",
        content: item?.acf?.preview_text
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "blog-card__tags",
        children: item?.cats.map((c, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "blog-card__tag",
          children: c?.name
        }, i))
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);

/***/ })

};
;