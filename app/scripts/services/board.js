'use strict';

angular.module('ApocAcquireApp')
  .service('Board', function Board() {
    // AngularJS will instantiate a singleton by calling 'new' on this function

    var buildBoard = function(width, height) {
    	var tiles = [];

    	for (var a=0;a<width;a++) {
				for (var b=0;b<height;b++) {
					tiles.push([a,b]);
				}
			}

			return tiles;
    };

    var printStocks = function(companyNames, totalStocks) {
    	var stocks = [];

    	$(companyNames).each(function(n) { 
    		stocks.push([companyNames[n],totalStocks]);
    	});

    	return stocks;
    };

    var companies = ['company1', 'company2', 'company3'];

    this.availTiles = buildBoard(12,9); //Array of rows and columns i.e. [[0,0],[0,1]]
    this.availStocks = printStocks(companies, 15); //Array of companies and stock amounts [['company1',24],['company2',24]]
    this.availChains = companies; //Array of strings
    this.playedTiles = []; //Array of rows and columns i.e. [[0,0],[0,1]]
    this.existingChains = []; //Array of companies and tiles i.e. [['company1',[[0,1],[0,2]]],['company2'],[[0,0]]]

    this.getNextPlayer = function() {

    };

    this.getAvailTiles = function() {
    	return this.availTiles;
    };

    this.getAvailStock = function(chain) {
    	var stockAmount = null;

    	$(this.availStocks).each(function(n) { 
    		if ($(this)[0] == chain) {
    			stockAmount = $(this)[1];
    		}
      });

      return stockAmount;
    };

    this.getAvailChains = function() {
    	return this.availChains;
    };

    this.getPlayedTiles = function() {
    	return this.playedTiles;
    };

    this.getExistingChains = function() {
    	var chains = [];

    	$(this.existingChains).each(function(n) { 
    		chains.push($(this)[0]);
      });

    	return chains;
    };

    this.getTilesInChain = function(chain) {
    	var tilesInChain = [];

    	$(this.existingChains).each(function(n) { 
    		if ($(this)[0] == chain) {
    			tilesInChain = $(this)[1];
    		}
      });

      return tilesInChain;
    };

    this.getChainSize = function(chain) {
    	var chainSize = null;

    	$(this.existingChains).each(function(n) { 
    		if ($(this)[0] == chain) {
    			chainSize = $(this)[1].length();
    		}
      });

			return chainSize;
    };
  });
