export default function clearingController() {
  const self = this;
  self.name = 'clearing';
  self.initDescription = 'This is a clearing';
  self.descriptionCrystal = 'You have a crystal';
  self.descriptionNoCrystal = 'You are missing a crystal';
  self.movement = {
    forward: 'stream'
  };
  self.items = [];
}