import charChange from '../models/gameMethods';
import character from '../models/character';
import monster from '../models/monsters';


characterController.$inject = ['$scope'];

export default function characterController($scope) {
  $scope.$parent.characterName = character.name;
  $scope.$parent.graveyard = monster.graveyard;

  $scope.changeName = function() {
    if($scope.text) {
      $scope.$parent.characterName = $scope.text;
      $scope.$parent.submitted = false;
    }
  };

  $scope.useInv = function(item, currRoom) {
    charChange.useInvItem(item, currRoom);
    $scope.$parent.characterHealth = character.hp;
    $scope.$parent.charDead = character.isDead;
    $scope.$parent.graveyard = monster.graveyard;
  }; 

}
