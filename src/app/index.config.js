(function() {
  'use strict';

  angular
    .module('pocTranslate')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $locationProvider,
                  $translateProvider, translatePluggableLoaderProvider,
                  $translatePartialLoaderProvider, LANGUAGE) {
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
    translatePluggableLoaderProvider
    //$translateProvider
      .useLoader('$translatePartialLoader', {
        urlTemplate: 'app/i18n/{part}-{lang}.json'
      });
      //.useStaticFilesLoader({
        //prefix: 'app/i18n/common-',
        //suffix: '.json'
      //})
      //.addInterpolation('$translateMessageFormatInterpolation')
      //.useMissingTranslationHandlerLog()
      //.useLoaderCache(true)
      //.preferredLanguage(LANGUAGE)
      /**
       * TODO - Update to sanitize mode when solved current issue in
       * angular-translator.
       */
      //.useSanitizeValueStrategy('escapeParameters');
    $translateProvider.useLoader('translatePluggableLoader');
    $translatePartialLoaderProvider.addPart('common');
  }

})();
