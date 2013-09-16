'use strict';

angular.module('ApocAcquireApp.game', ['ApocAcquireApp.services.action', 'ApocAcquireApp.services.board', 'ApocAcquireApp.services.player', 'ApocAcquireApp.services.tile', 'ApocAcquireApp.services.stock'])
  .controller('GameCtrl', function ($scope, Board, Player, Action, Tile, Stock) {

  	function generateArrayOfNumbers (length) {
		  var tempArray = new Array(length);
		  
	    for (var i=0; i<tempArray.length; i++){
        tempArray[i] = i;
	    }
	    return tempArray;
		}

    $scope.selectableTile = function(rowPosition, columnPosition, tiles) {
    	var selectable = false;

    	tiles.forEach(function(tile) {
    		if (tile.row == rowPosition && tile.column == columnPosition) {
    			selectable = true;
    		}
    	});

    	return selectable;
    };

    $scope.dashedClass = function(name) {
    	return name.replace(/\s/g , "-");
    };

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
    };

    var boardWidth = 13;
    var boardHeight = 9;
    $scope.board = Board;
    $scope.board.init(boardWidth, boardHeight);

    $scope.testUI = function() {
      $scope.player1 = new Player('BossToss', 2500); //"me" current player w/e

      // for (var j=0;j<7;j++) { 
      // 	var randomTile = Board.getRandomTile();
      // 	$scope.player1.addTileToHand(randomTile.xPos, randomTile.yPos);
      // }
      
      var stock0 = new Stock('Festival', 200);
      var stock0s = [stock0, stock0, stock0];
      $scope.player1.addStocks(stock0s);

      var tile0 = new Tile(0,1);
      var tile1 = new Tile(2,1);
      $scope.player1.addTileToHand(tile0);
      $scope.player1.addTileToHand(tile1);
      
      $scope.players = [];
      $scope.players.push(new Player('DJ Slippy Cheese', 2500));
      $scope.players.push(new Player('Orange', 2000));
      $scope.players.push(new Player('TGM', 5000000));

      var stock1 = new Stock('Continental', 200);

      $scope.players[1].addStocks([stock1, stock0, stock0]);
      
      var action1 = new Action('place-tile', tile0);

      var action2 = new Action('trade-stock', [2,'Festival','Tower']);
    };

    // take this out when we aren't testing
    $scope.testUI();

    $scope.selectBoardTile = function(row, column){
      console.log(row, column);
      if ($scope.selectableTile(row, column, $scope.player1.tilesInHand)) {
      	console.log('yepped it was clicked');
      	$scope.player1.getTileFromHand(row, column);
      }
    };
  });
