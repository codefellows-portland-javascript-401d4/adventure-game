export default function locationController() {
  const self = this;

  self.clearing = {
    name: 'clearing',
    inspected: false,
    initDescription: 'This is a clearing',
    descriptionCrystal: 'You have a crystal',
    descriptionNoCrystal: 'You are missing a crystal',
    movement: {
      forward: 'stream'
    },
    items: []
  };

  self.stream = {
    name: 'stream',
    inspected: false,
    initDescription: 'This is a stream',
    descriptionCrystal: 'You have a crystal.  Bigfootprints have appeared!',
    descriptionNoCrystal: 'You are missing a crystal',
    movement: {
      forward: 'cave', 
      backward: 'clearing'
    },
    items: []
  };
  
  self.cave = {
    name: 'cave',
    inspected: false,
    initDescription: 'This is a cave',
    descriptionCrystal: 'You have a crystal.  Bigfootprints have appeared!',
    descriptionNoCrystal: 'You are missing a crystal',
    movement: {
      backward: 'stream'
    },
    items: ['crystal']
  };

}