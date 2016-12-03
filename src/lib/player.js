
const thePlayer = {
    inventory: [],
    location: {},

    action(actions){
        let message = '';
        let cmd = actions.split(' ');
        let theAction = cmd[0];

        console.log('The Action is', theAction);

        if (theAction === 'take') {
            let itemName = cmd[1];
            if (itemName === 'nothing') {
                message = 'There is nothing to take in here, IDIOT!';
            } else {
                this.inventory.push(itemName);
                let itemIdx = this.location.items.indexOf(itemName);
                this.location.items.splice(itemIdx, 1);
                message = 'You added a ' + itemName + ' to your inventory.';
            };
        } else if (theAction === 'drop') {
            let itemName = cmd[1];
            if (itemName === 'nothing') {
                message = 'There is nothing to drop, IDIOT!';
            } else if (itemName === 'all') {
                this.inventory = [];
                message = 'You dropped all your inventory.';
            } else {
                let itemIdx = this.inventory.indexOf(itemName);
                if (itemIdx > -1) this.inventory.splice(itemIdx, 1);
                message = 'You no longer have a ' + itemName + ' in your inventory.';
            };
        } else if (theAction === 'use') {
            message = 'You are using the ' + cmd[1] + '.';
        } else if (theAction === 'go') {
            let response = this.location.move(cmd[1]);
            if (response.room) this.location = response.room;
            message = response.text;
        };
        return message;
    }
};

export default thePlayer;

// module.exports = thePlayer;
