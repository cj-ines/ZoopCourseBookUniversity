(function () {
    'use strict';

    angular.module('zoop.cbu.searchbar')
        .controller('SearchBarController', SearchBarController);

        SearchBarController.$inject = ['$scope'];

        function SearchBarController($scope) {
            var vm = this;

            vm.filters = [{
                icon: '',
                label: 'Courses',
                selected: false
            }, {
                icon: '',
                label: 'People',
                selected: false
            }, {
                icon: '',
                label: 'Universities',
                selected: false
            }, {
                icon: '',
                label: 'Recent courses',
                selected: false
            }];

            vm.active = 0;
            vm.toggleSelected = toggleSelected;
            vm.setSelectedAll = setSelectedAll;

            function toggleSelected(filter) {
                filter.selected = !filter.selected;
            }

            function setSelectedAll() {
                vm.filters.forEach(function (filter) {
                    filter.selected = true;
                });
            }
        }
})()
