"use strict";
exports.id = 442;
exports.ids = [442];
exports.modules = {

/***/ 2609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_H1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9555);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const DocsContent = () => {
  const {
    content
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_1__/* .useContentState */ .b3)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "docs",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "docs__intro",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_common_H1__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        color: "white",
        content: content?.title?.rendered
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "docs__content",
      dangerouslySetInnerHTML: {
        __html: content?.content?.rendered
      }
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocsContent);

/***/ }),

/***/ 370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ getDocs)
/* harmony export */ });
/* harmony import */ var _mocks_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8290);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getDocs = async pageNumber => {
  const options = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getOptions */ .FW)();
  const page = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getPage */ .fx)(pageNumber);
  const menu = await (0,_mocks_common__WEBPACK_IMPORTED_MODULE_0__/* .getCommon */ .e)(options);
  return _objectSpread(_objectSpread({}, menu), {}, {
    content: page,
    seo: page?.yoast_head
  });
};

/***/ })

};
;