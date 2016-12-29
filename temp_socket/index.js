var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// app.use(express.static(__dirname));

// io.emit('some event', {for: 'everyone'}); // send message to everyone
io.on('connection', function(socket) {
  // socket.broadcast.emit('hi') // send to everyone except certian sockets
  socket.on('textadded', function(msg) {// this is where I can specify which message to send.
    io.emit('textadded', msg); // sends to everyone even the sender
  });
});

http.listen(3000, function() {
  console.log('listening on 3000');
});

module.exports = app;


