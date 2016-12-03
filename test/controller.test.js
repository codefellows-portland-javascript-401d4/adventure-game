const {assert} = chai;

describe('controller tests',() => {

  beforeEach(angular.mock.module('controllers'));

  let $controller, $scope;
  beforeEach(angular.mock.inject(function($rootScope, _$controller_){
    $scope = $rootScope.$new();
    $controller = _$controller_;
    $controller('trail', {$scope});

  }));

  it('day intially empty string', () => {
    assert.equal($scope.day, '');
  });

  it('changes value of a day', () => {
    $scope.supplies.gun = true;
    $scope.$digest();
    assert.equal($scope.day, 'day01');
  });

  it('day changes to day20', () => {
    $scope.supplies.gun = true;
    $scope.fight();
    assert.equal($scope.day, 'day20');
  });

  it('day changes to dead', () => {
    $scope.supplies.food = true;
    $scope.fight();
    assert.equal($scope.day, 'dead');

  });
  
  it('you win', () => {
    $scope.wait();
    assert.equal($scope.message, 'You made it to Oregon, congrats! And there\'s too many damn people in Portland, so could you leave already?');
  });

});
