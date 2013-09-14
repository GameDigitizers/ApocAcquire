'use strict';

function Player($rootScope, newName, startingCash) {
  this.$rootScope = $rootScope;
  this.name = newName;
  this.cash = startingCash;
  this.stocks = []; //Array of companies and stock amounts [['company1',24],['company2',24]]
  this.tilesInHand = [];

  this.arraysEqual = function(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };
};

Player.prototype.getName = function () {
  return this.name;
};

Player.prototype.getCash = function () {
  return this.cash;
};

Player.prototype.setCash = function (quantity) {
  return this.cash = quantity;
};

Player.prototype.getStocks = function (quantity) {
  var stockNames = [];
  var self = this;

  $(self.stocks).each(function(n) { 
    stockNames.push(self.stocks[n][0]);
  });

  return stockNames;
};

Player.prototype.getNumStocks = function (chain) {
  var stockAmount = null;
  var self = this;

  $(self.stocks).each(function(n) { 
    if ($(this)[0] == chain) {
      stockAmount = $(this)[1];
    }
  });

  return stockAmount;
};

Player.prototype.setNumStocks = function (chain, quantity) {
  var self = this;

  $(self.stocks).each(function(n) { 
    if ($(this)[0] == chain) {
      self.stocks[n][1] = quantity;
    }
  });
};

Player.prototype.addStocks = function (chain, quantity) {
  var stockExists = false;
  var self = this;

  $(self.stocks).each(function(n) {
    if ($(this)[0] == chain) {
      self.stocks[n][1] = $(this)[1] + quantity;
      stockExists = true;
    }
  });

  if (stockExists == false) {
    self.stocks.push([chain,quantity]);
  }
};

Player.prototype.removeStocks = function (chain, quantity) {
  var self = this;

  $(self.stocks).each(function(n) { 
    if ($(this)[0] == chain) {
      self.stocks[n][1] = $(this)[1] - quantity;
      if (self.stocks[n][1] < 1) {
        self.stocks.splice(n,1);
      }
    }
  });
};

Player.prototype.getTilesInHand = function () {
  return this.tilesInHand;
};

Player.prototype.getTileFromHand = function (tile) {
  var self = this;

  $(self.tilesInHand).each(function(n) {
    if (self.arraysEqual($(this),tile)) {
      self.tilesInHand.splice(n, 1);
    }
  });
};

Player.prototype.addTileToHand = function (tile) {
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
