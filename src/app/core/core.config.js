(function() {
  'use strict';

  angular
    .module('pocTranslate.core')
    .config(config);

  /** @ngInject */
  function config(translatePluggableLoaderProvider,
                  $translatePartialLoaderProvider) {
    // Translate
    translatePluggableLoaderProvider
      .useLoader('$translatePartialLoader', {
        urlTemplate: 'app/core/i18n/{lang}.json'
      });
    $translatePartialLoaderProvider.addPart('home');
  }

})();

