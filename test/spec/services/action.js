'use strict';

describe('Service: action', function () {

  // load the service's module
  beforeEach(module('ApocAcquireApp.services.action'));

  // instantiate service
  var action;
  beforeEach(inject(function (Action) {
    action = new Action();
  }));

  // it('should start with invalid verbs and args', function () {
  //   expect(action.verbValid).toBe(false);
  //   expect(action.argsValid).toBe(false);
  // });

});
