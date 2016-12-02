day01Controller.$inject = ['$scope'];

export default function day01Controller($scope) {
  // $scope.day = 'day01';
  $scope.instructions = 'You ran into some bad dudes.';


  // $scope.fight = function() {
  //   if($scope.supplies.gun === false) {
  //     $scope.day = 'dead';
  //     $scope.message = 'You are dead!';
  //   } else {
  //     $scope.day = 'day20';
  //     $scope.message = 'Nice shooting Tex!';
  //   }
  // };
  //
  // $scope.run = function() {
  //   if($scope.supplies.food === false) {
  //     $scope.day = 'dead';
  //     $scope.message = 'You starved to death!';
  //   } else {
  //     $scope.day = 'day20';
  //     $scope.message = 'Nice running, yeller belly! Thems some good vittles!';
  //   }
  // };
}
