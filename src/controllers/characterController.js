import characterMethod from '../models/characterMethods';
import character from '../models/character';


characterController.$inject = ['$scope'];

export default function characterController($scope) {
  $scope.characterName = character.name;
  $scope.characterHealth = character.hp;
  $scope.inventory = character.inventory;

  $scope.changeName = function() {
    if($scope.text) {
      $scope.characterName = $scope.text;
      $scope.submitted = true;
    }
  };



}