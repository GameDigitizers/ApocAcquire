'use strict';

describe('Service: tile', function () {

  // load the service's module
  beforeEach(module('ApocAcquireApp.services.tile'));

  // instantiate service
  var tile;
  beforeEach(inject(function (Tile) {
    tile = Tile;
  }));

  it('should do something', function () {
    expect(!!tile).toBe(true);
  });

});
