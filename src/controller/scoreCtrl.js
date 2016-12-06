import angular from 'angular';

export default function score($scope) {
  $scope.checkScore = () => {
    if ($scope.score >= 2) {
      $scope.$parent.room = 'win';
    } else {
      $scope.$parent.room = 'lose';
    }
    $scope.resetGame();
  };
}