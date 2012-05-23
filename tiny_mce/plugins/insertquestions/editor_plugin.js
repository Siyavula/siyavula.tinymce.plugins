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
	tinymce.create('tinymce.plugins.InsertKeyconcepts', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceInsertKeyconcepts', function() {
				var str = "\
                                <div class='keyconcepts'>\
                                        <p> Text here ...</p>\
                                </div><p></p><p></p><p></p>";

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertkeyconcepts', {title : 'InsertKeyconcepts', cmd : 'mceInsertKeyconcepts',image:"/static/tiny_mce/plugins/insertkeyconcepts/keyconcepts.gif"});
                        },

		getInfo : function() {
			return {
				longname : 'Insert Keyconcepts',
				author : 'Siyavula',
				authorurl : 'http://www.siyavula.com',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods


	});

	// Register plugin
	tinymce.PluginManager.add('insertkeyconcepts', tinymce.plugins.InsertKeyconcepts);
})();
