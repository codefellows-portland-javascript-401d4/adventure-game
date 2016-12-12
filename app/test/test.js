/* globals angular, chai */

const { assert } = chai;

describe( 'component', () => {

    beforeEach(angular.mock.module('components'));
    
    const fn = angular.mock.inject(function(_$componentCompiler_) {
        // $rootScope allows us to create new scopes
        // $scope = $rootScope.$new();
        // $controller is the generic controller factory
        $controller = _$controller_;
    });

    beforeEach(fn);

    it('player does not have coffee in the firstRoom', () => {
        const location = {};
        const player = { location };

        const $scope = {};

        $controller('firstRoom', { 
            $scope,
            playerService: {
                getNew() { return player; }
            }
        });

        assert.equal($scope.player, player);
        assert.equal($scope.getLocation(), location);
    });

});