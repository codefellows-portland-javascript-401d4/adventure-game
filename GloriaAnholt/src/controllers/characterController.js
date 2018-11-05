import charChange from '../models/gameMethods';
import character from '../data/character';
import monster from '../data/monsters';


characterController.$inject = ['$scope'];

export default function characterController($scope) {
  $scope.characterName = character.name;

  $scope.changeName = function() {
    if($scope.text) {
      $scope.characterName = $scope.text;
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
