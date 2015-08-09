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