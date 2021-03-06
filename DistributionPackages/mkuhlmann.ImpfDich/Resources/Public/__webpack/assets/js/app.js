
//window.$ = window.jQuery = require('jquery');
window.impf = {
	vueLoaded: false
};

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
	_paq.push([
		function() { console.log(Matomo.getAsyncTracker()); Matomo.getAsyncTracker().setCustomRequestProcessing(function(request) { return btoa(request); }); }
	]);
	_paq.push(['trackPageView']);
	_paq.push(['enableLinkTracking']);
	_paq.push(['enableHeartBeatTimer']);
	(function() {
		var u="https://analytics.mkuhlmann.org/";
		_paq.push(['setTrackerUrl', u+'js/trck.php']);
		_paq.push(['setSiteId', '2']);
		var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
		g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'js/'; s.parentNode.insertBefore(g,s);
	})();
});

function loadScript(u, c) {
	var d = document, t = 'script',
		o = d.createElement(t),
		s = d.getElementsByTagName(t)[0];
	o.src = u;
	if (c) { o.addEventListener('load', function (e) { c(null, e); }, false); }
	s.parentNode.insertBefore(o, s);
}




impf.ensureVueLoaded = function(c) {
	if(!impf.vueLoaded) {
		console.log('loading vuejs components ...');
		loadScript('/_Resources/Static/Packages/mkuhlmann.ImpfDich/Assets/vue-components.js', function() {
			impf.vueLoaded = true;
			console.log('loaded vuejs components.');
			c();

		});
	} else {
		c();
	}
};

impf.neosFaq = function(id) {
	if(window.neos) return; // we in backend bois
	impf.ensureVueLoaded(function() {
		impf.vueRegisterFaqNeos(id);
	});
};
