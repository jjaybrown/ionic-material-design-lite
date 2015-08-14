angular.module('ionic')
    .directive('button', ['$ionicPlatform', '$ionicMaterialConfig', function ($ionicPlatform, $ionicMaterialConfig) {
        return {
            priority: 10,
            restrict: 'E',
            compile: function (element, attrs) {
                if(!attrs.hasOwnProperty('noRipple')
                    && $ionicMaterialConfig.useMaterialRipple
                    || attrs.hasOwnProperty('forceRipple')) {

                    element.addClass('mdl-js-button mdl-js-ripple-effect');

                    return {
                        post: function (scope, element) {
                            $ionicPlatform.ready(function () {
                                // MDL should register and upgrade our element automatically,
                                // however lets make sure it's upgraded when we compile
                                componentHandler.upgradeElement(element[0], 'MaterialButton');
                                componentHandler.upgradeElement(element[0], 'MaterialRipple');
                            });
                        }
                    };
                }
            }
        }
    }]);
