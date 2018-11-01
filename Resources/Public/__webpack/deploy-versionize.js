const fs = require('fs'),
	crypto = require('crypto');

let argv = process.argv.slice(2);
let version = 'v_'+crypto.randomBytes(16).toString('hex');


if(argv[0] == 'apply') {	
	let data = fs.readFileSync(__dirname + '/../templates/partials/base.html.twig', 'utf8');
	data = data.replace(/app\.css.*?" \/>/g, 'app.css\') }}?'+version+'" />');
	fs.writeFileSync(__dirname + '/../templates/partials/base.html.twig', data, 'utf8');
}

if(argv[0] == 'revert') {
	let data = fs.readFileSync(__dirname + '/../templates/partials/base.html.twig', 'utf8');
	data = data.replace(/app\.css.*?" \/>/g, 'app.css\') }}" />');
	fs.writeFileSync(__dirname + '/../templates/partials/base.html.twig', data, 'utf8');
}

