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


angular.module('ionic')
    .directive('button', ['$ionicPlatform', '$ionicMaterialConfig', function ($ionicPlatform, $ionicMaterialConfig) {
        return {
            restrict: 'E',
            compile: function (element, attrs) {
                if(!attrs.hasOwnProperty('noRipple')
                    && $ionicMaterialConfig.useMaterialRipple
                    || attrs.hasOwnProperty('forceRipple')) {

                    element.addClass('mdl-js-button mdl-js-ripple-effect');

                    $ionicPlatform.ready(function () {
                        // MDL should register and upgrade our element automatically,
                        // however lets make sure it's upgraded when we compile
                        componentHandler.upgradeElement(element[0], 'MaterialButton');
                        componentHandler.upgradeElement(element[0], 'MaterialRipple');
                    });
                }
            }
        }
    }]);

angular.module('ionic')
    .directive('ionItem', ['$ionicPlatform', '$ionicMaterialConfig', function ($ionicPlatform, $ionicMaterialConfig) {
        return {
            restrict: 'E',
            compile: function (element, attrs) {
                // Only add ripple to list items and not dividers
                if(!attrs.hasOwnProperty('class') || attrs.class.indexOf('item-divider') === -1) {
                    if(!attrs.hasOwnProperty('noRipple')
                        && $ionicMaterialConfig.useMaterialRipple
                        || attrs.hasOwnProperty('forceRipple')) {

                        element.addClass('mdl-js-ripple-effect');

                        // Add ripple container as MDL currently doesn't support lists
                        element.append('<span class="mdl-ripple"></span>');

                        $ionicPlatform.ready(function () {
                            // MDL should register and upgrade our element automatically,
                            // however lets make sure it's upgraded when we compile
                            componentHandler.upgradeElement(element[0], 'MaterialRipple');
                        });
                    }
                }
            }
        }
    }]);

angular.module('ionic')
    .directive('ionTabNav', ['$ionicPlatform', '$ionicMaterialConfig', function ($ionicPlatform, $ionicMaterialConfig) {
        return {
            restrict: 'E',
            compile: function (element, attrs) {
                if(!attrs.hasOwnProperty('noRipple')
                    && $ionicMaterialConfig.useMaterialRipple
                    || attrs.hasOwnProperty('forceRipple')) {
                    element.addClass('mdl-tabs__tab');

                    $ionicPlatform.ready(function () {
                        // MDL should register and upgrade our element automatically,
                        // however lets make sure it's upgraded when we compile
                        componentHandler.upgradeElement(element[0], 'MaterialTabs');
                        componentHandler.upgradeElement(element[0], 'MaterialRipple');
                    });
                }
            }
        }
    }]);

angular.module('ionic')
    .directive('ionTabs', ['$ionicPlatform', '$ionicMaterialConfig', function ($ionicPlatform, $ionicMaterialConfig) {
        return {
            restrict: 'E',
            compile: function (element, attrs) {
                if(!attrs.hasOwnProperty('noRipple')
                    && $ionicMaterialConfig.useMaterialRipple
                    || attrs.hasOwnProperty('forceRipple')) {
                    element.addClass('mdl-js-tabs mdl-js-ripple-effect');

                    $ionicPlatform.ready(function () {
                        // MDL should register and upgrade our element automatically,
                        // however lets make sure it's upgraded when we compile
                        componentHandler.upgradeElement(element[0], 'MaterialTabs');
                        componentHandler.upgradeElement(element[0], 'MaterialRipple');
                    });
                }
            }
        }
    }]);

angular.module('ionic')
    .provider('$ionicMaterialConfig', ['$ionicConfigProvider', function ($ionicConfigProvider) {
        var provider = this;

        this.allPlatforms = false;
        this.useMaterialIcons = ionic.Platform.isAndroid();
        this.useMaterialRipple = ionic.Platform.isAndroid();

        this.enableForAllPlatforms = function () {
            if(this.allPlatforms === false) {
                this.allPlatforms = true;
            }

            $ionicConfigProvider.setPlatformConfig('ios', {

                views: {
                    transition: 'android'
                },

                navBar: {
                    alignTitle: 'left',
                    positionPrimaryButtons: 'right',
                    positionSecondaryButtons: 'right'
                },

                backButton: {
                    icon: 'ion-android-arrow-back',
                    text: false,
                    previousTitleText: false
                },

                form: {
                    checkbox: 'square',
                    toggle: 'small'
                },

                spinner: {
                    icon: 'android'
                },

                tabs: {
                    style: 'striped',
                    position: 'top'
                }

            });
        };

        if(this.allPlatforms) {
            this.enableForAllPlatforms();
        }

        provider.$get = function (){
            return provider;
        };
    }]);