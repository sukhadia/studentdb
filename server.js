var express = require('express'),
    path = require('path'),
    http = require('http'),
    student = require('./routes/students');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/students', student.findAll);
app.get('/students/:sortfield/:sortorder/:browseType/:keyword', student.findAll);
app.get('/students/:sortfield/:sortorder/:browseType', student.findAll);
app.get('/students/:id', student.findById);
app.post('/students', student.addStudent);
app.put('/students/:id', student.updateStudent);
app.delete('/students/:id', student.deleteStudent);

var server = http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});