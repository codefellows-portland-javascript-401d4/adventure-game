export default function locationController() {
  const self = this;

  self.possibleItems = ['net', 'shrooms', 'stun gun', 'bait', 'bow and arrow', 'binoculars', 'camera', 'encyclopedia', 'field guide', 'bandana', 'mirror'];

  self.generateRandomItems = function (num, arr) {

    var indexArr = [];
    var items = [];
    // generate random numbers and push into array
    for (let i = 0; i < num; i ++) {
      indexArr.push(Math.floor(Math.random() * (self.possibleItems.length - i)));
    }
    // adding for testing to be able to pass in known random numbers
    var randoms = arr || indexArr;

    //use random indices to get items out of self.possibleItems
    for (let i = 0; i < randoms.length; i++) {
      items.push(self.possibleItems.splice(randoms[i], 1)[0]);
    }

    //add the crystal at a random index 
    items.splice(Math.floor(Math.random() * num), 0, 'crystal');
    return items;

  };

  self.clearing = {
    name: 'clearing',
    initDescription: 'You are in an open clearing.  Through the trees on the other side is a stream.',
    descriptionCrystal: 'Omigosh, there goes Bigfoot!  Quick!  What do you do?',
    descriptionNoCrystal: 'Omigosh, there goes Bigfoot!  Explore to see if you can find anything that will help you trap such a mythical creature.  Quick!  What do you do?',
    inspected: false,
    movement: {
      Forward: 'stream'
    },
    items: []
  };

  self.stream = {
    name: 'stream',
    initDescription: 'You are by a charming stream.  It burbles gently through the forest past a mysterious cave.',
    descriptionCrystal: 'Now that you have the crystal, Bigfootprints have appeared!',
    descriptionNoCrystal: 'Seems like Sasquatch had to come this way, but all you see are some pretty rocks.',
    inspected: false,
    movement: {
      Forward: 'cave', 
      Back: 'clearing'
    },
    items: []
  };

  self.cave = {
    name: 'cave',
    inspected: false,
    initDescription: 'Inside, the cave smells funky and puts a chill in your bones.',
    descriptionCrystal: 'Now that you have the crystal, this is obviously the Sasquatch lair!',
    descriptionNoCrystal: 'Ew! Just a dank and smelly cave. But there are some strange items lying around. Maybe one of these will help you capture Bigfoot back in the clearing\.',
    movement: {
      Back: 'stream'
    },
    items: self.generateRandomItems(3)
  };

}