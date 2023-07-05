"use strict";
exports.id = 798;
exports.ids = [798];
exports.modules = {

/***/ 6798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8342);
/* harmony import */ var _components_common_H3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7703);
/* harmony import */ var _components_common_Text16__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4730);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Quotes = function Quotes(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.324 0C2.384 0 0 2.374 0 5.304V58.78c0 2.93 2.384 5.304 5.324 5.304h28.394c3.43 0 6.212 2.77 6.212 6.187v9.724c0 3.417-2.781 6.187-6.212 6.187H5.324C2.384 86.183 0 88.557 0 91.487v2.21C0 96.624 2.384 99 5.324 99h36.38C53.466 99 63 89.502 63 77.786V21.214C63 9.498 53.466 0 41.704 0H5.324ZM74.324 0C71.384 0 69 2.374 69 5.304V58.78c0 2.93 2.384 5.304 5.324 5.304h28.394c3.431 0 6.212 2.77 6.212 6.187v9.724c0 3.417-2.781 6.187-6.212 6.187H74.324c-2.94 0-5.324 2.374-5.324 5.304v2.21C69 96.624 71.384 99 74.324 99h36.38C122.466 99 132 89.502 132 77.786V21.214C132 9.498 122.466 0 110.704 0h-36.38Z",
      fill: "#84EDA6"
    })
  }));
};

Quotes.defaultProps = {
  viewBox: "0 0 132 99",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};





const EventQuote = () => {
  const {
    content: {
      acf: {
        quote_block
      }
    }
  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_1__/* .useContentState */ .b3)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("section", {
    className: "event-quote",
    style: {
      backgroundImage: `url(${quote_block?.background_image?.sizes?.large})`
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "event-quote__container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "event-quote__cont",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "event-quote__bg top",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "event-quote__bottom",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "event-quote__img",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Quotes, {})
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "event-quote__content",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_common_H3__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            color: "black",
            content: quote_block?.text
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "event-quote__author",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              color: "black bold",
              content: quote_block?.author_name || ""
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_common_Text16__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              color: "black",
              content: quote_block?.author_position || ""
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "event-quote__bg bottom"
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventQuote);

/***/ })

};
;