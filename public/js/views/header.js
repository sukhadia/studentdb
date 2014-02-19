window.HeaderView = Backbone.View.extend({
    events: {
        'click #browse_students': 'browseStudents'

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

    browseStudents: function (event) {
        event.preventDefault();
        app.navigate('students/all', {trigger: true});
    }

});