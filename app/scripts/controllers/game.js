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

    	$(tiles).each(function(n) {
    		if (tiles[n].xPos == rowPosition && tiles[n].yPos == columnPosition) {
    			selectable = true;
    		}
    	});

    	return selectable;
    }

    $scope.dashedClass = function(name) {
    	return name.replace(/\s/g , "-")
    }

    $scope.sortableArray = function(doubleArray, names) {
    	var sortable = [];

    	$(doubleArray).each(function(i) {
    		var myObject = {};
    		for (var j=0;j<$(this).length;j++) { 
					myObject[names[j]] = doubleArray[i][j];
				}
				sortable.push(myObject);
    	});

    	return sortable;
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

    $scope.player1.addTileToHand(0, 3);
    $scope.player1.addTileToHand(2, 7);

    $scope.player1.addStocks('Festival', 3);
    $scope.player1.addStocks('Continental', 13);
    $scope.player1.addStocks('American', 2);
    $scope.player1.addStocks('Imperial', 2);
    $scope.player1.addStocks('Luxor', 2);
    $scope.player1.addStocks('Tower', 2);

    console.log($scope.player1.stocks);
    
    $scope.players = [];
    $scope.players.push(new Player('DJ Slippy Cheese', 2500));
    $scope.players.push(new Player('Orange', 2000));
    $scope.players.push(new Player('TGM', 5000000));

    $scope.players[1].addStocks('Festival', 3);
    $scope.players[1].addStocks('Continental', 13);
    $scope.players[1].addStocks('American', 2);

    // console.log(Board.getChainSize('company1'));
		// console.log(myObject);

		$scope.test = [{name:'testest', quantity:25},{name:'tester', quantity:12},{name:'test', quantity:1}]
		// console.log($scope.test);
		 
		$scope.test2 = $scope.sortableArray( $scope.players[1].stocks , ['name','quantity']);

		// console.log($scope.test2);

    $scope.action1 = new Action('place-tile', [[0,1]]);
    if ($scope.action1.isValid()) {
     	// console.log('Success');
    }

    $scope.action2 = new Action('trade-stock', [2,'Festival','Tower']);
    if ($scope.action2.isValid()) {
     	// console.log('Double Success');
    }

    $scope.selectBoardTile = function(row, column){
      console.log(row, column);
    };
  });
