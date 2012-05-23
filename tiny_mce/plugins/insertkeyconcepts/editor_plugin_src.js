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
	tinymce.create('tinymce.plugins.InsertExercise', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceInsertExercise', function() {
				var str = '<table class="exercise"><tr class="ex_heading"> <td class="ex_heading_type">Exercise</td> <td class="ex_heading_text">Heading text...</td>  </tr><tr class="ex_problem"> <td colspan='2'> Problem text goes here </td> </tr><tr class="ex_solution"> <td colspan='2'> Solution goes here... </td> </tr></table>';

				ed.execCommand('mceInsertContent', false, str);
			});

			ed.addButton('insertexercise', {title : 'InsertExercise', cmd : 'mceInsertExercise'});
		},

		getInfo : function() {
			return {
				longname : 'Insert Exercise',
				author : 'Siyavula',
				authorurl : 'http://www.siyavula.com',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods


	});

	// Register plugin
	tinymce.PluginManager.add('insertexercise', tinymce.plugins.InsertDateTime);
})();
