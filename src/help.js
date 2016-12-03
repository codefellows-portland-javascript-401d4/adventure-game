
const helpOpts = {
    allChoices: [
        {
            title: 'choiceNorth',
            name: 'Move North',
            command: 'n',
            type: 'movement'
        },
        {
            title: 'choiceSouth',
            name: 'Move South',
            command: 's',
            type: 'movement'
        },
        {
            title: 'choiceEast',
            name: 'Move East',
            command: 'e',
            type: 'movement'
        },
        {
            title: 'choiceWest',
            name: 'Move West',
            command: 'w',
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

// export default helpOpts;
module.exports = helpOpts;
