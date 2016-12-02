
const helpOpts = {
    allChoices: [
        {
            title: 'choiceNorth',
            name: 'Move North',
            command: 'go n',
            type: 'movement'
        },
        {
            title: 'choiceSouth',
            name: 'Move South',
            command: 'go s',
            type: 'movement'
        },
        {
            title: 'choiceEast',
            name: 'Move East',
            command: 'go e',
            type: 'movement'
        },
        {
            title: 'choiceWest',
            name: 'Move West',
            command: 'go w',
            type: 'movement'
        },
        {
            title: 'choiceTakeItem',
            name: 'Take Item',
            command: 'take item',
            type: 'item'
        },
        {
            title: 'choiceDropItem',
            name: 'Drop Item',
            command: 'drop item',
            type: 'item'
        },
        {
            title: 'choiceUseItem',
            name: 'Use Item',
            command: 'use item',
            type: 'item'
        }
    ]
};

// export default helpOpts;
module.exports = helpOpts;
