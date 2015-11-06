(function () {
	'use strict';

	angular.module('zoop.cbu.timeline')
		.controller('TimelineController', TimelineController);

		TimelineController.$inject = ['$scope'];

		function TimelineController($scope) {
			var vm = this;

			vm.tabs = ['Recent', 'Starred', 'Deleted'];
			vm.activeTab = 0;
			vm.isActiveTab = isActiveTab;
			vm.setActiveTab = setActiveTab;
			vm.addToDeleted = addToDeleted;
			vm.removeFromDeleted = removeFromDeleted;
			vm.isDeleted = isDeleted;
			vm.addToStarred = addToStarred;
			vm.removeFromStarred = removeFromStarred;
			vm.isStarred = isStarred;

			vm.newsAll = [{
				id: 307,
				user: 'John Doe',
				avatar: '3002.png',
				type: 'message',
				content: 'I guess it could be done in admin interface if we hide every page that could screw the system. But at this time admin interface is not even password protected.',
				time: '2 mins ago'
			}, {
				id: 301,
				user: 'Matt Evans',
				avatar: '2001.jpg',
				type: 'message',
				content: 'German translations already loaded on CATI Other. No contact list provided yet, client is on vacation and expected to return on November 2.',
				time: '1 hour ago'
			}, {
				id: 304,
				user: 'Matt Evans',
				type: 'file',
				avatar: '2001.jpg',
				content: 'Training Documentation.pdf',
				time: '1 hour ago'
			}, {
				id: 302,
				user: 'Jennifer Hawking',
				avatar: '2003.jpg',
				type: 'message',
				content: 'This is a sample \'starred\' messsage.',
				time: '2 days ago'
			}];

			vm.newsStarred = [{
				id: 302,
				user: 'Jennifer Hawking',
				avatar: '2002.jpg',
				type: 'message',
				content: 'This is a sample \'starred\' messsage.',
				time: '2 days ago'
			}];

			vm.newsDeleted = [];

			$scope.$watch('vm.activeTab', function () {
				filterNews(vm.activeTab)
			});


			function isActiveTab(tab) {
				return vm.activeTab === tab;
			}

			function setActiveTab(tab) {
				vm.activeTab = tab;
			}

			function addToDeleted(news) {
				vm.newsDeleted.push(news);
				vm.newsAll.splice(vm.newsAll.indexOf(news),1);
			}

			function removeFromDeleted(news) {
				vm.newsAll.push(news);
				vm.newsDeleted.splice(vm.newsDeleted.indexOf(news),1);
			}

			function isDeleted(newsID) {
				var found = false;
				vm.newsDeleted.forEach(function (news) {
					if (news.id === newsID) {
						found = true;
					}
				})
				return found;
			}

			function addToStarred(news) {
				vm.newsStarred.push(news);
			}

			function isStarred(newsID) {
				var found = false;
				vm.newsStarred.forEach(function (news) {
					if (news.id === newsID) {
						found = true;
					}
				})
				return found;
			}

			function removeFromStarred(news) {
				vm.newsStarred.splice(vm.newsStarred.indexOf(news),1);
			}

			function filterNews(tab){
				if (tab === 1) {
					vm.news = vm.newsStarred
				} else if (tab === 2) {
					vm.news = vm.newsDeleted;
				} else {
					vm.news = vm.newsAll;
				}
			}
		}
})();
