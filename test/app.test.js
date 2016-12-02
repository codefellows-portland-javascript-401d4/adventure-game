const {assert} = chai;

describe('game controller', () => {
    beforeEach(angular.mock.module('myApp'));

    let $controller, $scope;
    beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
        $scope = $rootScope.$new();
        $controller = _$controller_;
    }));

    it('initial history of user settings is empty', () => {
        $controller('myGame', {$scope});
        assert(Array.isArray($scope.playerHistory),'should initially be empty');
        assert.equal($scope.playerHistory.length, 0);
    });
});