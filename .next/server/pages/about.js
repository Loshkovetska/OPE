"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
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

/***/ 6663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5668);
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6109);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8342);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6595);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const AboutEnd = () => {
  const {
    content: {
      acf: {
        block_11
      }
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__/* .useContentState */ .b3)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("section", {
    className: "about-end",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "about-end__content",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        content: block_11?.title,
        color: "black"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        content: block_11?.button,
        classStr: "black",
        isLink: false,
        onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__/* .changeContactState */ .wX
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutEnd);

/***/ }),

/***/ 7007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_HeadlineWithCircle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var _components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1778);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const GreenEvents = () => {
  const {
    content: {
      acf: {
        block_7
      }
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__/* .useContentState */ .b3)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
    className: "green-events",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "green-events__top",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_HeadlineWithCircle__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        color: "black",
        text: block_7?.title,
        indexStart: 1,
        headLevel: "h2",
        vectorStyle: "v2"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        color: "black",
        content: block_7?.text
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "green-events__block",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "green-events__main-img",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          img: block_7?.big_image
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "green-events__chart",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          img: block_7?.chart_image
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "green-events__history",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          img: block_7?.history_image
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "green-events__reduct",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          img: block_7?.reduction_image
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GreenEvents);

/***/ }),

/***/ 1399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6109);
/* harmony import */ var _components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1778);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const MakeEasy = () => {
  const {
    content: {
      acf: {
        block_4
      }
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__/* .useContentState */ .b3)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
    className: "make-easy",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "make-easy__top",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        color: "black",
        content: block_4?.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        color: "black",
        content: block_4?.text
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "make-easy__list",
      children: block_4?.list?.map((c, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "make-easy__item",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "make-easy__item-img",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            img: c.image
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          color: "black",
          content: c.text
        })]
      }, i))
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MakeEasy);

/***/ }),

/***/ 5432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6109);
/* harmony import */ var _components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1778);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const Map = () => {
  const {
    content: {
      acf: {
        map
      }
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__/* .useContentState */ .b3)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
    className: "map",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      color: "white",
      content: map?.title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "map__image",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        img: map?.image
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);

/***/ }),

/***/ 355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6109);
/* harmony import */ var _components_common_H3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7703);
/* harmony import */ var _components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1778);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const Principles = () => {
  const {
    content: {
      acf: {
        block_6
      }
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__/* .useContentState */ .b3)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
    className: "principles",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "principles__top",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        color: "black",
        content: block_6?.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        color: "black",
        content: block_6?.text
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "principles__list",
      children: block_6?.list?.map((c, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "principles__item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "principles__item-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_H3__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            color: "black",
            content: c.title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            color: "black",
            content: c.text
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "principles__item-img",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            img: c.image
          })
        })]
      }, i))
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Principles);

/***/ }),

/***/ 9730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6109);
/* harmony import */ var _components_common_H3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7703);
/* harmony import */ var _components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1778);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const Team = () => {
  const {
    content: {
      acf: {
        block_9
      }
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__/* .useContentState */ .b3)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
    className: "team",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "team__top",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        color: "black",
        content: block_9?.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        color: "black",
        content: block_9?.text
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "team__list",
      children: block_9?.list?.map((c, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "team__item",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "team__item-img",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            img: c.image
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_H3__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          color: "black",
          content: c?.name
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          color: "black",
          content: c?.position
        })]
      }, i))
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Team);

/***/ }),

/***/ 9248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5668);
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6109);
/* harmony import */ var _components_common_ListSmallIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9197);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8342);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6595);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const ZeroBlock = () => {
  const {
    content: {
      acf: {
        block_2,
        button
      }
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__/* .useContentState */ .b3)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("section", {
    className: "zero-block",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "zero-block__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "zero-block__top",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          color: "black",
          content: block_2?.title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          color: "black",
          content: block_2?.text
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "zero-block__list",
        children: block_2?.blocks?.map((c, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "zero-block__item",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_ListSmallIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            icon: c.icon
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            color: "black",
            content: c.text
          })]
        }, i))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        classStr: "black w100",
        isLink: false,
        onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_5__/* .changeContactState */ .wX,
        content: button
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZeroBlock);

/***/ }),

/***/ 7204:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1878);
/* harmony import */ var _hooks_useLoco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(936);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_getAbout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7313);
/* harmony import */ var _components_pages_event_EventIntro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8173);
/* harmony import */ var _components_pages_about_ZeroBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9248);
/* harmony import */ var _components_pages_event_EventTraits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6004);
/* harmony import */ var _components_pages_about_MakeEasy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1399);
/* harmony import */ var _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7092);
/* harmony import */ var _components_pages_event_EventConnect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7962);
/* harmony import */ var _components_common_Puzzle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3349);
/* harmony import */ var _components_pages_home_Logotypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9276);
/* harmony import */ var _components_pages_about_Team__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9730);
/* harmony import */ var _components_pages_home_EndBlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7213);
/* harmony import */ var _components_pages_about_AboutEnd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6663);
/* harmony import */ var _components_pages_about_Principles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(355);
/* harmony import */ var _components_pages_about_GreenEvents__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7007);
/* harmony import */ var _components_pages_about_Map__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5432);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__, _components_pages_event_EventTraits__WEBPACK_IMPORTED_MODULE_6__, _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_8__]);
([_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__, _components_pages_event_EventTraits__WEBPACK_IMPORTED_MODULE_6__, _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















function Home({
  hydrationData: props
}) {
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
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_pages_event_EventIntro__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_pages_about_ZeroBlock__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_pages_event_EventTraits__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_pages_about_MakeEasy__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_pages_event_EventConnect__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        block_5: props.content?.acf?.block_5
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_pages_about_Principles__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_pages_about_GreenEvents__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_pages_home_Logotypes__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        style: "line",
        content: props.content?.acf?.block_8
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_pages_event_EventConnect__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        block_5: props.content?.acf?.block_5_1
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_pages_about_Map__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_pages_about_Team__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_pages_home_EndBlock__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_pages_about_AboutEnd__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_components_common_Puzzle__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})]
    })
  });
}
async function getStaticProps() {
  const response = await (0,_api_getAbout__WEBPACK_IMPORTED_MODULE_3__/* .getAboutPage */ .v)();
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

/***/ 7313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ getAboutPage)
/* harmony export */ });
/* harmony import */ var _mocks_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8290);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getAboutPage = async () => {
  const options = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getOptions */ .FW)();
  const page = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getPage */ .fx)(247);
  const menu = await (0,_mocks_common__WEBPACK_IMPORTED_MODULE_0__/* .getCommon */ .e)(options);
  return _objectSpread(_objectSpread({}, menu), {}, {
    content: _objectSpread(_objectSpread({}, page), {}, {
      title: {
        rendered: page?.acf.title
      },
      block_12: page.acf?.block_10,
      acf: _objectSpread(_objectSpread({}, page.acf), {}, {
        main_color: "#101010",
        map: page.acf?.block_12
      })
    }),
    seo: page?.yoast_head
  });
};

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,342,801,910,276,907,213], () => (__webpack_exec__(7204)));
module.exports = __webpack_exports__;

})();