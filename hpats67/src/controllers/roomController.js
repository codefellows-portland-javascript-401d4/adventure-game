import roomMethods from '../models/roomMethods';
// import rooms from '../models/rooms';
// import itemMethods from '../models/itemMethods';
// import monsterMethods from '../models/monsterMethods';

roomController.$inject = ['$scope'];

export default function roomController($scope) {

  $scope.getRoom = roomMethods.getRoom;

}
