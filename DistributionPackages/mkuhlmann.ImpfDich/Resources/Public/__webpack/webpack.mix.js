const mix = require('laravel-mix'),
	tailwindcss = require('tailwindcss');


let dir = '../Assets';
mix.setResourceRoot('/_Resources/Static/Packages/mkuhlmann.ImpfDich/Assets/');
mix.setPublicPath(dir);


mix.js('assets/js/app.js', dir)
	.js('assets/js/vue-components.js', dir)
	.vue()
	.sass('assets/sass/app.scss', dir)
		.options({
			//processCssUrls: false,
			postCss: [ tailwindcss('./tailwind.config.js') ]
		})
	.copyDirectory('assets/images', dir+'/images')
	.copyDirectory('assets/favicon', dir+'/favicon')
	.version();
