define(['jquery', 'backbone', 'common/views/paginator'], function($, Backbone, Paginator) {
    return Backbone.View.extend({

        events: {
            'click .search': 'search',
            'submit': 'search'
        },

        initialize: function (options) {
            this.i=0;
            this.options=options;
        },

        renderCommon: function (listParentSelector, listItemView, template) {
            var students = this.collection.models,
                len = students.length,
                startPos = (this.options.page - 1) * 15,
                endPos = Math.min(startPos + 15, len);

            $(this.el).html(_.template(template));

            for (var i = startPos; i < endPos; i++) {
                students[i].set('rownum', i+1);
                $(listParentSelector, this.el).append(new listItemView({model: students[i]}).render().el);
            }

            $(this.el).append(new Paginator({
                        model: this.collection, 
                        page: this.options.page, 
                        mobile: this.options.mobile
                    }).render().el);

            this.delegateEvents(this.events);
            return this;
        },

        search: function (event) {
            event.preventDefault();
            var keyword = $('.search-query').val(),
                that = this;
            this.keyword = (keyword)? keyword : '*';
            this.trigger('search', {keyword: this.keyword});
        }

    });
});