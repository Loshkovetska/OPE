"use strict";
exports.id = 517;
exports.ids = [517];
exports.modules = {

/***/ 8517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getCommon)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6543);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const getCommon = async options => {
  const footerMenu = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getFooterMenu */ .qL)();
  let topMenu = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getMenu */ .r7)();
  const ids = options?.acf?.header?.post_in_menu?.map(c => c.ID);
  let menuPost = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getPostsById */ .yg)(ids.join(","));
  const eventsType = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getEventsType */ .hM)();

  if (topMenu?.items) {
    let itIds = [];
    topMenu.items.forEach(c => {
      if (c?.children) {
        itIds = c?.children?.map(c => c.object_id);
      }
    });
    const eventsByIds = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getEventsByIds */ .tO)(itIds.join(","));
    topMenu.items = topMenu.items.map(c => {
      if (c.children) {
        c.children = c.children?.map(ci => {
          const item = eventsByIds.find(ev => ev.id == ci.object_id);
          return _objectSpread(_objectSpread({}, ci), {}, {
            icon: item?.acf?.menu_icon
          });
        });
        return c;
      }

      return c;
    });
  }

  return {
    header: _objectSpread(_objectSpread({}, options?.acf?.header), {}, {
      menu: topMenu?.items,
      contactPop: _objectSpread(_objectSpread({}, options?.acf?.contact_pop), {}, {
        contactForm: options?.acf?.contact_form,
        reviewsList: options?.acf?.reviews_?.reviews
      }),
      menuPost
    }),
    faqCTA: options?.acf?.faqs_cta,
    eventsType,
    contactPop: options.acf?.contact_form,
    thanks: options.acf?.thanks_pop,
    cookies: options.acf?.cookies,
    footerMenu,
    icons: options?.acf?.icons,
    footer: options?.acf?.footer
  };
};

/***/ }),

/***/ 6543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
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

// UNUSED EXPORTS: contactForm, contactPopForm, default, getBlogCatsByIds, requestCall

;// CONCATENATED MODULE: ./src/mocks/domain.ts
const domain_DOMAIN = 'https://onpurpose.romura.space/';
;// CONCATENATED MODULE: ./src/stores/ContentState.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ContentState = {};
/* harmony default export */ const stores_ContentState = ((/* unused pure expression or super */ null && (ContentState))); //GENERAL

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
    await fetch(`${DOMAIN}wp-admin/admin.ajax.php`, {
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
    await fetch(`${DOMAIN}wp-admin/admin.ajax.php`, {
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