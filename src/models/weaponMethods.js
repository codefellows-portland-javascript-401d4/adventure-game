import weapons from './weapons';

const weaponMethods = {};

weaponMethods.get = function() {
  let index = Math.floor(Math.random() * (weapons.length - 1));
  let selectedWeapon = weapons.splice(index, 1);
  return selectedWeapon[0]; //selected weapon is an array of one object
};

export default weaponMethods;