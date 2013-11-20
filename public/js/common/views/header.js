define(['jquery', 'underscore', 'backbone', 'text!common/tpl/HeaderView.html'], function($, _, Backbone, template) {
    return Backbone.View.extend({

        initialize: function () {
            this.render();
        },

        render: function () {
            $(this.el).html(_.template(template));
            return this;
        },

        selectMenuItem: function (menuItem) {
            $('.nav li').removeClass('active');
            if (menuItem) {
                $('.' + menuItem).addClass('active');
            }
        }

    });
});