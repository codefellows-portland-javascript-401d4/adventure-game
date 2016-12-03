export default function locationController() {
  const self = this;

  self.clearing = {
    name: 'clearing',
    initDescription: 'You are in an open clearing.  Through the trees on the other side is a stream.',
    descriptionCrystal: 'Omigosh, there goes Bigfoot!  Quick!  What do you do?',
    descriptionNoCrystal: 'Omigosh, there goes Bigfoot!  Quick!  What do you do?',
    movement: {
      forward: 'stream'
    },
    items: []
  };

  self.stream = {
    name: 'stream',
    initDescription: 'You are by a charming stream.  It burbles gently through the forest.',
    descriptionCrystal: 'Now that you have the crystal, Bigfootprints have appeared!',
    descriptionNoCrystal: 'Seems like Sasquatch had to come this way, but all you see are some pretty rocks.',
    movement: {
      forward: 'cave', 
      backward: 'clearing'
    },
    items: []
  };

  self.cave = {
    name: 'cave',
    initDescription: 'This is a cave',
    descriptionCrystal: 'Now that you have the crystal, this is obviously the Sasquatch lair!',
    descriptionNoCrystal: 'Ew! Just a dank and smelly cave. But there are some pretty rocks and crystals lying around.',
    movement: {
      backward: 'stream'
    },
    items: ['crystal']
  };

}