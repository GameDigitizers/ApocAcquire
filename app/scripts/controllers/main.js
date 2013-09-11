'use strict';

angular.module('ApocAcquireApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'TGM'
    ];

    $scope.alertit = function(thing){
      console.log(thing);
    };
  });
