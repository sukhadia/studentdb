var express = require('express'),
    path = require('path'),
    http = require('http'),
    io = require('socket.io'),
    student = require('./routes/students');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));
    app.use(express.bodyParser())
    app.use(express.static(path.join(__dirname, 'public')));
});

var server = http.createServer(app);
io = io.listen(server);


io.configure(function () {
    io.set('authorization', function (handshakeData, callback) {
        if (handshakeData.xdomain) {
            callback('Cross-domain connections are not allowed');
        } else {
            callback(null, true);
        }
    });
});

server.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});

app.get('/students', student.findAll);
app.get('/students/:id', student.findById);
app.post('/students', student.addStudent);
app.put('/students/:id', student.updateStudent);
app.delete('/students/:id', student.deleteStudent);

io.sockets.on('connection', function (socket) {

    socket.on('message', function (message) {
        console.log("Got message: " + message);
        ip = socket.handshake.address.address;
        url = message;
        io.sockets.emit('pageview', { 'connections': Object.keys(io.connected).length, 'ip': '***.***.***.' + ip.substring(ip.lastIndexOf('.') + 1), 'url': url, 'xdomain': socket.handshake.xdomain, 'timestamp': new Date()});
    });

    socket.on('disconnect', function () {
        console.log("Socket disconnected");
        io.sockets.emit('pageview', { 'connections': Object.keys(io.connected).length});
    });

});