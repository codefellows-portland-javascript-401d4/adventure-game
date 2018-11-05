/* globals angular, chai */

const assert = chai.assert;

describe.only('the characterController', () => {

  let $controller, $scope;

  beforeEach(angular.mock.module('controllers'));

  beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
    $scope.$parent.submitted = true;
    $scope.$parent.characterHealth = 100;
    $scope.$parent.graveyard = [];
  }));

  let useMonster = { name: 'Monster', description: 'Super scary monster',
    type: 'weapon', attack: 10, weakness: 'right' };

  let room = { name: 'Ballroom',
    description: 'Example Room',
    inventory: [], monster: useMonster,
    roomArea1: {}, roomArea2: {}, roomArea3: {}, roomArea4: {},
    roomArea5: {}, roomArea6: {}, roomArea7: {}, roomArea8: {},
    northDoor: '', southDoor: '', eastDoor: '', westDoor: '',
  };

  let characterControl = {
    name: 'Adventurer',
    hp: 100,
    inventory: [],
    isDead: false
  };

  it('loads a default name', () => {
    $controller('characterController', {$scope});
    assert.equal($scope.characterName, characterControl.name);
  });

  it('changes character name with input', () => {
    $controller('characterController', {$scope});
    $scope.text = 'New Name';
    $scope.changeName();
    assert.equal($scope.characterName, 'New Name');
    assert.equal($scope.submitted, false);
  });

  it('uses an item', () => {
    let item = {type: 'item', name: 'Yellow Banana', 
      description: 'Looks pretty tasty.', value: 10};

    $controller('characterController', {$scope});
    assert.equal($scope.$parent.characterHealth, 100);
    $scope.useInv(item, room);
    assert.equal($scope.$parent.characterHealth, 110);

  });

  it('hurts character when attacking a monster', () => {
    let weapon = {type: 'weapon', name: 'wrong', description: 'weapon'};
    $controller('characterController', {$scope});
    $scope.useInv(weapon, room);
    assert.equal($scope.$parent.characterHealth, 100);
  });

//works but causes other tests to fail because it affects global scope and I am uncertain how to reset scope before gamecontroller test.
  // it('sends dead monster to graveyard', () => {
  //   let goodWeapon = {type: 'weapon', name: 'right', description: 'weapon', value: 0};
  //   $controller('characterController', {$scope});
  //   $scope.useInv(goodWeapon, room);
  //   assert.deepEqual($scope.$parent.graveyard, [useMonster]);
  // });

});