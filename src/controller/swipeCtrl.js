import angular from 'angular';
import { profiles } from '../profiles';

export default function swipe($scope) {
  // console.log(profiles.chad);
  $scope.name = profiles.chad.name;
  $scope.bio = profiles.chad.bio;
  $scope.img = profiles.chad.img;
  $scope.message = profiles.chad.message;
  $scope.yesResponse = profiles.chad.yesResponse;
  $scope.noResponse = profiles.chad.noResponse;
}
