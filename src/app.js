const angular = require('angular');
require('./main.css');

var app = angular.module('primary', []);

function getRandScore(minister) {
    let min = 1;
    let max = minister[0].def;
    let rMax = minister[1].def;
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
    $scope.defMinister = {name: "Gandi", def: 10, edu: 1, poli: 1, src: './Gandhi.jpg'};
    $scope.eduMinister = {name: "Ben Franklin", def: 10, edu: 1, poli: 1, src: './ben.jpg'};
    $scope.primeMinister = {name: "Abe Lincoln", def: 10, edu: 10, poli: 10, src: './abe.jpg'};
    $scope.defMinisterRival = {name: "Putin", def: 10, edu: 1, poli: 1, src: './putin.jpg'};
    $scope.eduMinisterRival =  {name: "Xi Jinping", def: 10, edu: 10, poli: 10, src: './XiJinping.jpg'};
    $scope.primeMinisterRival = {name: "Angela Merkle", def: 10, edu: 1, poli: 1, src: './aMerkel.jpg'};

    $scope.objMinisters = [
        {name: "Abe Lincoln", def: 10, edu: 10, poli: 10, src: './abe.jpg'},
        {name: "Xi Jinping", def: 10, edu: 10, poli: 10, src: './XiJinping.jpg'},
        {name: "Gandi", def: 10, edu: 1, poli: 1, src: './Gandhi.jpg'},
        {name: "Angela Merkle", def: 10, edu: 1, poli: 1, src: './aMerkle.jpg'},
        {name: "Catherine the Great", def: 10, edu: 1, poli: 1, src: './catherine.jpg'},
        {name: "Putin", def: 10, edu: 1, poli: 1, src: './putin.jpg'},
        {name: "Ben Franklin", def: 10, edu: 1, poli: 1, src: './ben.jpg'},
        {name: "Albert", def: 10, edu: 1, poli: 1, src: './einstein.jpg'}
    ];

    $scope.defMan = function() {
        $scope.playerScore += getRandScore([
            $scope.defMinister,
            $scope.defMinisterRival
        ]);
        $scope.count +=1;
    };

    $scope.makeLaw = function() {
        $scope.playerScore += getRandScore([
            $scope.primeMinister,
            $scope.primeMinisterRival
        ]);
        $scope.count +=1;
    };

    $scope.eduPop = function() {
        $scope.playerScore += getRandScore([
            $scope.eduMinister,
            $scope.eduMinisterRival
        ]);
        $scope.count +=1;
    };

}]);