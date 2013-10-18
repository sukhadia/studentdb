define(['jquery', 'underscore'], function($, _) {
    return {

        displayValidationErrors: function (messages) {
            for (var key in messages) {
                if (messages.hasOwnProperty(key)) {
                    this.addValidationError(key, messages[key]);
                }
            }
            this.showAlert('Warning!', 'Fix validation errors and try again', 'alert-warning');
        },

        addValidationError: function (field, message) {
            var controlGroup = $('#' + field).parent().parent();
            controlGroup.addClass('error');
            $('.help-inline', controlGroup).html(message);
        },

        removeValidationError: function (field) {
            var controlGroup = $('#' + field).parent().parent();
            controlGroup.removeClass('error');
            $('.help-inline', controlGroup).html('');
        },

        showAlert: function(title, text, klass) {
            $('.alert').removeClass('alert-error alert-warning alert-success alert-info');
            $('.alert').addClass(klass);
            $('.alert').html('<strong>' + title + '</strong> ' + text);
            $('.alert').show();
        },

        hideAlert: function() {
            $('.alert').hide();
        },

        showDatePicker: function (divSelector) {
            var datepickerInQuestion = $(divSelector).datepicker({
                format: 'mm/dd/yyyy'
            });
        },

        getQueryVariable: function (variable) {
            var query = window.location.search.substring(1);
            var vars = query.split('&');
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                if (pair[0] == variable) {
                    return unescape(pair[1]);
                }
            }
            return false;
        },

        yearsSince: function (date, datePattern) {
            return (date)? moment(date, datePattern).add('years', 1).fromNow().replace(' years ago', '') : '';
        }

    };
});