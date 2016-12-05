import roomMethods from '../models/roomMethods';
import rooms from '../models/rooms';
import gameMethods from '../models/gameMethods';

gameController.$inject = ['$scope'];

export default function gameController($scope) {
  $scope.currentRoom = rooms.Foyer;

  //when door is clicked
  $scope.changeRoom = function(currRoom, direction) {
    $scope.currentRoom = roomMethods.getRoom(currRoom, direction);
    
  };

  //when inventory button is clicked
  $scope.useInvItem = gameMethods.useInvItem;
  
}