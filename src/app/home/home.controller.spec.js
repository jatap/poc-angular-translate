(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('pocTranslate'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('HomeController');
    }));

    it('should be created successfully', function() {
      expect(vm).toBeDefined();
    });
  });
})();
