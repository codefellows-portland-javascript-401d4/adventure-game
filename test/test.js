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

  it('room-to-room navigation works: dining to office', () => {
    $controller('game', { $scope });
    $scope.room = 'dining';
    $scope.office();
    assert.equal($scope.room, 'office');
  });

// new test
  it('room-to-room navigation works: dining to kitchen', () => {
    $controller('game', { $scope });
    $scope.room = 'dining';
    $scope.kitchen();
    assert.equal($scope.room, 'kitchen');
  });

// new test
  it('room-to-room navigation works: kitchen to dining', () => {
    $controller('game', { $scope });
    $scope.room = 'kitchen';
    $scope.dining();
    assert.equal($scope.room, 'dining');
  });

// new test
  it('room-to-room navigation works: kitchen to pantry', () => {
    $controller('game', { $scope });
    $scope.room = 'kitchen';
    $scope.pantry();
    assert.equal($scope.room, 'pantry');
  });

// new test
  it('room-to-room navigation works: pantry to kitchen', () => {
    $controller('game', { $scope });
    $scope.room = 'pantry';
    $scope.kitchen();
    assert.equal($scope.room, 'kitchen');
  });

// new test
  it('room-to-room navigation works: office to dining', () => {
    $controller('game', { $scope });
    $scope.room = 'office';
    $scope.dining();
    assert.equal($scope.room, 'dining');
  });

// new test
  it('room-to-room navigation works: office to lose', () => {
    $controller('game', { $scope });
    $scope.room = 'office';
    $scope.lose();
    assert.equal($scope.room, 'lose');
  });

// new test
  it('room-to-room navigation works: office to victory', () => {
    $controller('game', { $scope });
    $scope.room = 'office';
    $scope.victory();
    assert.equal($scope.room, 'victory');
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
