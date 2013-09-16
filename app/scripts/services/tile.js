'use strict';

function Tile($rootScope, row, column) {
  this.$rootScope = $rootScope;

  this.column = column;
  this.row = row;
  
  this.state = Tile.prototype.TILE_STATES['unplayed']; //'unplayed', 'played', 
  this.chain = undefined;

  //this.sides; add later
};

Tile.prototype.TILE_STATES = {'unplayed':0, 'played':1, 'unplayable':2};

Tile.prototype.getNeighbors = function () {
  //TODO: redifine this this.sides for future hexagon gameboards
  
  return true;
};

angular.module('ApocAcquireApp.services.tile', [])
  .factory('Tile', function ($injector) {
    return function(row, column) { 
      return $injector.instantiate( Tile, { 
        column: column,
        row: row
      }); 
    };
  });
