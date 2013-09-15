'use strict';

function Stock($rootScope, name, value) {
  this.$rootScope = $rootScope;

  this.name = name;
};

Stock.prototype.value = 0;
Stock.prototype.COMPANIES = ['Festival','American','Imperial','Luxor','Worldwide','Tower','Continental'];

Stock.prototype.getNeighbors = function () {

  return true;
};

angular.module('ApocAcquireApp.services.stock', [])
  .factory('Stock', function ($injector) {
    return function(name, value) { 
      return $injector.instantiate( Stock, { 
        name: name,
        value: value
      }); 
    };
  });
