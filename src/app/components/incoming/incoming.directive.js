(function() {
  'use strict';

  var app = angular.module('inventorycontrol');
  app.directive('incoming', incoming);

  app.controller('IncomingController', ['$scope', '$http', 'toastr', function($scope, $http, toastr) {

    function createModel() {
      $scope.incoming = {
        name: " ",
        description: " ",
        value: " ",
        quantity: " ",
        minQuantity: " "
      }
    }

    createModel();

    $scope.add = function() {
      console.log($scope.incoming);

      $http.post('http://localhost:8080/incoming', $scope.incoming).
        success(function(data, status, headers, config) {
          showToastr();
          createModel();
        }).
        error(function(data, status, headers, config) {
          console.log(status);
          createModel();
        });
    }

    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1437525490474;
    vm.showToastr = showToastr;

    function showToastr() {
      toastr.info('<b>Cadastro efetuado com sucesso!</b>');
      vm.classAnimation = '';
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
