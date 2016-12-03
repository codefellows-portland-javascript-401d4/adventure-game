trailController.$inject = ['$scope'];

export default function trailController($scope) {
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
      $scope.message = 'Can\'t bring fists to a gunfight! Shoulda bought a six shooter. Now yer dead!';
    } else {
      $scope.day = 'day20';
      $scope.message = 'Nice shooting Tex! That\'s one less desperado out on the range.';
    }
  };

  $scope.run = function() {
    if($scope.supplies.food === false) {
      $scope.day = 'dead';
      $scope.message = 'Why buy a gun if yer yeller? Too bad that there\'s no wild game to be found. Nothing to hunt, so you starved to death! Game over.';
    } else {
      $scope.day = 'day20';
      $scope.message = 'Nice running, yeller belly!';
    }
  };

  $scope.town = function() {
    if($scope.supplies.gun === false) {
      $scope.day = 'day30';
      $scope.message = 'Smart thinking, now y\'all got enough vittles to make it a bit further down the trail.';
    } else {
      $scope.day = 'dead';
      $scope.message = 'That desperado that you shot down a ways back had a bunch of brothers that were looking for you. You got ambushed and shot full of lead, now you\'re snake food. Game over.' ;
    }
  };

  $scope.continue = function() {
    $scope.day = 'dead';
    $scope.message = 'Bad move, y\'all ran out of food. Game over.';
  };

  $scope.hunt = function() {
    if($scope.supplies.gun === false) {
      $scope.day = 'dead';
      $scope.message = 'Is you ignant? You ain\'t got no gun and was flattened by a herd of buffalo! Game over!';
    } else {
      $scope.day = 'day30';
      $scope.message = 'Yer getting pretty good with that shootin\' iron, you bagged yourself a bison!';
    }
  };

  $scope.ford = function() {
    $scope.day = 'dead';
    $scope.message = 'You sank like a stone and drowned! Game over.';
  };

  $scope.wait = function() {
    $scope.day = 'win';
    $scope.message = 'You made it to Oregon, congrats! And there\'s too many damn people in Portland, so could you leave already?';
  };



}
