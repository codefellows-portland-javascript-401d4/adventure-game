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

  self.stream = {};
  self.cave = {};

}