"use strict";
(() => {
var exports = {};
exports.id = 942;
exports.ids = [942];
exports.modules = {

/***/ 125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5668);
/* harmony import */ var _components_common_HeadlineWithCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(128);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8342);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6595);
/* harmony import */ var _home_Logotypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9276);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const EventAbout = () => {
  const {
    content: {
      acf: {
        event_info,
        block_3
      }
    },
    content
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__/* .useContentState */ .b3)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
    className: "event-about",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "event-about__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "event-about__col",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_HeadlineWithCircle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          headLevel: "h2",
          color: "black",
          text: event_info?.title,
          indexStart: +event_info?.number,
          vectorStyle: "v2"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          classStr: "black w100",
          isLink: false,
          onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_4__/* .changeContactState */ .wX,
          content: event_info?.button
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        content: event_info?.text,
        color: "black"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: "space"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_home_Logotypes__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      style: "line",
      content: block_3
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      classStr: "black w100",
      isLink: false,
      onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_4__/* .changeContactState */ .wX,
      content: event_info?.button
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventAbout);

/***/ }),

/***/ 6536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6109);
/* harmony import */ var _components_common_H3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7703);
/* harmony import */ var _components_common_ListSmallIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9197);
/* harmony import */ var _components_common_MaskedImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1810);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const EventBook = () => {
  const {
    content: {
      acf: {
        block_8
      }
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__/* .useContentState */ .b3)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
    className: "event-book",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      content: block_8?.title,
      color: "black"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "event-book__row",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "event-book__list",
        children: block_8?.list?.map((c, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "event-book__item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "event-book__item-top",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_ListSmallIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
              icon: c.icon
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_H3__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              color: "black event-book__item-title",
              content: c.title
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "event-book__item-col",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              color: "black",
              content: c.text
            })
          })]
        }, i))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "event-book__image",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_MaskedImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          img: block_8?.image,
          version: "book"
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventBook);

/***/ }),

/***/ 8196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_BlogCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5668);
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6109);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const EventCases = () => {
  const {
    content: {
      related_cases,
      relatedList
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__/* .useContentState */ .b3)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("section", {
    className: "related-cases",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "related-cases__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "related-cases__top",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          color: "black",
          content: related_cases?.title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          content: related_cases?.button?.title,
          classStr: "black",
          isLink: true,
          link: related_cases?.button?.url
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "related-cases__list",
        children: relatedList?.map((c, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_BlogCard__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          item: c
        }, i))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        content: related_cases?.button?.title,
        classStr: "black",
        isLink: true,
        link: related_cases?.button?.url
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventCases);

/***/ }),

/***/ 5097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_FaqList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2675);
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6109);
/* harmony import */ var _components_common_MaskedImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const EventConferences = () => {
  const {
    content: {
      acf: {
        block_4
      }
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__/* .useContentState */ .b3)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("section", {
    className: "event-conf",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "event-conf__container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "event-conf__image",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_MaskedImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          img: block_4?.image,
          version: "conf"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "event-conf__col",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          color: "black",
          content: block_4?.title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          color: "black",
          content: block_4?.text
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_FaqList__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          theme: "",
          list: block_4?.list,
          withFirstActive: false
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventConferences);

/***/ }),

/***/ 7606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ event_EventDestination)
});

// EXTERNAL MODULE: ./src/components/common/Button/index.tsx
var Button = __webpack_require__(5668);
// EXTERNAL MODULE: ./src/components/common/H3/index.tsx
var H3 = __webpack_require__(7703);
// EXTERNAL MODULE: ./src/components/common/ImageComponent/index.tsx
var ImageComponent = __webpack_require__(1778);
// EXTERNAL MODULE: ./src/components/common/Text16/index.tsx
var Text16 = __webpack_require__(4730);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/common/DestinationCard/index.tsx






const DestinationCard = ({
  item
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "destination-card",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "destination-card__row",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "destination-card__img",
        children: /*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
          img: item?.image
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "destination-card__col",
        children: [/*#__PURE__*/jsx_runtime_.jsx(H3/* default */.Z, {
          color: "black",
          content: item.title
        }), /*#__PURE__*/jsx_runtime_.jsx(Text16/* default */.Z, {
          color: "black",
          content: item.text
        })]
      })]
    })
  });
};

/* harmony default export */ const common_DestinationCard = (DestinationCard);
// EXTERNAL MODULE: ./src/components/common/H2/index.tsx
var H2 = __webpack_require__(6109);
// EXTERNAL MODULE: ./src/hooks/RootStoreProvider.tsx
var RootStoreProvider = __webpack_require__(8342);
;// CONCATENATED MODULE: ./src/components/pages/event/EventDestination/index.tsx







const EventDestination = () => {
  const {
    content: {
      acf: {
        destinations
      }
    }
  } = (0,RootStoreProvider/* useContentState */.b3)();
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "event-destination",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "event-destination__container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "event-destination__top",
        children: [/*#__PURE__*/jsx_runtime_.jsx(H2/* default */.Z, {
          color: "black",
          content: destinations?.title
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          content: destinations?.button?.title,
          classStr: "black",
          isLink: true,
          link: destinations?.button?.url
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "event-destination__list",
        children: destinations?.list?.map((c, i) => /*#__PURE__*/jsx_runtime_.jsx(common_DestinationCard, {
          item: c
        }, i))
      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        content: destinations?.button?.title,
        classStr: "black",
        isLink: true,
        link: destinations?.button?.url
      })]
    })
  });
};

/* harmony default export */ const event_EventDestination = (EventDestination);

/***/ }),

/***/ 682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6109);
/* harmony import */ var _components_common_ListSmallIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9197);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const EventPlanners = () => {
  const {
    content: {
      acf: {
        block_15
      }
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__/* .useContentState */ .b3)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
    className: "event-plan",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      color: "white",
      content: block_15?.title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "event-plan__list",
      children: block_15?.list?.map((c, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "event-plan__item",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_ListSmallIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          icon: c.icon
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          content: c.text,
          color: "white"
        })]
      }, i))
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventPlanners);

/***/ }),

/***/ 2008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_H3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7703);
/* harmony import */ var _components_common_HeadlineWithCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(128);
/* harmony import */ var _components_common_ListSmallIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9197);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const EventTechnology = () => {
  const {
    content: {
      acf: {
        block_6
      }
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__/* .useContentState */ .b3)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
    className: "event-tech",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "event-tech__top",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_HeadlineWithCircle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        headLevel: "h2",
        indexStart: 1,
        vectorStyle: "v1",
        text: block_6?.title,
        color: "white"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        content: block_6?.text,
        color: "white"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "event-tech__list",
      children: block_6?.list?.map((c, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "event-tech__item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "event-tech__item-top",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_H3__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
            color: "white event-tech__item-title",
            content: c.title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_ListSmallIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            icon: c.icon
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          color: "white",
          content: c.text
        })]
      }, i))
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventTechnology);

/***/ }),

/***/ 6594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ event_EventVenues)
});

// EXTERNAL MODULE: ./src/components/common/HeadlineWithCircle/index.tsx + 1 modules
var HeadlineWithCircle = __webpack_require__(128);
// EXTERNAL MODULE: ./src/components/common/ImageComponent/index.tsx
var ImageComponent = __webpack_require__(1778);
// EXTERNAL MODULE: ./src/hooks/RootStoreProvider.tsx
var RootStoreProvider = __webpack_require__(8342);
// EXTERNAL MODULE: ./src/hooks/getWindowDimensions.tsx
var getWindowDimensions = __webpack_require__(7542);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/common/H3/index.tsx
var H3 = __webpack_require__(7703);
// EXTERNAL MODULE: ./src/components/common/Text16/index.tsx
var Text16 = __webpack_require__(4730);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/pages/event/InspireCard/index.tsx








const InspireCard = ({
  item,
  withText
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((link_default()), {
    className: external_classnames_default()("inspire-card", !item?.link && "no-link"),
    href: item?.link || "#",
    "aria-label": item?.title || ``,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "inspire-card__image",
      children: /*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
        img: item.image
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: external_classnames_default()("inspire-card__content"),
      children: [/*#__PURE__*/jsx_runtime_.jsx(H3/* default */.Z, {
        color: external_classnames_default()("black", !withText && "center"),
        content: item.title
      }), withText && /*#__PURE__*/jsx_runtime_.jsx(Text16/* default */.Z, {
        color: "black",
        content: item?.text || ""
      })]
    })]
  });
};

/* harmony default export */ const event_InspireCard = (InspireCard);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./src/stores/GlobalState.ts
var GlobalState = __webpack_require__(6595);
;// CONCATENATED MODULE: ./src/components/pages/event/EventVenues/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const EventVenues = () => {
  const {
    content: {
      venuesPosts,
      acf: {
        block_17
      }
    },
    icons
  } = (0,RootStoreProvider/* useContentState */.b3)();
  const {
    0: touchableValue,
    1: setValue
  } = (0,external_react_.useState)({
    x: -1,
    y: -1
  });
  const sliderRef = (0,external_react_.useRef)(null);
  const containerRef = (0,external_react_.useRef)(null);
  const {
    width
  } = (0,getWindowDimensions/* useWindowDimensions */.d)();
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = (0,external_react_.useState)(0);
  const slidesToShow = width > 1280 ? 3 : width <= 767 ? 1 : 2;
  const {
    0: showLast,
    1: setLast
  } = (0,external_react_.useState)(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    // slidesToShow,
    arrow: false,
    variableWidth: true,
    initialSlide: 0,
    swipeToSlide: true,
    draggable: GlobalState/* default.isTouch */.ZP.isTouch
  };

  const slideChange = index => {
    const arrowRight = containerRef?.current?.querySelector(".slick-next");

    if (arrowRight) {
      setLast(arrowRight.classList.contains("slick-disabled"));
    }

    setCurrentSlide(index);
  };

  const slickNext = () => sliderRef?.current.slickNext();

  const slickPrev = () => sliderRef?.current.slickPrev();

  const isFirstSlide = () => !currentSlide;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "event-venues",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "event-venues__top",
      children: [/*#__PURE__*/jsx_runtime_.jsx(HeadlineWithCircle/* default */.Z, {
        text: block_17?.title,
        vectorStyle: "v2",
        headLevel: "h2",
        color: "black",
        indexStart: 1
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()("event-venues__btns", Math.ceil(venuesPosts?.length / slidesToShow) == 1 && "hide-slider"),
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: external_classnames_default()("event-venues__btns-btn prev", isFirstSlide() && "disable"),
          onClick: slickPrev,
          children: /*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
            img: icons.icon_caret
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: external_classnames_default()("event-venues__btns-btn", showLast && "disable"),
          onClick: slickNext,
          children: /*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
            img: icons.icon_caret
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_classnames_default()("event-venues__list", isFirstSlide() && "first-child"),
      ref: containerRef,
      onTouchStart: e => {
        const html = document.querySelector("html");

        if (html && GlobalState/* default.isTouch */.ZP.isTouch) {
          html.style.overflow = "hidden";
        }

        setValue(_objectSpread(_objectSpread({}, touchableValue), {}, {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY
        }));
      },
      onTouchEnd: e => {
        const html = document.querySelector("html");

        if (html && GlobalState/* default.isTouch */.ZP.isTouch) {
          html.style.overflow = "initial";
        }

        const touchEnd = e.changedTouches[0];
        const children = containerRef?.current?.querySelectorAll(".inspire-card");

        if (touchEnd.clientX != touchableValue.x && touchEnd.clientY != touchableValue.y) {
          children?.forEach(c => c.classList.add("disabled"));
        } else children?.forEach(c => c.classList.remove("disabled"));
      },
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
        ref: sliderRef,
        afterChange: slideChange,
        children: venuesPosts?.map((co, i) => /*#__PURE__*/jsx_runtime_.jsx(event_InspireCard, {
          item: co,
          withText: block_17?.withText
        }, i))
      }))
    })]
  });
};

/* harmony default export */ const event_EventVenues = (EventVenues);

/***/ }),

/***/ 912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ getEventPage)
/* harmony export */ });
/* harmony import */ var _mocks_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8290);
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

/***/ }),

/***/ 9352:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Event),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1878);
/* harmony import */ var _hooks_useLoco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(936);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8290);
/* harmony import */ var _api_getEventPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(912);
/* harmony import */ var _components_pages_event_EventIntro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8173);
/* harmony import */ var _components_common_Puzzle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3349);
/* harmony import */ var _components_pages_event_EventAbout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(125);
/* harmony import */ var _components_pages_home_Logotypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9276);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8342);
/* harmony import */ var _components_pages_event_EventConferences__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5097);
/* harmony import */ var _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7092);
/* harmony import */ var _components_pages_event_EventConnect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7962);
/* harmony import */ var _components_pages_event_EventTechnology__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2008);
/* harmony import */ var _components_pages_event_EventBook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6536);
/* harmony import */ var _components_pages_home_Reviews__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8231);
/* harmony import */ var _components_pages_event_EventCases__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8196);
/* harmony import */ var _components_pages_home_ContactBlock__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7653);
/* harmony import */ var _components_pages_event_OtherEvents__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8820);
/* harmony import */ var _components_pages_event_EventTraits__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6004);
/* harmony import */ var _components_pages_event_EventPlanners__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(682);
/* harmony import */ var _components_pages_home_BlackTouch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8074);
/* harmony import */ var _components_pages_event_EventVenues__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6594);
/* harmony import */ var _components_pages_home_Faqs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5177);
/* harmony import */ var _components_pages_event_EventDestination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(7606);
/* harmony import */ var _components_pages_event_EventQuote__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(6798);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__, _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_11__, _components_pages_event_EventTraits__WEBPACK_IMPORTED_MODULE_19__]);
([_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__, _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_11__, _components_pages_event_EventTraits__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






























function Event({
  hydrationData: props
}) {
  const {
    content: {
      acf
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_9__/* .useContentState */ .b3)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  (0,_hooks_useLoco__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(!loading);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!loading) {
      if (true) {
        return;
      }
    }
  }, [loading]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (props?.content) {
      setLoading(false);
    }
  }, [props]);
  const arrayBlocks = [{
    key: "block_4",
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_event_EventConferences__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
    })
  }, {
    key: "block_5",
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_event_EventConnect__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      block_5: acf?.block_5
    })
  }, {
    key: "block_6",
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_event_EventTechnology__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
    })
  }, {
    key: "block_7",
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_home_Logotypes__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      style: "center",
      content: acf?.block_7
    })
  }, {
    key: "block_8",
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_event_EventBook__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
    })
  }, {
    key: "block_9",
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_home_Reviews__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
    })
  }, {
    key: "cases",
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_event_EventCases__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
  }, {
    key: "block_11",
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_home_Logotypes__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      style: "line",
      content: acf?.block_11
    })
  }, {
    key: "block_14",
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_event_EventTraits__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {})
  }, {
    key: "block_15",
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_event_EventPlanners__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {})
    })
  }, {
    key: "block_16",
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_home_BlackTouch__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
      withCircle: false,
      block_9: acf.block_16
    })
  }, {
    key: "block_17",
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_event_EventVenues__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {})
    })
  }, {
    key: "faq",
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_home_Faqs__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
      block_10: acf?.faq,
      withFirstActive: true
    })
  }, {
    key: "destinations",
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_event_EventDestination__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {})
    })
  }, {
    key: "quote_block",
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_event_EventQuote__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {})
  }];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_event_EventIntro__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_event_EventAbout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx("div", {
        className: "space"
      }), acf.order_blocks?.map((co, i) => {
        const current = arrayBlocks.find(c => c.key == co.acf_fc_layout);

        if (current) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [current.component, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx("div", {
              className: "space"
            })]
          }, i);
        }

        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {}, i);
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_home_ContactBlock__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          indexStart: acf?.block_12?.circle_position
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_pages_event_OtherEvents__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        other_services: {
          title: acf?.other_services?.title,
          list: acf?.other_services?.list?.map(c => {
            return {
              url: `/${c.post_type}/${c.post_name}/`,
              post_title: c.post_title
            };
          })
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_common_Puzzle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})]
    })
  });
}
async function getStaticPaths() {
  const cases = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_3__/* .getEvents */ .vw)();
  const paths = [];
  cases?.forEach(p => {
    paths.push({
      params: {
        slug: p.slug,
        path: `/${p.type}/${p.slug}`
      }
    });
  });
  return {
    paths: paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const response = await (0,_api_getEventPage__WEBPACK_IMPORTED_MODULE_4__/* .getEventPage */ .l)(params.slug);
  return {
    props: {
      hydrationData: _objectSpread({}, response)
    },
    revalidate: 10
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 1834:
/***/ ((module) => {

module.exports = require("locomotive-scroll");

/***/ }),

/***/ 6211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 2062:
/***/ ((module) => {

module.exports = require("mobx-react");

/***/ }),

/***/ 5944:
/***/ ((module) => {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3599:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 4009:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,342,801,910,859,212,180,930,276,907,63,798,557], () => (__webpack_exec__(9352)));
module.exports = __webpack_exports__;

})();