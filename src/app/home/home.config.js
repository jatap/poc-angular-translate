(function() {
  'use strict';

  angular
    .module('pocTranslate.home')
    .config(config);

  /** @ngInject */
  function config(translatePluggableLoaderProvider,
                  $translatePartialLoaderProvider) {
    // Translate
    translatePluggableLoaderProvider
      .useLoader('$translatePartialLoader', {
        urlTemplate: 'app/home/i18n/{lang}.json'
      });
    $translatePartialLoaderProvider.addPart('home');
  }

})();

