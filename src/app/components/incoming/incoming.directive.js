(function() {
  'use strict';

  var app = angular.module('inventorycontrol');
  app.directive('incoming', incoming);

  app.controller('IncomingController', ['$scope', '$http', function($scope, $http) {
    $scope.incoming = {
        name: " ",
        description: " ",
        value: " ",
        quantity: " ",
        minQuantity: " "
    }

    $scope.scotches = [
      {
        name: 'Macallan 12',
        price: 50
      },
      {
        name: 'Chivas Regal Royal Salute',
        price: 10000
      },
      {
        name: 'Glenfiddich 1937',
        price: 20000
      }
    ];

    $scope.add = function() {
      console.log($scope.incoming);

      $http.post('http://localhost:8080/incoming', $scope.incoming).
        success(function(data, status, headers, config) {
          console.log(status);
        }).
        error(function(data, status, headers, config) {
          console.log(status);
        });
    }

  }]);

  /** @ngInject */
  function incoming() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/incoming/incoming.html',
      scope: {
          creationDate: '='
      },
      controller: IncomingController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }

})();
