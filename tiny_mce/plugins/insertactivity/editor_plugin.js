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
	tinymce.create('tinymce.plugins.InsertActivity', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceInsertActivity', function() {
				var str = "\
                                <div class='activity'>\
                                <hr/>\
                                <div class='activity-materials'>\
                                    <p>Insert text here...</p>\
                                </div>\
                                <div class='activity-instructions'>\
                                    <p>Insert text here...</p>\
                                </div>\
                                <div class='activity-questions'>\
                                    <p>Insert text here...</p>\
                                </div>\
                                </div><p></p><p></p><p></p>";

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertactivity', {title : 'InsertActivity', cmd : 'mceInsertActivity'});
                        },

		getInfo : function() {
			return {
				longname : 'Insert Activity',
				author : 'Siyavula',
				authorurl : 'http://www.siyavula.com',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods


	});

	// Register plugin
	tinymce.PluginManager.add('insertactivity', tinymce.plugins.InsertActivity);
})();
