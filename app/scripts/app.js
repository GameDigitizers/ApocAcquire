'use strict';

angular.module('ApocAcquireApp', ['ApocAcquireApp.main', 'ApocAcquireApp.game'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/game', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .otherwise({
        redirectTo: '/game'
      });
  });
