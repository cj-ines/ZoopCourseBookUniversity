(function () {

    angular.module('zoop.cbu.timeline', [])
        .directive('cbuTimeline', cbuTimeline);

        function cbuTimeline() {
            var directive = {
                scope: {},
                restrict: 'AE',
                templateUrl: 'app/dashboard/timeline/timeline.html',
                controller: 'TimelineController',
                controllerAs: 'vm'
            }

            return directive;
        }
})();
