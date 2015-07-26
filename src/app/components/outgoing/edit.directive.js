(function() {
  'use strict';

  var app = angular.module('inventorycontrol');
  app.directive('edit', edit);

  app.controller('EditController', ['$scope', '$stateParams', '$http', 'toastr', '$state', function($scope, $stateParams, $http, toastr, $state) {
    console.log($stateParams.id);

    function createModel() {
      $scope.outgoing = {
        id: $stateParams.id,
        quantity: $scope.quantity
      }
    }

    $scope.submit = function() {
      createModel();

      console.log($scope.outgoing);

      $http.put('http://localhost:8080/outgoing', $scope.outgoing).
        success(function(data, status, headers, config) {
          showToastr();
          createModel();
          $state.go('outgoing');
        }).
        error(function(data, status, headers, config) {
          console.log(status);
        });
    }

    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1437525490474;
    vm.showToastr = showToastr;

    function showToastr() {
      toastr.info('<b>Saída efetuada com sucesso!</b>');
      vm.classAnimation = '';
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
