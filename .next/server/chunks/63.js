"use strict";
exports.id = 63;
exports.ids = [63];
exports.modules = {

/***/ 2675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_FaqList)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/hooks/RootStoreProvider.tsx
var RootStoreProvider = __webpack_require__(8342);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/common/ImageComponent/index.tsx
var ImageComponent = __webpack_require__(1778);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/common/FaqItem/index.tsx







const FaqItem = ({
  item,
  isActive = false,
  setActive,
  theme
}) => {
  const {
    icons: {
      faq_icon
    }
  } = (0,RootStoreProvider/* useContentState */.b3)();
  const ref = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    if (ref.current) {
      if (isActive) {
        const height = ref.current.scrollHeight;
        requestAnimationFrame(() => {
          if (!ref.current) return;
          ref.current.style.height = `${height + 2}px`;
        });
      } else {
        ref.current.style.height = "0";
      }
    }
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()("faq-item", theme, isActive && "active"),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "faq-item__top",
      onClick: setActive,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "text18 black",
        dangerouslySetInnerHTML: {
          __html: item?.title
        }
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "faq-item__icon",
        children: /*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
          img: faq_icon
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "faq-item__content",
      ref: ref,
      dangerouslySetInnerHTML: {
        __html: item?.text
      }
    })]
  });
};

/* harmony default export */ const common_FaqItem = (FaqItem);
;// CONCATENATED MODULE: ./src/components/common/FaqList/index.tsx





const FaqList = ({
  list,
  theme,
  withFirstActive = false
}) => {
  const {
    0: activeTab,
    1: setActive
  } = (0,external_react_.useState)(-1);
  (0,external_react_.useEffect)(() => {
    if (withFirstActive) {
      setTimeout(() => {
        setActive(0);
      }, 500);
    }
  }, [withFirstActive]);
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: external_classnames_default()("faqs-list", theme),
    children: list?.map((li, i) => /*#__PURE__*/jsx_runtime_.jsx(common_FaqItem, {
      item: li,
      isActive: activeTab == i,
      setActive: () => {
        if (withFirstActive) {
          setActive(i);
        } else {
          if (activeTab == i) {
            setActive(-1);
          } else setActive(i);
        }
      },
      theme: theme
    }, i))
  });
};

/* harmony default export */ const common_FaqList = (FaqList);

/***/ }),

/***/ 5177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5668);
/* harmony import */ var _components_common_FaqList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2675);
/* harmony import */ var _components_common_H3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7703);
/* harmony import */ var _components_common_HeadlineWithCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(128);
/* harmony import */ var _components_common_Text18__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9501);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8342);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6595);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const Faqs = ({
  block_10,
  withFirstActive = false
}) => {
  const {
    faqCTA
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__/* .useContentState */ .b3)();
  const titleArr = block_10?.title?.trim().split(" ").filter(c => c.length) || [];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("section", {
    className: "faqs",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "faqs__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "faqs__top",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_HeadlineWithCircle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          color: "black",
          text: block_10?.title,
          vectorStyle: "v2",
          headLevel: "h2",
          indexStart: titleArr?.length
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_Text18__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          color: "black",
          content: block_10?.text
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "faqs__content",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_FaqList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          list: block_10?.list,
          theme: "",
          withFirstActive: withFirstActive
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "faqs__cta",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_H3__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            color: "black",
            content: faqCTA?.title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
            classStr: "black",
            content: faqCTA?.button_title,
            isLink: false,
            onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* .changeContactState */ .wX
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Faqs);

/***/ }),

/***/ 8231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6109);
/* harmony import */ var _components_common_ReviewsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4274);
/* harmony import */ var _components_common_Text18__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9501);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const Reviews = () => {
  const {
    content: {
      reviews_list
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__/* .useContentState */ .b3)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
    className: "reviews",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "reviews__top",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        color: "white",
        content: reviews_list?.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_Text18__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        color: "white",
        content: reviews_list?.text
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_ReviewsList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      items: reviews_list?.reviews
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reviews);

/***/ })

};
;