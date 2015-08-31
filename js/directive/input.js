angular.module('ionic')
    .directive('input', ['$ionicPlatform', '$ionicMaterialConfig', function ($ionicMaterialConfig) {
        return {
            restrict: 'E',
            compile: function () {
                return {
                    post: function (scope, element, attrs) {
                        var parent = element.parent();
                        if($ionicMaterialConfig.allPlatforms || ionic.Platform.isAndroid()) {
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

                            if(attrs.hasOwnProperty('disabled') && attrs.disabled === true) {
                                parent.addClass('is-disabled');
                            }
                        }
                    }
                };
            }
        }
    }]);
