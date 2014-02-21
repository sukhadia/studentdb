window.HeaderView = Backbone.View.extend({
    events: {
        'click #browse_active': 'browseActive',
        'click #browse_inactive': 'browseInactive'
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },

    selectMenuItem: function (menuItem) {
        $('.nav li').removeClass('active');
        if (menuItem) {
            $('.' + menuItem).addClass('active');
        }
    },

    browseActive: function (event) {
        event.preventDefault();
        app.navigate('students/active', {trigger: true});
    },

    browseInactive: function (event) {
        event.preventDefault();
        app.navigate('students/inactive', {trigger: true});
    }


});