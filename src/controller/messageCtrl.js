import angular from 'angular';

export default function message($scope) {
  $scope.message = $scope.currentProfile.message;
};