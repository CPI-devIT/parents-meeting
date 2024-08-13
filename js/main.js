/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_include.js":
/*!****************************!*\
  !*** ./src/js/_include.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/_burger.js */ "./src/js/templates/_burger.js");

(0,_templates_burger_js__WEBPACK_IMPORTED_MODULE_0__.burger)();

/***/ }),

/***/ "./src/js/_project.js":
/*!****************************!*\
  !*** ./src/js/_project.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_stream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project/_stream.js */ "./src/js/project/_stream.js");

(0,_project_stream_js__WEBPACK_IMPORTED_MODULE_0__.stream)();

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/project/_stream.js":
/*!***********************************!*\
  !*** ./src/js/project/_stream.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stream: () => (/* binding */ stream)
/* harmony export */ });
var stream = function stream() {
  var preview = document.querySelector('.hero__preview');
  var video = document.querySelector('.hero__video');
  var _clickHandler = function clickHandler() {
    video.classList.add('hero__video--active');
    preview.classList.add('hero__preview--hidden');
    preview.removeEventListener(_clickHandler);
  };
  preview.addEventListener('click', _clickHandler);
};

/***/ }),

/***/ "./src/js/templates/_burger.js":
/*!*************************************!*\
  !*** ./src/js/templates/_burger.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   burger: () => (/* binding */ burger)
/* harmony export */ });
/* harmony import */ var _utils_disable_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/_disable-scroll.js */ "./src/js/utils/_disable-scroll.js");
/* harmony import */ var _utils_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/_enable-scroll.js */ "./src/js/utils/_enable-scroll.js");


var burger = function burger() {
  var burgerButton = document.querySelector('[data-burger-button]');
  var menu = document.querySelector('[data-menu]');
  var menuLinks = document.querySelectorAll('[data-menu-link]');
  var overlay = document.querySelector('[data-menu-overlay]');
  var checkClass = function checkClass() {
    if (burgerButton.classList.contains('burger-button--active')) {
      burgerButton.setAttribute('aria-expanded', 'true');
      burgerButton.setAttribute('aria-label', 'закрыть меню');
      (0,_utils_disable_scroll_js__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    } else {
      burgerButton.setAttribute('aria-expanded', 'false');
      burgerButton.setAttribute('aria-label', 'открыть меню');
      (0,_utils_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  };
  burgerButton.addEventListener('click', function () {
    burgerButton.classList.toggle('burger-button--active');
    menu.classList.toggle('burger-menu--active');
    overlay.classList.toggle('overlay--active');
    checkClass();
  });
  overlay.addEventListener('click', function () {
    burgerButton.classList.remove('burger-button--active');
    menu.classList.remove('burger-menu--active');
    overlay.classList.remove('overlay--active');
    checkClass();
  });
  menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
      burgerButton.classList.remove('burger-button--active');
      menu.classList.remove('burger-menu--active');
      overlay.classList.remove('overlay--active');
      (0,_utils_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    });
  });
};

/***/ }),

/***/ "./src/js/utils/_disable-scroll.js":
/*!*****************************************!*\
  !*** ./src/js/utils/_disable-scroll.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableScroll: () => (/* binding */ disableScroll)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");

var disableScroll = function disableScroll() {
  var pagePosition = window.scrollY;
  var paddingOffset = "".concat(window.innerWidth - _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth, "px");
  var fixBlocks = document.querySelectorAll('.fixed-block');
  if (fixBlocks) {
    fixBlocks.forEach(function (el) {
      var fixBlock = el;
      fixBlock.style.paddingRight = paddingOffset;
    });
  }
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('disable-scroll');
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = "-".concat(pagePosition, "px");
};

/***/ }),

/***/ "./src/js/utils/_enable-scroll.js":
/*!****************************************!*\
  !*** ./src/js/utils/_enable-scroll.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableScroll: () => (/* binding */ enableScroll)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");

var enableScroll = function enableScroll() {
  var fixBlocks = document.querySelectorAll('.fixed-block');
  if (fixBlocks) {
    fixBlocks.forEach(function (el) {
      var fixBlock = el;
      fixBlock.style.paddingRight = '0';
    });
  }
  var pagePosition = parseInt(_vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0';
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('disable-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
};

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
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _include_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_include.js */ "./src/js/_include.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_project.js */ "./src/js/_project.js");


/******/ })()
;
//# sourceMappingURL=main.js.map