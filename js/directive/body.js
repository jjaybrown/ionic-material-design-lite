angular.module('ionic')
    .directive('body', ['$ionicMaterialConfig', function ($ionicMaterialConfig) {
        return {
            restrict: 'E',
            compile: function (element) {
                if($ionicMaterialConfig.useMaterialIcons) {
                    element.addClass('use-material-icons');
                }

                if($ionicMaterialConfig.allPlatforms) {
                    element.addClass('platform-override');
                }
            }
        }
    }]);

