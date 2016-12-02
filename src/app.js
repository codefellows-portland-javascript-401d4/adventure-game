const angular = require('angular');
require('./main.css');

var app = angular.module('primary', []);

function getRandScore(minister) {
    console.log(minister[0],'strikes');
    let min = 1;
    let max = minister[1];
    let rMax = minister[3];
    let score = Math.floor(Math.random() * (max - min + 1)) + min;
    let scoreR = Math.floor(Math.random() * (rMax - min + 1)) + min;
    return score-scoreR;
}

app.controller('playerInfo', ['$scope', function ($scope) {
    $scope.userName = '';
    $scope.nationName = 'Cocomo';
    $scope.rivalNation = 'Shaftistan';
    $scope.playerScore = 0;
    $scope.count = 1000;
    $scope.defMinister = ['Gandi', 2, 9, 10];
    $scope.eduMinister = ['Ben Franklin', 5, 10, 16];
    $scope.primeMinister = ['Honest Abe', 12, 12, 12];
    $scope.defMinisterRival = ['Putin', 8, 9, 2];
    $scope.eduMinisterRival = ['Xi Jinping', 9, 12, 7];
    $scope.primeMinisterRival = ['Angela Merkel', 5, 8, 9];
    $scope.ministers = [
        ['Honest Abe', 10, 10, 10],
        ['Xi Jinping', 9, 12, 7],
        ['Honest Carl', 32, 32, 32],
        ['Gandi', 2, 9, 10],
        ['Putin', 10, 9, 2],
        ['Catherine the Great', 10, 9, 5],
        ['Angela Merkel', 5, 12, 9],
        ['Ben Franklin', 5, 10, 16]

        ];
    
    $scope.defMan = function() {
        $scope.playerScore += getRandScore([
            $scope.defMinister[0],
            $scope.defMinister[1],
            $scope.defMinisterRival[0],
            $scope.defMinisterRival[1]
        ]);
        $scope.count +=1;
    };

    $scope.makeLaw = function() {
        $scope.playerScore += getRandScore([
            $scope.primeMinister[0],
            $scope.primeMinister[1],
            $scope.primeMinisterRival[0],
            $scope.primeMinisterRival[1]
        ]);
        $scope.count +=1;
    };

    $scope.eduPop = function() {
        $scope.playerScore += getRandScore([
            $scope.eduMinister[0],
            $scope.eduMinister[1],
            $scope.eduMinisterRival[0],
            $scope.eduMinisterRival[1]
        ]);
        $scope.count +=1;
    };

}]);