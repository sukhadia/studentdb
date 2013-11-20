define(['jquery', 'underscore', 'backbone', 'text!common/tpl/HomeView.html'], function($, _, Backbone, template) {
	return Backbone.View.extend({

	    render:function () {
	        $(this.el).html(_.template(template));
	        return this;
	    }

	});
});