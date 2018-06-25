angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider
    
    .when('/', {
        templateUrl: 'app/views/pages/home.html'
    })

    .when('/#%2Fabout', {
        templateUrl: 'app/views/pages/about.html'
    })
    
    .otherwise({ redirectTo: '/' });
});