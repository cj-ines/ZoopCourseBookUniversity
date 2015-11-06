'use strict';
(function () {
    angular.module('zoop.cbu.profile')
        .controller('ProfileController', ProfileController);

        ProfileController.$inject = ['$scope'];

        function ProfileController($scope) {
            var vm = this;
        }
})()
