import charMethods from './characterMethods';
import character from './character';

const gameMethods = {};

gameMethods.hurtCharacter = function(monster) {
  character.hp -= monster.attack;
  if (character.hp <= 0) {
    gameMethods.endOfGame();
  }
};

gameMethods.endOfGame = function() {
  //TODO: on end of game share the graveyard
  //when dead = true use ng-show on the element on index.html that shows the graveyard
  //where does this live on index.html? in the <tag> that holds the inventory?
  character.isDead = true;
};

gameMethods.useInvItem = function(item, currRoom) {
  //check if monster is in room
  
  //do i need to check which square the item is on to remove it on use?
  //does deleting the object off the room object remove it from the room view?

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
