import itemMethods from '../src/models/itemMethods';
import items from '../src/models/items';

import chai from 'chai';

const {assert} = chai;

describe('the get item method', () => {
  const returnedArray = itemMethods.get();

  it('gets an item', () => {
    assert.isOk(returnedArray[0].type, 'weaponMethods.get does not return an object with a type property');
  });

  it('removes item from items array', () => {
    assert.notInclude(items, returnedArray[0], 'itemMethods.get does not remove an object from array');
  });

});