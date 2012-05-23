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
				var str = "<div class='investigation'>\
                                <span class='title'>Investigation Title </span>\
                                </div>";

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertinvestigation', {title : 'InsertInvestigation', cmd : 'mceInsertInvestigation'});
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
	tinymce.PluginManager.add('insertinvestigation', tinymce.plugins.InsertDateTime);
})();
