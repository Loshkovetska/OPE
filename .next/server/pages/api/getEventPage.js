"use strict";
(() => {
var exports = {};
exports.id = 601;
exports.ids = [601];
exports.modules = {

/***/ 9169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEventPage": () => (/* binding */ getEventPage)
/* harmony export */ });
/* harmony import */ var _mocks_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8517);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6543);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getEventPage = async slug => {
  const options = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getOptions */ .FW)();
  const page = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getSingleEvent */ .Bk)(slug);
  const eventsType = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getEventsType */ .hM)();
  const ids = typeof page?.acf?.cases == "object" ? page?.acf?.cases.map(c => c.ID) : [];
  let relatedList = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getCasesById */ ._v)(ids.join(","));
  let blogPosts = [];

  if (!page?.acf?.block_17?.show_sustainable_list) {
    const postsIds = typeof page?.acf?.block_17?.list == "object" ? page?.acf?.block_17?.list?.map(c => c.ID) : [];
    blogPosts = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getPostsById */ .yg)(postsIds.join(","));

    if (blogPosts) {
      blogPosts = blogPosts?.map(c => {
        return {
          title: c?.acf?.place,
          text: c?.acf?.preview_text,
          image: c?.acf?.img,
          link: `/${c?.type}/${c?.slug}`
        };
      });
    }
  } else {
    blogPosts = page?.acf?.block_17?.sustainable_list;
  }

  if (relatedList) {
    relatedList = relatedList.map(c => {
      return {
        title: c.title,
        cats: eventsType.filter(ci => c["event-type"].includes(ci.id)),
        link: `/cases/${c.slug}`,
        type: "cases",
        slug: c.slug,
        acf: {
          img: c.acf.preview_image,
          author: "",
          preview_text: c.acf.preview_text
        }
      };
    });
  }

  const menu = await (0,_mocks_common__WEBPACK_IMPORTED_MODULE_0__/* .getCommon */ .e)(options);
  return _objectSpread(_objectSpread({}, menu), {}, {
    eventsType,
    content: _objectSpread(_objectSpread({}, page), {}, {
      contact: _objectSpread(_objectSpread({}, options?.acf?.contact_form), {}, {
        title: page?.acf?.block_12?.title,
        text: page?.acf?.block_12?.text,
        img: page?.acf?.block_12?.img
      }),
      reviews_list: _objectSpread(_objectSpread({}, page?.acf?.block_9), {}, {
        reviews: page?.acf?.block_9?.list
      }),
      venuesPosts: blogPosts || [],
      acf_help: options?.acf?.help,
      related_cases: page?.acf?.cases_info,
      relatedList
    }),
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
var __webpack_exports__ = __webpack_require__.X(0, [517], () => (__webpack_exec__(9169)));
module.exports = __webpack_exports__;

})();