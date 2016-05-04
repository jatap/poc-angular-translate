(function() {
  'use strict';

  angular
    .module('pocTranslate.phones')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('phones', {
        url: '/phones',
        templateUrl: 'app/phones/phones.html',
        controller: 'PhonesController',
        controllerAs: 'phones'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

