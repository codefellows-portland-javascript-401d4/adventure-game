export default function mainController() {
  const self = this;

  
  self.location = 'clearing';
  self.items = [];
  self.hasCrystal = self.items.indexOf('crystal') !== -1;
  
  self.sasquatchLocation = 'clearing';
  self.gameOver = false;

  // self.subControllers = function() {
  //   return 'clearingController';
  // };
  
  // {
  //   clearing: 'clearingController',
  //   stream: 'streamController',
  //   cave: 'caveController'
  //   //TODO:  make sure to add any other rooms here
  // };

  self.lookAround = function(location) {
    if (self.hasCrystal) {
      return location.descriptionCrystal;
    } else {
      return location.descriptionNoCrystal;
    }
  };  
  self.move = function(newLocation) {
    self.location = newLocation;
  };
  self.catchBigfoot = function() {
    self.gameOver = true;
    if (self.hasCrystal) {
      console.log(1);
      return 'You caught Bigfoot!  Fame and fortune will surely be yours.';
    } else {
      console.log(2);
      return 'Awww!  He ran right over you and got away.  Go home and tell all your friends.';
    }
  };
  self.pickUpItem = function(item) {
    if (self.items.indexOf(item) === -1) {
      self.items.push(item);
      self.hasCrystal = self.items.indexOf('crystal') !== -1;
    }
  };
}