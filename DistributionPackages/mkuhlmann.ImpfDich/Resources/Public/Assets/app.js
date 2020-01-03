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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

//window.$ = window.jQuery = require('jquery');
window.impf = {
  vueLoaded: false
};
window.addEventListener('load', function () {
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#ffffff"
      },
      "button": {
        "background": "#5b9cd4",
        "text": "#ffffff"
      }
    },
    "theme": "edgeless",
    "position": "bottom-right",
    "content": {
      "message": "Diese Website nutzt Cookies, um bestmögliche Funktionalität gewährleisten zu können.",
      "dismiss": "Okay, verstanden!",
      "link": "Informationen",
      "href": "/datenschutz#cookies"
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0); // Check if there are any navbar burgers

  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target); // Toggle the class on both the "navbar-burger" and the "navbar-menu"

        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  var _paq = window._paq = _paq || [];

  _paq.push(['trackPageView']);

  _paq.push(['enableLinkTracking']);

  (function () {
    var u = "//analytics.mkuhlmann.org/";

    _paq.push(['setTrackerUrl', u + 'trck.php']);

    _paq.push(['setSiteId', '7']);

    var d = document,
        g = d.createElement('script'),
        s = d.getElementsByTagName('script')[0];
    g.type = 'text/javascript';
    g.async = true;
    g.defer = true;
    g.src = u + 'trck.js';
    s.parentNode.insertBefore(g, s);
  })();
});

function loadScript(u, c) {
  var d = document,
      t = 'script',
      o = d.createElement(t),
      s = d.getElementsByTagName(t)[0];
  o.src = u;

  if (c) {
    o.addEventListener('load', function (e) {
      c(null, e);
    }, false);
  }

  s.parentNode.insertBefore(o, s);
}

impf.ensureVueLoaded = function (c) {
  if (!impf.vueLoaded) {
    console.log('loading vuejs components ...');
    loadScript('/_Resources/Static/Packages/mkuhlmann.ImpfDich/Assets/vue-components.js', function () {
      impf.vueLoaded = true;
      console.log('loaded vuejs components.');
      c();
    });
  } else {
    c();
  }
};

impf.neosFaq = function (id) {
  if (window.neos) return; // we in backend bois

  impf.ensureVueLoaded(function () {
    impf.vueRegisterFaqNeos(id);
  });
};

/***/ }),

/***/ "./assets/sass/app.scss":
/*!******************************!*\
  !*** ./assets/sass/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./assets/js/app.js ./assets/sass/app.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/mkuhlmann/workspace/mkuhlmann.ImpfDich/DistributionPackages/mkuhlmann.ImpfDich/Resources/Public/__webpack/assets/js/app.js */"./assets/js/app.js");
module.exports = __webpack_require__(/*! /home/mkuhlmann/workspace/mkuhlmann.ImpfDich/DistributionPackages/mkuhlmann.ImpfDich/Resources/Public/__webpack/assets/sass/app.scss */"./assets/sass/app.scss");


/***/ })

/******/ });