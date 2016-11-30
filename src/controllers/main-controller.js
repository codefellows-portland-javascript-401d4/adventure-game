export default function mainController() {
  const self = this;
  self.location = 'clearing';
  self.crystal = false,
  self.gameOver = false,
  self.lookAround = function(location) {
    if(self.crystal) {
      return location.descriptionCrystal;
    } else {
      return location.descriptionNoCrystal;
    }
  };  
}