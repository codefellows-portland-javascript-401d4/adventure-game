import cowsay from 'cowsay-browser';

// define angular dependencies to inject into
// the controller function
cowsayController.$inject = ['$scope'];

export default function cowsayController($scope) {
  $scope.message = 'hello world!';

  $scope.say = function(text) {
    return cowsay.say({ text });
  };
}