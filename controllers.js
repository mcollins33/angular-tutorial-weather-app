//CONTROLLERS

weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    $scope.city = cityService.city;
    $scope.temps = $routeParams.temps || '5';
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, units: 'imperial', appid: '354831dbcdfd24302fa2109d12f9eec1', cnt: $scope.temps });

    $scope.roundTemp = function(temp) {
        return Math.round(temp);
    }
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }

}]);
