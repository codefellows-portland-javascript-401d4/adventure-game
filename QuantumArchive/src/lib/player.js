
const thePlayer = {
    inventory: [],
    location: {},
    status: 'alive',

    action(actions){
        let message = '';
        let theAction = actions.command;
        let item = actions.item;
        let direction = actions.direction;

        let dropItem = () => {
            let itemIdx = this.inventory.indexOf(item);
            if (itemIdx > -1) {
                let droppedItem = this.inventory.splice(itemIdx, 1);
                this.location.items.push(droppedItem[0]);
            };
        };

        if (theAction === 'take') {
            let itemName = item.name;
            if (itemName === 'nothing') {
                message = 'There is nothing to take in here, IDIOT!';
            } else {
                this.inventory.push(item);
                let itemIdx = this.location.items.indexOf(item);
                this.location.items.splice(itemIdx, 1);
                message = 'You added a ' + itemName + ' to your inventory.';
            };
        } else if (theAction === 'drop') {
            let itemName = item.name;
            if (itemName === 'nothing') {
                message = 'There is nothing to drop, IDIOT!';
            } else if (itemName === 'all') {
                message = 'You dropped all your inventory.';
                this.location.items = this.inventory;
                this.inventory = [];
            } else {
                dropItem();
                message = 'You no longer have a ' + itemName + ' in your inventory.';
                if (this.location.name === 'Final Room') message += ' You had better pick it back up before Godzilla notices.'; 
            };
        } else if (theAction === 'use') {
            if (this.location.name === 'Final Room') {
                if (item.name === 'nothing') {
                    message = 'Having no weapon, you wave your arms wildly at Godzilla as if to say, "Here I am - please eat me!"';
                    message += ' Godzilla eats you.'; 
                    this.status = 'dead';
                } else {
                    message = 'You hit Godzilla with the ' + item.name + '! Ouch! Godzilla gets angry and kills you.';
                    this.status = 'dead';
                };
            } else {
                if (item.name === 'nothing') {
                    message = 'You have nothing to use.';
                } else {
                    message = 'You are swinging the ' + item.name + ' by yourself in an empty room. Keep up the good work.';
                }
            }
        } else if (theAction === 'go') {
            let response = this.location.move(direction);
            if (response.room) this.location = response.room;
            message = response.text;
        };
        if (this.status === 'dead') {
            message += ' You are dead. The end.';
            dropItem();
        }
        return message;
    }
};

export default thePlayer;
