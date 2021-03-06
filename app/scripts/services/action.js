'use strict';

function Action($rootScope, requestedVerb, requestedArgs) {
  this.VALID_VERBS = ['place-tile', 'buy-stock', 'sell-stock', 'trade-stock', 'draw-tile', 'hold-stock'];
  this.$rootScope = $rootScope;
  this.verbValid = false;
  this.argsValid = false;
  this.verb;
  this.args;

  if (this.VALID_VERBS.indexOf(requestedVerb) >= 0) {
    this.verb = requestedVerb;
    this.verbValid = true;

    if (this.verb == 'place-tile') {
      if (requestedArgs.length == 1) {
        if (requestedArgs[0].length == 2) {
          this.args = requestedArgs;
          this.argsValid = true;
        }
      }
    } else if (this.verb == 'buy-stock') {
      if (requestedArgs.length == 2) {
        if (typeof(requestedArgs[0]) == 'number' && typeof(requestedArgs[1]) == 'string') {
          this.args = requestedArgs;
          this.argsValid = true;
        }
      }
    } else if (this.verb == 'sell-stock') {
      if (requestedArgs.length == 2) {
        if (typeof(requestedArgs[0]) == 'number' && typeof(requestedArgs[1]) == 'string') {
          this.args = requestedArgs;
          this.argsValid = true;
        }
      }
    } else if (this.verb == 'trade-stock') {
      if (requestedArgs.length == 3) {
        if (typeof(requestedArgs[0]) == 'number' && typeof(requestedArgs[1]) == 'string' && typeof(requestedArgs[2]) == 'string') {
          this.args = requestedArgs;
          this.argsValid = true;
        }
      }
    } else if (this.verb == 'draw-tile') {
      if (requestedArgs.length == 0) {
        this.args = requestedArgs;
        this.argsValid = true;
      }
    } else if (this.verb == 'hold-stock') {
      if (requestedArgs.length == 2) {
        if (typeof(requestedArgs[0]) == 'number' && typeof(requestedArgs[1]) == 'string') {
          this.args = requestedArgs;
          this.argsValid = true;
        }
      }
    }
  }
};

Action.prototype.isValid = function () {
  var valid = false;

  if (this.verbValid && this.argsValid) {
    valid = true;
  }

  return valid;
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
