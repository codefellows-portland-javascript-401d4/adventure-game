const angular = require('angular');
require('./main.css');

var app = angular.module('primary', []);

function getRandScore() {
    let min = 1;
    let max = 15;
    let score = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('This is the rand score', score);
    return score;
}

app.controller('playerInfo', ['$scope', function ($scope) {
    $scope.userName = '';
    $scope.nationName = 'Cocomo';
    $scope.rivalNation = 'Shaftistan';
    $scope.playerScore = 0;
    $scope.rivalScore = 0;


    
    $scope.defMan = function() {
        $scope.playerScore += getRandScore();
    }

    $scope.makeLaw = function() {
        $scope.playerScore += getRandScore();
    }

    $scope.eduPop = function() {
        $scope.playerScore += getRandScore();
    }


}]);