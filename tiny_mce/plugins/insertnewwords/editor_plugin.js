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
	tinymce.create('tinymce.plugins.InsertNewwords', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceInsertNewwords', function() {
				var str = "\
                                <div class='newwords'>\
                                        <p> Text here ...</p>\
                                </div><p></p><p></p><p></p>";

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertnewwords', {title : 'InsertNewwords', cmd : 'mceInsertNewwords'});
                        },

		getInfo : function() {
			return {
				longname : 'Insert Newwords',
				author : 'Siyavula',
				authorurl : 'http://www.siyavula.com',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods


	});

	// Register plugin
	tinymce.PluginManager.add('insertnewwords', tinymce.plugins.InsertNewwords);
})();
