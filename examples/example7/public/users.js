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

/***/ "./src/styles/users.scss":
/*!*******************************!*\
  !*** ./src/styles/users.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_example6/./src/styles/users.scss?");

/***/ }),

/***/ "./src/users.js":
/*!**********************!*\
  !*** ./src/users.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_users_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/users.scss */ \"./src/styles/users.scss\");\n\n\nconst initUsers = () => {\n    fetch('https://jsonplaceholder.typicode.com/users')\n    .then(response => response.json())\n    .then(users => {\n        const allUsers = document.createElement('div')\n        allUsers.className = 'users-block'\n\n        users.forEach(user => {\n            const userEl = document.createElement('div')\n            userEl.className = 'user-block'\n            const userHeader = document.createElement('div')\n            userHeader.className = 'user-header'\n            userHeader.textContent = user.name\n            userEl.appendChild(userHeader)\n\n            const userContent = document.createElement('div')\n            userContent.className = 'user-content'\n            userContent.textContent = `${user.address.city} * ${user.address.street}`\n            userEl.appendChild(userContent)\n\n            allUsers.appendChild(userEl)\n        })\n\n        document.querySelector('#users-block').appendChild(allUsers)\n\n    })\n    .catch(error=>console.log(error))\n}\n\ninitUsers()\n\n\n\n//# sourceURL=webpack://webpack_example6/./src/users.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/users.js");
/******/ 	
/******/ })()
;