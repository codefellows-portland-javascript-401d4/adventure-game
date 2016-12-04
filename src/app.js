const angular = require('angular');
require('./main.css');

var app = angular.module('primary', []);

function getRandScore2(minister) {
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
    $scope.defMinister = {name: "Gandhi", def: 2, edu: 6, poli: 9, src: 'img/Gandhi.jpg'};
    $scope.eduMinister = {name: "Ben Franklin", def: 4, edu: 9, poli: 8, src: 'img/ben.jpg'};
    $scope.primeMinister = {name: "Abe Lincoln", def: 10, edu: 10, poli: 10, src: 'img/abe.jpg'};
    $scope.defMinisterRival = {name: "Putin", def: 8, edu: 4, poli: 7, src: 'img/putin.jpg'};
    $scope.eduMinisterRival =  {name: "Xi Jinping", def: 5, edu: 9, poli: 9, src: 'img/XiJinping.jpg'};
    $scope.primeMinisterRival = {name: "Angela Merkle", def: 4, edu: 7, poli: 8, src: 'img/aMerkel.jpg'};
    $scope.battle = false;
    $scope.battleReport = '';

    $scope.objMinisters = [
        {name: "Abe Lincoln", def: 10, edu: 10, poli: 10, src: 'img/abe.jpg'},
        {name: "Xi Jinping", def: 5, edu: 9, poli: 9, src: 'img/XiJinping.jpg'},
        {name: "Gandhi", def: 2, edu: 6, poli: 9, src: 'img/Gandhi.jpg'},
        {name: "Angela Merkle", def: 4, edu: 7, poli: 8, src: 'img/aMerkel.jpg'},
        {name: "Catherine the Great", def: 10, edu: 1, poli: 5, src: 'img/catherine.jpg'},
        {name: "Putin", def: 8, edu: 4, poli: 7, src: 'img/putin.jpg'},
        {name: "Ben Franklin", def: 4, edu: 9, poli: 8, src: 'img/ben.jpg'},
        {name: "Albert", def: 10, edu: 10, poli: 4, src: 'img/einstein.jpg'}
    ];

    function getRandScore(minister) {
        let min = 1;
        let max = minister[0].def;
        let rMax = minister[1].def;
        let score = Math.floor(Math.random() * (max - min + 1)) + min;
        let scoreR = Math.floor(Math.random() * (rMax - min + 1)) + min;
        $scope.battleReport = '';
        return score-scoreR;
    };


    $scope.defMan = function() {
        $scope.playerScore += getRandScore([
            $scope.defMinister,
            $scope.defMinisterRival
        ]);
        $scope.count +=1;
        $scope.battle = true;
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