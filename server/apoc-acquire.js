var http = require('http');
var fs = require('fs');
var connect = require('connect');

var server = http.createServer(
connect()
.use(connect.static('app'))
.use(connect.directory('app'))
);

var io = require('socket.io').listen(server);

server.listen(2013);