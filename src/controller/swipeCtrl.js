import angular from 'angular';
import { profiles } from '../profiles';

export default function swipe($scope) {
  $scope.name = $scope.current.name;
  $scope.bio = $scope.current.bio;
  $scope.img = $scope.current.img;
  $scope.message = $scope.current.message;
  $scope.yesResponse = $scope.current.yesResponse;
  $scope.noResponse = $scope.current.noResponse;
  console.log('this is scope.current:', $scope.current);
}
