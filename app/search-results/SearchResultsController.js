'use strict';
(function () {

    angular.module('zoop.cbu.searchresults')
        .controller('SearchResultsController', SearchResultsController);

    SearchResultsController.$inject = ['$scope', '$stateParams'];

    function SearchResultsController($scope, $stateParams) {
        var vm = this;
        vm.test = "test";

        vm.results = [{
            teacher: "Teacher Name",
            title: "Title",
            avatar: "1002.png",
            course: "Name of Course",
            univerity: "Univeristy",
            country: "Country",
            level: "Level",
            ects: "Points",
            noTaught: "12"
        }, {
            teacher: "Leticia Reyes",
            title: "Professor",
            avatar: "2002.jpg",
            course: "Economics of Artic Fisheries",
            country: "United States",
            univerity: "Univeristy Of Alaska",
            level: "Graduate",
            ects: "5",
            noTaught: "2"
        }, {
            teacher: "John Doe",
            title: "Researcher",
            avatar: "3002.png",
            course: "Environmental Effects on Crab Fisheries, Greenland",
            univerity: "University of Copenhagen",
            country: "Denmark",
            level: "BS.C",
            ects: "10",
            noTaught: "13"
        }, {
            teacher: "Dawn Zullueta",
            title: "Professor",
            avatar: "2004.jpg",
            course: "Quantitative Analysis of Fisheries",
            univerity: "University of British Columbia",
            level: "BS.C",
            noTaught: "5",
            ects: "3",
            country: "Canada"
        }, {
            teacher: "Eric Lacroix",
            title: "Researcher",
            avatar: "2005.jpg",
            course: "Ecosystem Modeling with Ecopath with Ecosim",
            univerity: "University of British Columbia",
            level: "Graduate",
            noTaught: "5",
            ects: "12",
            country: "Canada"
        }]
    }
})()
