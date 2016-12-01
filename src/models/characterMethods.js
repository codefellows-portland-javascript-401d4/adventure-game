let character = require('./adventurer');

const charMethods = {};

charMethods.setName = function(name) {
  character.name = name;
};

charMethods.useItem = function(item) {
  character.hp += item.value;
};

charMethods.pickUpItem = function(item) {
  character.inventory.push(item);
};

