'use strict';

angular.module('ApocAcquireApp.game', ['ApocAcquireApp.services.action', 'ApocAcquireApp.services.board', 'ApocAcquireApp.services.player', 'ApocAcquireApp.services.tile', 'ApocAcquireApp.services.stock', 'ApocAcquireApp.services.state', 'btford.socket-io'])
  .controller('GameCtrl', function ($scope, Board, Player, Action, Tile, Stock, State, socket) {

    socket.on('begin', function(people){
      console.log(people);
      State.beginGame(people.players);
    });

  	function generateArrayOfNumbers (length) {
		  var tempArray = new Array(length);
		  
	    for (var i=0; i<tempArray.length; i++){
        tempArray[i] = i;
	    }
	    return tempArray;
		}

    $scope.selectableTile = function(rowPosition, columnPosition) {
    	var selectable = false;

    	State.playerList[State.localPlayer].tilesInHand.forEach(function(tile) {
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

    $scope.board = Board;

    $scope.myName = ""+Math.floor((Math.random()*100)+1); 
    $scope.$watch('myName', function() {
      socket.emit('name', $scope.myName);
    });


    $scope.testUI = function() {
      var state = State;
      state.beginGame(['BossToss', 'DJ Slippy Cheese', 'Orange', 'TGM']);

      var stock0 = new Stock('Festival', 1);
      State.playerList[State.localPlayer].addStocks([stock0, stock0, stock0]);

      // $scope.players = [];
        // $scope.players[0].addStocks([stock0, stock0, stock0]);
      

      // $scope.player1 = new Player('BossToss', 2500); //"me" current player w/e

      // for (var j=0;j<7;j++) { 
      //  var randomTile = Board.getRandomTile();
      //  $scope.player1.addTileToHand(randomTile.xPos, randomTile.yPos);
      // }
      

      // var tile0 = new Tile(0,1);
      // var tile1 = new Tile(2,1);
      // $scope.player1.addTileToHand(tile0);
      // $scope.player1.addTileToHand(tile1);
      
      // $scope.players.push(new Player(, 2500));
      // $scope.players.push(new Player(, 2000));
      // $scope.players.push(new Player(, 5000000));

      // var stock1 = new Stock('Continental', 200);

      // $scope.players[1].addStocks([stock1, stock0, stock0]);
      
      var action1 = new Action('place-tile', new Tile(0, 1));

      var action2 = new Action('trade-stock', [2,'Festival','Tower']);
    };

    // take this out when we aren't testing
    $scope.testUI();
    
    console.log($scope.localPlayer);
    $scope.localPlayer = State.playerList[State.localPlayer]; //1
    
    var front = State.playerList.slice(0, State.localPlayer);
    var end = State.playerList.slice(State.localPlayer+1);
    $scope.otherPlayers = front.concat(end);

    $scope.cellClass = function (cell) {
      console.log(cell.state);
      if (cell.state == cell.CELL_STATES['played']) {
        return 'played';
      } else if ($scope.selectableTile(cell.row, cell.column)) {
        return 'selected';
      }
    };

    $scope.selectBoardTile = function(row, column){
      console.log(row, column);
      if ($scope.selectableTile(row, column)) {
        console.log('yepped it was clicked');
        State.playerList[State.localPlayer].getTileFromHand(row, column);
      }
    };
  });
