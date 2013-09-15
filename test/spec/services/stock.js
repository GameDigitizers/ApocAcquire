'use strict';

describe('Service: stock', function () {

  // load the service's module
  beforeEach(module('ApocAcquireApp.services.stock'));

  // instantiate service
  var stock;
  beforeEach(inject(function (Stock) {
    stock = Stock;
  }));

  it('should do something', function () {
    expect(!!stock).toBe(true);
  });

});
