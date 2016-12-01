export default function caveController() {
  const self = this;
  self.name = 'cave';
  self.initDescription = 'This is a cave';
  self.descriptionCrystal = 'You have a crystal.  Bigfootprints have appeared!';
  self.descriptionNoCrystal = 'You are missing a crystal';
  self.movement = {
    backward: 'stream'
  };
  self.items = ['crystal'];
}