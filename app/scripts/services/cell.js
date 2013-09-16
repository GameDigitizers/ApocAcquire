'use strict';

function Cell($rootScope, row, column) {
  this.$rootScope = $rootScope;

  this.column = column;
  this.row = row;
  
  this.state = Cell.prototype.CELL_STATES['unplayed']; //'unplayed', 'played', 
  this.chain = undefined;

  //this.sides; add later
};

Cell.prototype.CELL_STATES = {'unplayed':0, 'played':1, 'unplayable':2};

Cell.prototype.getNeighbors = function () {
  //TODO: redifine this this.sides for future hexagon gameboards
  
  return true;
};

angular.module('ApocAcquireApp.services.cell', [])
  .factory('Cell', function ($injector) {
    return function(row, column) { 
      return $injector.instantiate( Cell, { 
        column: column,
        row: row
      }); 
    };
  });
