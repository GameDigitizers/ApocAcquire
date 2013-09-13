'use strict';

angular.module('ApocAcquireApp')
  .factory('action', function () {
    // Service logic

    var verb; //Acceptable verbs are place-tile, buy-stock, sell-stock, trade-stock, draw-tile, hold-stock
    var args = [];

    // Public API here
    return {
      setVerb: function(requestedVerb) {
        var valid = false;

        if (requestedVerb == 'place-tile' || requestedVerb == 'buy-stock' || requestedVerb == 'sell-stock' || requestedVerb == 'trade-stock' || requestedVerb == 'draw-tile' || requestedVerb == 'hold-stock') {
          verb = requestedVerb;
          valid = true;
        }

        return valid;
      },

      setArgs: function(requestedArgs) {
        var valid = false;

        if (verb == 'place-tile') {
          if (requestedArgs.length == 1) {
            if (requestedArgs[0].length == 2) {
              args = requestedArgs;
              valid = true;
            }
          }
        } else if (verb == 'buy-stock') {
          if (requestedArgs.length == 2) {
            if (typeof(requestedArgs[0]) == 'number' && typeof(requestedArgs[1]) == 'string') {
              args = requestedArgs;
              valid = true;
            }
          }
        } else if (verb == 'sell-stock') {
          if (requestedArgs.length == 2) {
            if (typeof(requestedArgs[0]) == 'number' && typeof(requestedArgs[1]) == 'string') {
              args = requestedArgs;
              valid = true;
            }
          }
        } else if (verb == 'trade-stock') {
          if (requestedArgs.length == 3) {
            if (typeof(requestedArgs[0]) == 'number' && typeof(requestedArgs[1]) == 'string' && typeof(requestedArgs[2]) == 'string') {
              args = requestedArgs;
              valid = true;
            }
          }
        } else if (verb == 'draw-tile') {
          if (requestedArgs.length == 0) {
            args = requestedArgs;
            valid = true;
          }
        } else if (verb == 'hold-stock') {
          if (requestedArgs.length == 2) {
            if (typeof(requestedArgs[0]) == 'number' && typeof(requestedArgs[1]) == 'string') {
              args = requestedArgs;
              valid = true;
            }
          }
        }

        return valid;
      },

      getFullAction: function() {
        var action = verb;

        $(args).each(function(n) {
          if (verb == 'place-tile') {
            action = action + '.[' + $(this)[0] + ',' + $(this)[1] + ']';
          } else {
            action = action + '.' + args[n];
          }
        });

        return action;
      }
    };
  });
