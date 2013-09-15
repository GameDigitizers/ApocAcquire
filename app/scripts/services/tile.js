'use strict';

function Tile($rootScope, column, row) {
  this.$rootScope = $rootScope;

  this.TILE_STATES = {'unplayed':0, 'played':1, 'unplayable':2} 

  this.column = column;
  this.row = row;
  
  this.state = this.TILE_STATES['unplayed']; //'unplayed', 'played', 
  this.chain = undefined;

  //this.sides; add later
};

Tile.prototype.getNeighbors = function () {
  //TODO: redifine this this.sides for future hexagon gameboards
  
  return true;
};

angular.module('ApocAcquireApp.services.tile', [])
  .factory('Tile', function ($injector) {
    return function(column, row) { 
      return $injector.instantiate( Tile, { 
        column: column,
        row: row
      }); 
    };
  });
