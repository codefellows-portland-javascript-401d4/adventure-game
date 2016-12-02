class Room {
    constructor(obj) {
        Object.keys(obj).forEach((element) => {
            this[element] = obj[element];
        }, this);
        this.items = [];
        this.n = this.s = this.e = this.w = null;
    }
    move(direction) {
        let response = {room: this[direction]};
        if(!this[direction]) {
            response.text = `Sorry, you can\'t go ${direction}!`;
            return response;
        } else {
            response.text = this[direction].desc;
            if (this.items.length) {
                response.text += `\n You find a ${this.items[0].name}.`;
            };
            return response;
        };
    }
};

Room.startRoom = new Room({
    name: 'Starting Room',
    desc: 'You are currently located in a a dimly lit room. There is a door to your north and to your south.'
});

Room.storeRoom = new Room({
    name: 'Store Room',
    desc: 'You are in a dusty room with lots of boxes strewn around. In the corner is a musty old baseball bat.'
});

Room.finalRoom = new Room({
    name: 'Final Room',
    desc: 'Behold, Godzilla sits before you!'
});

export default Room;
// module.exports = Room;