'use strict';

angular.module('ApocAcquireApp')
  .controller('GameCtrl', function ($scope, Board) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.generateArrayOfNumbers = function(length) {
    	var tempArray = [];

    	for (var a=0;a<length;a++) {
    		tempArray.push(a);
    	}

    	return tempArray;
    }

    $scope.boardWidth = 13;
    $scope.boardHeight = 9;

    $scope.rows = $scope.generateArrayOfNumbers($scope.boardHeight);
    $scope.columns = $scope.generateArrayOfNumbers($scope.boardWidth);

    $scope.companyNames = ['Festival','American','Imperial','Luxor','Worldwide','Tower','Continental'];
    $scope.startingStockCount = 25;

    Board.init($scope.boardWidth, $scope.boardHeight, $scope.companyNames, $scope.startingStockCount);

    $scope.tiles = Board.availTiles;
    $scope.stocks = Board.availStocks;

    $scope.selectBoardTile = function(row, column){
      console.log(row, column);
    };
  });
