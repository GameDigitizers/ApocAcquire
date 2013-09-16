'use strict';

angular.module('ApocAcquireApp.services.state', ['ApocAcquireApp.services.board', 'ApocAcquireApp.services.player', 'ApocAcquireApp.services.action'])
  .service('State', function State(Board, Player, Action) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.localPlayer = 0;
    this.currentPlayer = 0;

  	this.numberOfPlayers = 0;
  	this.playerList = [];

  	this.clientPlayer = '';

    this.STARTING_CASH = 2500;
    
    this.boardWidth = 13;
    this.boardHeight = 9;

    this.command = function (verb, args) {
      var action = new Action(verb, args);

      // TODO save to history
      action.act();
    };

    this.beginGame = function (players) {

      Board.init(this.boardWidth, this.boardHeight);
      
      console.log(players);
      players.forEach(function (playerName) {
        var newPlayer = new Player(playerName, this.STARTING_CASH);
        this.playerList.push(newPlayer);

        var tile = Board.getRandomTile();

        newPlayer.addTileToHand(tile);
        this.command('place_tile', tile);

        console.log(newPlayer);
        console.log(tile);
      }, this);

    }
  }
);
