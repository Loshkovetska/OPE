"use strict";
(() => {
var exports = {};
exports.id = 300;
exports.ids = [300];
exports.modules = {

/***/ 5954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPostPage": () => (/* binding */ getPostPage)
/* harmony export */ });
/* harmony import */ var _mocks_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8517);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6543);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getPostPage = async slug => {
  const options = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getOptions */ .FW)();
  const page = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getSinglePost */ .JF)(slug);
  const cats = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getBlogCats */ .uO)();
  const ids = typeof page[0]?.acf?.related_posts?.list == "object" ? page[0]?.acf?.related_posts?.list?.map(c => c.ID) : [];
  let relatedList = [];

  if (ids?.length) {
    relatedList = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getPostsById */ .yg)(ids.join(","));
  }

  if (relatedList) {
    relatedList = relatedList.map(c => {
      return _objectSpread(_objectSpread({}, c), {}, {
        cats: cats.filter(ci => c["category-blog"].includes(ci.id)),
        link: `/${c.type}/${c.slug}`
      });
    });
  }

  const menu = await (0,_mocks_common__WEBPACK_IMPORTED_MODULE_0__/* .getCommon */ .e)(options);
  return _objectSpread(_objectSpread({}, menu), {}, {
    content: _objectSpread(_objectSpread({}, page[0]), {}, {
      contact: options?.acf?.contact_form,
      news_block: _objectSpread(_objectSpread({}, options?.acf?.related_posts), {}, {
        title: page[0]?.acf?.related_posts?.title,
        cards: relatedList
      }),
      acf_help: options?.acf?.help
    }),
    cats,
    seo: page[0]?.yoast_head
  });
};

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [517], () => (__webpack_exec__(5954)));
module.exports = __webpack_exports__;

})();