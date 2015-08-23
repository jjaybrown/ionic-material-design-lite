angular.module('ionic')
    .directive('textarea', ['$ionicPlatform', '$ionicMaterialConfig', function ($ionicMaterialConfig) {
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
                            if(element.val() !== '') {
                                parent.addClass('is-dirty');
                            }else{
                                parent.removeClass('is-dirty');
                            }
                        });
                    }
                }

                return {
                    post: function (scope, element, attrs) {
                        if(attrs.hasOwnProperty('disabled') && attrs.disabled === true) {
                            var parent = element.parent();
                            parent.addClass('is-disabled');
                        }
                    }
                };
            }
        }
    }]);
