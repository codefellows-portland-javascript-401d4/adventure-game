/* globals chai */

const { assert } = chai;

import roomMethods from '../src/models/roomMethods';

describe('Room methods', () => {

  var bedroom1 = { name: 'bedroom1' };
  var bedroom2 = { name: 'bedroom2' };

  it('links the north room to another room', () => {
    roomMethods.linkRooms(bedroom1, bedroom2, 'northDoor');
    assert.equal(bedroom1.northDoor, bedroom2.name);
    assert.equal(bedroom2.southDoor, bedroom1.name);
  });

  it('links the south room to another room', () => {
    roomMethods.linkRooms(bedroom1, bedroom2, 'southDoor');
    assert.equal(bedroom1.southDoor, bedroom2.name);
    assert.equal(bedroom2.northDoor, bedroom1.name);
  });

  it('links the west room to another room', () => {
    roomMethods.linkRooms(bedroom1, bedroom2, 'westDoor');
    assert.equal(bedroom1.westDoor, bedroom2.name);
    assert.equal(bedroom2.eastDoor, bedroom1.name);
  });

  it('links the east room to another room', () => {
    roomMethods.linkRooms(bedroom1, bedroom2, 'eastDoor');
    assert.equal(bedroom1.eastDoor, bedroom2.name);
    assert.equal(bedroom2.westDoor, bedroom1.name);
  });


  it('looks up a room when given an existing link', () => {

    var Foyer = { name: 'Foyer', monster: false, inventory: [],
      roomArea1: {}, roomArea2: {}, roomArea3: {}, roomArea4: {},
      roomArea5: {}, roomArea6: {}, roomArea7: {}, roomArea8: {},
      northDoor: 'Hallway', southDoor: '', eastDoor: '', westDoor: ''};
    var Hallway = { name: 'Hallway',
      description: 'A long stately hallway, lined with fading paintings and dusty statues.' +
      'The lights look like old gas lamps, but none are lit. There\'s a door at the end of the hall.',
      monster: false, inventory: [],
      roomArea1: {}, roomArea2: {}, roomArea3: {}, roomArea4: {},
      roomArea5: {}, roomArea6: {}, roomArea7: {}, roomArea8: {},
      northDoor: '', southDoor: '', eastDoor: '', westDoor: ''};

    const test = roomMethods.getRoom(Foyer, 'northDoor');
    assert.deepEqual(Hallway, test);

  });

  it('gets a new room when given an unused door', () => {

    var Foyer = { name: 'Foyer', monster: false, inventory: [],
      roomArea1: {}, roomArea2: {}, roomArea3: {}, roomArea4: {},
      roomArea5: {}, roomArea6: {}, roomArea7: {}, roomArea8: {},
      northDoor: '', southDoor: '', eastDoor: '', westDoor: ''};

    const testRoom = roomMethods.getRoom(Foyer, 'northDoor');
    assert.equal(Foyer.northDoor, testRoom.name.replace(' ', ''));
    assert.equal(Foyer.name, testRoom.southDoor);

  });

  it('adds a monster to the roomObj.monster property', () => {

    var Foyer = { name: 'Foyer', monster: false, inventory: [],
      roomArea1: {}, roomArea2: {}, roomArea3: {}, roomArea4: {},
      roomArea5: {}, roomArea6: {}, roomArea7: {}, roomArea8: {},
      northDoor: '', southDoor: '', eastDoor: '', westDoor: ''};
    const monsterChance = roomMethods.addMonster(Foyer);
    if (monsterChance < .60) {
      assert.isOk(Foyer.monster, 'Chance was below 60%, should have a monster');
    } else {
      assert.isFalse(Foyer.monster, 'Chance was above 60%, should not have a monster');
    }
  });

  it('adds a weapon to the roomObj and inventory array', () => {

    var Foyer = { name: 'Foyer', monster: false, inventory: [],
      roomArea1: {}, roomArea2: {}, roomArea3: {}, roomArea4: {},
      roomArea5: {}, roomArea6: {}, roomArea7: {}, roomArea8: {},
      northDoor: '', southDoor: '', eastDoor: '', westDoor: '' };
    const itemChance = roomMethods.addItemWeapons(Foyer);
    if (itemChance <= .30) {
      for (let i = 1; i < 9; i++) {
        // Nothing added, assert that all roomAreas still empty
        assert.deepEqual(Foyer['roomArea' + i], {}, 'chance is below 30%, should have no weapons or items');
      }
      assert.equal(Foyer.inventory.length, 0, 'no weapons in the inventory array');
    } else if (itemChance > .30 && itemChance <= .60) {
      let used;
      for (let i = 1; i < 9; i++) {
        if (Foyer['roomArea' + i].type !== undefined) {
          used = i;
          break;
        }
      }
      let weapon = Foyer['roomArea'+used];
      // If something was added, assert that it's an object with a weapon property
      assert.equal(weapon.type, 'weapon', 'chance is above 30%, so weapon');
      assert.equal(Foyer.inventory[0].type, 'weapon', 'adds a weapon to the inventory array');
    }

  });


  it('adds an item to the roomObj', () => {

    var Foyer = { name: 'Foyer', monster: false, inventory: [],
      roomArea1: {}, roomArea2: {}, roomArea3: {}, roomArea4: {},
      roomArea5: {}, roomArea6: {}, roomArea7: {}, roomArea8: {},
      northDoor: '', southDoor: '', eastDoor: '', westDoor: '' };
    const itemChance = roomMethods.addItemWeapons(Foyer);
    if (itemChance > .60) {
      let used;
      for (let i = 1; i < 9; i++) {
        if (Foyer['roomArea' + i].type !== undefined &&
          Foyer['roomArea' + i].type !== 'weapon') {
          used = i;
          break;
        }
      }
      // If something was added, assert that it's an object with an item property
      assert.equal(Foyer['roomArea' + used].type, 'item', 'chance is above 70%, so item');
      assert.equal(Foyer.inventory[1].type, 'item', 'adds an item to the inventory array');
    } else {
      for (let i = 1; i < 9; i++) {
        // If nothing was added, assert that no type properties are set to item
        if (Foyer['roomArea' + i].type === undefined) break;
        assert.notEqual(Foyer['roomArea' + i].type, 'item', 'chance is below 70%, so no item');
      }
      assert.isAtMost(Foyer.inventory.length, 1, 'chance is below 75%, so no item');
    }
  });

});