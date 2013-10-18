define(['underscore', 'backbone', 'text!common/tpl/AboutView.html'], function(_, Backbone, template) {
	return Backbone.View.extend({

	    initialize: function () {},

	    render: function () {
	        $(this.el).html(_.template(template));
	        return this;
	    }

	});
});