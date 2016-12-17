/* globals angular, chai */

const { assert } = chai;

describe( 'controller', () => {

    beforeEach(angular.mock.module('controllers'));

    let $controller, $scope;

    beforeEach(angular.mock.inject( function( $rootScope, _$controller_ ) {
        $scope = $rootScope.$new();
        $controller = _$controller_;
    }));

    
    // const fn = angular.mock.inject(function(_$componentCompiler_) {
    //     // $rootScope allows us to create new scopes
    //     // $scope = $rootScope.$new();
    //     // $controller is the generic controller factory
    //     $controller = _$controller_;
    // });

    // beforeEach(fn);

    // it('player does not win in the firstRoom', () => {
    //     $controller('main', {$scope});
    //     $scope.room === 
    //     assert.equal(($scope.class), `not-winning`);

    it('player wins in the final room', () => {
        $controller('main', {$scope});
        $scope.room = 'final';

        assert.equal($scope.victory($scope.room), 'final');
    //     const location = {};
    //     const player = { location };

    //     const $scope = {};

    //     $controller('firstRoom', { 
    //         $scope,
    //         playerService: {
    //             getNew() { return player; }
    //         }
    //     });

    //     assert.equal($scope.player, player);
    //     assert.equal($scope.getLocation(), location);
    // });
    });

});