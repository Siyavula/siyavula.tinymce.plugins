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
	tinymce.create('tinymce.plugins.InsertNote', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceInsertNote', function() {
				var str = "\
                                <div class='note'>\
                                        <p> Text here ...</p>\
                                </div><br mce_bogus='1'/>";

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertnote', {title : 'InsertNote', cmd : 'mceInsertNote'});
                        },

		getInfo : function() {
			return {
				longname : 'Insert Note',
				author : 'Siyavula',
				authorurl : 'http://www.siyavula.com',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods


	});

	// Register plugin
	tinymce.PluginManager.add('insertnote', tinymce.plugins.InsertNote);
})();
