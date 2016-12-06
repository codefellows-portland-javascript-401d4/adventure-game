import angular from 'angular';
import { profiles, dates } from '../profiles';

export default function game($scope) {
  $scope.room = 'swipe';
  $scope.currentProfile = profiles.chad;
  $scope.currentDate = dates.bar;
  $scope.dateStage = $scope.currentDate.stage1;
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
    $scope.dateStage = $scope.dateStage.next;
    if (!$scope.dateStage.next) {
      $scope.currentDate.text = $scope.profileStage.optionA.description;
    } else {
      $scope.currentDate.text = $scope.profileStage.optionA.description + $scope.dateStage.text;
    }
    $scope.profileStage = $scope.profileStage.next;
    console.log('Your score: ', $scope.score);
  };

  $scope.optionB = () => {
    if ($scope.profileStage.optionB.response) {
      $scope.score ++;
    }
    $scope.dateStage = $scope.dateStage.next;
    if (!$scope.dateStage.next) {
      $scope.currentDate.text = $scope.profileStage.optionB.description;
    } else {
      $scope.currentDate.text = $scope.profileStage.optionB.description + $scope.dateStage.text;
    }
    $scope.profileStage = $scope.profileStage.next;
    console.log('Your score: ', $scope.score);
  };

  $scope.resetGame = () => {
    $scope.currentProfile = profiles.chad;
    $scope.currentDate = dates.bar;
    $scope.dateStage = $scope.currentDate.stage1;
    $scope.profileStage = $scope.currentProfile.stage1;
    $scope.currentDate.text = $scope.currentDate.stage1.text;
    $scope.score = 0;
  };

};  
