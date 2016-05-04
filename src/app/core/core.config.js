(function() {
  'use strict';

  angular
    .module('pocTranslate.core')
    .config(config);

  /** @ngInject */
  function config($translateProvider, translatePluggableLoaderProvider,
                  $translatePartialLoaderProvider) {
    // Translate
    $translateProvider
      .useLoader('translatePluggableLoader')
      .addInterpolation('$translateMessageFormatInterpolation')
      .useMissingTranslationHandlerLog()
      .useLoaderCache(true)
      /**
       * TODO - Update to sanitize mode when solved current issue in
       * angular-translator.
       */
      .useSanitizeValueStrategy('escapeParameters')
      .preferredLanguage('en-GB');

    translatePluggableLoaderProvider
      .useLoader('$translatePartialLoader', {
        urlTemplate: 'app/core/i18n/{lang}.json'
      });
    $translatePartialLoaderProvider.addPart('home');
  }

})();

