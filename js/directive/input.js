angular.module('ionic')
    .directive('input', ['$ionicPlatform', '$ionicMaterialConfig', function ($ionicMaterialConfig) {
        return {
            restrict: 'E',
            compile: function (element) {
                if($ionicMaterialConfig.allPlatforms || ionic.Platform.isAndroid()) {
                    var parent = element.parent();
                    if(parent.hasClass('item-input')) {
                        element.bind('focus', function () {
                            parent.addClass('is-focused');
                        });

                        element.bind('blur', function () {
                            parent.removeClass('is-focused');
                        });
                    }
                }

                return {
                    post: function (scope, element, attrs) {
                        //scope.$watch(attrs.classes, function (newVal, oldVal) {
                        //    console.log(newVal, oldVal);
                        //});

                        console.log(attrs);
                    }
                };
            }
        }
    }]);
