import angular from 'angular';
import {room, item, player} from './game';
import actions from './help';
import './main.css';

const app = angular.module('myApp', ['ng']);

app.controller('myGame', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
    $scope.player = player;
    $scope.playerStatus = player.status;
    $scope.choices = actions.allChoices;
    $scope.userMovement = $scope.choices.name;
    $scope.userItem = $scope.choices.name;
    $scope.newText = '';
    $scope.playerHistory = [];
    $scope.playerHistory.push('You are waking up after being unconscious ...');
    $scope.playerHistory.push(player.location.desc);
    $scope.room = room;
    $scope.item = item;

    $scope.scrollDown = function() {
        $location.hash('bottom');
        $anchorScroll();
    };

}]);

app.controller('movementController', ['$scope', function($scope) {
    $scope.currentRoom = '';
    $scope.buttonClicked = function(cmd){
        $scope.playerHistory.push($scope.player.action({command: 'go', direction: cmd}));
        $scope.scrollDown();
    };
}]);

app.controller('itemController', ['$scope', function($scope) {
    $scope.buttonClicked = function(cmd){
        let itemName;
        if (cmd === 'take') {
            itemName = $scope.player.location.items.length ? $scope.player.location.items[0] : {name: 'nothing'};
        } else {
            itemName = $scope.player.inventory.length ? $scope.player.inventory[0] : {name: 'nothing'};
        };
        $scope.playerHistory.push($scope.player.action({command: cmd, item: itemName}));
        $scope.playerStatus = $scope.player.status;
        if ($scope.playerStatus === 'dead') {
            document.getElementById('bottom-container').insertAdjacentHTML('beforebegin', '<img class="godzilla" width="300px" src="src/assets/godzilla.gif">');
        }
        $scope.scrollDown();
    };
}]);

app.controller('reloadController', ['$scope', function($scope) {
    $scope.playerStatus = $scope.player.status;
    $scope.reload = function() {
        window.location.reload();
    };
}]);

export default app;
