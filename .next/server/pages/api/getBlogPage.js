"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 8835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBlogPage": () => (/* binding */ getBlogPage)
/* harmony export */ });
/* harmony import */ var _mocks_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8517);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6543);
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [517], () => (__webpack_exec__(8835)));
module.exports = __webpack_exports__;

})();