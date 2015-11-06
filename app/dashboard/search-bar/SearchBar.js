(function () {
    'use strict';

    angular.module('zoop.cbu.searchbar', [])
        .directive('cbuSearchBar', cbuSearchBar);

        function cbuSearchBar() {
            var directive = {
                restrict: 'AE',
                scope: {
                    term: '@'
                },
                templateUrl: 'app/dashboard/search-bar/search-bar.html',
                controller: 'SearchBarController',
                controllerAs: 'vm'
            }

            return directive;

        }
})();
