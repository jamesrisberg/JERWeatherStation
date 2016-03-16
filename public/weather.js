'use strict';

var weatherStation = angular.module('weatherStation', []);

angular.module('weatherStation').controller('weatherController', ['$scope', '$http',
  function ($scope, $http) {
    var photoCellEndpoint = 'https://api.particle.io/v1/devices/2d0033000d47343432313031/light?access_token=81ff21f4c20d40c5727b1d366f44deb73eaee676';
    
    var temperatureEndpoint = 'https://api.particle.io/v1/devices/2d0033000d47343432313031/temperature?access_token=81ff21f4c20d40c5727b1d366f44deb73eaee676';
    
    var humidityEndpoint = 'https://api.particle.io/v1/devices/2d0033000d47343432313031/humidity?access_token=81ff21f4c20d40c5727b1d366f44deb73eaee676';

    $http({
      method: 'GET',
      url: photoCellEndpoint
    }).then(function successCallback(response) {
      $scope.photoCellValue = response.data.result;
      console.log(response);
    }, function errorCallback(response) {
      console.log('Error: ' + response);
    });
    
    $http({
      method: 'GET',
      url: temperatureEndpoint
    }).then(function successCallback(response) {
      $scope.temperatureValue = response.data.result;
      console.log(response);
    }, function errorCallback(response) {
      console.log('Error: ' + response);
    });
    
    $http({
      method: 'GET',
      url: humidityEndpoint
    }).then(function successCallback(response) {
      $scope.humidityValue = response.data.result;
      console.log(response);
    }, function errorCallback(response) {
      console.log('Error: ' + response);
    });
}]);