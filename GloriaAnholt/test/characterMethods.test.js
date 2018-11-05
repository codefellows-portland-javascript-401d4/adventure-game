/* globals chai */

import charMethods from '../src/models/characterMethods';
import character from '../src/data/character';
import monsters from '../src/data/monsters';

const { assert } = chai;

describe('the pick up and delete item methods', () => {
  
  let irrelevantItem = {
    name: 'irrelevant item',
    description: 'Easily overlooked',
    value: 0
  };

  let fakeRoom = {
    name: 'Fake Room',
    description: 'A fake room for testing',
    monster: {
      type: 'monster',
      name: 'neverwas',
      description: 'Dangerous because unknown',
      weakness: 'nothing',
      attack: 15
    },
    inventory: []
  };

  it('adds an item to inventory', () => {
    assert.notInclude(character.inventory, irrelevantItem, 'character should not have an item before picking it up');

    charMethods.pickUpItem(irrelevantItem, fakeRoom);
    assert.include(character.inventory, irrelevantItem, 'charMethods.pickUpItem does not add an object to the character array');
    assert.notInclude(fakeRoom.inventory, irrelevantItem, 'charMethods.pickUpItem does not remove an object to the room array');
  });

  it('deletes an item from inventory', () => {
    charMethods.deleteFromInv(irrelevantItem);
    assert.notInclude(character.inventory, irrelevantItem, 'charMethods.deleteFromInv does not remove an object from the array');
  });

});

describe('the battle a monster method', () => {
  let fakeRoom = {
    name: 'Fake Room',
    description: 'A fake room for testing',
    monster: {
      type: 'monster',
      name: 'neverwas',
      description: 'Dangerous because unknown',
      weakness: 'nothing',
      attack: 15
    },
    inventory: []
  };

  let fakeWrongWeapon = {
    type: 'weapon',
    name: 'something',
    description: 'Something is not always better than nothing.',
  };

  let fakeRightWeapon = {
    type: 'weapon',
    name: 'nothing',
    description: 'Something is not always better than nothing.',
  };

  it('reduces character hp if wrong weapon used', () => {
    let initCharHp = character.hp;
    charMethods.battleMonster(fakeWrongWeapon, fakeRoom);

    assert.isBelow(character.hp, initCharHp, 'charMethods.battleMonster does not reduce the character hp when monster attacks');
  });

  it('removes monster from room, puts monster in graveyard and removes object from inventory if correct weapon selected.', () => {
    let initRoomMonster = fakeRoom.monster;
    charMethods.pickUpItem(fakeRightWeapon, fakeRoom);
    charMethods.battleMonster(fakeRightWeapon, fakeRoom);

    assert.equal(fakeRoom.monster, false, 'charMethods.battleMonster did not remove monster from room');
    assert.include(monsters.graveyard, initRoomMonster, 'charMethods.battleMonster did not put monster in graveyard');
    assert.notInclude(character.inventory, fakeRightWeapon, 'charMethods.battleMonster did not remove weapon from inventory');
  });

  describe('the use item method', () => {

    let dangerousItem = {
      name: 'dangerous item',
      description: 'An instant-kill item',
      value: -200
    };
    
    it('changes the hp total of the character, deletes the item from inventory and if hp <= 0 ends the game', () => {
      let initCharHp = character.hp;

      charMethods.useItem(dangerousItem);
      assert.isBelow(character.hp, initCharHp, 'charMethods.useItem does not reduce the character hp when item is dangerous');
      assert.notInclude(character.inventory, dangerousItem, 'charMethods.deleteFromInv does not remove an object from the array');
      assert.deepEqual(character.isDead, true, 'charMethods.useItem did not run endOfGame when character.hp <= 0');
      //assert end of game happens
    });

  });

});