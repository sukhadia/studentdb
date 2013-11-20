define(['backbone', 
        'common/models/studentmodel'], 
    function(Backbone, Student) {
        return Backbone.Collection.extend({

            model: Student,

            url: '/students',

            initialize: function(options) {
                var sortfield = options.sortfield || 'lastname',
                    sortorder = options.sortorder || 'ASC',
                    keyword = options.keyword;
                if (keyword==='*') {
                    keyword = '';
                }
                this.sortfield = sortfield;
                this.sortorder = sortorder;
                this.url = ('/students/' + sortfield + '/' + sortorder + '/' + keyword); 
            }

        });
});