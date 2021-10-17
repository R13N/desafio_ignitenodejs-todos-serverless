/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/getTodos.ts":
/*!***********************************!*\
  !*** ./src/functions/getTodos.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dynamodbClient */ \"./src/utils/dynamodbClient.ts\");\n\nconst handle = async (event) => {\n    const { id } = event.pathParameters;\n    const todos = await _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__.document.scan({\n        TableName: \"todos\",\n        FilterExpression: \"user_id = :id\",\n        ExpressionAttributeValues: { \":id\": id },\n    }).promise();\n    if (todos) {\n        return {\n            statusCode: 200,\n            body: JSON.stringify({\n                todos,\n            })\n        };\n    }\n    return {\n        statusCode: 400,\n        body: JSON.stringify({\n            message: \"UserID inválido\"\n        })\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dldFRvZG9zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbml0ZW5vZGVqcy1zZXJ2ZXJsZXNzLXRvZG8vLi9zcmMvZnVuY3Rpb25zL2dldFRvZG9zLnRzP2Y2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5SGFuZGxlciB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHsgZG9jdW1lbnQgfSBmcm9tIFwiLi4vdXRpbHMvZHluYW1vZGJDbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZTogQVBJR2F0ZXdheVByb3h5SGFuZGxlciA9IGFzeW5jKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHtpZH0gPSBldmVudC5wYXRoUGFyYW1ldGVycztcbiAgXG4gIGNvbnN0IHRvZG9zID0gYXdhaXQgZG9jdW1lbnQuc2Nhbih7XG4gICAgVGFibGVOYW1lOiBcInRvZG9zXCIsXG4gICAgRmlsdGVyRXhwcmVzc2lvbjogXCJ1c2VyX2lkID0gOmlkXCIsXG4gICAgRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1wiOmlkXCI6IGlkfSwgIFxuICB9KS5wcm9taXNlKCk7XG5cbiAgXG4gIGlmKHRvZG9zKXtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0b2RvcyxcbiAgICAgICAgXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogNDAwLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG1lc3NhZ2U6IFwiVXNlcklEIGludsOhbGlkb1wiICAgICAgXG4gICAgfSlcbiAgfVxuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/getTodos.ts\n");

/***/ }),

/***/ "./src/utils/dynamodbClient.ts":
/*!*************************************!*\
  !*** ./src/utils/dynamodbClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst options = {\n    region: \"localhost\",\n    endpoint: \"http://localhost:8000\"\n};\nconst isOffline = () => {\n    return process.env.IS_OFFLINE;\n};\nconst document = isOffline()\n    ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(options)\n    : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbml0ZW5vZGVqcy1zZXJ2ZXJsZXNzLXRvZG8vLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHM/NDUxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbW9EQiB9IGZyb20gXCJhd3Mtc2RrXCI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHJlZ2lvbjogXCJsb2NhbGhvc3RcIixcbiAgZW5kcG9pbnQ6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCJcbn1cblxuY29uc3QgaXNPZmZsaW5lID0gKCkgPT4ge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuSVNfT0ZGTElORVxufVxuXG5leHBvcnQgY29uc3QgZG9jdW1lbnQgPSBpc09mZmxpbmUoKVxuICA/IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudChvcHRpb25zKVxuICA6IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/dynamodbClient.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/getTodos.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;