"use strict";
exports.id = 907;
exports.ids = [907];
exports.modules = {

/***/ 7962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5668);
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6109);
/* harmony import */ var _components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1778);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6595);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const EventConnect = ({
  block_5
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
    className: "event-connect",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "event-connect__col",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "event-connect__col-content",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          content: block_5?.title,
          color: "white"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          classStr: "white",
          isLink: false,
          onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__/* .changeContactState */ .wX,
          content: block_5?.button
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "event-connect__bg top",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "event-connect__bg-curve topright"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "event-connect__bg-curve bottomright"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "event-connect__bg bottom",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "event-connect__bg-curve middleright"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "event-connect__bg-curve rightright"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "event-connect__bg-curve bottomrightcurve"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "event-connect__bg-curve bottomleftcurve"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "event-connect__image",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        img: block_5?.image
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventConnect);

/***/ }),

/***/ 8173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5668);
/* harmony import */ var _components_common_H1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9555);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8342);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1778);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6595);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












const EventIntro = () => {
  const {
    content,
    content: {
      acf
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__/* .useContentState */ .b3)();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const {
    asPath
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    ref.current && ref.current.style.setProperty("--main-color", acf?.main_color);
  }, [asPath]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("event-intro", asPath == "/about" && "about-page"),
    ref: ref,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "event-intro__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "event-intro__top",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_common_H1__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          color: "white",
          content: content?.title?.rendered
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          color: "white",
          content: content?.content?.rendered
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          classStr: "white",
          isLink: false,
          onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* .changeContactState */ .wX,
          content: acf?.button
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        className: "event-intro__image",
        children: acf?.video ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("video", {
          src: acf?.video?.url,
          autoPlay: true,
          muted: true,
          poster: acf.poster?.url,
          playsInline: true,
          loop: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("source", {
            type: "video/mp4",
            src: acf?.video?.url
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          img: acf?.poster
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventIntro);

/***/ }),

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7092);
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6109);
/* harmony import */ var _components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1778);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_0__]);
_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const EventTraits = () => {
  const {
    content: {
      acf: {
        block_14
      }
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__/* .useContentState */ .b3)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("section", {
    className: "event-traits",
    children: block_14?.map((c, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
        className: "event-traits__item",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "event-traits__item-img",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            img: c.image
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "event-traits__item-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            content: c.title,
            color: "black"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            content: c.text,
            color: "black"
          })]
        })]
      })
    }, i))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventTraits);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;