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

});

describe('Minister asset testing', () => {
    beforeEach(angular.mock.module('primary'));

    let $controller, $scope;

    const scopeSet = angular.mock.inject(function($rootScope, _$controller_) {
        $scope = $rootScope.$new();
        $controller = _$controller_;
    });

    beforeEach(scopeSet);

    it('Verify player ministers are unselected', () => {
        $controller('playerInfo', {$scope});
        assert.deepEqual($scope.defMinister, {});
        assert.deepEqual($scope.eduMinister, {});
        assert.deepEqual($scope.primeMinister, {});
    });   

    it('Verify rival ministers are reset', () => {
        $controller('playerInfo', {$scope});
        assert.deepEqual($scope.eduMinisterRival, {name: 'Xi Jinping', def: 5, edu: 9, poli: 7, src: 'img/XiJinping.jpg', skill: ['Economy!', 'Silk Road']});
        assert.deepEqual($scope.defMinisterRival, {name: 'Putin', def: 8, edu: 4, poli: 7, src: 'img/putin.jpg', skill: ['Referendum!', 'Nuclear Winter']});
        assert.deepEqual($scope.primeMinisterRival, {name: 'Angela Merkle', def: 4, edu: 7, poli: 8, src: 'img/aMerkel.jpg', skill: ['Chancellor!', 'Welcome!']});
    });

    it('Checks the player has the standard playset', () => {
        $controller('playerInfo', {$scope});
        assert.deepEqual($scope.objMinisters, [
            {name: 'Abe Lincoln', def: 10, edu: 10, poli: 10, src: 'img/abe.jpg', skill: ['Abolish!', 'Presidential Address'], age: 0},
            {name: 'Gandhi', def: 2, edu: 6, poli: 9, src: 'img/Gandhi.jpg', skill: ['Non-Violent Protest!', 'Unite!'], age: 0},
            {name: 'Angela Merkle', def: 4, edu: 7, poli: 8, src: 'img/aMerkel.jpg', skill: ['Chancellor!', 'Welcome!'], age: 0},
            {name: 'Ben Franklin', def: 4, edu: 9, poli: 8, src: 'img/ben.jpg', skill: ['Founding Father!', 'Lightning'], age: 0}
        ]);
    });

    it('Verify Battle Report', () => {
        $controller('playerInfo', {$scope});
        assert.deepEqual($scope.battleReport, '');
        assert.deepEqual($scope.battle, false);

    });

    it('Open and close the instructions menu', () => {
        $controller('playerInfo', {$scope});
        assert.deepEqual($scope.intro, false);
        $scope.instructions();
        assert.deepEqual($scope.intro, true);
    });

    it('Do ministers Age?', () => {
        $controller('playerInfo', {$scope});

        const testMinisters1 = {name: 'Abe Lincoln', def: 10, edu: 10, poli: 10, src: 'img/abe.jpg', skill: ['Abolish!', 'Presidential Address'], age: 0};
        const testMinisters2 = {name: 'Gandhi', def: 2, edu: 6, poli: 9, src: 'img/Gandhi.jpg', skill: ['Non-Violent Protest!', 'Unite!'], age: 0};
       

    });

    it('Can buy DLC', () => {
        $controller('playerInfo', {$scope});
        assert.isOk($scope.objMinisters.length === 4);
        $scope.buyDLC();
        assert.isOk($scope.objMinisters.length === 6);
    });

    it('Changes the opponents, Fail if Putin is selected again randomly', () => {
        $controller('playerInfo', {$scope});
        var pre = {name: 'Putin', def: 8, edu: 4, poli: 7, src: 'img/putin.jpg', skill: ['Referendum!', 'Nuclear Winter']};
        assert.deepEqual(pre, $scope.defMinisterRival);
    
        $scope.opponent();
        assert.notDeepEqual(pre, $scope.defMinisterRival);
    });

});