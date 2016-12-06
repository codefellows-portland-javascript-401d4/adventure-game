export default function mainController() {
  const self = this;

  
  self.location = 'clearing';
  self.items = [];
  self.hasCrystal = self.items.indexOf('crystal') !== -1;
  
  self.sasquatchLocation = 'clearing';
  self.gameOver = false;

  self.setInspected = function(location) {
    location.inspected = true;
  };

  self.lookAround = function(location) {
    if (self.hasCrystal) {
      return location.descriptionCrystal;
    } else {
      return location.descriptionNoCrystal;
    }
  };  
  self.move = function(currLocation, newLocation) {
    currLocation.inspected = false;
    self.location = newLocation;
  };

  self.catchBigfoot = function() {
    self.gameOver = true;
    if (self.hasCrystal) {
      self.gameOverMessage = 'You caught Bigfoot!  Fame and fortune will surely be yours.';
    } else {
      self.gameOverMessage = 'Awww!  He ran right over you and got away.  Go home and tell all your friends.';
    }
  };
 
  self.pickUpItem = function(item, location) {
    if (self.items.indexOf(item) === -1) {
      self.items.push(item);
      self.hasCrystal = self.items.indexOf('crystal') !== -1;

      const index = location.items.indexOf(item);
      location.items.splice(index, 1);
    }
  };

  self.resetGame = function() {
    self.gameOver = false;
    self.items = [];
    self.hasCrystal = false;
  };
}