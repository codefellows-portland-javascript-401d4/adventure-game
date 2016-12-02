// import Room from './room';
// const Room = require('./room');

const thePlayer = {
    inventory: [],
    location: {},

    action(actions){
        let message = '';
        let cmd = actions.split(' ');
        let theAction = cmd[0];

        if (theAction === 'take') {
            let itemName = cmd[1];
            this.inventory.push(itemName);
            message = 'You added ' + itemName + ' to your inventory.';
        } else if (theAction === 'drop') {
            let itemName = cmd[1];
            if (itemName.toLowerCase() === 'all') {
                this.inventory = [];
                message = 'You dropped all your inventory.';
            } else {
                let itemIdx = this.inventory.indexOf(itemName);
                if (itemIdx > -1) this.inventory.splice(itemIdx, 1);
                message = 'You no longer have ' + itemName + ' in your inventory';
            };
        } else if (theAction === 'use') {
            message = 'You are using the ' + cmd[1] + '.';
        } else if (theAction === 'go') {
            let response = this.location.move(cmd[1]);
            if (response.room) this.location = response.room;
            // this.location = response.room;
            message = response.text;
        };
        return message;
    }
};

export default thePlayer;

// module.exports = thePlayer;
