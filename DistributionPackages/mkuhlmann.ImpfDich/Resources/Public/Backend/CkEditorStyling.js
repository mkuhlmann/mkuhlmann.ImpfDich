/*(function() {

	window['@Neos:HostPluginAPI']['@manifest']('mkuhlmann.ImpfDich:CkBlockquote', {}, function(globalRegistry) {

		window.__neosVendor = window["@Neos:HostPluginAPI"]["@vendor"]();
		window.__neosRegistry = globalRegistry;
		
		
		var reactUiComponents = window['@Neos:HostPluginAPI']['@NeosProjectPackages']().ReactUiComponents;


		var ckEditorRegistry = globalRegistry.get('ckEditor5');
		var richtextToolbar = ckEditorRegistry.get('richtextToolbar');

		richtextToolbar.set('mkuhlmann.ImpfDich:CkBlockquote', {
			commandName: 'blockquoteCommand',
			isActive: __neosVendor.plow.$get('blockquoteCommand'),
			isVisible: __neosVendor.plow.$get(['formatting', 'mkuhlmann.ImpfDich:CkBlockquote']),
			
			component: reactUiComponents.IconButton,
			
			icon: 'quote-right',
			hoverStyle: 'brand',
			tooltip: 'Blockquote'
		});
		
		class BlockquoteCommand extends __neosVendor.CkEdito5.Command {
			
		}
		
		class BlockquotePlugin extends __neosVendor.CkEditor5.Plugin {
			static get pluginName() {
				return 'mkuhlmann.ImpfDich:CkBlockquote';
			}
			
			init() {
				this.editor.model.schema.register('blockquote', {
					isObject: true,
				});
				
				this.editor.conversion.elementFromPoint({
					model: 'blockquote',
					view: {
						name: 'blockquote'
					}
				});
				
				this.editor.commands.add('blockquoteCommand', new 
			}
		}
		
		ckEditorRegistry.get('config').set('mkuhlmann.ImpfDich:CkBlockquote', (ckEditorConfiguration, options) => {
			__neosVendor.plow.$add('plugins', BlockquotePlugin, ckEditorConfiguration);
			return ckEditorConfiguration;			
		});

		
	});


	
})();
*/