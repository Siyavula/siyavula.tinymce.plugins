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
	tinymce.create('tinymce.plugins.InsertDidyouknow', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceInsertDidyouknow', function() {
				var str = "\
                                <div class='didyouknow'>\
                                        <p> Text here ...</p>\
                                </div><p></p><p></p><p></p>";

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertdidyouknow', {title : 'InsertDidyouknow', cmd : 'mceInsertDidyouknow'});
                        },

		getInfo : function() {
			return {
				longname : 'Insert Didyouknow',
				author : 'Siyavula',
				authorurl : 'http://www.siyavula.com',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods


	});

	// Register plugin
	tinymce.PluginManager.add('insertdidyouknow', tinymce.plugins.InsertDidyouknow);
})();
