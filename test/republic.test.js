/* globals angular, chai */
const {assert} = chai;

describe('App controller', () => {
    beforeEach(angular.mock.module('primary'));

    let $controller, $scope;

    const scopeSet = angular.mock.inject(function($rootScope, _$controller_) {
        $scope = $rootScope.$new();
        $controller = _$controller_;
    });

    beforeEach(scopeSet);

    it('Checks the nations are in default state', () => {
        $controller('playerInfo', {$scope});
        assert.equal($scope.nationName, 'Cocomo');
        assert.equal($scope.rivalNation, 'Shaftistan');
    });

    it('Score and points at default', () => {
        $controller('playerInfo', {$scope});
        assert.equal($scope.priceToHire, 1000);
    });

    it('Verify player ministers', () => {
        $controller('playerInfo', {$scope});
        assert.deepEqual($scope.defMinister, {name: 'Gandhi', def: 2, edu: 6, poli: 9, src: 'img/Gandhi.jpg', skill: ['Non-Violent Protest!', 'Unite!']});
        assert.deepEqual($scope.eduMinister, {name: 'Ben Franklin', def: 4, edu: 9, poli: 8, src: 'img/ben.jpg', skill: ['Founding Father!', 'Lightning']});
        assert.deepEqual($scope.primeMinister, {name: 'Abe Lincoln', def: 10, edu: 10, poli: 10, src: 'img/abe.jpg', skill:  ['Abolish!', 'Presidential Address']});
    });   

    it('Verify rival ministers', () => {
        $controller('playerInfo', {$scope});
        assert.deepEqual($scope.eduMinisterRival, {name: 'Xi Jinping', def: 5, edu: 9, poli: 7, src: 'img/XiJinping.jpg', skill: ['Economy!', 'Silk Road']});
        assert.deepEqual($scope.defMinisterRival, {name: 'Putin', def: 8, edu: 4, poli: 7, src: 'img/putin.jpg', skill: ['Referendum!', 'Nuclear Winter']});
        assert.deepEqual($scope.primeMinisterRival, {name: 'Angela Merkle', def: 4, edu: 7, poli: 8, src: 'img/aMerkel.jpg', skill: ['Chancellor!', 'Welcome!']});
    });

    it('Clicks on menu elements', () => {
        console.log(document.getElementById("#dlc-test"));
    })

    

});