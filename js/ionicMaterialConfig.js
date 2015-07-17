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