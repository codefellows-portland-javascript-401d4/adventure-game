// List of all the available weapons in the game

module.exports = [
  {
    name: 'torch',
    description: 'This seems handy for getting around in dark damp places! Careful not to burn yourself.',
  },
  {
    name: 'salt shaker',
    description: 'Standard glass shaker, with some salt and rice in it. Might be useful in a fight.',
  },
  {
    name: 'catnip sachet',
    description: 'Smells a little minty and herby. A kitty would love this.',
  },
  {
    name: 'golden carrot',
    description: 'A heavy, golden carrot. Definitely not edible, possibly valuable if it\'s real gold.',
  },
  {
    name: 'bucket of stagnant water',
    description: 'Has a slight greenish-brown tinge, it\'s pretty gross. Someone should toss it out.',
  },
  {
    name: 'meat tenderizer',
    description: 'Small metal tin with meat tenderizer. Might be useful at a BBQ.',
  },
  {
    name: 'caterpillar charm',
    description: 'A pretty little charm of a many-legged green caterpillar. Looks like it\'s from a little girl\'s bracelet.',
  },
  {
    name: 'tattered tintype',
    description: 'Looks like a family photo, but the faces are hard to make out. This was probably valuable to someone, I bet they\'d like it back.',
  },
  {
    name: 'banana',
    description: 'Doesn\'t look all that tasty, it\'s still a little green.'
  },
  {
    name: 'electromagnet',
    description: 'A neat little device, when turned on it attracts screws. Might damage electronics if held too close.'
  },

];



// controller has the state that the UI needs
// if it's more complex, you can put that in a module so your controller is lean
// services (factories) are controllers with no ui elements
// can get the same functionality with using the import statements
// controller uses the modules to ask for data