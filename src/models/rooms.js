// List of all the rooms in the game

const rooms = {
  Foyer: {
    name: 'Foyer',
    description: 'You\'re in the entry of a large, old house. More of a mansion, really. ' +
    'It looks like no one has kept up with cleaning or repairs in a long time, dust and ' +
    'cobwebs cover every surface, some of the furniture is draped in dingy once-white sheets.' +
    'There doesn\'t seem to be anyone here, might as well take a look around.',
    monster: false,
    roomArea1: {},
    roomArea2: {},
    roomArea3: {},
    roomArea4: {},
    roomArea5: {},
    roomArea6: {},
    roomArea7: {},
    roomArea8: {},
    northDoor: '',
    southDoor: '',
    eastDoor: '',
    westDoor: ''
  },
  Hallway: {
    name: 'Hallway',
    description: 'A long stately hallway, lined with fading paintings and dusty statues.' +
    'The lights look like old gas lamps, but none are lit. There\'s a door at the end of the hall.',
    monster: false,
    roomArea1: {},
    roomArea2: {},
    roomArea3: {},
    roomArea4: {},
    roomArea5: {},
    roomArea6: {},
    roomArea7: {},
    roomArea8: {},
    northDoor: '',
    southDoor: '',
    eastDoor: '',
    westDoor: ''
  },
  Ballroom: {
    name: 'Ballroom',
    description: 'This was once a magnificent ballroom: a crystal chandelier holds the promise of ' +
    'glittering, if it could only be dusted. The floor is a beautiful patchwork of exotic glossy woods, ' +
    'perfect for gliding along. A small stage must have once held musicians, but it sits empty and ' +
    'forgotten. The lamps cast a low, lonely glow on the once-stately room.',
    monster: false,
    roomArea1: {},
    roomArea2: {},
    roomArea3: {},
    roomArea4: {},
    roomArea5: {},
    roomArea6: {},
    roomArea7: {},
    roomArea8: {},
    northDoor: '',
    southDoor: '',
    eastDoor: '',
    westDoor: ''
  },
  Basement: {
    name: 'Basement',
    description: 'It\'s cold, dark, and damp down here. There\'s an echo of dripping water coming ' +
    'from everywhere and nowhere at once. Some barrels line the walls, but you don\'t feel like ' +
    'exploring given how dark it is.',
    monster: false,
    roomArea1: {},
    roomArea2: {},
    roomArea3: {},
    roomArea4: {},
    roomArea5: {},
    roomArea6: {},
    roomArea7: {},
    roomArea8: {},
    northDoor: '',
    southDoor: '',
    eastDoor: '',
    westDoor: ''
  }
};

rooms.availableRooms = ['Hallway', 'Ballroom', 'Basement'];

export default rooms;
