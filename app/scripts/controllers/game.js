'use strict';

angular.module('ApocAcquireApp')
  .controller('GameCtrl', function ($scope, Board, Player, Action) {
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

    $scope.player1 = new Player('BossToss', 2500);

    $scope.player1.addTileToHand([0,2]);
    $scope.player1.addTileToHand([2,5]);

    $scope.player1.addStocks('Festival',3);
    $scope.player1.addStocks('Continental',13);
    $scope.player1.addStocks('American',2);
    $scope.player1.addStocks('Imperial',2);
    $scope.player1.addStocks('Luxor',2);
    
    $scope.players = [];
    $scope.players.push(new Player('DJ Slippy Cheese', 2500));
    $scope.players.push(new Player('Orange', 2000));
    $scope.players.push(new Player('TGM', 5000000));

    $scope.action1 = new Action('place-tile', [[0,1]]);
    if ($scope.action1.isValid()) {
     	console.log('Success');
    }

    $scope.action2 = new Action('trade-stock', [2,'Festival','Tower']);
    if ($scope.action2.isValid()) {
     	console.log('Double Success');
    }

    $scope.selectBoardTile = function(row, column){
      console.log(row, column);
    };
  });
