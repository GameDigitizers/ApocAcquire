'use strict';

angular.module('ApocAcquireApp')
  .factory('player', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var name = "Player 1";
    var cash = 1000;
    var stocks = []; //Array of companies and stock amounts [['company1',24],['company2',24]]
    var tilesInHand = []; //Array of rows and columns i.e. [[0,0],[0,1]]

    function arraysEqual(a, b) {
      if (a === b) return true;
      if (a == null || b == null) return false;
      if (a.length != b.length) return false;

      // If you don't care about the order of the elements inside
      // the array, you should sort both arrays here.

      for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },

      init: function(newName, startingCash) {
        name = newName;
        cash = startingCash;
      },

      getName: function () {
        return name;
      },

      getCash: function() {
        return cash;
      },

      setCash: function(quantity) {
        cash = quantity;
      },

      getStocks: function() {
        var stockNames = [];

        $(stocks).each(function(n) { 
          stockNames.push(stocks[n][0]);
        });

        return stockNames;
      },

      getNumStocks: function(chain) {
        var stockAmount = null;

        $(stocks).each(function(n) { 
          if ($(this)[0] == chain) {
            stockAmount = $(this)[1];
          }
        });

        return stockAmount; 
      },

      setNumStocks: function(chain, quantity) {
        $(stocks).each(function(n) { 
          if ($(this)[0] == chain) {
            stocks[n][1] = quantity;
          }
        });
      },

      addStocks: function(chain, quantity) {
        var stockExists = false;

        $(stocks).each(function(n) {
          if ($(this)[0] == chain) {
            stocks[n][1] = $(this)[1] + quantity;
            stockExists = true;
          }
        });

        if (stockExists == false) {
          stocks.push([chain,quantity]);
        }
      },

      removeStocks: function(chain, quantity) {
        $(stocks).each(function(n) { 
          if ($(this)[0] == chain) {
            stocks[n][1] = $(this)[1] - quantity;
          }
        });
      },

      getTilesInHand: function() {
        return tilesInHand;
      },

      getTileFromHand: function(tile) {
        $(tilesInHand).each(function(n) {
          if (arraysEqual($(this),tile)) {
            tilesInHand.splice(n, 1);
          }
        });
      },

      addTileToHand: function(tile) {
        tilesInHand.push(tile);
      }
    };
  });
