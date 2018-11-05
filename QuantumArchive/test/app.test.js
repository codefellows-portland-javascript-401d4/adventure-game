const {assert} = chai;

describe('Tests module myApp', () => {
    beforeEach(angular.mock.module('myApp'));

    const mockRoomOne = {
        north: null,
        items: []
    };

    const mockRoomTwo = {
        south: null,
        items: []
    };

    const mockItem = {name:'baseball bat', location: mockRoomTwo};

    let mockPlayer = {
        action: function(actionPassed) {
            assert.isOk(actionPassed);
            if (actionPassed.command === 'take' && actionPassed.item.name !== 'nothing') {
                this.inventory.push(actionPassed.item);
            } else if (actionPassed.command === 'go') {
                this.location = this.location[actionPassed.direction];
            } else {
                return;
            };
        },
        inventory: [],
        location: null
    };

    mockRoomOne.north = mockRoomTwo;
    mockRoomTwo.south = mockRoomOne;
    mockRoomTwo.items.push(mockItem);

    let $controller, $scope, $location, $anchorScroll;
    beforeEach(angular.mock.inject(function($rootScope, _$anchorScroll_, _$controller_, _$location_) {
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $location = _$location_;
        $anchorScroll = _$anchorScroll_;
    }));

    const setup = (scopeObject, player, location, action) => {
        scopeObject.playerHistory = [];
        scopeObject.scrollDown = () => { return true; };
        player.location = location;
        scopeObject.player = player;
        scopeObject.buttonClicked(action);
        assert.equal(scopeObject.playerHistory.length, 1);
        return scopeObject;
    };

    describe('Checks functionality of myGame controller', () => {  
        it('Checks initial player history is empty', () => {
            $controller('myGame', {$scope, $location, $anchorScroll});
            assert(Array.isArray($scope.playerHistory),'should initially be empty');
            assert.equal($scope.playerHistory.length, 2);
            assert.isArray($scope.choices);
        });

        it('Checks scrollDown and Room can be called', () => {
            $controller('myGame', {$scope, $location, $anchorScroll});
            assert.isFunction($scope.room);
            assert($scope.scrollDown, 'is a callable function');
        });
    });

    describe('Checks functionality of movementController', () => {
        it('Checks current room initiates as an empty string', () => {
            $controller('movementController', {$scope});
            assert.equal($scope.currentRoom, '');
        });

        it('Checks buttonClick functionality gives directive to move in proper direction', () => {
            $controller('movementController', {$scope});
            $scope = setup($scope, mockPlayer, mockRoomOne, 'north');
            assert.equal($scope.player.location, mockRoomTwo);
        });
    });
    
    describe('Checks functionality of itemController', () => {
        it('Checks that take item in an empty room retrieves nothing', () => {
            $controller('itemController', {$scope});
            $scope = setup($scope, mockPlayer, mockRoomOne, 'take');
            assert.equal($scope.player.inventory.length, 0);
        });

        it('Checks that player receives item when in a room with an item', () => {
            $controller('itemController', {$scope});
            $scope = setup($scope, mockPlayer, mockRoomTwo, 'take');
            assert.equal($scope.player.inventory.length, 1);
            assert.equal($scope.player.inventory[0].name, 'baseball bat');
        });
    });
});