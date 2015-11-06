(function () {
    'use strict';

    angular.module('zoop.cbu')
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/dashboard');

            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'DashboardController as vm'
                })
                .state('search-results', {
                    url: '/search-results/:search',
                    templateUrl: 'app/search-results/search-results.html',
                    controller: 'SearchResultsController as vm'
                })
                .state('profile', {
                    url: '/profile/:id',
                    templateUrl: 'app/profile/profile.html',
                    controller: 'ProfileController as vm'
                });
        });
})()
