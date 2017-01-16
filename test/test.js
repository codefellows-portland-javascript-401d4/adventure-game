/* globals angular, chai */

const { assert } = chai;

describe( 'controller testing', () => {

    beforeEach(angular.mock.module('controllers'));

    let $controller, $scope;

    beforeEach(angular.mock.inject( function( $rootScope, _$controller_ ) {
        $scope = $rootScope.$new();
        $controller = _$controller_;
    }));

    it('player brews coffee', () => {
        $controller('main', {$scope});
        
        $scope.brewCoffee();
        assert.equal(($scope.coffee), true);
    });

    it('player wins in the final room', () => {
        $controller('main', {$scope});
        $scope.room = 'final';
        assert.equal(($scope.room), 'final');
    });

});