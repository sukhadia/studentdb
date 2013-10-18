requirejs.config({

    baseUrl: 'js',

    paths: {
    	'jquery': 'lib/jquery-1.8.2.min',
    	'less'  : 'lib/less-1.3.3.min',
        'datepicker': 'lib/bootstrap-datepicker',
    	'moment': 'lib/moment',
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'queryparams': 'lib/backbone.queryparams',
        'text': 'lib/text'
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'jquery': {
        	exports: '$'
        },
        'datepicker': {
            deps: ['jquery'],
            exports: 'datepicker'
        }
    }
});



define(['app', 'datepicker', 'queryparams'], function (App) {
    App.init();
});

