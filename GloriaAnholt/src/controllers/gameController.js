import charMethods from '../models/characterMethods';
import gameMethods from '../models/gameMethods';
import roomMethods from '../models/roomMethods';
import character from '../data/character';
import rooms from '../data/rooms';
import monsters from '../data/monsters';


gameController.$inject = ['$scope'];

export default function gameController($scope) {
  // Initialize the game to start in the Foyer
  $scope.characterHealth = character.hp;
  $scope.charDead = character.isDead;
  $scope.inventory = character.inventory;
  $scope.currentRoom = rooms.Foyer;
  $scope.roomInv = rooms.Foyer.inventory;
  $scope.graveyard = monsters.graveyard;
  $scope.submitted = true;

  // On door click
  $scope.changeRoom = function(currRoom, direction) {
    let newRoom = roomMethods.getRoom(currRoom, direction);
    if (newRoom.name !== 'noMoreRooms') {
      $scope.currentRoom = newRoom;
    } else {
      let message = roomMethods.getMessage();
      alert(message);
    }
    $scope.roomInv = $scope.currentRoom.inventory;
  };

  // If user clicks monster
  $scope.monsterClick = function(monster) {
    gameMethods.hurtCharacter(monster);
    $scope.characterHealth = character.hp;
    $scope.charDead = character.isDead;
    $scope.graveyard = monsters.graveyard;
  };

  // On item in room click
  $scope.itemClick = function(item, roomAreaNum, currRoom) {
    charMethods.pickUpItem(item, currRoom);
    $scope.roomInv = currRoom.inventory;
    $scope.inventory = character.inventory;
    $scope.currentRoom[roomAreaNum] = {};
  };

}
