// define angular dependencies to inject into
// the controller function
Controller.$inject = ['$scope'];

export default function Controller($scope) {
  $scope.room = 'dining';

}