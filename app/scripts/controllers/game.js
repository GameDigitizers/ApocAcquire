'use strict';

angular.module('ApocAcquireApp.game', ['ApocAcquireApp.services.action', 'ApocAcquireApp.services.board', 'ApocAcquireApp.services.player'])
  .controller('GameCtrl', function ($scope, Board, Player, Action) {
    $scope.generateArrayOfNumbers = function(length) {
    	var tempArray = new Array(length);
        tempArray.forEach(function(elem, idx) {
            elem = idx;
        })
    	return tempArray;
    }

    $scope.selectableTile = function(rowPosition, columnPosition, tiles) {
    	var selectable = false;

    	tiles.forEach(function(elem) {
    		if (elem.xPos == rowPosition && $elem.yPos == columnPosition) {
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
    $scope.board = Board;

    $scope.player1 = new Player('BossToss', 2500);

    for (var j=0;j<7;j++) { 
    	var randomTile = Board.getRandomTile();
    	$scope.player1.addTileToHand(randomTile.xPos, randomTile.yPos);
    }

    $scope.player1.addStocks('Festival', 3);
    $scope.player1.addStocks('Continental', 13);
    $scope.player1.addStocks('American', 2);
    $scope.player1.addStocks('Imperial', 2);
    $scope.player1.addStocks('Luxor', 2);
    $scope.player1.addStocks('Tower', 2);
    
    $scope.players = [];
    $scope.players.push(new Player('DJ Slippy Cheese', 2500));
    $scope.players.push(new Player('Orange', 2000));
    $scope.players.push(new Player('TGM', 5000000));

    $scope.players[1].addStocks('Festival', 3);
    $scope.players[1].addStocks('Continental', 13);
    $scope.players[1].addStocks('American', 2);

    // console.log(Board.getRandomTile());
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
      if ($scope.selectableTile(row, column, $scope.player1.tilesInHand)) {
      	console.log('yepped it was clicked');
      	$scope.player1.getTileFromHand(row,column);
      	
      	var randomTile = Board.getRandomTile();
    		$scope.player1.addTileToHand(randomTile.xPos, randomTile.yPos);
      }
    };
  });
