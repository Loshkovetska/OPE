"use strict";
exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 1810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1778);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const MaskedImage = ({
  img,
  version
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('masked-img', version),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ImageComponent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      img: img
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaskedImage);

/***/ }),

/***/ 3349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const Puzzle = ({
  color
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "puzzle"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Puzzle);

/***/ }),

/***/ 8074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5668);
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6109);
/* harmony import */ var _components_common_HeadlineWithCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(128);
/* harmony import */ var _components_common_MaskedImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1810);
/* harmony import */ var _components_common_Text18__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9501);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8342);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6595);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const BlackTouch = ({
  block_9,
  color = "black",
  withCircle = false,
  indexStart = 0
}) => {
  const {
    header
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__/* .useContentState */ .b3)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("black-touch", color),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "black-touch__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "black-touch__col",
        children: [withCircle ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_common_HeadlineWithCircle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          color: "white",
          text: block_9?.title,
          headLevel: "h2",
          indexStart: indexStart,
          vectorStyle: "v2"
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          color: "white",
          content: block_9?.title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_common_Text18__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          color: "white",
          content: block_9?.text
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          classStr: color == "white" ? "black" : "white",
          isLink: false,
          content: block_9?.button ? block_9.button : header?.getin,
          onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* .changeContactState */ .wX
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "black-touch__img",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_common_MaskedImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          img: block_9.image,
          version: "v2"
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlackTouch);

/***/ })

};
;