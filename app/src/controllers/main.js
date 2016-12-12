export default function main($scope) {
  $scope.coffee = false;
  $scope.room = '';
  $scope.beginning = `This is the beginning of your short journey, but in order to claim victory 
                      you need to brew yourself a cup of coffee to win the day!`;
  $scope.class = `now-winning`;

  $scope.brewCoffee = function() {
    $scope.coffee = true;
  };

  $scope.victory = function() {
    $scope.room = 'final';
  };

  $scope.$watch('[room, coffee]', function() {
    if ($scope.room === `firstRoom`) {
      $scope.class = `not-winning`;
    } else if ($scope.room === 'secondRoom') {
      if ($scope.coffee) {
        $scope.class = `not-winning`;
      } else {
        $scope.class = `now-winning`;
      }
    } else if ($scope.room === `lastRoom`) {
      if ($scope.coffee) {
        $scope.class = `now-winning`;
      } else {
        $scope.class = `not-winning`;
      }
    }
  }, true);
}
