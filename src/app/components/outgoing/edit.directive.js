(function() {
  'use strict';

  var app = angular.module('inventorycontrol');
  app.directive('edit', edit);

  app.controller('EditController', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http) {
    console.log($stateParams.id);

    $scope.submit = function() {
      $scope.outgoing = {
        id: $stateParams.id,
        quantity: $scope.quantity
      }

      console.log($scope.outgoing);

      $http.put('http://localhost:8080/outgoing', $scope.outgoing).
        success(function(data, status, headers, config) {
          console.log(status);
        }).
        error(function(data, status, headers, config) {
          console.log(status);
        });
    }

  }]);

  /** @ngInject */
  function edit() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/outgoing/edit.html',
      controller: EditController,
      controllerAs: 'editCtrl'
    };

    return directive;
  }

})();
