(function() {
  'use strict';

  angular
    .module('inventorycontrol')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
