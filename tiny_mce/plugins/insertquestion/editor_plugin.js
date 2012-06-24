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
	tinymce.create('tinymce.plugins.InsertQuestion', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceInsertQuestion', function() {
				var str = "\
                                <div class='question'>\
                                    <br mce_bogus='1'/>\
                                    <div class='answer'> \
                                        <br mce_bogus='1'/>\
                                    </div>\
                                </div><br mce_bogus='1'/>";

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertquestion', {title : 'InsertQuestion', cmd : 'mceInsertQuestion'});
                        },

		getInfo : function() {
			return {
				longname : 'Insert Question',
				author : 'Siyavula',
				authorurl : 'http://www.siyavula.com',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods


	});

	// Register plugin
	tinymce.PluginManager.add('insertquestion', tinymce.plugins.InsertQuestion);
})();
