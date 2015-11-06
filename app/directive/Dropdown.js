(function () {
    angular.module('zoop.componentDropdown',[])
        .directive('zDropdown', zDropdown)
        .directive('zDropdownToggle', zDropdownToggle)
        .directive('zDropdownContent', zDropdownContent);

    function zDropdown() {
        var directive = {
            transclude: true,
            restrict: 'AE',
            template: '<div ng-transclude></div>',
            link: linkFunction
        };

        return directive;

        function linkFunction(scope, elem, attrs) {
            if (attrs.toggled === 'true') {
                scope.toggled = false;
            } else {
                scope.toggled = true;
            }
        }
    }

    function zDropdownToggle() {
        var directive = {
            restrict: 'AE',
            link: linkFunction
        };

        return directive;

        function linkFunction(scope, elem, attrs) {
            elem.click(function() {
                scope.toggled = !scope.toggled;
                scope.$apply();
            });
        }
    }

    function zDropdownContent() {
        var directive = {
            link: linkFunction,
            transclude: true,
            restrict: 'AE',
            template: '<div ng-transclude></div>'
        };

        return directive;

        function linkFunction(scope, elem, attrs) {
            dothis();

            scope.$watch('toggled', function () {
                dothis();
            })

            function dothis() {
                if (scope.toggled) {
                    elem.hide();
                } else {
                    elem.show();
                }
            }
        }
    }

})()
