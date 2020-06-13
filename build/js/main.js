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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll */ \"./js/modules/scroll.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_scroll__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_accordion__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/validate */ \"./js/modules/validate.js\");\n/* harmony import */ var _modules_phoneMask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/phoneMask */ \"./js/modules/phoneMask.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal */ \"./js/modules/modal.js\");\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var blockNav = document.querySelector(\".main-footer__navigation\");\nvar blockContact = document.querySelector(\".main-footer__contacts\");\n\nvar hideBlock = function hideBlock(block) {\n  block.classList.remove(\"open-js\");\n};\n\nvar showBlock = function showBlock(block) {\n  block.classList.add(\"open-js\");\n};\n\nblockNav.addEventListener(\"click\", function (evt) {\n  evt.preventDefault();\n\n  if (blockNav.classList.contains(\"open-js\")) {\n    hideBlock(blockNav);\n  } else {\n    showBlock(blockNav);\n    hideBlock(blockContact);\n  }\n});\nblockContact.addEventListener(\"click\", function (evt) {\n  evt.preventDefault();\n\n  if (blockContact.classList.contains(\"open-js\")) {\n    hideBlock(blockContact);\n  } else {\n    showBlock(blockContact);\n    hideBlock(blockNav);\n  }\n});\n\n//# sourceURL=webpack:///./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeModal\", function() { return closeModal; });\n/* harmony import */ var _utils_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/scroll-lock */ \"./js/utils/scroll-lock.js\");\n\nvar modal = document.querySelector(\".modal\");\nvar openModal = document.querySelector(\".open-js\");\nvar buttonsClose = document.querySelector(\".modal__close\");\nvar overlay = document.querySelector(\".modal__overlay\");\nvar ESC_CODE = 27;\n\nvar closeModal = function closeModal() {\n  setTimeout(function () {\n    Object(_utils_scroll_lock__WEBPACK_IMPORTED_MODULE_0__[\"enableScrolling\"])();\n  }, 200);\n  modal.classList.remove(\"modal--show\");\n};\n\nvar onEscPress = function onEscPress(evt) {\n  if (evt.keyCode === ESC_CODE) {\n    closeModal();\n  }\n};\n\noverlay.addEventListener(\"click\", function () {\n  closeModal();\n});\n\nvar saveNameInStorage = function saveNameInStorage(el) {\n  el.value = localStorage.getItem(\"name\");\n\n  el.oninput = function () {\n    localStorage.setItem(\"name\", el.value);\n  };\n};\n\nvar savePhoneInStorage = function savePhoneInStorage(el) {\n  el.value = localStorage.getItem(\"phone\");\n\n  el.oninput = function () {\n    localStorage.setItem(\"phone\", el.value);\n  };\n};\n\nvar saveMessageInStorage = function saveMessageInStorage(el) {\n  el.value = localStorage.getItem(\"message\");\n\n  el.oninput = function () {\n    localStorage.setItem(\"message\", el.value);\n  };\n};\n\nvar inputName = modal.querySelector(\".name-js [name=modal-name]\");\nvar inputphone = modal.querySelector(\".phone-js [name=modal-phone]\");\nvar textarea = modal.querySelector(\".textarea-js [name=modal-message]\");\n\nvar showModal = function showModal() {\n  window.addEventListener(\"keydown\", onEscPress);\n  openModal.addEventListener(\"click\", function (evt) {\n    evt.preventDefault();\n    Object(_utils_scroll_lock__WEBPACK_IMPORTED_MODULE_0__[\"disableScrolling\"])();\n    modal.classList.add(\"modal--show\");\n    inputName.focus();\n    saveNameInStorage(inputName);\n    savePhoneInStorage(inputphone);\n    saveMessageInStorage(textarea);\n  });\n};\n\nshowModal();\nbuttonsClose.addEventListener(\"click\", function (evt) {\n  evt.preventDefault();\n  window.removeEventListener(\"keydown\", onEscPress);\n  closeModal();\n});\n\n\n//# sourceURL=webpack:///./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/phoneMask.js":
/*!*********************************!*\
  !*** ./js/modules/phoneMask.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_polyfill_foreach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/polyfill-foreach */ \"./js/utils/polyfill-foreach.js\");\n\nObject(_utils_polyfill_foreach__WEBPACK_IMPORTED_MODULE_0__[\"forEachPolyfill\"])();\nvar phoneInputs = document.querySelectorAll(\".phone-js input\");\n\nvar validatePhone = function validatePhone() {\n  if (phoneInputs.length) {\n    phoneInputs.forEach(function (el) {\n      var input = el; // eslint-disable-next-line no-undef\n\n      return new IMask(input, {\n        mask: \"+{7}(000)000-00-00\"\n      });\n    });\n  }\n};\n\nvalidatePhone();\n\n//# sourceURL=webpack:///./js/modules/phoneMask.js?");

/***/ }),

/***/ "./js/modules/scroll.js":
/*!******************************!*\
  !*** ./js/modules/scroll.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener(\"load\", function () {\n  // eslint-disable-next-line no-undef\n  var moveTo = new MoveTo();\n  var scrollButton = document.querySelector(\".intro__scroll-btn\");\n  var introButton = document.querySelector(\".intro__btn\");\n\n  if (scrollButton) {\n    var advantagesBlock = document.querySelector(\".advantages\");\n    scrollButton.addEventListener(\"click\", function () {\n      moveTo.move(advantagesBlock);\n    });\n  }\n\n  if (introButton) {\n    var feedbackBlock = document.querySelector(\".feedback\");\n    introButton.addEventListener(\"click\", function () {\n      moveTo.move(feedbackBlock);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./js/modules/scroll.js?");

/***/ }),

/***/ "./js/modules/validate.js":
/*!********************************!*\
  !*** ./js/modules/validate.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./js/modules/modal.js\");\n\nvar formFeedback = document.querySelector(\".feedback__form-wrapper form\");\nvar nameFeedback = formFeedback.querySelector(\".feedback__name-input input\");\nvar phoneFeedback = formFeedback.querySelector(\".feedback__phone-input input\");\nvar textareaFeedback = formFeedback.querySelector(\".feedback__textarea textarea\");\nvar checkboxFeedback = formFeedback.querySelector(\".feedback__checkbox input\");\nvar formModal = document.querySelector(\".modal__content form\");\nvar nameModal = formModal.querySelector(\".modal__name-input input\");\nvar phoneModal = formModal.querySelector(\".modal__phone-input input\");\nvar textareaModal = formModal.querySelector(\".modal__textarea textarea\");\nvar checkboxModal = formModal.querySelector(\".modal__checkbox input\");\n\nvar validateForm = function validateForm(form, name, phone, textareaName, checkboxName) {\n  var nameInput = name;\n  var phoneInput = phone;\n  var textarea = textareaName;\n  var checkbox = checkboxName;\n  var allFields = [nameInput, phoneInput, textarea, checkbox];\n\n  var setErrorFor = function setErrorFor(input) {\n    var formControl = input.parentElement;\n    formControl.classList.add(\"error\");\n  };\n\n  var setSuccessFor = function setSuccessFor(input) {\n    var formControl = input.parentElement;\n    formControl.classList.remove(\"error\");\n  };\n\n  allFields.forEach(function (elem) {\n    elem.addEventListener(\"input\", function () {\n      setSuccessFor(elem);\n    });\n  });\n\n  var checkInputs = function checkInputs() {\n    var nameInputValue = nameInput.value.trim();\n    var phoneInputValue = phoneInput.value.trim();\n    var textareaValue = textarea.value.trim();\n    var checkboxValue = checkbox.checked;\n    var countField = 0;\n\n    if (nameInputValue === \"\" || nameInputValue.length < 2) {\n      setErrorFor(nameInput);\n    } else {\n      setSuccessFor(nameInput);\n      countField++;\n    }\n\n    if (phoneInputValue === \"\" || phoneInputValue.length < 16) {\n      setErrorFor(phoneInput);\n    } else {\n      setSuccessFor(phoneInput);\n      countField++;\n    }\n\n    if (textareaValue === \"\" || textareaValue.length < 30) {\n      setErrorFor(textarea);\n    } else {\n      setSuccessFor(textarea);\n      countField++;\n    }\n\n    if (!checkboxValue) {\n      setErrorFor(checkbox);\n    } else {\n      setSuccessFor(checkbox);\n      countField++;\n    }\n\n    return countField;\n  };\n\n  form.addEventListener(\"submit\", function (evt) {\n    evt.preventDefault();\n\n    if (checkInputs() === 4) {\n      setTimeout(function () {\n        form.reset();\n        Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"closeModal\"])();\n      }, 600);\n    }\n  });\n};\n\nif (formFeedback) {\n  validateForm(formFeedback, nameFeedback, phoneFeedback, textareaFeedback, checkboxFeedback);\n}\n\nif (formModal) {\n  validateForm(formModal, nameModal, phoneModal, textareaModal, checkboxModal);\n}\n\n//# sourceURL=webpack:///./js/modules/validate.js?");

/***/ }),

/***/ "./js/utils/polyfill-foreach.js":
/*!**************************************!*\
  !*** ./js/utils/polyfill-foreach.js ***!
  \**************************************/
/*! exports provided: forEachPolyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"forEachPolyfill\", function() { return forEachPolyfill; });\nvar forEachPolyfill = function forEachPolyfill() {\n  if (window.NodeList && !NodeList.prototype.forEach) {\n    NodeList.prototype.forEach = Array.prototype.forEach;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/utils/polyfill-foreach.js?");

/***/ }),

/***/ "./js/utils/scroll-lock.js":
/*!*********************************!*\
  !*** ./js/utils/scroll-lock.js ***!
  \*********************************/
/*! exports provided: disableScrolling, enableScrolling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disableScrolling\", function() { return disableScrolling; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enableScrolling\", function() { return enableScrolling; });\nvar body = document.querySelector(\"body\"); // eslint-disable-next-line consistent-return\n\nvar getScrollbarWidth = function getScrollbarWidth() {\n  var outer = document.createElement(\"div\");\n  outer.style.visibility = \"hidden\";\n  outer.style.overflow = \"scroll\";\n  outer.style.msOverflowStyle = \"scrollbar\";\n  body.appendChild(outer);\n  var inner = document.createElement(\"div\");\n  outer.appendChild(inner);\n  var scrollbarWidth = outer.offsetWidth - inner.offsetWidth;\n  outer.parentNode.removeChild(outer);\n\n  if (outer.offsetWidth !== inner.offsetWidth) {\n    return scrollbarWidth;\n  }\n};\n\nvar getBodyScrollTop = function getBodyScrollTop() {\n  return self.pageYOffset || document.documentElement && document.documentElement.ScrollTop || body && body.scrollTop;\n};\n\nvar disableScrolling = function disableScrolling() {\n  var scrollWidth = getScrollbarWidth();\n  body.setAttribute(\"style\", \"padding-right: \" + scrollWidth + \"px;\");\n  body.dataset.scrollY = \"\".concat(getBodyScrollTop());\n  body.style.top = \"-\".concat(body.dataset.scrollY, \"px\");\n  body.classList.add(\"scroll-lock\");\n};\n\nvar enableScrolling = function enableScrolling() {\n  body.removeAttribute(\"style\");\n  body.classList.remove(\"scroll-lock\");\n  window.scrollTo(0, +body.dataset.scrollY);\n};\n\n\n\n//# sourceURL=webpack:///./js/utils/scroll-lock.js?");

/***/ })

/******/ });