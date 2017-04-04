import character from '../data/character';
import gameMethods from './gameMethods';
import monsterMethods from './monsterMethods';

const charMethods = {};

charMethods.useItem = function(item) {
  character.hp += item.value;
  charMethods.deleteFromInv(item);
  if (character.hp <= 0) {
    gameMethods.endOfGame();
  }
};


charMethods.pickUpItem = function(item, currRoom) {
  let index = currRoom.inventory.indexOf(item);
  currRoom.inventory.splice(index, 1);
  character.inventory.push(item);
};

charMethods.deleteFromInv = function(item) {
  let index = character.inventory.indexOf(item);
  character.inventory.splice(index, 1);
};

charMethods.battleMonster = function(weapon, currRoom) {
  //check if matches monster weakness
  if (weapon.name === currRoom.monster.weakness) {
    alert(`You killed ${currRoom.monster.name}!`);
    charMethods.deleteFromInv(weapon);
    monsterMethods.bury(currRoom.monster);
    currRoom.monster = false;
  }else{
    gameMethods.hurtCharacter(currRoom.monster);
  }
};

export default charMethods;