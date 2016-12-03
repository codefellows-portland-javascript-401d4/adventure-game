/* globals angular, chai */

const { assert } = chai;

describe( 'counter controller', () => {

  beforeEach(angular.mock.module('controllers'));
    
  let $controller, $scope;

  beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
  }));

  it('starting room is Dining Room', () => {
    $controller('game', { $scope });
    assert.equal($scope.room, 'dining');
  });

  it('room-to-room navigation works', () => {
    $controller('game', { $scope });
    $scope.room = 'dining';
    $scope.office();
    assert.equal($scope.room, 'office');
  });

  it('completed tasks change state', () => {
    $controller('game', { $scope });
    $scope.risottoMade = false;
    $scope.makeRisotto();
    assert.equal($scope.risottoMade, true);
  });

  it('game resets properly', () => {
    $controller('game', { $scope });
    $scope.room = 'victory';
    $scope.reset();
    assert.equal($scope.room, 'dining');
  });

});