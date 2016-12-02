// define angular dependencies to inject into
// the controller function
Controller.$inject = ['$scope'];

export default function Controller($scope) {
  $scope.room = 'dining';
  $scope.risottoAssigned = false;
  $scope.risottoMade = false;
  $scope.office = function() { $scope.room = 'office'; };
  $scope.kitchen = function() { $scope.room = 'kitchen'; };
  $scope.dining = function() { $scope.room = 'dining'; };
  $scope.makeRisotto = function() { $scope.risottoMade = true; };
  $scope.assignRisotto = function() { $scope.risottoAssigned = true; };
  $scope.win = function() { $scope.room = 'victory'; };
  $scope.lose = function() { $scope.room = 'defeat'; };
}