/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_polyfill_foreach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/polyfill-foreach */ \"./js/utils/polyfill-foreach.js\");\n/* harmony import */ var _utils_init_ie11_download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/init-ie11-download */ \"./js/utils/init-ie11-download.js\");\n/* harmony import */ var _main_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/scroll */ \"./js/main/scroll.js\");\n/* harmony import */ var _main_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_scroll__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _main_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/accordion */ \"./js/main/accordion.js\");\n/* harmony import */ var _main_accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_accordion__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _main_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/validate */ \"./js/main/validate.js\");\n/* harmony import */ var _main_phoneMask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/phoneMask */ \"./js/main/phoneMask.js\");\n/* harmony import */ var _main_phoneMask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_phoneMask__WEBPACK_IMPORTED_MODULE_5__);\n\n // Utils\n// ---------------------------------\n\nObject(_utils_polyfill_foreach__WEBPACK_IMPORTED_MODULE_0__[\"forEachPolyfill\"])();\nObject(_utils_init_ie11_download__WEBPACK_IMPORTED_MODULE_1__[\"initIe11Download\"])(); // Modules\n// ---------------------------------\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/main/accordion.js":
/*!******************************!*\
  !*** ./js/main/accordion.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener(\"load\", function () {\n  var buttonNav = document.querySelector(\".main-footer__toggle-btn--nav\");\n  var buttonContact = document.querySelector(\".main-footer__toggle-btn--contacts\");\n  var blockNav = document.querySelector(\".main-footer__navigation\");\n  var blockContact = document.querySelector(\".main-footer__contacts\");\n\n  var hideBlock = function hideBlock(block, btn) {\n    if (btn) {\n      block.classList.remove(\"open-js\");\n    }\n  };\n\n  var showBlock = function showBlock(block, btn) {\n    if (btn) {\n      block.classList.add(\"open-js\");\n    }\n  };\n\n  if (buttonNav) {\n    buttonNav.addEventListener(\"click\", function (evt) {\n      evt.preventDefault();\n\n      if (blockNav.classList.contains(\"open-js\")) {\n        hideBlock(blockNav, buttonNav);\n      } else {\n        showBlock(blockNav, buttonNav);\n        hideBlock(blockContact, buttonContact);\n      }\n    });\n  }\n\n  if (buttonContact) {\n    buttonContact.addEventListener(\"click\", function (evt) {\n      evt.preventDefault();\n\n      if (blockContact.classList.contains(\"open-js\")) {\n        hideBlock(blockContact, buttonContact);\n      } else {\n        showBlock(blockContact, buttonContact);\n        hideBlock(blockNav, buttonNav);\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./js/main/accordion.js?");

/***/ }),

/***/ "./js/main/phoneMask.js":
/*!******************************!*\
  !*** ./js/main/phoneMask.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var phoneInputs = document.querySelectorAll(\".phone-js input\");\n\nvar validatePhone = function validatePhone() {\n  if (phoneInputs.length) {\n    phoneInputs.forEach(function (el) {\n      var input = el; // eslint-disable-next-line no-undef\n\n      return new IMask(input, {\n        mask: \"+{7}(000)000-00-00\"\n      });\n    });\n  }\n};\n\nvalidatePhone();\n\n//# sourceURL=webpack:///./js/main/phoneMask.js?");

/***/ }),

/***/ "./js/main/scroll.js":
/*!***************************!*\
  !*** ./js/main/scroll.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener(\"load\", function () {\n  // eslint-disable-next-line no-undef\n  var moveTo = new MoveTo();\n  var scrollButton = document.querySelector(\".intro__scroll-btn\");\n  var introButton = document.querySelector(\".intro__btn\");\n\n  if (scrollButton) {\n    var advantagesBlock = document.querySelector(\".advantages\");\n    scrollButton.addEventListener(\"click\", function () {\n      moveTo.move(advantagesBlock);\n    });\n  }\n\n  if (introButton) {\n    var feedbackBlock = document.querySelector(\".feedback\");\n    introButton.addEventListener(\"click\", function () {\n      moveTo.move(feedbackBlock);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./js/main/scroll.js?");

/***/ }),

/***/ "./js/main/validate.js":
/*!*****************************!*\
  !*** ./js/main/validate.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar validate = function validate() {\n  var formFeedback = document.querySelector(\".feedback__form-wrapper form\");\n  var nameFeedback = \"feedback__name-input\";\n  var phoneFeedback = \"feedback__phone-input\";\n  var textareaFeedback = \"feedback__textarea\";\n  var checkboxFeedback = \"feedback__checkbox\";\n  var formModal = document.querySelector(\".modal__form-wrapper form\");\n  var nameModal = \"modal__name-input\";\n  var phoneModal = \"modal__phone-input\";\n  var textareaModal = \"modal__textarea\";\n  var checkboxModal = \"modal__checkbox\";\n\n  var validateForm = function validateForm(form, name, phone, textareaName, checkboxName) {\n    var nameInput = form.querySelector(\".\".concat(name, \" input\"));\n    var phoneInput = form.querySelector(\".\".concat(phone, \" input\"));\n    var textarea = form.querySelector(\".\".concat(textareaName, \" textarea\"));\n    var checkbox = form.querySelector(\".\".concat(checkboxName, \" input\"));\n\n    var setErrorFor = function setErrorFor(input) {\n      var formControl = input.parentElement;\n      formControl.classList.add(\"error\");\n    };\n\n    var setSuccessFor = function setSuccessFor(input) {\n      var formControl = input.parentElement;\n      formControl.classList.remove(\"error\");\n    };\n\n    var checkInputs = function checkInputs() {\n      var nameInputValue = nameInput.value.trim();\n      var phoneInputValue = phoneInput.value.trim();\n      var textareaValue = textarea.value.trim();\n      var checkboxValue = checkbox.checked;\n      var countField = 0;\n\n      if (nameInputValue === \"\" || nameInputValue.length < 2) {\n        setErrorFor(nameInput);\n      } else {\n        setSuccessFor(nameInput);\n        countField++;\n      }\n\n      if (phoneInputValue === \"\" || phoneInputValue.length < 16) {\n        setErrorFor(phoneInput);\n      } else {\n        setSuccessFor(phoneInput);\n        countField++;\n      }\n\n      if (textareaValue === \"\" || textareaValue.length < 30) {\n        setErrorFor(textarea);\n      } else {\n        setSuccessFor(textarea);\n        countField++;\n      }\n\n      if (!checkboxValue) {\n        setErrorFor(checkbox);\n      } else {\n        setSuccessFor(checkbox);\n        countField++;\n      }\n\n      return countField;\n    };\n\n    form.addEventListener(\"submit\", function (evt) {\n      evt.preventDefault();\n\n      if (checkInputs() === 4) {\n        setTimeout(function () {\n          form.reset();\n        }, 600);\n      }\n    });\n  };\n\n  if (formFeedback) {\n    validateForm(formFeedback, nameFeedback, phoneFeedback, textareaFeedback, checkboxFeedback);\n  }\n\n  if (formModal) {\n    validateForm(formModal, nameModal, phoneModal, textareaModal, checkboxModal);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (validate());\n\n//# sourceURL=webpack:///./js/main/validate.js?");

/***/ }),

/***/ "./js/utils/init-ie11-download.js":
/*!****************************************!*\
  !*** ./js/utils/init-ie11-download.js ***!
  \****************************************/
/*! exports provided: initIe11Download */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initIe11Download\", function() { return initIe11Download; });\nvar ie11Download = function ie11Download(el) {\n  if (el.href === \"\") {\n    throw Error(\"The element has no href value.\");\n  }\n\n  var filename = el.getAttribute(\"download\");\n\n  if (filename === null || filename === \"\") {\n    var tmp = el.href.split(\"/\");\n    filename = tmp[tmp.length - 1];\n  }\n\n  el.addEventListener(\"click\", function (evt) {\n    evt.preventDefault();\n    var xhr = new XMLHttpRequest();\n\n    xhr.onloadstart = function () {\n      xhr.responseType = \"blob\";\n    };\n\n    xhr.onload = function () {\n      navigator.msSaveOrOpenBlob(xhr.response, filename);\n    };\n\n    xhr.open(\"GET\", el.href, true);\n    xhr.send();\n  });\n};\n\nvar downloadLinks = document.querySelectorAll(\"a[download]\");\n\nvar initIe11Download = function initIe11Download() {\n  if (window.navigator.msSaveBlob) {\n    if (downloadLinks.length) {\n      downloadLinks.forEach(function (el) {\n        ie11Download(el);\n      });\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/utils/init-ie11-download.js?");

/***/ }),

/***/ "./js/utils/polyfill-foreach.js":
/*!**************************************!*\
  !*** ./js/utils/polyfill-foreach.js ***!
  \**************************************/
/*! exports provided: forEachPolyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"forEachPolyfill\", function() { return forEachPolyfill; });\nvar forEachPolyfill = function forEachPolyfill() {\n  if (window.NodeList && !NodeList.prototype.forEach) {\n    NodeList.prototype.forEach = Array.prototype.forEach;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/utils/polyfill-foreach.js?");

/***/ })

/******/ });