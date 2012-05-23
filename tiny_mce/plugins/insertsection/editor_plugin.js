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
	tinymce.create('tinymce.plugins.InsertSection', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceInsertSection', function() {
				var str = "<h2 class='section'> Section name here </h2>";

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertsection', {title : 'InsertSection', cmd : 'mceInsertSection'});
                        },

		getInfo : function() {
			return {
				longname : 'Insert Section',
				author : 'Siyavula',
				authorurl : 'http://www.siyavula.com',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods


	});

	// Register plugin
	tinymce.PluginManager.add('insertsection', tinymce.plugins.InsertSection);
})();
