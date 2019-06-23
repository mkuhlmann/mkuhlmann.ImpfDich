
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


//window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example-component', require('./components/ExampleComponent.vue'));
/*
const app = new Vue({
	el: '#app'
});*/

window.$ = window.jQuery = require('jquery');

window.addEventListener('load', function(){
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
	var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {

		// Add a click event on each of them
		$navbarBurgers.forEach(function ($el) {
			$el.addEventListener('click', function () {

				// Get the target from the "data-target" attribute
				var target = $el.dataset.target;
				var $target = document.getElementById(target);

				// Toggle the class on both the "navbar-burger" and the "navbar-menu"
				$el.classList.toggle('is-active');
				$target.classList.toggle('is-active');

			});
		});
	}


	var _paq = window._paq = _paq || [];
	_paq.push(['trackPageView']);
	_paq.push(['enableLinkTracking']);
	(function() {
		var u="//analytics.mkuhlmann.org/";
		_paq.push(['setTrackerUrl', u+'trck.php']);
		_paq.push(['setSiteId', '7']);
		var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
		g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'trck.js'; s.parentNode.insertBefore(g,s);
	})();
});