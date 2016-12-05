const angular = require('angular');
require('./main.css');

var app = angular.module('primary', []);

app.controller('playerInfo', ['$scope', function ($scope) {

    $scope.userName = '';
    $scope.nationName = 'Cocomo';
    $scope.rivalNation = 'Shaftistan';
    $scope.playerScore = 0;
    $scope.potato = 0;
    $scope.count = 1000;
    $scope.defMinister = {name: 'Gandhi', def: 2, edu: 6, poli: 9, src: 'img/Gandhi.jpg', skill: 'Non-Violent Protest!'};
    $scope.eduMinister = {name: 'Ben Franklin', def: 4, edu: 9, poli: 8, src: 'img/ben.jpg', skill: 'Founding Father!'};
    $scope.primeMinister = {name: 'Abe Lincoln', def: 10, edu: 10, poli: 10, src: 'img/abe.jpg', skill: 'Abolish!'};
    $scope.defMinisterRival = {name: 'Putin', def: 8, edu: 4, poli: 7, src: 'img/putin.jpg', skill: 'Referendum!'};
    $scope.eduMinisterRival =  {name: 'Xi Jinping', def: 5, edu: 9, poli: 9, src: 'img/XiJinping.jpg', skill: 'Economy!'};
    $scope.primeMinisterRival = {name: 'Angela Merkle', def: 4, edu: 7, poli: 8, src: 'img/aMerkel.jpg', skill: 'Chancellor!'};
    $scope.hireMinister = {};
    $scope.battle = false;
    $scope.kim = false;
    $scope.battleReport = '';
    $scope.priceToHire = 1000;

    $scope.objMinisters = [
        {name: 'Abe Lincoln', def: 10, edu: 10, poli: 10, src: 'img/abe.jpg', skill: ['Abolish!', 'Presidential Address']},
        {name: 'Gandhi', def: 2, edu: 6, poli: 9, src: 'img/Gandhi.jpg', skill: ['Non-Violent Protest!', 'Unite!']},
        {name: 'Angela Merkle', def: 4, edu: 7, poli: 8, src: 'img/aMerkel.jpg', skill: ['Chancellor!', 'Welcome!']},
        {name: 'Ben Franklin', def: 4, edu: 9, poli: 8, src: 'img/ben.jpg', skill: ['Founding Father!', 'Lightning']}
    ];

    $scope.extraMinisters = [
        {name: 'Bill Nye', def: 5, edu: 12, poli: 6, src: 'img/billnyelasers.jpg', skill: 'TechExpansion!'},
        {name: 'Neil Degrasse Tyson', def: 4, edu: 9, poli: 9, src: 'img/neildegrassetyson.jpg', skill: 'Signature'},
        {name: 'Kim Jung Un', def: 9, edu: 3, poli: 2, src: 'img/kimun.jpg', skill: 'starvation nukes'},
        {name: 'Xi Jinping', def: 5, edu: 9, poli: 9, src: 'img/XiJinping.jpg', skill: 'Economy!'},
        {name: 'Catherine the Great', def: 10, edu: 1, poli: 5, src: 'img/catherine.jpg', skill: 'Golden Age!'},
        {name: 'Putin', def: 8, edu: 4, poli: 7, src: 'img/putin.jpg', skill: 'Referendum!'},
        {name: 'Albert', def: 10, edu: 10, poli: 4, src: 'img/einstein.jpg', skill: 'Split-Atoms!'}
    ];

    function getRandScore(minister) {
        console.log(minister[2]);
        let min = 1, rMax, max;
        if (minister[2] === 'def') {
            max = minister[0].def;
            rMax = minister[1].def;
        } else if (minister[2] === 'edu') {
            max = minister[0].edu;
            rMax = minister[1].edu;
        }  else if (minister[2] === 'poli') {
            max = minister[0].poli;
            rMax = minister[1].poli;
        } else {
            return 1;
        }
        
        let score = Math.floor(Math.random() * (max - min + 1)) + min;
        let scoreR = Math.floor(Math.random() * (rMax - min + 1)) + min;
        makeStory(minister, score, scoreR);
        showBattle();
        $scope.potato += ((score*minister[0].def)+(score*minister[0].edu)+(score*minister[0].poli));

        return score-scoreR;
    }

    function makeStory(minister, score, scoreR) {
        let attack = Math.floor(Math.random() * minister[0].skill.length);
        let defend = Math.floor(Math.random() * minister[1].skill.length);

        $scope.battleReport = minister[0].name +
            ' uses ' + minister[0].skill[attack] +
            ' for ' + (score) + ' points | ';

        $scope.battleReport += minister[1].name +
            ' uses ' + minister[1].skill[defend] +
            ' for ' + scoreR + ' points';

        if (minister[0].skill.constructor === Array) {
            $scope.potato += 25;
            $scope.score += 3
        }
        return null;
    }
    
    function showBattle() {
        $scope.battle = true;
    }

    $scope.hideBattle = function(){
        $scope.battle = false;
    };
 
    $scope.defMan = function() {
        $scope.playerScore += getRandScore([
            $scope.defMinister,
            $scope.defMinisterRival,
            'def'
        ]);
        $scope.count +=1;
    };

    $scope.makeLaw = function() {
        $scope.playerScore += getRandScore([
            $scope.primeMinister,
            $scope.primeMinisterRival,
            'poli'
        ]);
        $scope.count +=1;
    };

    $scope.eduPop = function() {
        $scope.playerScore += getRandScore([
            $scope.eduMinister,
            $scope.eduMinisterRival,
            'edu'
        ]);
        $scope.count +=1;
    };

    $scope.fatKims = function() {
        if ($scope.kim == false) {$scope.kim = true;
        } else {
            $scope.kim = false;
        }
    };
    $scope.buyMinister = function(){
        if ($scope.potato > $scope.priceToHire) {            
            $scope.objMinisters.push($scope.hireMinister);
            $scope.potato -= $scope.priceToHire
            $scope.priceToHire += 500;
        }
        $scope.fatKims();
        $scope.battleReport = 'Success! ' + $scope.hireMinister.name + ' has been added.';
        showBattle();
    }

}]);