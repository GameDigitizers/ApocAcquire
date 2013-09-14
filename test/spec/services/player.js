'use strict';

describe('Service: player', function () {

  // load the service's module
  beforeEach(module('ApocAcquireApp.services.player'));

  // instantiate service
  var player;
  var pName = 'playername';
  beforeEach(inject(function (Player) {
    player = new Player(pName, 0);
  }));

  it('should have name set from init', function () {
    expect(player.name).toBe(pName);
  });

});
