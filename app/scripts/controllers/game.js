'use strict';

angular.module('ApocAcquireApp')
  .controller('GameCtrl', function ($scope, Board, Player, action) {
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

    $scope.selectableTile = function(rowPosition, columnPosition, tiles) {
    	var selectable = false;

    	$(tiles).each(function() {
    		if ($(this)[0] == rowPosition && $(this)[1] == columnPosition) {
    			selectable = true;
    		}
    	});

    	return selectable;
    }

    $scope.dashedClass = function(name) {
    	return name.replace(/\s/g , "-")
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

    $scope.player1 = player;
    $scope.player1.init('BossToss', 2500);

    $scope.selectBoardTile = function(row, column){
      console.log(row, column);
    };
  });
