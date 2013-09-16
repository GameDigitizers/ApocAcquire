'use strict';

describe('Service: cell', function () {

  // load the service's module
  beforeEach(module('ApocAcquireApp'));

  // instantiate service
  var cell;
  beforeEach(inject(function (_cell_) {
    cell = _cell_;
  }));

  it('should do something', function () {
    expect(!!cell).toBe(true);
  });

});
