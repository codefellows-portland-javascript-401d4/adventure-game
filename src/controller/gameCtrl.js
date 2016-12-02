import angular from 'angular';
import { profiles, dates } from '../profiles';

export default function game($scope) {
  $scope.room = 'swipe';
  $scope.current = profiles.chad;
  $scope.score = 0;
  $scope.currentDate = dates;
  $scope.stage = $scope.currentDate.bar.stage1;

  $scope.optionA = () => {
    if ($scope.current.date1.optionA.response) {
      $scope.score ++;

    }
    $scope.currentDate.text = $scope.current.date1.optionA.description;
    $scope.stage = $scope.stage.next;
  };

  $scope.optionB = () => {
    if ($scope.current.date1.optionB.response) {
      $scope.score ++;
      
    }
    $scope.currentDate.text = $scope.current.date1.optionB.description;
  };
};
