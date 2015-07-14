angular.module('app.weather', [])
.controller('WeatherCtrl', function($stateParams, $scope, $http, $ionicLoading) {
  $scope.city = $stateParams.city;

  $ionicLoading.show();

  $http
    .get('/api/forecast/' + $stateParams.lat + ',' + $stateParams.long)
    .success(function (data) {
      console.log(data);
      $ionicLoading.hide();
    })
});

//display weather maybe 5 day and icon
//extract http calls to factories
