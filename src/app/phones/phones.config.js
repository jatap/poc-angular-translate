(function() {
  'use strict';

  angular
    .module('pocTranslate.phones')
    .config(config);

  /** @ngInject */
  function config($translateProvider, $translatePartialLoaderProvider) {
    // Translate
    $translatePartialLoaderProvider.addPart('phones');
    //$translateProvider
      //.useLoader('$translatePartialLoader', {
        //urlTemplate: 'app/phones/i18n/{part}-{lang}.json'
      //})
      //.addInterpolation('$translateMessageFormatInterpolation')
      //.useMissingTranslationHandlerLog()
      //.useLoaderCache(true)
      //.preferredLanguage('en-GB')
      /**
       * TODO - Update to sanitize mode when solved current issue in
       * angular-translator.
       */
      //.useSanitizeValueStrategy('escapeParameters');
  }

})();

