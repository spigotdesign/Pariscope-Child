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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/wc-quantity-increment.js":
/***/ (function(module, exports) {

jQuery(function ($) {

	if (!String.prototype.getDecimals) {
		String.prototype.getDecimals = function () {
			var num = this,
			    match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
			if (!match) {
				return 0;
			}
			return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
		};
	}

	function wcqi_refresh_quantity_increments() {
		$('div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)').addClass('buttons_added').append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />');
	}

	$(document).on('updated_wc_div', function () {
		wcqi_refresh_quantity_increments();
	});

	$(document).on('click', '.plus, .minus', function () {
		// Get values
		var $qty = $(this).closest('.quantity').find('.qty'),
		    currentVal = parseFloat($qty.val()),
		    max = parseFloat($qty.attr('max')),
		    min = parseFloat($qty.attr('min')),
		    step = $qty.attr('step');

		// Format values
		if (!currentVal || currentVal === '' || currentVal === 'NaN') currentVal = 0;
		if (max === '' || max === 'NaN') max = '';
		if (min === '' || min === 'NaN') min = 0;
		if (step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN') step = 1;

		// Change the value
		if ($(this).is('.plus')) {
			if (max && currentVal >= max) {
				$qty.val(max);
			} else {
				$qty.val((currentVal + parseFloat(step)).toFixed(step.getDecimals()));
			}
		} else {
			if (min && currentVal <= min) {
				$qty.val(min);
			} else if (currentVal > 0) {
				$qty.val((currentVal - parseFloat(step)).toFixed(step.getDecimals()));
			}
		}

		// Trigger change event
		$qty.trigger('change');
	});

	wcqi_refresh_quantity_increments();
});

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/js/wc-quantity-increment.js");


/***/ })

/******/ });
//# sourceMappingURL=wc-quantity-increment.js.map