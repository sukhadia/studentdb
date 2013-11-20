window.StudentView = Backbone.View.extend({

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    events: {
        'change'        : 'change',
        'changeDate'    : 'changeDate',
        'click .save'   : 'beforeSave',
        'click .delete' : 'deleteStudent',
        'drop #picture' : 'dropHandler'
    },

    change: function (event) {
        // Remove any existing alert message
        utils.hideAlert();

        // Apply the change to the model
        var target = event.target;
        var change = {};
        change[target.name] = target.value;
        if (target.name === 'birthdate') {
            change.birthmmdd = target.value.substring(0, 6).split('/').join('');
            change.age = utils.yearsSince(target.value, 'MM/DD/YYYY');
            $('#age').val(change.age);
        }
        this.model.set(change);

        // Run validation rule (if any) on changed item
        var check = this.model.validateItem(target.id);
        if (check.isValid === false) {
            utils.addValidationError(target.id, check.message);
        } else {
            utils.removeValidationError(target.id);
        }
    },

    changeDate: function (event) {
        // Remove any existing alert message
        utils.hideAlert();

        // Apply the change to the model
        target = $('#' + event.target.id + ' input');
        var change = {},
            fieldname = target.attr('id'),
            fieldvalue = target.val();
        change[fieldname] = fieldvalue;
        if (fieldname === 'birthdate') {
            change.birthmmdd = fieldvalue.substring(0, 6).split('/').join('');
            change.age = utils.yearsSince(fieldvalue, 'MM/DD/YYYY');
            $('#age').val(change.age);
        }
        this.model.set(change);

        // Run validation rule (if any) on changed item
        var check = this.model.validateItem(target.attr('id'));
        if (check.isValid === false) {
            utils.addValidationError(target.attr('id'), check.message);
        } else {
            utils.removeValidationError(target.attr('id'));
        }
    },

    beforeSave: function () {
        var check = this.model.validateAll();
        if (check.isValid === false) {
            utils.displayValidationErrors(check.messages);
            return false;
        }
        this.saveStudent();
        return false;
    },

    saveStudent: function () {
        var that = this;
        console.log('before save');
        this.convertAllDatesToDBFormat(this.model);
        this.model.save(null, {
            success: function (model) {
                // that.revertAllDatesFromDBFormat(model);
                that.render();
                $('#content').html(this.el);
                utils.showDatePicker('#joindatediv');
                utils.showDatePicker('#birthdatediv');
                utils.showDatePicker('#renewaldatediv');
                app.navigate('students/' + model.id, false);
                utils.showAlert('Success!', 'Student saved successfully', 'alert-success');
                $('html, body').animate({
                    scrollTop: $('.alert-success').offset().top
                }, 500);
            },
            error: function () {
                that.revertAllDatesFromDBFormat();
                utils.showAlert('Error', 'An error occurred while trying to delete this item', 'alert-error');
            }
        });
    },

    convertAllDatesToDBFormat: function (model) {
        this.convertDateToDBFormat(model, 'joindate');
        this.convertDateToDBFormat(model, 'birthdate');
        this.convertDateToDBFormat(model, 'renewaldate');
    },

    convertDateToDBFormat: function (model, dateFieldName) {
        this.convertDateFormat(model, dateFieldName, 'MM/DD/YYYY', 'YYYYMMDD');
    },

    revertAllDatesFromDBFormat: function (model) {
        this.convertDateToDBFormat(model, 'joindate');
        this.convertDateToDBFormat(model, 'birthdate');
        this.convertDateToDBFormat(model, 'renewaldate');
    },

    revertDateFromDBFormat: function (model, dateFieldName) {
        this.convertDateFormat(model, dateFieldName, 'YYYYMMDD', 'MM/DD/YYYY');
    },

    convertDateFormat: function (model, dateFieldName, fromFromat, toFormat) {
        if (model.get(dateFieldName)) {
            model.set(dateFieldName, moment(model.get(dateFieldName), fromFromat).format(toFormat));
        }
    },

    deleteStudent: function () {
        if (confirm('Delete this student ?')) {
            this.model.destroy({
                success: function () {
                    alert('Student deleted successfully');
                    window.history.back();
                }
            });
        }
        return false;
    },

    //not used currently
    dropHandler: function (event) {
        event.stopPropagation();
        event.preventDefault();
        var e = event.originalEvent;
        e.dataTransfer.dropEffect = 'copy';
        this.pictureFile = e.dataTransfer.files[0];

        // Read the image file from the local file system and display it in the img tag
        var reader = new FileReader();
        reader.onloadend = function () {
            $('#picture').attr('src', reader.result);
        };
        reader.readAsDataURL(this.pictureFile);
    }

});