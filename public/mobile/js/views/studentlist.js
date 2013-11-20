window.StudentListView = StudentListViewBase.extend({

    initialize: function (options) {
        var keyword = options && options.sortstate && options.sortstate.keyword || '';
        StudentListViewBase.prototype.initialize.call(this, options);
        this.sortstate = {sortfield: 'lastname', sortorder: 'ASC', keyword: keyword};
    },

    render: function () {
        return StudentListViewBase.prototype.renderCommon.call(this, '.thumbnails');
    }

});

window.StudentListItemView = StudentListItemViewBase.extend({
    tagName:  'li'
});