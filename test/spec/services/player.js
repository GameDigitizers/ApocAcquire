'use strict';

describe('Service: player', function () {

  // load the service's module
  beforeEach(module('ApocAcquireApp.services.player'));
  beforeEach(module('ApocAcquireApp.services.tile'));

  // instantiate service
  var player;
  var pName = 'playername',
      pCash = 2500,
      tile0;

  beforeEach(inject(function (Player) {
    player = new Player(pName, pCash);

    tile0 = new Tile(0, 1);
    player.addTileToHand(tile0);
    player.addTileToHand(new Tile(5, 2));
  }));

  it('should have members set from init', function () {
    expect(player.name).toBe(pName);
    expect(player.cash).toBe(pCash);
  });

  it ('should return one tile from getTileFromHand', function () {
    expect(player.getTileFromHand(tile0.row, tile0.column)).toBe(tile0);
  });

});
