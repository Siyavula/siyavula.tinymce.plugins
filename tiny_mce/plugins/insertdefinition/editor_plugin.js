/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function() {
	tinymce.create('tinymce.plugins.InsertDefinition', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceInsertDefinition', function() {
				var str = "\
                                <dl class='definition'>\
                                  <dt>Term here</dt>\
                                  <dd>Meaning here</dd>\
                                </dl>";

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertdefinition', {title : 'InsertDefinition', cmd : 'mceInsertDefinition'});
                        },

		getInfo : function() {
			return {
				longname : 'Insert Definition',
				author : 'Siyavula',
				authorurl : 'http://www.siyavula.com',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods


	});

	// Register plugin
	tinymce.PluginManager.add('insertdefinition', tinymce.plugins.InsertDefinition);
})();
