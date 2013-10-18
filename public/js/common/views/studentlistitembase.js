define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	return Backbone.View.extend({

	    initialize: function () {
	        this.model.bind('change', this.render, this);
	        this.model.bind('destroy', this.close, this);
	    },

	    render: function () {
	        $(this.el).html(_.template(this.getTemplate(), this.model.toJSON())).data('id', this.model.id);
	        return this;
	    },

	    getTemplate: function () {
	    	throw new Error('Subclasses should implement this function!');
	    }

	});
});