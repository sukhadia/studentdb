
var BROWSE_TYPE = {
        ALL: 'ALL',
        ACTIVE: 'ACTIVE',
        INACTIVE: 'INACTIVE'
    };

var AppRouter = Backbone.Router.extend({

    //required across pages
    sortstate: {
        sortfield: 'lastname',
        sortorder: 'ASC',
        keyword: ''
    },

    routes: {
        ''                                            : 'home',
        'students'                                    : 'list',
        'students/all'                                : 'listAll',
        'students/active'                             : 'listActive',
        'students/inactive'                           : 'listInactive',
        'students/all'                                : 'listAll',
        'students/sort/:page/:sortfield/:sortorder'   : 'sort',
        'students/sort/:sortfield/:sortorder'         : 'sortFirstPage',
        'students/page/:page'	                      : 'list',
        'students/add'                                : 'addStudent',
        'students/:id'                                : 'studentDetails',
        'about'                                       : 'about'
    },

    initialize: function () {
        this.addGenericCloseToBackboneView();
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);
    },

    addGenericCloseToBackboneView: function () {
        Backbone.View.prototype.close = function () {
            if (this.beforeClose) {
                this.beforeClose();
            }
            this.remove();
            this.unbind();
        };
    },

    home: function (id) {
        if (!this.homeView) {
            this.homeView = new HomeView();
        }

        this.showView('#content', this.homeView);
        this.headerView.selectMenuItem('home-menu');
    },

    listAll: function() {
        this.sortstate.browseType = BROWSE_TYPE.ALL;
        this.sort(1, this.sortstate.sortfield, this.sortstate.sortorder);
    },

	listActive: function() {
        this.sortstate.browseType = BROWSE_TYPE.ACTIVE;
        this.sortstate.keyword = '';
        this.sort(1, this.sortstate.sortfield, this.sortstate.sortorder);
    },

    listInactive: function() {
        this.sortstate.browseType = BROWSE_TYPE.INACTIVE;
        this.sortstate.keyword = '';
        this.sort(1, this.sortstate.sortfield, this.sortstate.sortorder);
    },

    list: function(page) {
        this.sort(page);
    },

    sortFirstPage: function(sortfield, sortorder) {
        this.sort(1, sortfield, sortorder);
    },

    sort: function(page, sortfield, sortorder) {
        var p = page ? parseInt(page, 10) : 1,
            sortfield = sortfield || this.sortstate.sortfield,
            sortorder = sortorder || this.sortstate.sortorder,
            keyword = (this.sortstate.browseType === BROWSE_TYPE.ALL)? '' : this.sortstate.keyword,
            browseType = this.sortstate.browseType || BROWSE_TYPE.ALL,
            studentList = new StudentCollection({sortfield: sortfield, sortorder: sortorder, keyword: keyword, browseType: browseType}),
            studentListView = new StudentListView({sortstate: this.sortstate, collection: studentList, page: p}),
            that = this;
        _.extend(studentListView, Backbone.Events);
        studentList.fetch({success: function(collection){
            // studentListView.collection = (browseType === BROWSE_TYPE.ALL)? collection : collection.filter(function(student) {
            //     return student.get("active") === ((browseType === BROWSE_TYPE.ACTIVE)? 'Y': 'N');
            // });
            studentListView.collection = collection;
            that.showView('#content', studentListView);
        }});
        this.headerView.selectMenuItem('list-menu');

        //update currently selected sort field and sort order
        this.sortstate = _.extend(this.sortstate, {
                    sortfield: sortfield,
                    sortorder: sortorder,
                    keyword: keyword
                });

        studentListView.on('sortchange', function (options) {
            that.sortstate = {
                sortfield: options.sortfield,
                sortorder: options.sortorder,
                keyword: options.keyword
            };
            app.navigate('/#students/page/1', {trigger: true});
        });

        studentListView.on('search', function (options) {
            that.sortstate = _.extend(that.sortstate, {
                keyword: options.keyword
            });
            app.navigate('/#students/page/1', {trigger: true});
        });
    },

    studentDetails: function (id) {
        var student = new Student({_id: id}),
            that = this;
        student.fetch({success: function(model){
            var studentView = new StudentView({model: student});
            that.showView('#content', studentView);
            utils.showDatePicker('#joindatediv');
            utils.showDatePicker('#birthdatediv');
            utils.showDatePicker('#renewaldatediv');
        }});
        this.headerView.selectMenuItem();
    },

	addStudent: function() {
        var student = new Student(),
            studentView = new StudentView({model: student});

        this.showView('#content', studentView);
        utils.showDatePicker('#joindatediv');
        utils.showDatePicker('#birthdatediv');
        utils.showDatePicker('#renewaldatediv');
        this.headerView.selectMenuItem('add-menu');
	},

    about: function () {
        if (!this.aboutView) {
            this.aboutView = new AboutView();
        }
        this.showView('#content', this.aboutView);
        this.headerView.selectMenuItem('about-menu');
    },

    showView: function(selector, view) {
        if (this.currentView)
            this.currentView.close();
        $(selector).html(view.render().el);
        this.currentView = view;
        return view;
    }

    

});

utils.loadTemplate(['HomeView', 'HeaderView', 'StudentView', 'StudentListView', 'StudentListItemView', 'AboutView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});