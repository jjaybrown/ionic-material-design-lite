angular.module('ionic')
    .provider('$ionicMaterialConfig', function ($ionicConfigProvider) {
        var provider = this;

        provider.$get = function () {
          return provider;
        };
    });