'use strict';

angular.module('ApocAcquireApp')
  .service('State', function State() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.currentPlayer = 0;
	this.numberOfPlayers = 0;
	this.playerList = [];

	this.clientPlayer = '';
  });
