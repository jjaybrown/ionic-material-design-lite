angular.module('ionic')
    .provider('$ionicMaterialConfig', function () {
        var allPlatforms = false;

        var provider = {
            enableAllPlatforms: function () {
                allPlatforms = true;
            },
            disableAllPlatforms: function () {
                allPlatforms = false;
            },
            availableforAllPlatforms: function () {
                return allPlatforms;
            },
            $get: function () {
                return provider;
            }
        };

        return provider;
    });
angular.module('ionic')
    .directive('button', function () {
        return {
            restrict: 'E',
            compile: function (element, attrs) {
                if(!attrs.hasOwnProperty('noRipple')) {
                    element.addClass('mdl-js-button mdl-js-ripple-effect');
                }
            }
        }
    });
