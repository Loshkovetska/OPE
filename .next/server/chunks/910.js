"use strict";
exports.id = 910;
exports.ids = [910];
exports.modules = {

/***/ 7092:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4009);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const FocusBlock = ({
  children
}) => {
  const {
    ref,
    inView,
    entry
  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__.useInView)({
    threshold: 0.5
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('focus-block', inView && 'focused'),
    ref: ref,
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FocusBlock);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_HeadlineWithCircle)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/assets/yellow-rings/Vector 2.png
/* harmony default export */ const Vector_2 = ({"src":"/_next/static/media/Vector 2.fbb03179.png","height":223,"width":853,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAOUlEQVR4nGP8todBiAECeIGYmfE/w8//jAyfQGwg5gIpUAYy3oMkGBgZ/v5nYGBkZGBgAdJMQHFeAM5uDZ0sDJ1pAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/common/HeadlineWithCircle/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var YellowCircle = function YellowCircle(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
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

var YellowCircle1 = function YellowCircle1(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M82.431 5.457c18.724-4.362 79.693-6.291 153.005 9.709 66.166 14.44 47.816 39.181 36.92 45.38-25.766 14.659-87.364 17.605-181.408 10.342-22.586-1.745-71.33-8.475-85.615-21.44C-12.524 33.244 42.805 3.48 169.019 14.744",
      stroke: "#F7BC00",
      strokeWidth: "3",
      strokeLinecap: "round"
    })
  }));
};

YellowCircle1.defaultProps = {
  viewBox: "0 0 285 77",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};






const HeadlineWithCircle = ({
  color,
  text,
  indexStart,
  headLevel = "h1",
  vectorStyle = "v1"
}) => {
  const YellowVector = () => vectorStyle == "v1" ? /*#__PURE__*/jsx_runtime_.jsx(YellowCircle, {}) : /*#__PURE__*/jsx_runtime_.jsx(YellowCircle1, {});

  const InsideWords = () => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: titleArr.map((c, i) => {
      if (i + 1 != indexStart) return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
        children: `${c} `
      }, i);
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: external_classnames_default()("headline__vector"),
        children: [`${c} `, /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: Vector_2?.src,
          width: Vector_2?.width,
          height: Vector_2?.height,
          alt: "on purpose"
        })]
      }, i);
    })
  });

  const titleArr = text?.trim().split(" ").filter(c => c.length) || [];

  if (headLevel == "h2") {
    return /*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: external_classnames_default()("title2 headline", color),
      children: /*#__PURE__*/jsx_runtime_.jsx(InsideWords, {})
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("h1", {
    className: external_classnames_default()("title headline", color),
    children: /*#__PURE__*/jsx_runtime_.jsx(InsideWords, {})
  });
};

/* harmony default export */ const common_HeadlineWithCircle = (HeadlineWithCircle);

/***/ })

};
;