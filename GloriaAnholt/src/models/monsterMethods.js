import monsters from '../data/monsters';

const monsterMethods = {};

//splice from compendium
//push to active
//return to room
monsterMethods.get = function() {
  const pickMonster = Math.floor(Math.random() * (monsters.compendium.length + 1));
  const removedMonster = monsters.compendium.splice(pickMonster, 1);

  return removedMonster[0];
};

//remove from active
//push to graveyard
monsterMethods.bury = function(deadMonster) {
  monsters.graveyard.push(deadMonster); 
};

export default monsterMethods;

