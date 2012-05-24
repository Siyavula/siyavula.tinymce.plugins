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
	tinymce.create('tinymce.plugins.InsertExample', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceInsertExample', function() {
				var str = "\
                                <div class='example'>\
                                <hr/>\
                                    <div class='exproblem'>\
                                        <p> Text here ...</p>\
                                    </div>\
                                    <div class='exsolution'>\
                                        <p> Text here ...</p>\
                                    </div>\
                                </div><p></p><p></p><p></p>";

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertexample', {title : 'InsertExample', cmd : 'mceInsertExample'});
                        },

		getInfo : function() {
			return {
				longname : 'Insert Example',
				author : 'Siyavula',
				authorurl : 'http://www.siyavula.com',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods


	});

	// Register plugin
	tinymce.PluginManager.add('insertexample', tinymce.plugins.InsertExample);
})();
