//var request = require("request");
//

//
//request(photoCellEndpoint, function(error, response, body) {
//  console.log(body);
//});

var weatherStation = angular.module('WeatherStation', []);

var photoCellEndpoint = 'https://api.particle.io/v1/devices/2d0033000d47343432313031/analogvalue?access_token=81ff21f4c20d40c5727b1d366f44deb73eaee676';

function weatherController($scope, $http) {
  $http.get(photoCellEndpoint)
      .success(function(data){
        $scope.response = data;
        console.log('Response: \n' + data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
}