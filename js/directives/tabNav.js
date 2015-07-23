angular.module('ionic')
    .directive('ionTabNav', function () {
        return {
            restrict: 'E',
            compile: function (element, attrs) {
                if(!attrs.hasOwnProperty('noRipple')) {
                    element.addClass('mdl-tabs__tab');
                }
            }
        }
    });
