'use strict';

angular.module('ApocAcquireApp.services.board', [])
  .service('Board', function Board() {
    // AngularJS will instantiate a singleton by calling 'new' on this function

    var buildBoard = function(width, height) {
    	var tiles = [];

    	for (var a=0; a<width; a++) {
			for (var b=0; b<height; b++) {
				tiles.push({'xPos':a, 'yPos':b});
			}
		}

		return tiles;
    };

    var printStocks = function(companyNames, totalStocks) {
    	var stocks = [];

    	companyNames.forEach(function(companyName) { 
    		stocks.push({'chain':companyName,'quantity':totalStocks});
        });
    	return stocks;
    };

    var buildCompanies = function(companyNames) {
    	var companies = [];

    	companyNames.forEach(function(company) { 
    		companies.push({'chain':company});
    	});

    	return companies;
    };

    this.init = function(boardWidth, boardHeight, companyNames, stockAmounts) {
    	this.availTiles = buildBoard(boardWidth,boardHeight); //Array of positions i.e. [{'xPos':0, 'yPos':0}, ...]
    	this.availStocks = printStocks(companyNames, stockAmounts); //Array of companies and stock amounts [{'chain':'company1', 'quantity':24}, ...]
    	this.availChains = buildCompanies(companyNames); //Array of strings [{'chain':'company1'}, ...]
    	this.playedTiles = []; //Array of positions i.e. [{'xPos':0, 'yPos':0}, ...]
    	this.existingChains = []; //Array of companies and tiles i.e. [{'chain':'company1', 'tiles':[{'xPos':0, 'yPos':0},{'xPos':0, 'yPos':1}]}, ...]
    }

    this.getNextPlayer = function() {

    };

    this.getAvailStock = function(chain) {
    	var stockAmount = null;
    	var self = this;

    	self.availStocks.forEach(function(stock) { 
    		if (stock.chain == chain) {
    			stockAmount = stock.quantity;
    		}
      });

      return stockAmount;
    };

    this.getExistingChains = function() {
    	var chains = [];
    	var self = this;

    	self.existingChains.forEach(function(chainElem) { 
    		chains.push(chainElem.chain);
      });

    	return chains;
    };

    this.getTilesInChain = function(chain) {
    	var self = this;

    	self.existingChains.forEach(function(chainElem) { 
    		if (chainElem.chain == chain) {
    			return chainElem.tiles;
    		}
      });
      return [];
    };

    this.getChainSize = function(chain) {
    	var chainSize = null;
    	var self = this;

    	self.existingChains.forEach(function(chainElem) { 
    		if (chainElem.chain == chain) {
    			return chainElem.tiles.length;
    		}
      });

			return chainSize;
    };

    this.getRandomTile = function() {
    	var n = Math.floor((Math.random()*this.availTiles.length));
    	var tile = this.availTiles[n];
    	
    	this.availTiles.splice(n, 1);

    	return tile;
    };
  });
