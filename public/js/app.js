
define(['backbone', 'router'], function(Backbone, AppRouter) {
    return {
    	init: function() {
    		app = new AppRouter();
    	    Backbone.history.start();
    	}
    }
});