"use strict";
exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 9276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1778);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const Logotypes = ({
  style,
  content
}) => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    ref?.current?.style.setProperty("--count-el", "");
  }, [content?.images]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("logotypes", style),
    ref: ref,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "logotypes__top",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
        className: "logotypes__title",
        children: content?.title
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("logotypes__container", "el" + content?.images?.length),
      children: content?.images?.map((lo, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "logotypes__item",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          img: lo?.image
        })
      }, i))
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logotypes);

/***/ })

};
;