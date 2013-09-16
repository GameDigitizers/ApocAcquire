'use strict';

angular.module('ApocAcquireApp.services.state', ['ApocAcquireApp.services.board', 'ApocAcquireApp.services.player'])
  .service('State', function State(Board, Player) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.currentPlayer = 0;
  	this.numberOfPlayers = 0;
  	this.playerList = [];

  	this.clientPlayer = '';

    this.STARTING_CASH = 2500;
    
    this.boardWidth = 13;
    this.boardHeight = 9;

    this.beginGame = function (players) {
      Board.init(this.boardWidth, this.boardHeight);
      
      console.log(players);
      players.forEach(function (playerName) {
        var newPlayer = new Player(playerName, this.STARTING_CASH);
        this.playerList.push(newPlayer);

        var tile = Board.getRandomTile();
        newPlayer.addTileToHand(tile);

        console.log(newPlayer);
        console.log(tile);
      }, this);

    }
  }
);
