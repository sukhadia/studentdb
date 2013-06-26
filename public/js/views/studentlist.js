window.StudentListView = StudentListViewBase.extend({

    events: _.extend(StudentListViewBase.prototype.events, {
        'click tr': 'clickTr',
        'click th': 'clickTh'
    }),

    initialize: function (options) {
        StudentListViewBase.prototype.initialize.call(this, options);
        this.sortstate = options.sortstate;
    },

    render: function () {
        return StudentListViewBase.prototype.renderCommon.call(this, '.tablebody');
    },

    clickTr: function (event) {
        var id = $(event.currentTarget).data('id');
        app.navigate('/#students/' + id);
    },

    clickTh: function (event) {
        var sortstate = this.sortstate,
            sortfieldFromTarget = $(event.currentTarget).data('sortfield'),
            sortfield = (sortfieldFromTarget === 'birthdate') ? 'birthmmdd' : sortfieldFromTarget,
            sortorderFromSortState = (sortstate.sortfield === sortfield) ? sortstate.sortorder : 'DESC',
            sortorder = (sortorderFromSortState === 'DESC') ? 'ASC' : 'DESC',
            keyword = sortstate.keyword,
            newsortstate = {sortfield: sortfield, sortorder: sortorder, keyword: keyword};

        this.sortstate = newsortstate;
        this.trigger('sortchange', newsortstate);
        return false;
    }

});

window.StudentListItemView = StudentListItemViewBase.extend({
    tagName:  'tr'
});