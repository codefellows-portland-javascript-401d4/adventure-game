var app = angular.module('myApp', []);

app.controller('adventureController', function($scope) {
  $scope.choices = [
    { name: 'one' },
    { name: 'two' }
  ];

  $scope.yourChoice = $scope.choices[0];
});