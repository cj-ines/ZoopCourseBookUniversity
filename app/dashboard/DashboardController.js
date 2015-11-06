'use strict';
(function () {

	angular.module('zoop.cbu.dashboard')
		.controller('DashboardController', DashboardController);

		DashboardController.$inject = [];

		function DashboardController() {
			var vm = this;
			vm.test = 'test';
		}

})();
