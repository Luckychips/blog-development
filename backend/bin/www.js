/**
 * Created by todd.kim on 2017-05-26.
 */

var debug = require('debug')('backend');
var app = require('../app');
var server = app.listen(3000);
global.io = require('socket.io')(server);

global.io.on('connection', function (socket) {
    console.log('user connection');

    socket.on('disconnect', function () {
        console.log('user disconnection');
    });
});