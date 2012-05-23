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
	tinymce.create('tinymce.plugins.InsertPart', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceInsertPart', function() {
				var str = "<h1 class='part'> Part name here </h1>";

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertpart', {title : 'InsertPart', cmd : 'mceInsertPart'});
                        },

		getInfo : function() {
			return {
				longname : 'Insert Part',
				author : 'Siyavula',
				authorurl : 'http://www.siyavula.com',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods


	});

	// Register plugin
	tinymce.PluginManager.add('insertpart', tinymce.plugins.InsertPart);
})();
