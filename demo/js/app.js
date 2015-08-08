angular.module('material-starter', ['ionic'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/home',
                templateUrl: 'views/home.html'
            })
            .state('news', {
                url: '/news',
                templateUrl: 'views/news.html'
            })
            .state('contacts', {
                url: '/contacts',
                templateUrl: 'views/contacts.html'
            });

        $urlRouterProvider.otherwise("/home");

    }).run();
