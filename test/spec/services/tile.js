'use strict';

describe('Service: tile', function () {

  // load the service's module
  beforeEach(module('ApocAcquireApp.services.tile'));

  // instantiate service
  var tile;

  var tileRow = 6,
      tileColumn = 6,
      betterSameColumn,
      betterSmallerRow,
      worseSameColumn,
      worseGreaterRow;

  beforeEach(inject(function (Tile) {
    tile = new Tile(tileRow, tileColumn);
    
    betterSameColumn = new Tile(tileRow, tileColumn-1);
    betterSmallerRow = new Tile(tileRow-1, tileColumn);
    worseSameColumn = new Tile(tileRow, tileColumn+1);
    worseGreaterRow = new Tile(tileRow+1, tileColumn);
  }));

  it('should initialize correctly', function () {
    expect(tile.row).toBe(tileRow);
    expect(tile.column).toBe(tileColumn);
  });

  it('should say a tile in a smaller indexed column is better', function () {
    expect(tile.betterThan(betterSameColumn)).toBeFalsy();
  });

  it('should say a tile in the same column and smaller indexed row is better', function () {
    expect(tile.betterThan(betterSmallerRow)).toBeFalsy();
  });

  it('should say a tile in a greater indexed column is better', function () {
    expect(tile.betterThan(worseSameColumn)).toBeTruthy();
  });

  it('should say a tile in the same column and greater indexed row is better', function () {
    expect(tile.betterThan(worseGreaterRow)).toBeTruthy();
  });

});
