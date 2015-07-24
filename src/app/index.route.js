(function() {
  'use strict';

  angular
    .module('inventorycontrol')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('incoming', {
        url: '/incoming',
        templateUrl: 'app/components/incoming/incoming.html',
        controller: 'IncomingController',
        controllerAs: 'incoming'
      })
      .state('outgoing', {
        url: '/outgoing',
        templateUrl: 'app/components/outgoing/outgoing.html',
        controller: 'OutgoingController',
        controllerAs: 'outgoing'
      })
      .state('edit', {
        url: "/edit/{id}",
        templateUrl: 'app/components/outgoing/edit.html',
        controller: 'EditController',
        controllerAs: 'edit'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
