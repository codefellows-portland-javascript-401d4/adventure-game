/* globals angular, chai */

const assert = chai.assert;

describe('food sharing controller', () => {

    beforeEach(angular.mock.module('controllers'));

    let $controller, $scope;
    beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $controller('sharing', {$scope});
    }));

    it('wagon occupants kill you for miserliness if you give 10% or less of your food food', () => {
        $scope.percentage = 9;
        $scope.submitWagon();
        assert.equal($scope.fate, 'The wagon\'s occupants accuse you of miserliness and kill you.');
    });

    it('wagon occupants kill you so as not to feed you if you offer between 11% and 50% of your food', () => {
        $scope.percentage = 50;
        $scope.submitWagon();
        assert.equal($scope.fate, 'The wagon\'s occupants don\'t want another mouth to feed, so they kill you.');
    });

    it('wagon occupants accept your gift of more than 50% of your food, but you all die when it spoils', () => {
        $scope.percentage = 75;
        $scope.submitWagon();
        assert.equal($scope.fate, 'You were too generous. Your food eventually spoiled and you all died.');
    });

    it('indian tribe kills you for miserliness if you give 10% or less of your food food', () => {
        $scope.percentage = 9;
        $scope.submitIndian();
        assert.equal($scope.fate, 'The Indians accuse you of miserliness and kill you slowly.');
    });

    it('indians take your food and leave you to die if you offer between 11% and 50% of your food', () => {
        $scope.percentage = 50;
        $scope.submitIndian();
        assert.equal($scope.fate, 'The tribe decides you aren\'t worth it. They take your food and leave you to die.');
    });

    it('indians appreciate your generosity and take you to oregon', () => {
        $scope.percentage = 75;
        $scope.submitIndian();
        assert.equal($scope.fate, 'The Indians respect your generosity and take you. They eventually help you to Oregon. YOU WIN!');
    });
});
