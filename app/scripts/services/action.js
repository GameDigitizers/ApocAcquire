'use strict';

function Action($rootScope, requestedVerb, requestedArgs) {
  this.$rootScope = $rootScope;
  this.verb = requestedVerb;
  this.args = requestedArgs;
  this.act = function(){
    Action.prototype.VERB_ACTIONS[this.verb](this.args);
  }
}

Action.prototype.VALID_VERBS = function(){
  return Object.keys(Action.prototype.VERB_ACTIONS);
}

Action.prototype.VERB_ACTIONS = {
  place_tile: function (args) { 
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

angular.module('ApocAcquireApp.services.action', [])
  .factory('Action', function ($injector) {
     return function(verb, args) { 
      return $injector.instantiate( Action, { 
        requestedVerb: verb,
        requestedArgs: args
      }); 
    };
  });
