(function() {
  'use strict';

  /**
   * @todo Complete the test
   * This example is not perfect.
   * Test should check if MomentJS have been called
   */
  describe('directive navbar', function() {
    var el;
    var timeInMs;

    beforeEach(module('pocTranslate'));
    beforeEach(inject(function($compile, $rootScope) {
      timeInMs = new Date();
      timeInMs = timeInMs.setHours(timeInMs.getHours() - 24);

      el = angular.element('<acme-navbar creation-date="' + timeInMs + '"></acme-navbar>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });
  });
})();
