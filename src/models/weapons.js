// List of all the available weapons in the game

module.exports = [
  {
    type: 'weapon',
    name: 'torch',
    description: 'This seems handy for getting around in dark damp places! Careful not to burn yourself.',
  },
  {
    type: 'weapon',
    name: 'salt shaker',
    description: 'Standard glass shaker, with some salt and rice in it. Might be useful in a fight.',
  },
  {
    type: 'weapon',
    name: 'catnip sachet',
    description: 'Smells a little minty and herby. A kitty would love this.',
  },
  {
    type: 'weapon',
    name: 'golden carrot',
    description: 'A heavy, golden carrot. Definitely not edible, possibly valuable if it\'s real gold.',
  },
  {
    type: 'weapon',
    name: 'bucket of stagnant water',
    description: 'Has a slight greenish-brown tinge, it\'s pretty gross. Someone should toss it out.',
  },
  {
    type: 'weapon',
    name: 'meat tenderizer',
    description: 'Small metal tin with meat tenderizer. Might be useful at a BBQ.',
  },
  {
    type: 'weapon',
    name: 'caterpillar charm',
    description: 'A pretty little charm of a many-legged green caterpillar. Looks like it\'s from a little girl\'s bracelet.',
  },
  {
    type: 'weapon',
    name: 'tattered tintype',
    description: 'Looks like a family photo, but the faces are hard to make out. This was probably valuable to someone, I bet they\'d like it back.',
  },
  {
    name: 'green banana',
    description: 'Doesn\'t look all that tasty, it\'s still a little green.'
  },
  {
    type: 'weapon',
    name: 'electromagnet',
    description: 'A neat little device, batteries, an old light switch and coils and coils of wre. When turned on it attracts screws. Might damage electronics if held too close.'
  },

];



// controller has the state that the UI needs
// if it's more complex, you can put that in a module so your controller is lean
// services (factories) are controllers with no ui elements
// can get the same functionality with using the import statements
// controller uses the modules to ask for data