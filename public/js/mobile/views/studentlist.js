define (['jquery', 'common/views/studentlistbase', 'mobile/views/studentlistitem',
	'text!mobile/tpl/StudentListView.html'], 
	function($, StudentListViewBase, StudentListItemView, template) {
		return StudentListViewBase.extend({

		    initialize: function (options) {
		        var keyword = options && options.sortstate && options.sortstate.keyword || '';
		        StudentListViewBase.prototype.initialize.call(this, options);
		        this.sortstate = {sortfield: 'lastname', sortorder: 'ASC', keyword: keyword};
		    },

		    render: function () {
		        return StudentListViewBase.prototype.renderCommon.call(this, '.thumbnails', StudentListItemView, template);
		    }

		});
});
