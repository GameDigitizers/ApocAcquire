'use strict';

function Action($rootScope, requestedVerb, requestedArgs, board) {
  this.$rootScope = $rootScope;
  this.verb = requestedVerb;
  this.args = requestedArgs;
  this.board = board;

  this.act = function(){
    Action.prototype.VERB_ACTIONS[this.verb].call(this, this.args);
  }
}

Action.prototype.VALID_VERBS = function(){
  return Object.keys(Action.prototype.VERB_ACTIONS);
}

Action.prototype.VERB_ACTIONS = {
  place_tile: function (tile) {
    var cell = this.board.getCell(tile);
    cell.state = Cell.prototype.CELL_STATES['played'];

    this.board.playedTiles.push(tile);
  }, 
  buy_stock: function (args) { 
  }, 
  sell_stock: function (args) { 
  }, 
  trade_stock: function (args) { 
  }, 
  draw_tile: function (args) { 
  },
  hold_stock: function (args) { 
  }
};

angular.module('ApocAcquireApp.services.action', ['ApocAcquireApp.services.tile', 'ApocAcquireApp.services.board'])
  .factory('Action', function ($injector, Tile, Board) {
     return function(verb, args) { 
      return $injector.instantiate( Action, { 
        requestedVerb: verb,
        requestedArgs: args,
        board: Board
      }); 
    };
  });
