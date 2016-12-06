const assert = chai.assert;

describe('controller functions', () => {

  beforeEach(angular.mock.module('controllers'));

  let $controller, $scope;

  beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
    $controller('game', { $scope });
    $controller('score', { $scope });
  }));

  it('initializes game', () => {
    assert.equal($scope.score, 0);
    assert.equal($scope.room, 'swipe');
    assert.equal($scope.currentProfile.name, 'Chad');
  });

  it('changes currentProfile when player swipes left', () => {
    $scope.swipeLeft();
    assert.equal($scope.currentProfile.name, 'Becky');
    assert.equal($scope.profileStage.optionA.description, 'Becky can put them away -- great choice. ');
  });

  it('scores player response and advances stage', () => {
    $scope.optionA();
    assert.equal($scope.score, 1);
    assert.equal($scope.dateStage.optionA, 'PLAY POOL');
    assert.equal($scope.profileStage.optionA.description, 'Chad welcomes any chance to dominate people in a physical contest. ');
  });

  it('checks player score', () => {
    console.log('scope.room initially', $scope.room);
    $scope.score = 3;
    $scope.checkScore();
    assert.equal($scope.$parent.room, 'win');

    $scope.score = 0;
    $scope.checkScore();
    assert.equal($scope.$parent.room, 'lose');
  });

  it('resets game conditions after date', () => {
    $scope.score = 3;
    $scope.currentProfile = $scope.currentProfile.next;
    $scope.resetGame();
    assert.equal($scope.score, 0);
    assert.equal($scope.currentProfile.name, 'Chad');
  });

}); 
