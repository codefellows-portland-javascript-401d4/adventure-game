import angular from 'angular';
import chai from 'chai';

//what does this syntax mean?
const {assert} = chai;

describe('the useInvItem method', () => {

  beforeEach(angular.mock.module('controllers'));

  let $controllers;
  let $scope;

  beforeEach(angular.mock.inject(function($rootScope, _$controllers_) {
    $scope = $rootScope.new();
    $controllers = _$controllers_;
  }));

  it('hurts character if attacked by monster', () => {
    assert /* char.hp "before" > char.hp "after" */;
  });

  it('displays graveyard when character loses all hp', () => {
    assert /* when char.hp === 0 then char.isDead === true */;
  });



});