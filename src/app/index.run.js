(function() {
  'use strict';

  angular
    .module('pocTranslate')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
