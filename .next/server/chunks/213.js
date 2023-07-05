"use strict";
exports.id = 213;
exports.ids = [213];
exports.modules = {

/***/ 7213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4730);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8342);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Line = function Line(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M143.944 2.544c-.588-.943-5.637-1.34-20.81-1.67C108.975.558 92.493-.352 63.696.144c-22.013.38-49.42 1.903-49.42 2.747 0 .612 1.068.629 11.272.083 9.43-.497 14.265-.613 20.17-.745C22.047 3.52 17 4.364 4.39 5.175c-7.907.513-3.286 1.986-.4 1.837.026 0 36.81-1.853 40.284-1.754.32.016-3.18.314-7.8.662-12.904.992-10.42 2.647-.749 1.886 32.538-2.565 63.151-3.359 86.74-2.25 7.453.347 8.281.347 8.281-.083 0-.761-2.03-1.34-5.209-1.456-4.969-.199-24.096-.761-32.751-.927-.668-.016-.348-.33.24-.364 3.526-.215 31.522-.05 42.529.182 8.094.166 8.682.15 8.388-.364Z",
      fill: "#84EDA6"
    })
  }));
};

Line.defaultProps = {
  viewBox: "0 0 144 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};






const EndBlock = () => {
  const {
    asPath
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    content: {
      block_12
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__/* .useContentState */ .b3)();
  const titleArr = block_12?.title?.trim().split(" ").filter(c => c.length) || [];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("end-block", asPath.includes("/about") && "about-page"),
    style: {
      backgroundImage: `url(${block_12?.background_image?.url})`
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "end-block__container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "end-block__content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "end-block__row end-block__top desk",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            className: "end-block__number",
            children: block_12?.number
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h2", {
            className: "end-block__title",
            children: [" ", titleArr.map((c, i) => {
              if (i + 1 != 7) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: `${c} `
              }, i);
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                children: [`${c} `, i + 1 == 7 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Line, {})]
              }, i);
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "end-block__line",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            className: "end-block__number",
            children: block_12?.number
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h2", {
            className: "end-block__title",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "end-block__bg"
            }), titleArr.slice(0, 3).map((c, i) => {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: `${c} `
              }, i);
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "end-block__row end-block__top mob",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h2", {
            className: "end-block__title",
            children: [" ", titleArr.slice(3).map((c, i) => {
              if (i + 1 != 4) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: `${c} `
              }, i);
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                children: [`${c} `, i + 1 == 4 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Line, {})]
              }, i);
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "end-block__row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            content: block_12?.text,
            color: "black"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            content: block_12?.subtext,
            color: "black end-block__subtext"
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EndBlock);

/***/ })

};
;