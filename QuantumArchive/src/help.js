
const helpOpts = {
    allChoices: [
        {
            title: 'choiceNorth',
            name: 'Move North',
            command: 'north',
            type: 'movement'
        },
        {
            title: 'choiceSouth',
            name: 'Move South',
            command: 'south',
            type: 'movement'
        },
        {
            title: 'choiceEast',
            name: 'Move East',
            command: 'east',
            type: 'movement'
        },
        {
            title: 'choiceWest',
            name: 'Move West',
            command: 'west',
            type: 'movement'
        },
        {
            title: 'choiceTakeItem',
            name: 'Take Item',
            command: 'take',
            type: 'item'
        },
        {
            title: 'choiceDropItem',
            name: 'Drop Item',
            command: 'drop',
            type: 'item'
        },
        {
            title: 'choiceUseItem',
            name: 'Use Item',
            command: 'use',
            type: 'item'
        }
    ]
};

module.exports = helpOpts;
