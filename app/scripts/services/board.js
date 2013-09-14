'use strict';

angular.module('ApocAcquireApp')
  .service('Board', function Board() {
    // AngularJS will instantiate a singleton by calling 'new' on this function

    var buildBoard = function(width, height) {
    	var tiles = [];

    	for (var a=0;a<width;a++) {
				for (var b=0;b<height;b++) {
					tiles.push({'xPos':b, 'yPos':a});
				}
			}

			return tiles;
    };

    var printStocks = function(companyNames, totalStocks) {
    	var stocks = [];

    	$(companyNames).each(function(n) { 
    		stocks.push({'chain':companyNames[n],'quantity':totalStocks});
    	});

    	return stocks;
    };

    var buildCompanies = function(companyNames) {
    	var companies = [];

    	$(companyNames).each(function(n) { 
    		companies.push({'chain':companyNames[n]});
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

    	$(self.availStocks).each(function(n) { 
    		if (self.availStocks[n].chain == chain) {
    			stockAmount = self.availStocks[n].quantity;
    		}
      });

      return stockAmount;
    };

    this.getExistingChains = function() {
    	var chains = [];
    	var self = this;

    	$(self.existingChains).each(function(n) { 
    		chains.push(self.existingChains[n].chain);
      });

    	return chains;
    };

    this.getTilesInChain = function(chain) {
    	var tilesInChain = [];
    	var self = this;

    	$(self.existingChains).each(function(n) { 
    		if (self.existingChains[n].chain == chain) {
    			tilesInChain = self.existingChains[n].tiles;
    		}
      });

      return tilesInChain;
    };

    this.getChainSize = function(chain) {
    	var chainSize = null;
    	var self = this;

    	$(self.existingChains).each(function(n) { 
    		if (self.existingChains[n].chain == chain) {
    			chainSize = self.existingChains[n].tiles.length;
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
