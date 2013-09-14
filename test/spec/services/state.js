'use strict';

describe('Service: state', function () {

  // load the service's module
  beforeEach(module('ApocAcquireApp'));

  // instantiate service
  var state;
  beforeEach(inject(function (State) {
    state = State;
  }));

  it('should do something', function () {
    expect(state.currentPlayer).toBe(0);
  });

});
