'use strict';

describe('Service: board', function () {

  // load the service's module
  beforeEach(module('ApocAcquireApp.services.board'));

  // instantiate service
  var board;

  var boardWidth = 13,
      boardHeight = 9;

  beforeEach(inject(function (Board) {
    board = Board;
    board.init(boardWidth, boardHeight);
  }));

  it('should have 1-dimensional availTiles', function () {
    expect(board.availTiles.length).toBe(boardWidth * boardHeight);
  });

  it('should have valid Tiles in availTiles', function () {
    expect(Object.prototype.toString.call(board.availTiles[0]), "Tile");
    expect(board.availTiles[0].row).toBe(0);
    expect(board.availTiles[0].column).toBe(0);
  });

  it('should have 2-dimensional gameBoard', function () {
    expect(board.gameBoard.length).toBe(boardHeight);
    expect(board.gameBoard[0].length).toBe(boardWidth);
  });

  it('should have valid Cells in gameBoard', function () {
    expect(Object.prototype.toString.call(board.gameBoard[0][0]), "Cell");
    expect(board.gameBoard[0][0].row).toBe(0);
    expect(board.gameBoard[0][0].column).toBe(0);
  });

  it('should return the cell a tile belongs in', function () {
    var tile = board.getRandomTile();
    var cell = board.getCell(tile);

    expect(tile.row).toEqual(cell.row);
    expect(tile.column).toEqual(cell.column);
  })

});
