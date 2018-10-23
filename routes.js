//ROUTES
weatherApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.htm',
            controller: 'forecastController'
        })
        .when('/forecast/:temps', {
            templateUrl: 'pages/forecast.htm',
            controller: 'forecastController'
        })
})
