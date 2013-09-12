'use strict';

angular.module('ApocAcquireApp')
  .service('Board', function Board() {
    // AngularJS will instantiate a singleton by calling 'new' on this function
    this.availTiles = [];
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
