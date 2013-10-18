define(['common/views/studentlistitembase', 'text!mobile/tpl/StudentListItemView.html'], function(StudentListItemViewBase, template) {	
	return StudentListItemViewBase.extend({
	    tagName:  'li',

	    getTemplate: function() {
	    	return template;
	    }
	});
});