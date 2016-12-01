trailController.$inject = ['$scope'];

export default function trailController($scope) {
  $scope.message = 'You are on the trail.';
  $scope.day = '';
  $scope.supplies = {
    food : false,
    gun : false
  };

}
