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
	tinymce.create('tinymce.plugins.InsertVisit', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceInsertVisit', function() {
				var str = "\
                                <div class='visit'>\
                                        <p> Text here ...</p>\
                                </div><p></p><p></p><p></p>";

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertvisit', {title : 'InsertVisit', cmd : 'mceInsertVisit'});
                        },

		getInfo : function() {
			return {
				longname : 'Insert Visit',
				author : 'Siyavula',
				authorurl : 'http://www.siyavula.com',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods


	});

	// Register plugin
	tinymce.PluginManager.add('insertvisit', tinymce.plugins.InsertVisit);
})();
