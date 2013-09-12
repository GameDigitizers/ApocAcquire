'use strict';

angular.module('ApocAcquireApp')
  .service('Board', function Board() {
    // AngularJS will instantiate a singleton by calling 'new' on this function

    var buildBoard = function(width, height) {
    	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    	var tiles = [];

    	for (var a=0;a<width;a++) {
    		var internalTiles = [];

				for (var b=0;b<height;b++) {
					internalTiles.push(a.toString() + alphabet.charAt(b));
				}
				tiles.push(internalTiles);
			}

			return tiles
    };

    this.availTiles = buildBoard(12,9);
    this.availStocks = [];
    this.availChains = [];
    this.playedTiles = [];
    this.existingChains = [];

    this.getNextPlayer = function() {

    };
    this.getAvailTiles = function() {

    };
    this.getAvailStock = function(chain) {

    };
    this.getAvailChains = function() {

    };
    this.getPlayedTiles = function() {

    };
    this.getExistingChains = function() {

    };
    this.getTilesInChain = function(chain) {

    };
    this.getChainSize = function(chain) {

    };
  });
