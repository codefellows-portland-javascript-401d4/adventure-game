foodController.$inject = ['$scope', '$window'];

export default function foodController($scope, $window) {

    $scope.foodLevel = 100;

    $scope.foodLuck = function(food) {
        let luck = [
            'Your jerky has finished drying and is ready to eat',
            'You found a recently shot deer and harvested it for food',
            'You stumbled upon a wild blackberry bush and harvested berries',
            'A robber stole some food from your wagon',
            'You have dysentery. You must eat more in order to recover',
            'You have a hole in the bottom of your wagon and some of your food fell out',
            'You were bitten by a rabid bat, and in your madness you ate too much food'     
        ];
        if (food < 80) {
            let index = (Math.floor(Math.random() * (6 - 0 + 1)) + 0);
            let random = (Math.floor(Math.random() * (20 - 11)) + 10);
            if (index < 3) {
                $scope.foodLevel = food + random; 
                $window.alert(`${luck[index]}. You added ${random} pounds of food.`);   
            } else {               
                $scope.foodLevel = food - random; 
                $window.alert(`${luck[index]}. You lost ${random} pounds of food.`);       
            }
        } else {
            $scope.foodLevel = food;
        }
    };
    
    $scope.eatFood = function() {

        $scope.foodLevel = $scope.foodLevel - (Math.floor(Math.random() * (20 - 11)) + 10);
        $scope.foodLuck($scope.foodLevel);

    };

    $scope.loseFood = function() {
        $scope.foodLevel = $scope.foodLevel * 0;
    };

    $scope.addFood = function() {
        $scope.foodLevel = $scope.foodLevel + (Math.floor(Math.random() * (20 - 11)) + 10);
    };

    $scope.restart = function() {
        $scope.foodLevel = 100;
        $scope.beginGame = false;
    };

    $scope.offer = function() {
        $scope.choice5 = true;
    };

}
