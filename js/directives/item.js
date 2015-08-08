angular.module('ionic')
    .directive('ionItem', ['$ionicPlatform', function ($ionicPlatform) {
        return {
            restrict: 'E',
            compile: function (element, attrs) {
                var upgrade = false;

                // Only add ripple to list items and not dividers
                if(!attrs.hasOwnProperty('class') || attrs.class.indexOf('item-divider') === -1) {
                    if(!attrs.hasOwnProperty('noRipple')) {
                        element.addClass('mdl-js-ripple-effect');

                        // Add ripple container as MDL currently doesn't support lists
                        element.append('<span class="mdl-ripple"></span>');
                    }

                    upgrade = true;
                }

                $ionicPlatform.ready(function () {
                    if(upgrade) {
                        // MDL should register and upgrade our element automatically,
                        // however lets make sure it's upgraded when we compile
                        componentHandler.upgradeElement(element[0], 'MaterialRipple');
                    }
                });
            }
        }
    }]);
