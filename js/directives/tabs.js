angular.module('ionic')
    .directive('ionTabs', function () {
        return {
            restrict: 'E',
            compile: function (element, attrs) {
                if(!attrs.hasOwnProperty('noRipple')) {
                    element.addClass('mdl-js-tabs mdl-js-ripple-effect');
                }
            }
        }
    });
