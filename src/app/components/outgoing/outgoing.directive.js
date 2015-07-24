(function() {
  'use strict';

  var app = angular.module('inventorycontrol');
  app.directive('outgoing', outgoing);

  app.controller('OutgoingController', ['$scope', '$http', function($scope, $http) {

    $http.get('http://localhost:8080/incoming', $scope.incoming).
      success(function(data, status, headers, config) {
        $scope.incomings = data;
        console.log(status);
      }).
      error(function(data, status, headers, config) {
        console.log(status);
      });

  }]);

  /** @ngInject */
  function outgoing() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/outgoing/outgoing.html',
      controller: OutgoingController,
      controllerAs: 'outgoingCtrl'
    };

    return directive;
  }

})();
