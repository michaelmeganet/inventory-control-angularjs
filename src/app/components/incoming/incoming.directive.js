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
          showToastr('Cadastro efetuado com sucesso!');
          createModel();
        }).
        error(function(data, status, headers, config) {
          console.log(status);
          showToastr('Erro ao tentar efetuar o cadastro, preencha o formulário corretamente.');
        });
    }

    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1437525490474;

    function showToastr(text) {
      toastr.info('<b>' + text + '</b>');
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
