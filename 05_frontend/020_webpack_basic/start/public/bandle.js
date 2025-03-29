/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub.js */ \"./sub.js\");\n/* harmony import */ var _node_modules_is_odd_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/is-odd/index.js */ \"./node_modules/is-odd/index.js\");\n/* harmony import */ var _node_modules_is_odd_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_is_odd_index_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// const { helloFromSub } = require('./sub.js');\n(0,_sub_js__WEBPACK_IMPORTED_MODULE_0__.helloFromSub)();\nconst oddy = _node_modules_is_odd_index_js__WEBPACK_IMPORTED_MODULE_1___default()(3);\nconsole.log(oddy);\n\n//# sourceURL=webpack://end/./main.js?");

/***/ }),

/***/ "./node_modules/is-number/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-number/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/*!\n * is-number <https://github.com/jonschlinkert/is-number>\n *\n * Copyright (c) 2014-2018, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nmodule.exports = function isNumber(num) {\n  var number = +num;\n\n  if ((number - number) !== 0) {\n    // Discard Infinity and NaN\n    return false;\n  }\n\n  if (number === num) {\n    return true;\n  }\n\n  if (typeof num === 'string') {\n    // String parsed, both a non-empty whitespace string and an empty string\n    // will have been coerced to 0. If 0 trim the string and see if its empty.\n    if (number === 0 && num.trim() === '') {\n      return false;\n    }\n    return true;\n  }\n  return false;\n};\n\n\n//# sourceURL=webpack://end/./node_modules/is-number/index.js?");

/***/ }),

/***/ "./node_modules/is-odd/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-odd/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n * is-odd <https://github.com/jonschlinkert/is-odd>\n *\n * Copyright (c) 2015-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nconst isNumber = __webpack_require__(/*! is-number */ \"./node_modules/is-number/index.js\");\n\nmodule.exports = function isOdd(value) {\n  const n = Math.abs(value);\n  if (!isNumber(n)) {\n    throw new TypeError('expected a number');\n  }\n  if (!Number.isInteger(n)) {\n    throw new Error('expected an integer');\n  }\n  if (!Number.isSafeInteger(n)) {\n    throw new Error('value exceeds maximum safe integer');\n  }\n  return (n % 2) === 1;\n};\n\n\n\n//# sourceURL=webpack://end/./node_modules/is-odd/index.js?");

/***/ }),

/***/ "./sub.js":
/*!****************!*\
  !*** ./sub.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   helloFromSub: () => (/* binding */ helloFromSub)\n/* harmony export */ });\nfunction helloFromSub() {\n    console.log('hello, sub');\n}\n\n\n\n// module.exports = {\n//     helloFromSub\n// }\n\n//# sourceURL=webpack://end/./sub.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;