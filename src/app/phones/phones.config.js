(function() {
  'use strict';

  angular
    .module('pocTranslate.phones')
    .config(config);

  /** @ngInject */
  function config(translatePluggableLoaderProvider,
                  $translatePartialLoaderProvider) {
    // Translate
    translatePluggableLoaderProvider
      .useLoader('$translatePartialLoader', {
        urlTemplate: 'app/phones/i18n/{lang}.json'
      });
    $translatePartialLoaderProvider.addPart('phones');
  }

})();

