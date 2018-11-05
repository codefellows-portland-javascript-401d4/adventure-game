import weaponMethods from '../src/models/weaponMethods';
import weapons from '../src/models/weapons';

import chai from 'chai';
const assert = chai.assert;

describe('the get weapon method', () => {

  const weapon = weaponMethods.get();

  it('gets a object of weapon type', () => {
    assert.isOk(weapon.type, 'weaponMethods.get does not return an object with a type property');
    assert.isOk(weapon.name, 'weaponMethods.get does not return an object with a name property');
    assert.isOk(weapon.description, 'weaponMethods.get does not return an object with a description property');
  });

  it('removes weapon from weapons array', () => {
    assert.notInclude(weapons, weapon, 'weaponMethods.get does not remove an object from array');
  });

});