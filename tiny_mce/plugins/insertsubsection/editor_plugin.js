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
	tinymce.create('tinymce.plugins.InsertSubsubsection', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceInsertSubsubsection', function() {
				var str = "<h3 class='subsection'> Subsubsection name here </h3>";

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertsubsection', {title : 'InsertSubsubsection', cmd : 'mceInsertSubsubsection'});
                        },

		getInfo : function() {
			return {
				longname : 'Insert Subsubsection',
				author : 'Siyavula',
				authorurl : 'http://www.siyavula.com',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods


	});

	// Register plugin
	tinymce.PluginManager.add('insertsubsection', tinymce.plugins.InsertSubsubsection);
})();
