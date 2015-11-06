(function () {

    angular.module('zoop.cbu.contract')
        .controller('ContractController', ContractController);

        ContractController.$inject = ['$scope'];

        function ContractController($scope) {
            var vm = this;
            vm.test = "test";

            vm.contracts = [{
                name: 'Michel Thomas',
                filename: '[Michel Contract File]',
                date: '2015-11-04'
            }, {
                name: 'Andrew Wallace',
                filename: '[Andrew Wallace File]',
                date: '2015-11-04'
            }];
        }
})()
