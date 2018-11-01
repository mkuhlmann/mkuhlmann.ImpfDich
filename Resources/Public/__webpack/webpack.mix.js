const mix = require('laravel-mix'),
	fs = require('fs'),
	crypto = require('crypto');


let dir = '../Assets';
mix.setResourceRoot('/_Resources/Static/Packages/mkuhlmann.ImpfDich/Assets/');
mix.setPublicPath(dir);


mix.js('assets/js/app.js', dir)
	.js('assets/js/vue-quiz.js', dir)
	.sass('assets/sass/app.scss', dir)
	.copyDirectory('assets/images', dir+'/images')
	.copyDirectory('assets/favicon', dir+'/favicon')
	.version();