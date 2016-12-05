const assert = chai.assert;

describe('game controller', () => {

  beforeEach(angular.mock.module('controllers'));

  let $controller, $scope;
  beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
    $controller('game', { $scope });
  }));

  it('initializes game', () => {
    assert.equal($scope.score, 0);
    assert.equal($scope.room, 'swipe');
    assert.equal($scope.currentProfile.name, 'Chad');
  });

  it('changes currentProfile when player swipes left', () => {
    $scope.swipeLeft();
    assert.equal($scope.currentProfile.name, 'Becky');
    assert.equal($scope.profileStage.optionA.description, 'Becky can put them away.');
  });

  it('scores player response and advances stage', () => {
    $scope.optionA();
    assert.equal($scope.score, 1);
    assert.equal($scope.dateStage.optionA, 'Play pool');
    assert.equal($scope.profileStage.optionA.description, 'Chad agrees and you play pool.');
  });

  it('checks player score', () => {
    $scope.score = 3;
    $scope.checkScore();
    assert.equal($scope.room, 'win');

    $scope.score = 0;
    $scope.checkScore();
    assert.equal($scope.room, 'lose');
  });

it('resets game conditions after date', () => {
    $scope.score = 3;
    $scope.currentProfile = $scope.currentProfile.next;
    $scope.resetGame();
    assert.equal($scope.score, 0);
    assert.equal($scope.currentProfile.name, 'Chad');
  });

}); 
