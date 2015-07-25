angular.module('material-starter', ['ionic'])
    .config(function($stateProvider, $urlRouterProvider, $ionicMaterialConfigProvider) {
        $stateProvider
            .state('index', {
                url: '/home',
                templateUrl: 'views/home.html'
            })
            .state('news', {
                url: '/news',
                templateUrl: 'views/news.html'
            });

        $urlRouterProvider.otherwise("/home");

    }).run();
