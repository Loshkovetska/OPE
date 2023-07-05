"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5668);
/* harmony import */ var _components_common_H2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6109);
/* harmony import */ var _components_common_MaskedImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const Experience = () => {
  const {
    content: {
      block_3
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__/* .useContentState */ .b3)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("section", {
    className: "exp",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "exp__container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "exp__img",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_MaskedImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          img: block_3.image,
          version: "v1"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "exp__content",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_H2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          content: block_3.title,
          color: "black"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          content: block_3.text,
          color: "black"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          isLink: true,
          link: block_3?.button?.url,
          isTarget: false,
          classStr: "black",
          content: block_3?.button?.title
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);

/***/ }),

/***/ 665:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1778);
/* harmony import */ var _components_common_Text18__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9501);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8342);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4009);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var YellowCircle = function YellowCircle(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("path", {
      d: "M82.431 5.457c18.724-4.362 79.693-6.291 153.005 9.709 66.166 14.44 47.816 39.181 36.92 45.38-25.766 14.659-87.364 17.605-181.408 10.342-22.586-1.745-71.33-8.475-85.615-21.44C-12.524 33.244 42.805 3.48 169.019 14.744",
      stroke: "#F7BC00",
      strokeWidth: "3",
      strokeLinecap: "round"
    })
  }));
};

YellowCircle.defaultProps = {
  viewBox: "0 0 285 77",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};




const Gallery = () => {
  const {
    ref,
    inView,
    entry
  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)({
    threshold: 0.8,
    triggerOnce: true
  });
  const {
    content: {
      block_11
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__/* .useContentState */ .b3)();
  const titleArr = block_11?.title?.trim().split(" ").filter(c => c.length);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("gallery", inView && "in-view"),
    ref: ref,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "gallery__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "gallery__top",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h2", {
          className: "title56 black",
          children: titleArr.map((c, i) => {
            if (i + 1 != titleArr.length - 2) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: `${c} `
            }, i);
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
              children: [`${c} `, i + 1 == titleArr?.length - 2 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(YellowCircle, {})]
            }, i);
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_Text18__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          content: block_11?.text,
          color: "black"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "gallery__list",
        children: block_11?.images_list?.map((li, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "gallery__item",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            img: li?.image
          })
        }, i))
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5668);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8342);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6595);
/* harmony import */ var _components_common_HeadlineWithCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(128);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const GreenTouch = () => {
  const {
    header,
    content: {
      block_5
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_1__/* .useContentState */ .b3)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("section", {
    className: "green-touch",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "green-touch__content",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_HeadlineWithCircle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        text: block_5?.title,
        color: "white",
        indexStart: 2,
        headLevel: "h2",
        vectorStyle: "v2"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        isLink: false,
        classStr: "white",
        content: header?.getin,
        onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_2__/* .changeContactState */ .wX
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GreenTouch);

/***/ }),

/***/ 9186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_FaqList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2675);
/* harmony import */ var _components_common_HeadlineWithCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(128);
/* harmony import */ var _components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1778);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const Help = () => {
  const {
    content: {
      block_4,
      events
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__/* .useContentState */ .b3)();
  const eventsList = [];
  events?.forEach(c => {
    eventsList.push({
      title: c.title.rendered,
      text: c.content.rendered + `<pre><a href="/${c.type}/${c.slug}/">${block_4?.button_title}</a></pre>`
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
    className: "help",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "help__top",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_HeadlineWithCircle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        text: block_4?.title,
        color: "white",
        headLevel: "h2",
        indexStart: 3
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        content: block_4?.text,
        color: "white"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "help__content",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "help__list",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_FaqList__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          list: eventsList,
          theme: "light",
          withFirstActive: true
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "help__image",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_ImageComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          img: block_4.image
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Help);

/***/ }),

/***/ 8253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_H1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9555);
/* harmony import */ var _components_common_Text18__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9501);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8342);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const Intro = () => {
  const {
    content
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__/* .useContentState */ .b3)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const titles = document.querySelectorAll(".intro .title, .intro .text18");

    if (titles) {
      titles.forEach((t, i) => {
        setTimeout(() => {
          t.classList.add("show");
        }, i + 500);
      });
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
    className: "intro",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "intro__video",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("video", {
        src: content?.block_1?.video,
        autoPlay: true,
        muted: true,
        poster: content?.block_1?.poster?.url,
        playsInline: true,
        loop: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("source", {
          type: "video/mp4",
          src: content?.block_1?.video
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "intro__title desk",
      children: [content?.block_1?.title?.split(";").map((c, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "intro__title-bg",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          style: {
            overflow: "hidden"
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_H1__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
            content: c,
            color: "black"
          })
        })
      }, i)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "intro__title-bg",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          style: {
            overflow: "hidden"
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_Text18__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            content: content?.block_1.text,
            color: "black"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "intro__title mob",
      children: [content?.block_1?.mob_title?.split(";").map((c, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "intro__title-bg",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          style: {
            overflow: "hidden"
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_H1__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
            content: c,
            color: "black"
          })
        })
      }, i)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "intro__title-bg",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          style: {
            overflow: "hidden"
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_common_Text18__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            content: content?.block_1.text,
            color: "black"
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);

/***/ }),

/***/ 5876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home_Process)
});

// EXTERNAL MODULE: ./src/components/common/H2/index.tsx
var H2 = __webpack_require__(6109);
// EXTERNAL MODULE: ./src/components/common/Text18/index.tsx
var Text18 = __webpack_require__(9501);
// EXTERNAL MODULE: ./src/hooks/RootStoreProvider.tsx
var RootStoreProvider = __webpack_require__(8342);
// EXTERNAL MODULE: ./src/components/common/ImageComponent/index.tsx
var ImageComponent = __webpack_require__(1778);
// EXTERNAL MODULE: ./src/hooks/getWindowDimensions.tsx
var getWindowDimensions = __webpack_require__(7542);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./src/components/common/H3/index.tsx
var H3 = __webpack_require__(7703);
// EXTERNAL MODULE: ./src/components/common/Text16/index.tsx
var Text16 = __webpack_require__(4730);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/pages/home/ProcessItem/index.tsx






const ProcessItem = ({
  co
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "process__item",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "process__item-icon",
      children: /*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
        img: co.icon
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(H3/* default */.Z, {
      content: co.title,
      color: "black"
    }), /*#__PURE__*/jsx_runtime_.jsx(Text16/* default */.Z, {
      content: co.text,
      color: "black"
    })]
  });
};

/* harmony default export */ const home_ProcessItem = (ProcessItem);
;// CONCATENATED MODULE: ./src/components/pages/home/ProcessSlider/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const ProcessSlider = () => {
  const {
    content: {
      block_6
    },
    icons
  } = (0,RootStoreProvider/* useContentState */.b3)();
  const sliderRef = (0,external_react_.useRef)(null);
  const {
    0: indexesSlides,
    1: setIndexes
  } = (0,external_react_.useState)([0]);
  const {
    width
  } = (0,getWindowDimensions/* useWindowDimensions */.d)();
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = (0,external_react_.useState)(0);
  const slidesToShow = width > 1280 ? 3 : width <= 900 ? 1 : 2;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrow: false,
    variableWidth: true,
    initialSlide: 0
  };
  (0,external_react_.useEffect)(() => {
    setIndexes([0]);
    setCurrentSlide(0);
  }, [width]);
  const {
    0: isLast,
    1: setLast
  } = (0,external_react_.useState)(false);

  const slickNext = () => sliderRef?.current.slickNext();

  const slickPrev = () => sliderRef?.current.slickPrev();

  const slideChange = index => {
    setCurrentSlide(index);
    setLast(index + 1 == block_6?.list?.length);
  };

  const padWithLeadingZeros = (num, totalLength) => {
    return String(num).padStart(totalLength, "0");
  };

  const sliderContRef = (0,external_react_.useRef)(null);

  const isFirstSlide = () => !currentSlide;

  const getCurrentSlide = () => currentSlide + 1;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()("process__slider"),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "process__slider-top",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "process__slider-current",
        children: [padWithLeadingZeros(getCurrentSlide(), 2), " -", " ", padWithLeadingZeros(Math.ceil(block_6?.list?.length / 1), 2)]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "process__slider-btns",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: external_classnames_default()("process__slider-btn prev", isFirstSlide() && "disable"),
          onClick: slickPrev,
          children: /*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
            img: icons.icon_caret
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: external_classnames_default()("process__slider-btn", isLast && "disable"),
          onClick: slickNext,
          children: /*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
            img: icons.icon_caret
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "process__slider-list",
      ref: sliderContRef,
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
        ref: sliderRef,
        afterChange: slideChange,
        children: block_6?.list?.map((co, i) => /*#__PURE__*/jsx_runtime_.jsx(home_ProcessItem, {
          co: co
        }, i))
      }))
    })]
  });
};

/* harmony default export */ const home_ProcessSlider = (ProcessSlider); //  const isLastSlide = () => {
//    let flag = false;
//    if (!sliderContRef.current) return flag;
//    console.log("true");
//    const slides = sliderContRef.current?.querySelectorAll(".slick-slide");
//    if (slides) {
//      const disableSlide = Array.from(slides).find((c) =>
//        c.classList.contains("slick-disable")
//      );
//      if (disableSlide) {
//        flag = true;
//      }
//    }
//    return flag;
//  };
// const maxLength = Math.ceil(block_6?.list?.length / slidesToShow);
// let arr = indexesSlides;
// if (!indexesSlides.includes(index) && indexesSlides?.length < maxLength) {
//   setIndexes([...indexesSlides, index].sort((c, a) => c - a));
//   arr = [...indexesSlides, index].sort((c, a) => c - a);
// }
// arr.forEach((c, i) => {
//   if (c == index) {
//     setCurrentSlide(i);
//   }
// });
// EXTERNAL MODULE: ./src/hooks/useScroll.ts
var useScroll = __webpack_require__(3755);
// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__(2062);
// EXTERNAL MODULE: ./src/stores/GlobalState.ts
var GlobalState = __webpack_require__(6595);
;// CONCATENATED MODULE: ./src/components/pages/home/ProcessLine/index.tsx








const ProcessLine = () => {
  const {
    content: {
      block_6
    }
  } = (0,RootStoreProvider/* useContentState */.b3)();
  const ref = (0,external_react_.useRef)(null);
  const scrollPos = (0,useScroll/* useScroll */.v)(GlobalState/* default.locoScroll */.ZP.locoScroll, GlobalState/* default.isTouch */.ZP.isTouch);

  const translate = y => {
    if (!ref.current) return;
    const scrolLWidth = ref.current.scrollWidth;
    const viewWidth = ref.current.getBoundingClientRect().width;
    let diff = scrolLWidth - viewWidth; //containers

    const smooth = document.querySelector(".smooth"),
          container = document?.querySelector(".process");
    if (!smooth || !container) return;
    const bodyRect = smooth.getBoundingClientRect(),
          elemRect = container.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top - window.innerHeight / 2,
          offsetBottom = offset + elemRect.height;
    diff += parseInt(getComputedStyle(ref.current).padding);

    if (y >= offset && y <= offsetBottom && window.innerWidth > 900) {
      const value = (y - offset) / elemRect.height;
      requestAnimationFrame(() => {
        if (!ref.current) return;
        ref.current.style.transform = `translate(${(value * diff >= diff ? diff : value * diff) * -1}px,0)`;
      });
    }
  };

  (0,external_react_.useEffect)(() => {
    if (!ref.current) return;
    translate(scrollPos);
  }, [scrollPos]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "process__line",
    ref: ref,
    children: block_6?.list?.map((co, i) => /*#__PURE__*/jsx_runtime_.jsx(home_ProcessItem, {
      co: co
    }, i))
  });
};

/* harmony default export */ const home_ProcessLine = ((0,external_mobx_react_.observer)(ProcessLine));
;// CONCATENATED MODULE: ./src/components/pages/home/Process/index.tsx








const Process = () => {
  const {
    content: {
      block_6
    }
  } = (0,RootStoreProvider/* useContentState */.b3)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "process",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "process__top",
      children: [/*#__PURE__*/jsx_runtime_.jsx(H2/* default */.Z, {
        color: "black",
        content: block_6?.title
      }), /*#__PURE__*/jsx_runtime_.jsx(Text18/* default */.Z, {
        color: "black",
        content: block_6?.text
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(home_ProcessLine, {}), /*#__PURE__*/jsx_runtime_.jsx(home_ProcessSlider, {})]
  });
};

/* harmony default export */ const home_Process = (Process);

/***/ }),

/***/ 8018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ getHomePage)
/* harmony export */ });
/* harmony import */ var _mocks_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8290);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getHomePage = async () => {
  const options = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getOptions */ .FW)();
  const page = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getPage */ .fx)(2);
  const news = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getNewsPerCount */ .k0)(3);
  const events = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_1__/* .getEvents */ .vw)();
  const menu = await (0,_mocks_common__WEBPACK_IMPORTED_MODULE_0__/* .getCommon */ .e)(options);
  return _objectSpread(_objectSpread({}, menu), {}, {
    content: _objectSpread(_objectSpread({}, page?.acf), {}, {
      events: events,
      contact: options?.acf?.contact_form,
      news: options?.acf?.news_block,
      acf_help: options?.acf?.help,
      reviews_list: {
        title: options?.acf?.reviews_?.title,
        text: options?.acf?.reviews_?.text,
        reviews: page?.acf?.block_13
      },
      news_block: _objectSpread(_objectSpread({}, options?.acf?.news_block), {}, {
        cards: news
      })
    }),
    seo: page?.yoast_head
  });
};

/***/ }),

/***/ 492:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8342);
/* harmony import */ var _hooks_useLoco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(936);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_getHomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8018);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1878);
/* harmony import */ var _components_pages_home_Intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8253);
/* harmony import */ var _components_pages_home_Logotypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9276);
/* harmony import */ var _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7092);
/* harmony import */ var _components_pages_home_Experience__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3234);
/* harmony import */ var _components_pages_home_Help__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9186);
/* harmony import */ var _components_pages_home_GreenTouch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8051);
/* harmony import */ var _components_pages_home_Process__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5876);
/* harmony import */ var _components_pages_home_Reviews__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8231);
/* harmony import */ var _components_pages_home_BlackTouch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8074);
/* harmony import */ var _components_pages_home_Blog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(756);
/* harmony import */ var _components_pages_home_ContactBlock__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7653);
/* harmony import */ var _components_pages_home_Faqs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5177);
/* harmony import */ var _components_pages_home_Gallery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(665);
/* harmony import */ var _components_pages_home_EndBlock__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7213);
/* harmony import */ var _components_common_Puzzle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3349);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_7__, _components_pages_home_Gallery__WEBPACK_IMPORTED_MODULE_17__]);
([_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_7__, _components_pages_home_Gallery__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























function Home({
  hydrationData: props
}) {
  const {
    content
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_0__/* .useContentState */ .b3)();
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
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_pages_home_Intro__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_pages_home_Logotypes__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        content: content?.logotypes,
        style: "line"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_pages_home_Experience__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_pages_home_Help__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_pages_home_GreenTouch__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_pages_home_Process__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_pages_home_Logotypes__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        content: content?.block_7,
        style: "center"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_pages_home_Reviews__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_pages_home_BlackTouch__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          color: "black",
          block_9: content?.block_9,
          withCircle: true,
          indexStart: 4
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_pages_home_Blog__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_pages_home_Logotypes__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        content: content?.block_14,
        style: "line"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_pages_home_ContactBlock__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_pages_home_Faqs__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        block_10: content?.block_10,
        withFirstActive: true
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_pages_home_Gallery__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_pages_home_EndBlock__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_common_Puzzle__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {})]
    })
  });
}
async function getStaticProps() {
  const response = await (0,_api_getHomePage__WEBPACK_IMPORTED_MODULE_3__/* .getHomePage */ .t)();
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,342,801,910,859,212,180,930,276,63,213,89], () => (__webpack_exec__(492)));
module.exports = __webpack_exports__;

})();