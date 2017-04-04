/* globals chai */

import itemMethods from '../src/models/itemMethods';
import items from '../src/data/items';

const { assert } = chai;

describe('the get item method', () => {
  const returnedItem = itemMethods.get();

  it('gets an item', () => {
    // getting a weapon should return an object with our weapon properties
    assert.isOk(returnedItem.type, 'weaponMethods.get does not return an object with a type property');
    assert.isOk(returnedItem.name, 'weaponMethods.get does not return an object with a type property');
    assert.isOk(returnedItem.description, 'weaponMethods.get does not return an object with a type property');
    assert.isOk(returnedItem.value, 'weaponMethods.get does not return an object with a type property');
  });

  it('removes item from items array', () => {
    assert.notInclude(items, returnedItem, 'itemMethods.get does not remove an object from array');
  });

});