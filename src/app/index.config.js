(function() {
  'use strict';

  angular
    .module('pocTranslate')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $locationProvider,
                 $translateProvider, translatePluggableLoaderProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // Pretty URL
    $locationProvider.html5Mode(true);

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
  }

})();
