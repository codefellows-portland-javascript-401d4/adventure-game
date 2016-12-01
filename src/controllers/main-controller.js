export default function mainController() {
  const self = this;
  self.location = 'clearing';
  self.crystal = false;
  self.sasquatchLocation = 'clearing';
  self.gameOver = false;
  self.lookAround = function(location) {
    if(self.crystal) {
      return location.descriptionCrystal;
    } else {
      return location.descriptionNoCrystal;
    }
  };  
  self.move = function(newLocation) {
    self.location = newLocation;
  };
  self.catchBigfoot = function() {
    if (self.crystal) {
      return 'You caught Bigfoot!  Fame and fortune will surely be yours.';
    } else {
      return 'Awww!  He ran right over you and got away.  Go home and tell all your friends.';
    }
  };
}