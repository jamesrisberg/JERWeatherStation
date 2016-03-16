var request = require("request");

var weatherStation = angular.module('weatherStation', []);

var photoCellEndpoint = 'https://api.particle.io/v1/devices/2d0033000d47343432313031/analogvalue?access_token=81ff21f4c20d40c5727b1d366f44deb73eaee676';

function weatherController($scope, $http) {
  request(photoCellEndpoint, function(error, response, body) {
    $scope.response = body;
    console.log('Response: \n' + data);
  });
}