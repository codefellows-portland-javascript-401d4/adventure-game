/* globals angular, assert */

describe( 'food counter controller', () => {

    beforeEach(angular.mock.module('controllers'));
    
    let $controller, $scope;
    beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $controller('food', { $scope });

    }));

    it('starting food level is 100', () => {
        assert.equal($scope.foodLevel, 100);
    });

    it('decrements food by a quantity between 10 and 20 points', () => {
        $scope.eatFood();
        assert.isAtLeast($scope.foodLevel, 80);
        assert.isAtMost($scope.foodLevel, 90);
    });

    it('adds food by a quantity between 10 and 20 points', () => {
        $scope.addFood();
        assert.isAtLeast($scope.foodLevel, 110);
        assert.isAtMost($scope.foodLevel, 120);
    });

    it('reduces food level to zero', () => {
        $scope.loseFood();
        assert.equal($scope.foodLevel, 0);
    });

    it('tries your luck when food is less than 80 pounds', () => {
        $scope.foodLuck(79);
        console.log('food level: ', $scope.foodLevel);
        assert.notEqual(79, $scope.foodLevel);
    });

});
