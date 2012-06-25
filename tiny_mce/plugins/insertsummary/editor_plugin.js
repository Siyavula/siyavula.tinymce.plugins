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
	tinymce.create('tinymce.plugins.InsertSummary', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceInsertSummary', function() {
				var str = "\
                                <br mce_bogus='1'/> \
                                <div class='summary'>\
                                        <p> Text here ...</p>\
                                </div><br mce_bogus='1'/>";

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertsummary', {title : 'InsertSummary', cmd : 'mceInsertSummary'});
                        },

		getInfo : function() {
			return {
				longname : 'Insert Summary',
				author : 'Siyavula',
				authorurl : 'http://www.siyavula.com',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods


	});

	// Register plugin
	tinymce.PluginManager.add('insertsummary', tinymce.plugins.InsertSummary);
})();
