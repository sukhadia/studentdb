define(['common/views/studentlistitembase', 'text!desktop/tpl/StudentListItemView.html'], function(StudentListItemViewBase, template) {	
	return StudentListItemViewBase.extend({
	    tagName:  'tr',

	    getTemplate: function() {
	    	return template;
	    }
	});
});