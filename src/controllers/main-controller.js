export default function mainController() {
  const self = this;

  
  self.location = 'clearing';
  self.items = [];
  var hasCrystal = self.items.indexOf('crystal') !== -1;
  
  self.sasquatchLocation = 'clearing';
  self.gameOver = false;

  self.lookAround = function(location) {
    if (hasCrystal) {
      console.log(1, hasCrystal);
      return location.descriptionCrystal;
    } else {
      console.log(2, hasCrystal);
      return location.descriptionNoCrystal;
    }
  };  
  self.move = function(newLocation) {
    self.location = newLocation;
  };
  self.catchBigfoot = function() {
    if (hasCrystal) {
      return 'You caught Bigfoot!  Fame and fortune will surely be yours.';
    } else {
      return 'Awww!  He ran right over you and got away.  Go home and tell all your friends.';
    }
  };
}