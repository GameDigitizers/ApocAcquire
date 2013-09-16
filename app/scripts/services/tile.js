'use strict';

function Tile($rootScope, row, column) {
  this.$rootScope = $rootScope;

  this.column = column;
  this.row = row;
};

Tile.prototype.betterThan = function (otherTile) {
  // This tile is better than other tile if it's in a righter column or a higher row in the same column.
  return this.column < otherTile.column || (this.column == otherTile.column && this.row < otherTile.row);
}

angular.module('ApocAcquireApp.services.tile', [])
  .factory('Tile', function ($injector) {
    return function(row, column) { 
      return $injector.instantiate( Tile, { 
        column: column,
        row: row
      }); 
    };
  });
