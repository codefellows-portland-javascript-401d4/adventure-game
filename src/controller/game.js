import angular from 'angular';
import { profiles } from '../profiles';

export default function game($scope) {
  $scope.room = 'swipe';
  $scope.name = '';
  $scope.profiles = profiles;
}
