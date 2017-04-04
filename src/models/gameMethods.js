import charMethods from './characterMethods';
import character from '../data/character';

const gameMethods = {};

gameMethods.hurtCharacter = function(monster) {
  character.hp -= monster.attack;
  alert(`${monster.name} just attacked you!`);
  if (character.hp <= 0) {
    gameMethods.endOfGame();
  }
};

gameMethods.endOfGame = function() {
  //when dead = true use ng-show on the element on index.html that shows the graveyard
  character.isDead = true;
  alert('You have died! Reload page to play again!');
};

gameMethods.useInvItem = function(item, currRoom) {
  //check if monster is in room

  if (item.type === 'weapon') {

    if (currRoom.monster) {
      charMethods.battleMonster(item, currRoom);
    } else {
      alert('I\'m sorry, you can\'t use that item in this room.');
    }

  } else if (item.type === 'item') {
    charMethods.useItem(item);
  }
};

export default gameMethods;
