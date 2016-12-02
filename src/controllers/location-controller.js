export default function locationController() {
  const self = this;

  self.clearing = {
    name: 'clearing',
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
    initDescription: 'This is a cave',
    descriptionCrystal: 'You have a crystal.  Bigfootprints have appeared!',
    descriptionNoCrystal: 'You are missing a crystal',
    movement: {
      backward: 'stream'
    },
    items: ['crystal']
  };

}