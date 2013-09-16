'use strict';

function Player($rootScope, newName, startingCash) {
  this.$rootScope = $rootScope;
  this.name = newName;
  this.cash = startingCash;
  this.stocks = {}; //Array of companies and stock amounts {'chain': [ stock objects ], ...}
  this.tilesInHand = []; //Array of positions i.e. [{'xPos':0, 'yPos':0}, ...]
};

Player.prototype.getNumStocks = function (chain) {
  if (!(chain in this.stocks)) {
    return 0;
  }
  return this.stocks[chain].length;
};

Player.prototype.addStocks = function (stocks) {
  stocks.forEach(function(stock) {
    if (!(stock.name in this.stocks)) {
      this.stocks[stock.name] = [];
    }

    this.stocks[stock.name].push(stock);
  }, this);
};

Player.prototype.removeStocks = function (chain, quantity) {
  this.stocks[chain].splice(0, quantity);

  if (this.stocks[chain].length < 1) {
    delete this.stocks[chain];
  }
};

Player.prototype.getTileFromHand = function (row, column) {
  for (var i=0; i<this.tilesInHand.length; i++) {
    if (this.tilesInHand[i].column == column && this.tilesInHand[i].row == row) {
      return this.tilesInHand.splice(i, 1)[0];
    }
  }
};

Player.prototype.addTileToHand = function (tile) {
  this.tilesInHand.push(tile);
};

angular.module('ApocAcquireApp.services.player', [])
  .factory('Player', function ($injector) {
    return function(name, cash) { 
      return $injector.instantiate( Player, { 
        newName: name,
        startingCash: cash
      }); 
    };
  });
