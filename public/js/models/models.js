window.Student = Backbone.Model.extend({

    urlRoot: '/students',

    idAttribute: '_id',

    initialize: function () {
        this.validators = {};

        this.validators.active = function (value) {
            return value.length > 0 && (value === 'Y' || value === 'N') ? {isValid: true} : {isValid: false, message: 'You must enter "Y" or "N"'};
        };

        this.validators.firstname = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: 'You must enter a first name'};
        };

        this.validators.lastname = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: 'You must enter a last name'};
        };

        this.validators.home = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: 'You must enter a home #'};
        };
    },

    validateItem: function (key) {
        return (this.validators[key]) ? this.validators[key](this.get(key)) : {isValid: true};
    },

    // TODO: Implement Backbone's standard validate() method instead.
    validateAll: function () {

        var messages = {};

        for (var key in this.validators) {
            if(this.validators.hasOwnProperty(key)) {
                var check = this.validators[key](this.get(key));
                if (check.isValid === false) {
                    messages[key] = check.message;
                }
            }
        }

        return _.size(messages) > 0 ? {isValid: false, messages: messages} : {isValid: true};
    },

    defaults: {
        _id: null,
        rownum: -1,
        active: 'Y',
        firstname: '',
        lastname: '',
        address: '',
        city: '',
        state: 'IL',
        zip: '',
        picture: null,
        joindate: moment().format('MM/DD/YYYY'),
        birthdate: '',
        renewaldate: moment().add('years', 1).format('MM/DD/YYYY'),
        home: '',
        cell: '',
        work: '',
        email: '',
        notes: '',
        beltsize: '',
        currentbelt: '',
		age: ''
    },

    parse: function (response) {
        response.birthdate = (response.birthdate) ? moment(response.birthdate, 'YYYYMMDD').format('MM/DD/YYYY') : '';
        response.joindate = (response.joindate) ? moment(response.joindate, 'YYYYMMDD').format('MM/DD/YYYY') : '';
        response.renewaldate = (response.renewaldate) ? moment(response.renewaldate, 'YYYYMMDD').format('MM/DD/YYYY') : '';
        response.age = (response.birthdate) ?  utils.yearsSince(response.birthdate, 'MM/DD/YYYY') : '';
        
        return response;
    }
});

window.StudentCollection = Backbone.Collection.extend({

    model: Student,

    url: '/students',

    initialize: function(options) {
        var sortfield = options.sortfield || 'lastname',
            sortorder = options.sortorder || 'ASC',
            keyword = options.keyword || '';
        this.sortfield = sortfield;
        this.sortorder = sortorder;
        this.url = ('/students/' + sortfield + '/' + sortorder + '/' + keyword); 
    }

});