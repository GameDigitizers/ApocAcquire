'use strict';

describe('Service: board', function () {

  // load the service's module
  beforeEach(module('ApocAcquireApp.services.board'));

  // instantiate service
  var board;
  beforeEach(inject(function (Board) {
    board = Board;
    board.init(1,1,[],[]);
  }));

  it('should have a playedTiles property', function () {
    expect(board.playedTiles).not.toBe(null);
  });

});
