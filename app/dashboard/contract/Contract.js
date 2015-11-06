(function () {
    'use strict';

    angular.module('zoop.cbu.contract', [])
        .directive('cbuContract', cbuContract);

        function cbuContract() {
            var directive = {
                scope: {},
                restrict: 'AE',
                templateUrl: 'app/dashboard/contract/contract.html',
                controller: 'ContractController',
                controllerAs: 'vm'
            }

            return directive;
        }
})()
