import items from './weapons';

const weaponMethods = {};

weaponMethods.get = function() {
  let index = Math.floor(Math.random() * (items.length + 1));
  let selectedWeapon = items.splice(index, 1);
  return selectedWeapon; //selected item is an array of objects - either one or two items
};

export default weaponMethods;