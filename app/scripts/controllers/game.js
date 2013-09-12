'use strict';

angular.module('ApocAcquireApp')
  .controller('GameCtrl', function ($scope, Board) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.tiles = Board.availTiles;
  });
