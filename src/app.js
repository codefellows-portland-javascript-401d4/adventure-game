const angular = require('angular');
require('./style.css');

var app = angular.module('primary', []);

app.controller('playerInfo', function ($scope) {
    $scope.userName;
    $scope.nationName;
})