window.StudentListViewBase = Backbone.View.extend({

    events: {
        'click .search': 'search',
        'submit': 'search'
    },

    initialize: function (options) {
        this.i=0;
    },

    renderCommon: function (listParentSelector) {
        var students = this.collection.models,
            len = students.length,
            startPos = (this.options.page - 1) * 15,
            endPos = Math.min(startPos + 15, len);

        $(this.el).html(this.template());

        for (var i = startPos; i < endPos; i++) {
            students[i].set('rownum', i+1);
            $(listParentSelector, this.el).append(new StudentListItemView({model: students[i]}).render().el);
        }

        $(this.el).append(new Paginator({model: this.collection, page: this.options.page}).render().el);

        this.delegateEvents(this.events);
        return this;
    },

    search: function (event) {
        event.preventDefault();
        var keyword = $('.search-query').val(),
            that = this;
        this.keyword = keyword;
        this.trigger('search', {keyword: keyword});
        return false;
    }

});

window.StudentListItemViewBase = Backbone.View.extend({

    initialize: function () {
        this.model.bind('change', this.render, this);
        this.model.bind('destroy', this.close, this);
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON())).data('id', this.model.id);
        return this;
    }
});