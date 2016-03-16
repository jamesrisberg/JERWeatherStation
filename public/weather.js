'use strict';

var weatherStation = angular.module('weatherStation', []);

angular.module('weatherStation').controller('weatherController', ['$scope', '$http',
  function ($scope, $http) {
    var photoCellEndpoint = 'https://api.particle.io/v1/devices/2d0033000d47343432313031/analogvalue?access_token=81ff21f4c20d40c5727b1d366f44deb73eaee676';

    $http({
      method: 'GET',
      url: photoCellEndpoint
    }).then(function successCallback(response) {
      $scope.response = response;
      console.log('Response: \n' + response);
    }, function errorCallback(response) {
      console.log('Error: ' + response);
    });
}]);