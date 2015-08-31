angular.module('ionic')
    .directive('ionItem', ['$ionicPlatform', '$ionicMaterialConfig', function ($ionicPlatform, $ionicMaterialConfig) {
        return {
            restrict: 'E',
            compile: function () {
                return {
                    post: function (scope, element, attrs) {
                        // Only add ripple to list items and not dividers
                        if(!attrs.hasOwnProperty('class') || attrs.class.indexOf('item-divider') === -1) {
                            if(!attrs.hasOwnProperty('noRipple')
                                && $ionicMaterialConfig.useMaterialRipple
                                || attrs.hasOwnProperty('forceRipple')) {

                                element.addClass('mdl-js-ripple-effect');

                                // Add ripple container as MDL currently doesn't support lists
                                element.append('<span class="mdl-ripple"></span>');

                                $ionicPlatform.ready(function () {
                                    // MDL should register and upgrade our element automatically,
                                    // however lets make sure it's upgraded when we compile
                                    componentHandler.upgradeElement(element[0], 'MaterialRipple');
                                });
                            }
                        }
                    }
                }
            }
        }
    }]);
