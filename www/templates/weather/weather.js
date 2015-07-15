angular.module('app.weather', [])
.controller('WeatherCtrl', function(weather, $scope, $stateParams, $ionicLoading) {

  $scope.city = $stateParams.city;
  // $scope.current = $stateParams.currently.temperature;
  weather
    .getWeather($stateParams.lat, $stateParams.long)
    .success(function(data) {
      console.log(data)
      $scope.curr = data.currently.temperature;

      $scope.day1 = data.daily.data[0].temperatureMax;
      $scope.day1icon = data.daily.data[0].icon;

      $scope.day2 = data.daily.data[1].temperatureMax;
      $scope.day2icon = data.daily.data[1].icon;

      $scope.day3 = data.daily.data[2].temperatureMax;
      $scope.day3icon = data.daily.data[2].icon;

      $scope.day4 = data.daily.data[3].temperatureMax;
      $scope.day4icon = data.daily.data[3].icon;

      $scope.day5 = data.daily.data[4].temperatureMax;
      $scope.day5icon = data.daily.data[4].icon;
    })
  // $ionicLoading.show();
})
.factory('weather', function($http) {
  return {
    getWeather: function(lat, long) {
      return $http
        .get('/api/forecast/' + lat + ',' + long);
    }
  };
});
  // $http
  //   .get('/api/forecast/' + $stateParams.lat + ',' + $stateParams.long)
  //   .success(function (data) {
  //     console.log(data);
  //     $scope.curr = data.currently.temperature;

  //     $scope.day1 = data.daily.data[0].temperatureMax;
  //     $scope.day1icon = data.daily.data[0].icon;

  //     $scope.day2 = data.daily.data[1].temperatureMax;
  //     $scope.day2icon = data.daily.data[1].icon;

  //     $scope.day3 = data.daily.data[2].temperatureMax;
  //     $scope.day3icon = data.daily.data[2].icon;

  //     $scope.day4 = data.daily.data[3].temperatureMax;
  //     $scope.day4icon = data.daily.data[3].icon;

  //     $scope.day5 = data.daily.data[4].temperatureMax;
  //     $scope.day5icon = data.daily.data[4].icon;
  //     // $ionicLoading.hide();
  //   })

