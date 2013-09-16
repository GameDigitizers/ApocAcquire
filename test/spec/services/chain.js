'use strict';

describe('Service: chain', function () {

  // load the service's module
  beforeEach(module('ApocAcquireApp.services.chain'));

  // instantiate service
  var chain;
  beforeEach(inject(function (Chain) {
    chain = Chain;
  }));

  it('should do something', function () {
    expect(!!chain).toBe(true);
  });

});
