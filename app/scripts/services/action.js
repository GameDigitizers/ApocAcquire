'use strict';

function Action($rootScope, requestedVerb, requestedArgs, Board) {
  this.$rootScope = $rootScope;
  this.verb = requestedVerb;
  this.args = requestedArgs;
  this.Board = Board;
  var self = this;
  this.act = function(){
    Action.prototype.VERB_ACTIONS[this.verb](self, self.args);
  }
}

Action.prototype.VALID_VERBS = function(){
  return Object.keys(Action.prototype.VERB_ACTIONS);
}

Action.prototype.VERB_ACTIONS = {
  place_tile: function (self, tile) {
    var cell = self.Board.getCell(tile);
    cell.state = Cell.prototype.CELL_STATES['played'];

    self.Board.playedTiles.push(tile);
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
        Board: Board
      }); 
    };
  });
