globalController.$inject = ['$scope'];

export default function globalController($scope){ //eslint-disable-line no-unused-vars
  console.log('in globalController');
  $scope.activeTab = {
    showIntro: true,
    showInstructions: false,
    showGame: false
  };


}
