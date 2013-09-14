'use strict';

function Player($rootScope, newName, startingCash) {
  this.$rootScope = $rootScope;
  this.name = newName;
  this.cash = startingCash;
  this.stocks = []; //Array of companies and stock amounts [{'chain':'company1', 'quantity':24}, ...]
  this.tilesInHand = []; //Array of positions i.e. [{'xPos':0, 'yPos':0}, ...]
};

Player.prototype.setCash = function (quantity) {
  return this.cash = quantity;
};

Player.prototype.getChains = function () {
  var chains = [];
  var self = this;

  $(self.stocks).each(function(n) { 
    chains.push(self.stocks[n].chain);
  });

  return chains;
};

Player.prototype.getNumStocks = function (chain) {
  var stockAmount = null;
  var self = this;

  $(self.stocks).each(function(n) { 
    if (self.stocks[n].chain == chain) {
      stockAmount = self.stocks[n].quantity;
    }
  });

  return stockAmount;
};

Player.prototype.setNumStocks = function (chain, quantity) {
  var self = this;

  $(self.stocks).each(function(n) { 
    if (self.stocks[n].chain == chain) {
      self.stocks[n].quantity = quantity;
    }
  });
};

Player.prototype.addStocks = function (chain, quantity) {
  var stockExists = false;
  var self = this;

  $(self.stocks).each(function(n) {
    if (self.stocks[n].chain == chain) {
      self.stocks[n].quantity = self.stocks[n].quantity + quantity;
      stockExists = true;
    }
  });

  if (stockExists == false) {
    self.stocks.push({'chain':chain, 'quantity':quantity});
  }
};

Player.prototype.removeStocks = function (chain, quantity) {
  var self = this;

  $(self.stocks).each(function(n) { 
    if (self.stocks[n].chain == chain) {
      self.stocks[n].quantity = self.stocks[n].quantity - quantity;
      if (self.stocks[n].quantity < 1) {
        self.stocks.splice(n,1);
      }
    }
  });
};

Player.prototype.getTileFromHand = function (xPos, yPos) {
  var tile = {'xPos':xPos, 'yPos':yPos};
  var self = this;

  $(self.tilesInHand).each(function(n) {
    if (JSON.stringify(self.tilesInHand[n]) == JSON.stringify(tile)) {
      self.tilesInHand.splice(n, 1);
    }
  });
};

Player.prototype.addTileToHand = function (xPos, yPos) {
  var tile = {'xPos':xPos, 'yPos':yPos};
  this.tilesInHand.push(tile);
};

angular.module('ApocAcquireApp')
  .factory('Player', function ($injector) {
     return function(name, cash) { 
      return $injector.instantiate( Player, { 
        newName: name,
        startingCash: cash
      }); 
    };
  });
