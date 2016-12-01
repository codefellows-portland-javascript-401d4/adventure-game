const monsters = require('./monsters');

const monsterMethods = {};

//splice from compendium
//push to active
//return to room
monsterMethods.get = function() {
  const pickMonster = Math.floor(Math.random() * (monsters.compendium.length + 1));
  const removedMonster = monsters.compendium.splice(pickMonster, 1);
  monsters.active.push(removedMonster);

  console.log(removedMonster);
  return removedMonster;
};

//remove from active
//push to graveyard
monsterMethods.bury = function(deadMonster) {
  monsters.active = monsters.active.filter(function(el) {
    return el.name !== deadMonster.name;
  });
  monsters.graveyard.push(deadMonster); 
};

monsterMethods.get();

module.exports = monsterMethods;

