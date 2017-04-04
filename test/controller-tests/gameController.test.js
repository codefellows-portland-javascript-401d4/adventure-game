/* globals angular, chai */

const assert = chai.assert;

describe.only('the gameController', () => {

  let $controller, $scope;

  beforeEach(angular.mock.module('controllers'));

  beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
  }));

  
  let Foyer = { name: 'Foyer',
    description: 'You\'re in the entry of a large, old house. More of a mansion, really. ' +
    'It looks like no one has kept up with cleaning or repairs in a long time, dust and ' +
    'cobwebs cover every surface, some of the furniture is draped in dingy once-white sheets.' +
    'There doesn\'t seem to be anyone here, might as well take a look around.',
    inventory: [], monster: false,
    roomArea1: {}, roomArea2: {}, roomArea3: {}, roomArea4: {},
    roomArea5: {}, roomArea6: {}, roomArea7: {}, roomArea8: {},
    northDoor: '', southDoor: '', eastDoor: '', westDoor: '',
  };

  it('properly loads Foyer as the starting room', () => {

    $controller('gameController', { $scope });
    // The game should initialize with the first room as Foyer and full health
    $scope.graveyard = [];
    assert.equal($scope.characterHealth, 100);
    assert.isAtMost($scope.inventory.length, 2);
    assert.deepEqual($scope.currentRoom, Foyer);
    assert.deepEqual($scope.roomInv, Foyer.inventory);
    assert.deepEqual($scope.graveyard, []);

  });


  it('loads a new room', () => {

    $controller('gameController', { $scope });
    // It should load Foyer as the first room
    assert.deepEqual($scope.currentRoom, Foyer);
    // It should change rooms
    $scope.changeRoom(Foyer, 'northDoor');
    // The new room should have a name that is _not_ Foyer
    assert.isOk($scope.currentRoom.name);
    assert.isAtMost($scope.roomInv.length, 2);
    assert.notEqual($scope.currentRoom.name, 'Foyer');

  });


  it('hurts the character when a monster is clicked', () => {

    let monster = { name: 'Monster', description: 'Super scary monster',
      type: 'weapon', attack: 10 };

    $controller('gameController', { $scope });
    $scope.graveyard = [];
    assert.equal($scope.characterHealth, 100);
    assert.equal($scope.charDead, false);
    assert.deepEqual($scope.graveyard, []);
    $scope.monsterClick(monster);
    assert.equal($scope.characterHealth, 90);
    $scope.monsterClick(monster);
    assert.equal($scope.characterHealth, 80);

  });


  it('kills the character when a monster is repeatedly clicked', () => {

    let monster = { name: 'Monster', description: 'Super scary monster',
      type: 'weapon', attack: 50 };

    $controller('gameController', { $scope });
    assert.equal($scope.charDead, false);
    $scope.monsterClick(monster);
    $scope.monsterClick(monster);
    assert.isAtMost($scope.characterHealth, 0);
    assert.equal($scope.charDead, true);

  });


  it('picks up an item when item is clicked', () => {

    let item = { name: 'Banana', description: 'yummy',
      value: 10, type: 'item' };
    let roomArea = 'roomArea1';

    $controller('gameController', { $scope });
    assert.deepEqual($scope.inventory, []);
    $scope.itemClick(item, roomArea, Foyer);
    console.log($scope.roomInv);
    //assert.deepEqual($scope.roomInv, [item]);

  });

});