/* globals chai */

import monsterMethods from '../src/models/monsterMethods';
import monsters from '../src/data/monsters';

const { assert } = chai;

describe('the get monster method', () => {
  const returnedObj = monsterMethods.get();

  it('gets a monster', () => {
    assert.isOk(returnedObj.type, 'monsterMethods.get does not return an object with a type property');
  });

  it('removes monster from compendium', () => {
    assert.notInclude(monsters.compendium, returnedObj, 'monsterMethods.get does not remove an object from array');
  });

});

describe('the bury monster method', () => {
  let fakeMonster = {
    type: 'monster',
    name: 'neverwas',
    description: 'never described',
    weakness: 'nothing',
    attack: 0
  };

  it('pushes a monster into the graveyard', () => {
    monsterMethods.bury(fakeMonster);
    assert.include(monsters.graveyard, fakeMonster, 'weaponMethods.bury does not push an object into the array');
  });

});