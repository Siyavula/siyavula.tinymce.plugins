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
	tinymce.create('tinymce.plugins.InsertInvestigation', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceInsertInvestigation', function() {
				var str = "\
                                <div class='investigation'>\
                                <hr/>\
                                <div class='investigation-aim'>\
                                    <p>Insert Aim text here...</p>\
                                </div>\
                                <div class='investigation-apparatus'>\
                                    <p>Insert Apparatus text here...</p>\
                                </div>\
                                <div class='investigation-method'>\
                                    <p>Insert Method text here...</p>\
                                </div>\
                                <div class='investigation-results'>\
                                    <p>Insert Method text here...</p>\
                                </div>\
                                <div class='investigation-observations'>\
                                    <p>Insert Method text here...</p>\
                                </div>\
                                <div class='investigation-conclusions'>\
                                    <p>Insert Method text here...</p>\
                                </div>\
                                <div class='investigation-questions'>\
                                    <p>Insert Method text here...</p>\
                                </div>\
                                </div><p></p><p></p><p></p>";

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertinvestigation', {title : 'InsertInvestigation', cmd : 'mceInsertInvestigation',image:"/static/tiny_mce/plugins/insertinvestigation/investigation.gif"});
                        },

		getInfo : function() {
			return {
				longname : 'Insert Investigation',
				author : 'Siyavula',
				authorurl : 'http://www.siyavula.com',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods


	});

	// Register plugin
	tinymce.PluginManager.add('insertinvestigation', tinymce.plugins.InsertInvestigation);
})();
