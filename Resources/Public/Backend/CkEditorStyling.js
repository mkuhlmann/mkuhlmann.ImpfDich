(function() {
	

	window['@Neos:HostPluginAPI']['@manifest']('main', {}, function(globalRegistry) {

		var reactUiComponents = window['@Neos:HostPluginAPI']['@NeosProjectPackages']().ReactUiComponents;


		var ckEditorRegistry = globalRegistry.get('ckEditor');
		var richtextToolbar = ckEditorRegistry.get('richtextToolbar');

		richtextToolbar.set('mkuhlmann.ImpfDich:CkBlockquoteButton', {
			formattingRule: 'mkuhlmann.ImpfDich:CkBlockquote',
			component: reactUiComponents.IconButton,
			callbackPropName: 'onClick',

			icon: 'quote-right',
			hoverStyle: 'brand'
		});

		var formattingRules = ckEditorRegistry.get('formattingRules');

		formattingRules.set('mkuhlmann.ImpfDich:CkBlockquote', {
			 command: 'blockquote',
			 config: formattingRules.config.add('Blockquote')
		});
	});

	console.log('yo');

	
})();
