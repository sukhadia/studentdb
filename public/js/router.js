define(['jquery', 'underscore', 'backbone', 'utils', 'common/views/home', 'common/views/about', 'common/views/header',
    'common/models/studentmodel', 'common/models/studentcollection',
    'common/views/studentdetails', 'desktop/views/studentlist', 'mobile/views/studentlist'], 
    function($, _, Backbone, utils, HomeView, AboutView, HeaderView,
        Student, StudentCollection,
        StudentView, StudentListDesktopView, StudentListMobileView) {
    return Backbone.Router.extend({
        //required across pages
        sortstate: {
            sortfield: 'lastname',
            sortorder: 'ASC',
            keyword: ''
        },

        routes: {
            'students/sort/:page/:sortfield/:sortorder'   : 'sort',
            'students/sort/:sortfield/:sortorder'         : 'sortFirstPage',
            'students/page/:page'                         : 'listPage',
            'students/add'                                : 'addStudent',
            'students/:id'                                : 'studentDetails',
            'students'                                    : 'list',
            'search/:keyword'                             : 'search',
            'sortchange/:sortfield/:sortorder'            : 'sortchange',
            'about'                                       : 'about',
            ''                                            : 'home'
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

        list: function(params) {
            this.sort(1, params);
        },

        sortchange: function(sortfield, sortorder, params) {
            this.list(params);
        },
        
        search: function(keyword, params) {
            this.list(params);
        },
        
        listPage: function(page, params) {
            this.sort(page, params);
        },

        sortFirstPage: function(sortfield, sortorder, params) {
            this.sort(1, params, sortfield, sortorder);
        },

        sort: function(page, params, sortfield, sortorder) {
            //TODO Do I need to check for page 'truthiness'
            var p = page ? parseInt(page, 10) : 1,
                sortfield = sortfield || this.sortstate.sortfield,
                sortorder = sortorder || this.sortstate.sortorder,
                keyword = this.sortstate.keyword,
                studentList = new StudentCollection({sortfield: sortfield, sortorder: sortorder, keyword: keyword}),
                isMobile = this.isMobile(params),
                studentListViewParams = {sortstate: this.sortstate, collection: studentList, page: p, mobile: isMobile},
                studentListView = (isMobile)? new StudentListMobileView(studentListViewParams) :
                                                   new StudentListDesktopView(studentListViewParams),
                that = this;
            if (isMobile) {
                this.saveMobileState();
            }
            _.extend(studentListView, Backbone.Events);
            studentList.fetch({success: function(collection){
                studentListView.collection = collection;
                that.showView('#content', studentListView);
            }});
            this.headerView.selectMenuItem('list-menu');

            //update currently selected sort field and sort order
            this.sortstate = {
                sortfield: sortfield,
                sortorder: sortorder,
                keyword: keyword
            };

            studentListView.on('sortchange', function (options) {
                that.sortstate = {
                    sortfield: options.sortfield,
                    sortorder: options.sortorder,
                    keyword: options.keyword
                };

                that.navigate('#sortchange/'+options.sortfield+'/'+options.sortorder, {trigger: true});
            });

            studentListView.on('search', function (options) {
                that.sortstate = _.extend(that.sortstate, {
                    keyword: options.keyword
                });
                that.navigate('#search/'+options.keyword, {trigger: true});
            });
        },

        isMobile: function (params) {
            return ((params && params.mobile) || sessionStorage.getItem('mobile'));
        },

        saveMobileState: function () {
            sessionStorage.setItem('mobile', true);
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
});