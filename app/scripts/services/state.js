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

    this.placeTile = function (row, column) {
      var player = this.playerList[this.localPlayer];

      var tile = player.getTileFromHand(row, column);
      this.command('place_tile', tile);

      if (Board.hasTiles()) {
        player.addTileToHand(Board.getRandomTile()); // TODO needs to be in terms of Actions
      }
    }

    this.command = function (verb, args, player) {
      var action = new Action(verb, args);

      if (arguments.length == 2) {
        player = this.playerList[this.currentPlayer];
      }

      // TODO save to history
      action.act();
    };

    this.beginGame = function (players) {
        Board.init(this.boardWidth, this.boardHeight);
        
        var starting = {player: null, tile: null};

        players.forEach(function (playerName) {
          var newPlayer = new Player(playerName, this.STARTING_CASH);
          this.playerList.push(newPlayer);

          var tile = Board.getRandomTile();

          newPlayer.addTileToHand(tile);
          this.command('place_tile', tile);
          console.log(newPlayer.name + " placed " + tile.column + ", " + tile.row);

          if (!starting.tile || !starting.tile.betterThan(tile)) {
            starting.tile = tile;
            starting.player = newPlayer;
          }

        }, this);

        this.playerList.forEach(function (player) {
          for (var i = 0; i < 6; i++) {
            player.addTileToHand(Board.getRandomTile()); //TODO this needs to be in terms of Actions
          }
        }, this);

        console.log(starting.player.name + " goes first");
    }
  }
);
