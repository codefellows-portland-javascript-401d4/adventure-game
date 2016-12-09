class Room {
    constructor(obj) {
        Object.keys(obj).forEach((element) => {
            this[element] = obj[element];
        }, this);
        this.items = [];
        this.north = this.south = this.east = this.west = null;
    }
    move(direction) {
        let response = {room: this[direction]};
        if(!this[direction]) {
            response.text = `Sorry, you can\'t go ${direction}!`;
            return response;
        } else {
            response.text = this[direction].desc;
            if (this[direction].items.length) {
                response.text += `\n You find a ${this[direction].items[0].name}.`;
            };
            return response;
        };
    }
};

Room.startRoom = new Room({
    name: 'Starting Room',
    desc: 'You are currently located in a a dimly lit room. There are doors to the north, the south and the west.'
});

Room.storeRoom = new Room({
    name: 'Store Room',
    desc: 'You are in a dusty room with lots of boxes strewn around. The only door is to the north.'
});

Room.libraryRoom = new Room({
    name: 'Library',
    desc: 'You are in a room with lots of shelves with scrolls lined up on them. There is one door to the east.'
});

Room.finalRoom = new Room({
    name: 'Final Room',
    desc: 'Behold, Godzilla sits before you! The only escape is the door to the south.'
});

export default Room;
