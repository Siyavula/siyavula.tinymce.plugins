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
	tinymce.create('tinymce.plugins.InsertChapter', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceInsertChapter', function() {
				var str = "<h1 class='chapter'> Chapter name here </h1>";

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertchapter', {title : 'InsertChapter', cmd : 'mceInsertChapter'});
                        },

		getInfo : function() {
			return {
				longname : 'Insert Chapter',
				author : 'Siyavula',
				authorurl : 'http://www.siyavula.com',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods


	});

	// Register plugin
	tinymce.PluginManager.add('insertchapter', tinymce.plugins.InsertChapter);
})();
