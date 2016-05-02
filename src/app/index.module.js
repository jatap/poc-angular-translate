(function() {
  'use strict';

  angular
    .module('pocTranslate', [
      'ngAnimate',
      'ngCookies',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'restangular',
      'ui.router',
      'ui.bootstrap',
      'toastr',
      'pascalprecht.translate',
      'angular-translate-loader-pluggable',
      'pocTranslate.phones'
    ]);

})();
