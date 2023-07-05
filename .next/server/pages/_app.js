(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8342);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7195);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var locomotive_scroll_src_locomotive_scroll_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5505);
/* harmony import */ var locomotive_scroll_src_locomotive_scroll_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(locomotive_scroll_src_locomotive_scroll_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function App({
  Component,
  pageProps
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    let vh = window.innerHeight * 0.01;
    const s = document.querySelector("html");
    if (!s) return;
    s.style.setProperty("--viewport-height", `${vh}px`);
    window.addEventListener("resize", function (e) {
      let vh = window.innerHeight * 0.01;
      s.style.setProperty("--viewport-height", `${vh}px`);
    });
    console.clear();

    console.log = function () {};
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__/* .RootStoreProvider */ .LD, {
    hydrationData: pageProps?.hydrationData,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Component, _objectSpread({}, pageProps))
  });
}

/***/ }),

/***/ 5505:
/***/ (() => {



/***/ }),

/***/ 7195:
/***/ (() => {



/***/ }),

/***/ 6211:
/***/ ((module) => {

"use strict";
module.exports = require("mobx");

/***/ }),

/***/ 5944:
/***/ ((module) => {

"use strict";
module.exports = require("mobx-react-lite");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [342], () => (__webpack_exec__(6126)));
module.exports = __webpack_exports__;

})();