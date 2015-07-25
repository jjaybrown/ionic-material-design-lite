angular.module('ionic')
    .directive('ionTabNav', ['$ionicPlatform', function ($ionicPlatform) {
        return {
            restrict: 'E',
            compile: function (element, attrs) {
                if(!attrs.hasOwnProperty('noRipple')) {
                    element.addClass('mdl-tabs__tab');
                }

                $ionicPlatform.ready(function () {
                    // MDL should register and upgrade our element automatically,
                    // however lets make sure it's upgraded when we compile
                    componentHandler.upgradeElement(element[0], 'MaterialButton');
                    componentHandler.upgradeElement(element[0], 'MaterialRipple');
                });
            }
        }
    }]);
