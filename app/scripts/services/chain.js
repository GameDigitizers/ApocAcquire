'use strict';

function Chain($rootScope, name, totalStocks, tier) {
  this.$rootScope = $rootScope;

  this.name = name;
  this.totalStocks = totalStocks;
  this.tier = tier;

  this.tiles = [];

  this.calculateStockValue = function () {
    if (this.tiles.length >= Chain.prototype.rules[0].length)
      return Chain.prototype.rules[this.tier][Chain.prototype.rules[0].length];
    else
      return Chain.prototype.rules[this.tier][this.tiles.length];
  };
};

// A valid rules structure must have at lest one rule.
Chain.prototype.rules = [
  [0, 0, 200, 300, 400, 500, 600, 600, 600, 600, 600, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 900, 900, 900, 900, 900, 900, 900, 900, 900, 900, 1000],
  [0, 0, 300, 400, 500, 600, 700, 700, 700, 700, 700, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 900, 900, 900, 900, 900, 900, 900, 900, 900, 900, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1100],
  [0, 0, 400, 500, 600, 700, 800, 800, 800, 800, 800, 900, 900, 900, 900, 900, 900, 900, 900, 900, 900, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1200]
];

Chain.prototype.issueStock = function (player, quantity) {

  return true;
};

Chain.prototype.buybackStock = function(player, quantity) {

  return true;
};

Chain.prototype.addTile = function (tile) {

  return true;
};

angular.module('ApocAcquireApp.services.chain', [])
  .factory('Chain', function ($injector) {
    return function(name, totalStocks, tier) { 
      return $injector.instantiate( Chain, { 
        name: name,
        totalStocks: totalStocks,
        tier: tier
      });
    };
  });
