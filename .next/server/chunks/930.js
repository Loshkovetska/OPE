"use strict";
exports.id = 930;
exports.ids = [930];
exports.modules = {

/***/ 7703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const H3 = ({
  content,
  color
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('title3', color),
    dangerouslySetInnerHTML: {
      __html: content
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (H3);

/***/ }),

/***/ 7653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_ContactForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7859);
/* harmony import */ var _components_common_HeadlineWithCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(128);
/* harmony import */ var _components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1778);
/* harmony import */ var _components_common_Text18__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9501);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8342);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const ContactBlock = ({
  indexStart = 2
}) => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  const {
    content: {
      contact
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__/* .useContentState */ .b3)();
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    ref.current?.querySelector(".title2")?.classList.add("title56");
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("section", {
    className: "contact-block",
    ref: ref,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "contact-block__container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "contact-block__img",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          img: contact?.img
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "contact-block__col",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_HeadlineWithCircle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          vectorStyle: "v1",
          color: "black",
          text: contact?.title,
          indexStart: indexStart,
          headLevel: "h2"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_Text18__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          color: "black",
          content: contact?.text
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_ContactForm__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {})]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactBlock);

/***/ })

};
;