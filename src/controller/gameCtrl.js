import angular from 'angular';
import { profiles } from '../profiles';

export default function game($scope) {
  $scope.room = 'swipe';
  $scope.current = profiles.chad;
  console.log($scope);
}
