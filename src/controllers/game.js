// define angular dependencies to inject into
// the controller function
Controller.$inject = ['$scope'];

export default function Controller($scope) {
  $scope.room = 'dining';
  $scope.getIngredients = false;
  $scope.haveIngredients = false;
  $scope.risottoAssigned = false;
  $scope.risottoMade = false;
  $scope.office = function() { $scope.room = 'office'; };
  $scope.kitchen = function() { $scope.room = 'kitchen'; };
  $scope.pantry = function() { $scope.room = 'pantry'; };
  $scope.dining = function() { $scope.room = 'dining'; };
  $scope.needIngredients = function() { $scope.getIngredients = true; };
  $scope.getIngredients = function() { $scope.haveIngredients = true; };
  $scope.makeRisotto = function() { $scope.risottoMade = true; };
  $scope.assignRisotto = function() { $scope.risottoAssigned = true; };
  $scope.win = function() { $scope.room = 'victory'; };
  $scope.lose = function() { $scope.room = 'defeat'; };
  $scope.reset = function() {
    $scope.room = 'dining';
    $scope.risottoAssigned = false;
    $scope.risottoMade = false; };
}
