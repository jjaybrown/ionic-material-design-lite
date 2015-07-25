angular.module('ionic')
    .provider('$ionicMaterialConfig', function () {
        var provider = this;

        this.allPlatforms = false;

        provider.$get = function (){
            return provider;
        };
    });