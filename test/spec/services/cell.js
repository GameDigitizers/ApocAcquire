'use strict';

describe('Service: cell', function () {

  // load the service's module
  beforeEach(module('ApocAcquireApp.services.cell'));

  // instantiate service
  var cell;
  var cellRow = 2,
      cellColumn = 5,
      DEFAULT_STATE = Cell.prototype.CELL_STATES['unplayed'],
      DEFAULT_CHAIN = undefined;

  beforeEach(inject(function (Cell) {
    cell = new Cell(cellRow, cellColumn);
  }));

  it('should do something', function () {
    expect(cell.row).toBe(cellRow);
    expect(cell.column).toBe(cellColumn);
    expect(cell.state).toBe(DEFAULT_STATE);
    expect(cell.chain).toBe(DEFAULT_CHAIN);
  });

});
