'use strict';

angular.module('ApocAcquireApp.controllers.lobby', ['btford.socket-io'])
  .controller('LobbyCtrl', function ($scope, socket) {
    $scope.players = {};
    socket.on('players', function (players){
      $scope.players = players;
    });
  });
