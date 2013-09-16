'use strict';

angular.module('ApocAcquireApp.services.board', ['ApocAcquireApp.services.tile'])
  .service('Board', function Board(Tile) {
    // AngularJS will instantiate a singleton by calling 'new' on this function

    this.buildTileSlots = function (width, height) {
      this.width = width;
      this.height = height;

      var rows = [];
      for (var b=0; b<height; b++) {
        var row = [];
        for (var a=0; a<width; a++) {
          row.push(new Tile(b, a));
        }
        rows.push(row);
      }

      return rows;
    };

    this.buildTiles = function (width, height) {
      var tiles = [];
      for (var b = 0; b < height; b++) {
        for (var a = 0; a < width; a++) {
          tiles.push(new Tile(b, a));
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

    // this.init = function(boardWidth, boardHeight, companyNames, stockAmounts) {
    this.init = function(boardWidth, boardHeight){//, companyNames, stockAmounts) {
      this.availTiles = this.buildTiles(boardWidth,boardHeight); //Array of positions i.e. [{'xPos':0, 'yPos':0}, ...]
      this.gameBoard = this.buildTileSlots(boardWidth,boardHeight); //Array of positions i.e. [{'xPos':0, 'yPos':0}, ...]
      // this.availStocks = printStocks(companyNames, stockAmounts); //Array of companies and stock amounts [{'chain':'company1', 'quantity':24}, ...]
      // this.availChains = buildCompanies(companyNames); //Array of strings [{'chain':'company1'}, ...]
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
    	var index = Math.floor((Math.random()*this.availTiles.length));
    	var tile = this.availTiles[index];
    	
    	this.availTiles.splice(index, 1);

    	return tile;
    };

    this.getNeighbors = function (tile) {
        var neighbors = [];
        if (tile.column == 0) {
            neighbors.push({row: tile.row, column: 1});
        } else if (tile.column == this.width-1) {
            neighbors.push({row: tile.row, column: tile.column-1});
        } else {
            neighbors.push({row: tile.row, column: tile.column-1}, {row: tile.row, column: tile.column+1});
        }

        if (tile.row == 0) {
            neighbors.push({row: 1, column: tile.column});            
        } else if (tile.row == this.height-1) {
            neighbors.push({row: tile.row-1, column: tile.column});
        } else {
            neighbors.push({row: tile.row-1, column: tile.column}, {row: tile.row+1, column: tile.column});
        }

        return neighbors;
    };
  });
