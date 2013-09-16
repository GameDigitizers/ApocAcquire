var http = require('http');
var fs = require('fs');
var connect = require('connect');

var server = http.createServer(
connect()
.use(connect.static('app'))
.use(connect.directory('app'))
);

Object.size = function(obj) {
  var size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

var io = require('socket.io').listen(server);

server.listen(2013);

var players = {};

io.sockets.on('connection', function (socket) {
  players[socket.id] = {};
  io.sockets.emit('players', players);

  if (Object.size(players) == 4) {
    var names = [];
    var playerSockets = Object.getOwnPropertyNames(players);
    playerSockets.forEach(function(socketId){
      names.push(players[socketId].name);
    })
    io.sockets.emit('begin', {players: names});
  }

  socket.on('init', function(name) {
    players[socket.id].name = name;
  });

  socket.on('name', function(name){
    console.log('got name from client:');
    console.log(name);
    players[socket.id].name = name;
  });
  
  socket.on('disconnect', function() {
    delete players[socket.id];
    io.sockets.emit('players', players);
  });
});
// io.sockets.on('connection', function (socket) {
//   clients[socket.id] = {}
//   clients[socket.id].color = colors[count++ % 4];
//   socket.emit('msg', {messagetype: 'color', color:clients[socket.id].color});
//   if (clients.length > 1) {
//     socket.emit('msg', {messagetype: 'puzzleId', puzzleId:currentPuzzle});
//   }

//   socket.on('disconnect', function () {
//     socket.broadcast.emit('msg', {messagetype: 'blur', id: clients[socket.id].position})
//     delete clients[socket.id];
//   });
  
//   socket.on('msg', function (data) {
//     if (data.messagetype == 'focus') {
//       clients[socket.id].position = data.id;
//     }
//     if (data.messagetype == 'focus' || data.messagetype == 'selectcol' || data.messagetype == 'selectrow') {
//       data.color = clients[socket.id].color;
//     }
//     if (data.messagetype == 'puzzleId' && currentPuzzle < 0) {
//       currentPuzzle = data.puzzleId;
//     }
//     socket.broadcast.emit('msg', data);
//   });
// });