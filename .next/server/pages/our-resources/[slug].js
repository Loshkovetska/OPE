"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 6983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ post_PostAside)
});

// EXTERNAL MODULE: ./src/components/common/Text16/index.tsx
var Text16 = __webpack_require__(4730);
// EXTERNAL MODULE: ./src/stores/GlobalState.ts
var GlobalState = __webpack_require__(6595);
// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__(2062);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/pages/post/PostReadTime/index.tsx
var PostReadTime = __webpack_require__(8424);
// EXTERNAL MODULE: ./src/hooks/RootStoreProvider.tsx
var RootStoreProvider = __webpack_require__(8342);
// EXTERNAL MODULE: ./src/hooks/useScroll.ts
var useScroll = __webpack_require__(3755);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/pages/post/PostScroll/index.tsx








const PostScroll = () => {
  const {
    content
  } = (0,RootStoreProvider/* useContentState */.b3)();
  const {
    0: isActive,
    1: setActive
  } = (0,external_react_.useState)(0);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "post-aside__list",
    children: content.acf.content.map(c => c.title)?.map((c, i) => /*#__PURE__*/jsx_runtime_.jsx(PostAsideListItem, {
      c: c,
      isActive: isActive == i,
      setActive: setActive
    }, i))
  });
};

/* harmony default export */ const post_PostScroll = ((0,external_mobx_react_.observer)(PostScroll));
const PostAsideListItem = (0,external_mobx_react_.observer)(({
  c,
  isActive,
  setActive
}) => {
  const scrollPos = (0,useScroll/* useScroll */.v)(GlobalState/* default.locoScroll */.ZP.locoScroll, GlobalState/* default.isTouch */.ZP.isTouch);
  const ref = (0,external_react_.useRef)(null);

  const scrollTo = () => {
    const block = document.querySelector(`.post-content__block[data-title="${c}"]`);
    const mainBlock = document.querySelector(".smooth");

    if (block && mainBlock) {
      const mainTop = mainBlock.getBoundingClientRect().top;
      const blockTop = block.getBoundingClientRect().top;
      const offset = blockTop - mainTop - 24;

      if (GlobalState/* default.isTouch */.ZP.isTouch) {
        window.scrollTo({
          top: offset,
          behavior: "smooth"
        });
      } else {
        GlobalState/* default.locoScroll */.ZP.locoScroll && GlobalState/* default.locoScroll.scrollTo */.ZP.locoScroll.scrollTo(block);
      }
    }
  };

  const activeFunc = y => {
    const smooth = document.querySelector(".smooth");
    const blocks = document?.querySelectorAll(".post-content__block");
    if (!smooth || !blocks) return;
    const bodyRect = smooth.getBoundingClientRect();
    const clearBlocks = Array.from(blocks).filter(c => c?.dataset?.title != "pcb-empty");
    clearBlocks.forEach((b, i) => {
      if (!b) return;
      const block = b.getBoundingClientRect();
      let offset = block.top - bodyRect.top - 56,
          offsetBottom = offset + block.height - 56;

      if (offset <= y && y <= offsetBottom) {
        setActive(i);
      }
    });
  };

  (0,external_react_.useEffect)(() => {
    activeFunc(scrollPos);
  }, [scrollPos, GlobalState/* default.isTouch */.ZP.isTouch]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()("text16", isActive && "active"),
    onClick: scrollTo,
    ref: ref,
    "data-title": c,
    children: c
  });
});
// EXTERNAL MODULE: ./src/components/pages/post/PostReadLine/index.tsx + 1 modules
var PostReadLine = __webpack_require__(1950);
;// CONCATENATED MODULE: ./src/components/pages/post/PostAside/index.tsx











const PostAside = (0,external_mobx_react_.observer)(({
  className = ""
}) => {
  const scrollPos = (0,useScroll/* useScroll */.v)(GlobalState/* default.locoScroll */.ZP.locoScroll, GlobalState/* default.isTouch */.ZP.isTouch);
  const ref = (0,external_react_.useRef)(null);

  const readTimeAnimate = y => {
    const smooth = document.querySelector(".smooth");
    const main = document.querySelector(".post-content");

    if (main) {
      const bodyRect = smooth.getBoundingClientRect();
      const lineDesk = main.querySelector(".post-aside__line");
      const lineMob = document.querySelector(".post-aside__line-read");

      if (lineMob) {
        if (window.innerWidth <= 900 && lineDesk) {
          const offset = lineDesk?.getBoundingClientRect()?.top - bodyRect.top;

          if (y > offset) {
            lineMob.classList.remove("hidden");
          } else lineMob.classList.add("hidden");
        }
      }
    }
  }; // const translate = (y: number) => {
  //   if (!ref.current) return;
  //   const smooth = document.querySelector(".smooth"),
  //     container = document?.querySelector(".post-content");
  //   if (!smooth || !container) return;
  //   const bodyRect = smooth!.getBoundingClientRect(),
  //     elemRect = container.getBoundingClientRect(),
  //     offset = elemRect.top - bodyRect.top,
  //     offsetBottom =
  //       offset +
  //       elemRect.height -
  //       ref.current.getBoundingClientRect().height -
  //       parseInt(getComputedStyle(container).paddingTop) -
  //       parseInt(getComputedStyle(container).paddingBottom);
  //   requestAnimationFrame(() => {
  //     if (!ref.current) return;
  //     if (y >= offset && y <= offsetBottom && window.innerWidth > 900) {
  //       transform(
  //         ref.current,
  //         `translate(0, ${
  //           y - offset > offsetBottom ? offsetBottom : y - offset
  //         }px)`
  //       );
  //     }
  //     if (y < offset && window.innerWidth > 900) {
  //       transform(ref.current, `translate(0,0)`);
  //       return;
  //     }
  //   });
  // };
  // useEffect(() => {
  //   if (window.innerWidth > 900 && GlobalState.isTouch) return;
  //   if (!GlobalState.isTouch && window.innerWidth > 900) {
  //     GlobalState.locoScroll &&
  //       GlobalState.locoScroll.on("scroll", ({ scroll }: any) => {
  //         // translate(scroll.y);
  //         //readTimeAnimate(scroll.y);
  //       //  blocksActiveAnimate(scroll.y);
  //       });
  //   } else {
  //     window?.addEventListener("scroll", () => {
  //     //  translate(window.scrollY);
  //       // readTimeAnimate(window.scrollY);
  //      // blocksActiveAnimate(window.scrollY);
  //     });
  //   }
  // }, [GlobalState.locoScroll, GlobalState.isTouch]);


  const translate = y => {
    const aside = document.querySelector(".post-aside:not(.fixed)");
    if (!aside) return;
    const asideFixed = document.querySelector(".post-aside.fixed");
    if (!asideFixed) return;
    const smooth = document.querySelector(".smooth"),
          container = document?.querySelector(".post-content__content");
    if (!smooth || !container) return;
    const bodyRect = smooth.getBoundingClientRect(),
          elemRect = container.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top - 84,
          offsetBottom = offset + elemRect.height - aside.getBoundingClientRect().height; //-
    // parseInt(getComputedStyle(container).paddingTop) -
    // parseInt(getComputedStyle(container).paddingBottom);

    asideFixed.style.setProperty("--left-pos", aside.offsetLeft + "px");

    if (y < offset) {
      aside.classList.remove("hidden");
      asideFixed.classList.remove("visible");
    }

    if (y < offsetBottom / 2) {
      aside.style.transform = `translate(0,${0}px)`;
    }

    if (y >= offset && y <= offsetBottom && window.innerWidth > 900) {
      asideFixed.classList.add("visible");
      aside.classList.add("hidden");
      aside.style.transform = `translate(0,${y - offset > offsetBottom ? offsetBottom : y - offset}px)`;
    } else asideFixed.classList.remove("visible");

    if (y >= offsetBottom) {
      aside.classList.remove("hidden");
    }
  };

  (0,external_react_.useEffect)(() => {
    readTimeAnimate(scrollPos);
    translate(scrollPos);
  }, [scrollPos, GlobalState/* default.isTouch */.ZP.isTouch]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
    className: external_classnames_default()("post-aside", className),
    ref: ref,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "post-aside__block",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "post-aside__block-row",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Text16/* default */.Z, {
          color: "black",
          content: "Read Time"
        }), /*#__PURE__*/jsx_runtime_.jsx(PostReadTime/* default */.Z, {})]
      }), /*#__PURE__*/jsx_runtime_.jsx(PostReadLine/* PostReadLine */.D, {})]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "post-aside__block list-aside",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Text16/* default */.Z, {
        color: "black bold",
        content: `Content`
      }), /*#__PURE__*/jsx_runtime_.jsx(post_PostScroll, {})]
    })]
  });
});
/* harmony default export */ const post_PostAside = (PostAside);

/***/ }),

/***/ 4818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ post_PostContent)
});

// EXTERNAL MODULE: ./src/hooks/RootStoreProvider.tsx
var RootStoreProvider = __webpack_require__(8342);
// EXTERNAL MODULE: ./src/components/pages/post/PostAside/index.tsx + 1 modules
var PostAside = __webpack_require__(6983);
// EXTERNAL MODULE: ./src/components/common/ImageComponent/index.tsx
var ImageComponent = __webpack_require__(1778);
// EXTERNAL MODULE: ./src/components/common/Button/index.tsx
var Button = __webpack_require__(5668);
// EXTERNAL MODULE: ./src/components/common/H3/index.tsx
var H3 = __webpack_require__(7703);
// EXTERNAL MODULE: ./src/components/common/Text16/index.tsx
var Text16 = __webpack_require__(4730);
// EXTERNAL MODULE: ./src/stores/GlobalState.ts
var GlobalState = __webpack_require__(6595);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/pages/post/PostBanner/index.tsx









const PostBanner = ({
  banner
}) => {
  if (!banner) return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()("post-banner", !banner?.isBlack && "green"),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "post-banner__col",
      children: [/*#__PURE__*/jsx_runtime_.jsx(H3/* default */.Z, {
        content: banner?.title,
        color: "white"
      }), banner?.text?.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(Text16/* default */.Z, {
        content: banner?.text,
        color: "white"
      }), " "]
    }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
      content: banner?.button,
      classStr: "white",
      isLink: false,
      onClick: GlobalState/* changeContactState */.wX
    })]
  });
};

/* harmony default export */ const post_PostBanner = (PostBanner);
;// CONCATENATED MODULE: ./src/components/pages/post/PostContent/index.tsx







const PostContent = () => {
  const {
    content
  } = (0,RootStoreProvider/* useContentState */.b3)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "post-content",
    children: [/*#__PURE__*/jsx_runtime_.jsx(PostAside/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "post-content__content",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        "data-title": "Introduction",
        className: "post-content__block",
        style: {
          display: "flex"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(ImageComponent/* default */.Z, {
          img: content?.acf.img
        })
      }), content?.acf?.content?.map((c, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "post-content__block",
        "data-title": !i ? "pcb-empty" : c.title,
        dangerouslySetInnerHTML: {
          __html: c.content
        }
      }, i)), /*#__PURE__*/jsx_runtime_.jsx(post_PostBanner, {
        banner: content?.acf?.black_banner
      })]
    })]
  });
};

/* harmony default export */ const post_PostContent = (PostContent);

/***/ }),

/***/ 4471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_H1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9555);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8342);
/* harmony import */ var _hooks_funs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5590);
/* harmony import */ var _PostReadTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8424);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const PostIntro = () => {
  const {
    content,
    cats
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_1__/* .useContentState */ .b3)();
  const readTime = (0,_PostReadTime__WEBPACK_IMPORTED_MODULE_2__/* .useReadTime */ .G)(content?.acf?.content);
  const events = cats?.filter(c => content["category-blog"].includes(c.id));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
    className: "general-intro post-intro",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "post-intro__container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "general-intro__top",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_common_H1__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          content: content?.acf?.title,
          color: "white"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "case-intro__tags",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "case-intro__tags",
            children: events?.map((c, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "text16 white",
              children: c.name
            }, i))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "post-intro__date",
            children: [(0,_hooks_funs__WEBPACK_IMPORTED_MODULE_4__/* .getGeneralDate */ .GE)(content.date), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
              children: "\u2022"
            }), " ", readTime, " min read"]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostIntro);

/***/ }),

/***/ 1950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ PostReadLine),
  "u": () => (/* binding */ PostReadLineHidden)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/hooks/useScroll.ts
var useScroll = __webpack_require__(3755);
;// CONCATENATED MODULE: ./src/hooks/useReadTime.ts


const useReadLine = (el, locoScroll, isTouch) => {
  const scrollPos = (0,useScroll/* useScroll */.v)(locoScroll, isTouch);

  const countReadLine = y => {
    const main = document.querySelector(".post-content__content");

    if (main) {
      const height = main.getBoundingClientRect().height;
      el?.style.setProperty("--width-line", `${y / height * 100}%`);
    }
  };

  (0,external_react_.useEffect)(() => {
    countReadLine(scrollPos);
  }, [scrollPos]);
};
// EXTERNAL MODULE: ./src/stores/GlobalState.ts
var GlobalState = __webpack_require__(6595);
// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__(2062);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/pages/post/PostReadLine/index.tsx





const PostReadLineHidden = (0,external_mobx_react_.observer)(() => {
  const ref = (0,external_react_.useRef)(null);
  useReadLine(ref.current, GlobalState/* default.locoScroll */.ZP.locoScroll, GlobalState/* default.isTouch */.ZP.isTouch);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "post-aside__line-read hidden",
    ref: ref
  });
});
const PostReadLine = (0,external_mobx_react_.observer)(() => {
  const ref = (0,external_react_.useRef)(null);
  useReadLine(ref.current, GlobalState/* default.locoScroll */.ZP.locoScroll, GlobalState/* default.isTouch */.ZP.isTouch);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "post-aside__line",
    ref: ref
  });
});

/***/ }),

/***/ 8424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ useReadTime),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8342);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const useReadTime = content => {
  const {
    0: readTime,
    1: setTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (readTime.length) return;
    if (!content) return;
    let text = ``;
    content?.forEach(f => {
      text += `${f.content}`;
    });
    const time = Math.ceil(text.replace(/(<([^>]+)>)/gi, "").length / 1500);
    setTime(`${time}`);
  }, [content, readTime]);
  return readTime;
};

const PostReadTime = () => {
  const {
    content
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_1__/* .useContentState */ .b3)();
  const readTime = useReadTime(content?.acf?.content);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    color: "black bold",
    content: `${readTime} min`
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostReadTime);

/***/ }),

/***/ 8093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ getPostPage)
/* harmony export */ });
/* harmony import */ var _mocks_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8290);
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

/***/ }),

/***/ 4425:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cases),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1878);
/* harmony import */ var _hooks_useLoco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(936);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8290);
/* harmony import */ var _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7092);
/* harmony import */ var _api_getPostPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8093);
/* harmony import */ var _components_pages_post_PostIntro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4471);
/* harmony import */ var _components_pages_home_Blog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(756);
/* harmony import */ var _components_pages_post_PostContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4818);
/* harmony import */ var _components_pages_home_ContactBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7653);
/* harmony import */ var _components_pages_post_PostReadLine__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1950);
/* harmony import */ var _components_pages_post_PostAside__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6983);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__, _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_4__]);
([_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__, _components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function Cases({
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_pages_post_PostReadLine__WEBPACK_IMPORTED_MODULE_10__/* .PostReadLineHidden */ .u, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_pages_post_PostAside__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      className: "fixed"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_pages_post_PostIntro__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_pages_post_PostContent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        className: "space"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_pages_home_Blog__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_common_FocusBlock__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_pages_home_ContactBlock__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        className: "space"
      })]
    })]
  });
}
async function getStaticPaths() {
  const cases = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_3__/* .getPosts */ .Jq)();
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
  const response = await (0,_api_getPostPage__WEBPACK_IMPORTED_MODULE_5__/* .getPostPage */ .M)(params.slug);
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
var __webpack_exports__ = __webpack_require__.X(0, [664,342,801,910,859,180,930,89], () => (__webpack_exec__(4425)));
module.exports = __webpack_exports__;

})();