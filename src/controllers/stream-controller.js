export default function streamController() {
  const self = this;
  self.name = 'stream';
  self.initDescription = 'This is a stream';
  self.descriptionCrystal = 'You have a crystal.  Bigfootprints have appeared!';
  self.descriptionNoCrystal = 'You are missing a crystal';
  self.movement = {
    forward: 'cave', 
    backward: 'clearing'
  };
  self.items = [];
}