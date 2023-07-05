"use strict";
exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 8342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LD": () => (/* binding */ RootStoreProvider),
/* harmony export */   "b3": () => (/* binding */ useContentState)
/* harmony export */ });
/* unused harmony exports RootStore, useRootStore */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8290);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class RootStore {
  constructor() {
    _defineProperty(this, "ContentState", void 0);

    this.ContentState = _stores_ContentState__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP;
  }

}
(0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.enableStaticRendering)(true);
let store;
const StoreContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(undefined);
StoreContext.displayName = 'StoreContext';
function useRootStore() {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(StoreContext);

  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }

  return context;
}
function useContentState() {
  const {
    ContentState
  } = useRootStore();
  return ContentState;
}
function RootStoreProvider({
  children,
  hydrationData
}) {
  const store = initializeStore(hydrationData);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(StoreContext.Provider, {
    value: store,
    children: children
  });
}

function initializeStore(initialData) {
  const _store = store ?? new RootStore();

  if (initialData) {
    (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(() => {
      _store.ContentState = initialData;
    });
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store) store = _store;
  return _store;
}

/***/ }),

/***/ 8290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N3": () => (/* binding */ contactForm),
  "PL": () => (/* binding */ contactPopForm),
  "ZP": () => (/* binding */ stores_ContentState),
  "uO": () => (/* binding */ getBlogCats),
  "cJ": () => (/* binding */ getCases),
  "_v": () => (/* binding */ getCasesById),
  "vw": () => (/* binding */ getEvents),
  "tO": () => (/* binding */ getEventsByIds),
  "hM": () => (/* binding */ getEventsType),
  "qL": () => (/* binding */ getFooterMenu),
  "jp": () => (/* binding */ getIndustryType),
  "r7": () => (/* binding */ getMenu),
  "k0": () => (/* binding */ getNewsPerCount),
  "FW": () => (/* binding */ getOptions),
  "fx": () => (/* binding */ getPage),
  "Jq": () => (/* binding */ getPosts),
  "yg": () => (/* binding */ getPostsById),
  "Jb": () => (/* binding */ getSingleCase),
  "Bk": () => (/* binding */ getSingleEvent),
  "JF": () => (/* binding */ getSinglePost)
});

// UNUSED EXPORTS: getBlogCatsByIds, requestCall

;// CONCATENATED MODULE: ./src/mocks/domain.ts
const domain_DOMAIN = 'https://onpurpose.romura.space/';
;// CONCATENATED MODULE: ./src/stores/ContentState.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ContentState = {};
/* harmony default export */ const stores_ContentState = (ContentState); //GENERAL

const getOptions = async () => {
  const res = await fetch(`${domain_DOMAIN}wp-json/acf/v3/options/options`).then(r => r.json());
  return res;
};
const getMenu = async () => {
  const res = await fetch(`${domain_DOMAIN}wp-json/wp-api-menus/v2/menus/2`).then(r => r.json());
  return res;
};
const getFooterMenu = async () => {
  const res = await fetch(`${domain_DOMAIN}wp-json/wp-api-menus/v2/menus/4`).then(r => r.json());
  return res?.items;
};
const getPage = async (pageId, type) => {
  const res = await fetch(`${domain_DOMAIN}wp-json/wp/v2/${!type ? "pages" : type}/${pageId}`).then(r => r.json());
  return res;
}; //NEWS

const getBlogCats = async () => {
  const response = await fetch(`${domain_DOMAIN}wp-json/wp/v2/category-blog?per_page=100`).then(r => r.json());
  return response;
};
const getEventsByIds = async ids => {
  const response = await fetch(`${domain_DOMAIN}wp-json/wp/v2/events?include=${ids}`).then(r => r.json());
  return response;
};
const getBlogCatsByIds = async ids => {
  const response = await fetch(`${domain_DOMAIN}wp-json/wp/v2/category-blog?include=${ids}`).then(r => r.json());
  return response;
};
const getPostsById = async ids => {
  const res = await fetch(`${domain_DOMAIN}wp-json/wp/v2/our-resources/?include=${ids}`).then(r => r.json());
  return res;
};
const getSinglePost = async slug => {
  const res = await fetch(`${domain_DOMAIN}wp-json/wp/v2/our-resources?slug=${slug}`).then(r => r.json());
  return res;
};
const getPosts = async () => {
  const res = await fetch(`${domain_DOMAIN}wp-json/wp/v2/our-resources/?per_page=100`).then(r => r.json());
  return res;
};
const getNewsPerCount = async count => {
  const res = await fetch(`${domain_DOMAIN}wp-json/wp/v2/our-resources/?per_page=${count}`).then(r => r.json());
  const catsL = [];
  res.forEach(re => catsL.push(...re["category-blog"]));
  const cats = await getBlogCatsByIds(Array.from(new Set(catsL)).join(","));
  return res.map(re => {
    return _objectSpread(_objectSpread({}, re), {}, {
      cats: cats?.filter(c => re["category-blog"]?.includes(c.id))
    });
  });
}; //CONTACT POP

const contactForm = async ({
  full_name,
  email,
  msg
}) => {
  try {
    const fd = new FormData();
    fd.append("full_name", full_name);
    fd.append("email", email);
    fd.append("msg", msg);
    await fetch(`${domain_DOMAIN}wp-admin/admin.ajax.php`, {
      method: "POST",
      body: fd
    }).then(r => r.json());
  } catch (e) {
    console.log("contact-form", e);
  }
};
const contactPopForm = async ({
  fname,
  lname,
  email,
  msg
}) => {
  try {
    const fd = new FormData();
    fd.append("fname", fname);
    fd.append("lname", lname);
    fd.append("email", email);
    fd.append("msg", msg);
    await fetch(`${domain_DOMAIN}wp-admin/admin.ajax.php`, {
      method: "POST",
      body: fd
    }).then(r => r.json());
  } catch (e) {
    console.log("contact-pop-form", e);
  }
};
const requestCall = async phone => {
  try {
    const fd = new FormData();
    fd.append("phone", phone);
    await fetch(`${DOMAIN}wp-admin/admin.ajax.php`, {
      method: "POST",
      body: fd
    }).then(r => r.json());
  } catch (e) {
    console.log("request-call", e);
  }
}; //CASES

const getEventsType = async () => {
  const res = await fetch(`${domain_DOMAIN}wp-json/wp/v2/event-type`).then(r => r.json());
  return res;
};
const getIndustryType = async () => {
  const res = await fetch(`${domain_DOMAIN}wp-json/wp/v2/industry`).then(r => r.json());
  return res;
};
const getCases = async () => {
  const res = await fetch(`${domain_DOMAIN}wp-json/wp/v2/cases?per_page=100`).then(r => r.json());
  return res;
};
const getCasesById = async ids => {
  const res = await fetch(`${domain_DOMAIN}wp-json/wp/v2/cases/?include=${ids}`).then(r => r.json());
  return res;
};
const getSingleCase = async slug => {
  const res = await fetch(`${domain_DOMAIN}wp-json/wp/v2/cases?slug=${slug}`).then(r => r.json());
  return res;
}; //EVENTS

const getEvents = async () => {
  const res = await fetch(`${domain_DOMAIN}wp-json/wp/v2/events`).then(r => r.json());
  return res;
};
const getSingleEvent = async slug => {
  const res = await fetch(`${domain_DOMAIN}wp-json/wp/v2/events?slug=${slug}`).then(r => r.json());
  return res ? res[0] : null;
};

/***/ })

};
;