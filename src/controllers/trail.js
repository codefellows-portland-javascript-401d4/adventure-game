trailController.$inject = ['$scope'];

export default function trailController($scope) {
  // $scope.start = true;
  $scope.day = '';
  $scope.supplies = {
    food : false,
    gun : false
  };

  $scope.$watchGroup(['supplies.gun', 'supplies.food'], function() {
    if($scope.supplies.gun === true || $scope.supplies.food === true) {
      $scope.day = 'day01';
    }

  }, true);

  $scope.fight = function() {
    if($scope.supplies.gun === false) {
      $scope.day = 'dead';
      $scope.message = 'You are dead!';
    } else {
      $scope.day = 'day20';
      $scope.message = 'Nice shooting Tex!';
    }
  };

  $scope.run = function() {
    if($scope.supplies.food === false) {
      $scope.day = 'dead';
      $scope.message = 'You starved to death!';
    } else {
      $scope.day = 'day20';
      $scope.message = 'Nice running, yeller belly! Thems some good vittles!';
    }
  };

  $scope.town = function() {
    if($scope.supplies.gun === false) {
      $scope.day = 'day30';
      $scope.message = 'You bought food!';
    } else {
      $scope.day = 'dead';
      $scope.message = 'You got shot in a showdown!';
    }
  };

  $scope.continue = function() {
    $scope.day = 'dead';
    $scope.message = 'You are dead!';
  };

  $scope.hunt = function() {
    if($scope.supplies.gun === false) {
      $scope.day = 'dead';
      $scope.message = 'Flattened by a herd of buffalo! See ya!';
    } else {
      $scope.day = 'day30';
      $scope.message = 'You bagged yourself a bison!';
    }
  };

  $scope.ford = function() {
    $scope.day = 'dead';
    $scope.message = 'You done drowned!';
  };

  $scope.wait = function() {
    $scope.day = 'win';
    $scope.message = 'You made it to Oregon, congrats!';
  };



}
