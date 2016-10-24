
var app = angular.module('AngularAuthApp', ['ui.router', 'LocalStorageModule', 'angular-loading-bar']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('home');

    $stateProvider
        .state('home', {
            url: '/home',
            controller: 'homeController',
            templateUrl: '/app/views/home.html'
        })

        .state('login', {
            url: '/login',
            controller: 'loginController',
            templateUrl: '/app/views/login.html'
        })

        .state('signup', {
            url: '/signup',
            controller: 'signupController',
            templateUrl: '/app/views/signup.html'
        })

        .state('orders', {
            url: '/orders',
            controller: 'ordersController',
            templateUrl: '/app/views/orders.html'
        })

        .state('refresh', {
            url: '/refresh',
            controller: 'refreshController',
            templateUrl: '/app/views/refresh.html'
        })

        .state('tokens', {
            url: '/tokens',
            controller: 'tokensManagerController',
            templateUrl: '/app/views/tokens.html'
        })

        .state('associate', {
            url: '/associate',
            controller: 'associateController',
            templateUrl: '/app/views/associate.html'
        });

});

var serviceBase = 'http://localhost:53897/';
//var serviceBase = 'http://ngauthenticationapi.azurewebsites.net/';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);


