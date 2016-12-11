import items from '../data/items';

const itemMethods = {};

itemMethods.get = function() {
  let index = Math.floor(Math.random() * (items.length - 1));
  let selectedItem = items.splice(index, 1);
  return selectedItem[0]; //selected item is an array of objects - either one or two items
};

export default itemMethods;