"use strict";
exports.id = 557;
exports.ids = [557];
exports.modules = {

/***/ 8820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6109);
/* harmony import */ var _components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1778);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const OtherEvents = ({
  other_services
}) => {
  const {
    icons
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__/* .useContentState */ .b3)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
    className: "events-menu",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "events-menu__container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        color: "black",
        content: other_services?.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "events-menu__list",
        children: other_services?.list?.map((c, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
          className: "events-menu__item",
          href: c.url,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "events-menu__item-title",
            children: c.post_title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "events-menu__item-btn",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "events-menu__item-line",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                img: icons?.arrow_right
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                img: icons?.arrow_right
              })]
            })
          })]
        }, i))
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OtherEvents);

/***/ })

};
;