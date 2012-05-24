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
	tinymce.create('tinymce.plugins.InsertKeyquestions', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceInsertKeyquestions', function() {
				var str = "\
                                <div class='keyquestions'>\
                                        <p> Text here ...</p>\
                                </div><p></p><p></p><p></p>";

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertkeyquestions', {title : 'InsertKeyquestions', cmd : 'mceInsertKeyquestions'});
                        },

		getInfo : function() {
			return {
				longname : 'Insert Keyquestions',
				author : 'Siyavula',
				authorurl : 'http://www.siyavula.com',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods


	});

	// Register plugin
	tinymce.PluginManager.add('insertkeyquestions', tinymce.plugins.InsertKeyquestions);
})();
