import angular from 'angular';
import { profiles, dates } from '../profiles';

export default function game($scope) {
  $scope.room = 'swipe';
  $scope.currentProfile = profiles.chad;
  $scope.currentDate = dates;
  $scope.dateStage = $scope.currentDate.bar.stage1;
  $scope.profileStage = $scope.currentProfile.stage1;
  $scope.score = 0;

  $scope.swipeLeft = () => {
    $scope.currentProfile = $scope.currentProfile.next;
    $scope.profileStage = $scope.currentProfile.stage1;
  };

  $scope.optionA = () => {
    if ($scope.profileStage.optionA.response) {
      $scope.score ++;
    }
    $scope.currentDate.text = $scope.profileStage.optionA.description;
    $scope.dateStage = $scope.dateStage.next;
    $scope.profileStage = $scope.profileStage.next;
    console.log('Your score:', $scope.score);
  };

  $scope.optionB = () => {
    if ($scope.profileStage.optionB.response) {
      $scope.score ++;
    }
    $scope.currentDate.text = $scope.profileStage.optionB.description;
    $scope.dateStage = $scope.dateStage.next;
    $scope.profileStage = $scope.profileStage.next;
    console.log('Your score:', $scope.score);
  };

  $scope.checkScore = () => {
    if ($scope.score >= 2) {
      $scope.room = 'win';
    } else {
      $scope.room = 'lose';
    }
    $scope.score = 0;
    $scope.dateStage = null;
  };

};  
