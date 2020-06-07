/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(window["webpackJsonphovedopgave_react"] = window["webpackJsonphovedopgave_react"] || []).push([["src_components_react-counter_index_js"],{

/***/ "./src/components/react-counter/index.js":
/*!***********************************************!*\
  !*** ./src/components/react-counter/index.js ***!
  \***********************************************/
/*! namespace exports */
/*! export ReactCounter [provided] [used] [usage prevents renaming] */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ReactCounter\": () => /* reexport safe */ _react_counter_jsx__WEBPACK_IMPORTED_MODULE_0__.ReactCounter\n/* harmony export */ });\n/* harmony import */ var _react_counter_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react-counter.jsx */ \"./src/components/react-counter/react-counter.jsx\");\n\n\n//# sourceURL=webpack://hovedopgave-react/./src/components/react-counter/index.js?");

/***/ }),

/***/ "./src/components/react-counter/react-counter.jsx":
/*!********************************************************!*\
  !*** ./src/components/react-counter/react-counter.jsx ***!
  \********************************************************/
/*! namespace exports */
/*! export ReactCounter [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ReactCounter\": () => /* binding */ ReactCounter\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/container/overridable/react=react?dfc3\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ReactCounter = () => {\n  const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      fontFamily: \"Arial, Helvetica, sans-serif\",\n      display: \"grid\",\n      gridTemplateRows: \"auto auto auto\",\n      alignItems: \"center\",\n      justifyItems: \"center\",\n      border: \"1px solid black\",\n      width: \"220px\",\n      padding: \"2px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    style: {\n      margin: \"0px\"\n    }\n  }, \"Count: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"count\",\n    style: {\n      margin: \"10px\"\n    }\n  }, count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    style: {\n      display: \"grid\",\n      alignItems: \"center\",\n      justifyItems: \"center\",\n      border: \"none\",\n      textDecoration: \"none\",\n      backgroundColor: \"blue\",\n      color: \"white\",\n      fontFamily: \"inherit\",\n      fontSize: \"16px\",\n      padding: \"15px 32px\"\n    },\n    onClick: () => setCount(count + 1)\n  }, \"Increment\"));\n};\n\n//# sourceURL=webpack://hovedopgave-react/./src/components/react-counter/react-counter.jsx?");

/***/ })

}]);