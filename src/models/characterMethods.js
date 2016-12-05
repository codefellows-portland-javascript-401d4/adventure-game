import character from './character';
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

charMethods.pickUpItem = function(item) {
  character.inventory.push(item);
};

charMethods.deleteFromInv = function(item) {
  let index = character.inventory.indexOf(item);
  character.inventory.splice(index, 1);
};

charMethods.battleMonster = function(item, currRoom) {
  //check if matches monster weakness
  if (item.name === currRoom.monster.weakness) {
    charMethods.deleteFromInv(item);
    monsterMethods.bury(currRoom.monster);
    currRoom.monster = false;
  }else{
    gameMethods.hurtCharacter(currRoom.monster);
  }
};

export default charMethods;