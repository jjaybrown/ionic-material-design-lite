angular.module('ionic')
    .provider('$ionicMaterialConfig', function () {
        return {
          $get: [function () {
              return {
                allPlatforms: false
              };
          }]
        };
    });
angular.module('ionic')
    .directive('button', function () {
        return {
            restrict: 'E',
            compile: function (element, attrs) {
                console.log(attrs);
                if(!attrs.hasOwnProperty('noRipple')) {
                    element.addClass('mdl-js-button mdl-js-ripple-effect');
                }
            }
        }
    });
