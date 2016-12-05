const {assert} = chai;

describe('App controller', () => {
    beforeEach(angular.mock.module('primary'));

    let $controller, $scope;

    beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
        $scope = $rootScope.$new();
        $controller = _$controller_;
    }));

    it('Checks the game state is set and playable', () => {
        assert.equal($scope.nationName, 'Cocomo');
        assert.equal($scope.rivalNation, 'Shaftistan');
    });

});