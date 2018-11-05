import item from './lib/item';
import player from './lib/player';
import room from './lib/room';

function buildGame(rooms, players, items) {
    function opposite(direction) {
        if (direction === 'north') {
            return 'south';
        } else if (direction === 'south') {
            return 'north';
        } else if (direction === 'west') {
            return 'east';
        } else if (direction === 'east') {
            return 'west';
        } else {
            return null;
        };
    };

    function connect(firstRoom, direction, secondRoom) {
        firstRoom[direction] = secondRoom;
        secondRoom[opposite(direction)] = firstRoom;
    };

    connect(rooms.startRoom, 'north', rooms.finalRoom);
    connect(rooms.startRoom, 'south', rooms.storeRoom);
    connect(rooms.startRoom, 'west', rooms.libraryRoom);
    rooms.storeRoom.items.push(items[0]);
    rooms.libraryRoom.items.push(items[1]);
    items[0].location = room.storeRoom;
    items[1].location = room.libraryRoom;
    players.location = room.startRoom;
};

buildGame(room, player, item);

export {room, item, player};