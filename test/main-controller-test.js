const {assert} = chai;

describe('main controller', () => {
  beforeEach(angular.mock.module('controllers'));
  let $controller;

  beforeEach(angular.mock.inject(_$controller_ => {
    $controller = _$controller_;
  }));

  it('default location is clearing', () => {
    const ctrl = $controller('mainController');
    assert.equal(ctrl.location, 'clearing');
  });

  it('hasCrystal defaults to false', () => {
    const ctrl = $controller('mainController');
    assert.isNotOk(ctrl.hasCrystal);
  });

  it('gameOver defaults to false', () => {
    const ctrl = $controller('mainController');  
    assert.isNotOk(ctrl.gameOver);
  });
  it('lookAround', () => {
    const location = {
      descriptionCrystal: 'cat',
      descriptionNoCrystal: 'no cat'
    };

    const ctrl = $controller('mainController');
    ctrl.hasCrystal = false;
    assert.equal(ctrl.lookAround(location), 'no cat');

    ctrl.hasCrystal = true;
    assert.equal(ctrl.lookAround(location), 'cat');
  });

  it('move function', () => {
    const ctrl = $controller('mainController');
    ctrl.location = 'here';
    const newLocation = 'there';
    
    ctrl.move(newLocation);
    assert.equal(ctrl.location, newLocation);
  });

  it('catch Bigfoot with crystal', () => {
    const ctrl = $controller('mainController');  
    ctrl.hasCrystal = true;
    assert.equal(ctrl.catchBigfoot(), 'You caught Bigfoot!  Fame and fortune will surely be yours.');
    assert.isOk(ctrl.gameOver);
  });

  it('catch Bigfoot without crystal', () => {
    const ctrl = $controller('mainController');  
    assert.equal(ctrl.catchBigfoot(), 'Awww!  He ran right over you and got away.  Go home and tell all your friends.');
    assert.isOk(ctrl.gameOver);
  });

  it('pickup item', () => {
    const ctrl = $controller('mainController')
    ctrl.items = [];
    const item = 'item';
    ctrl.pickUpItem(item);
    assert.equal(ctrl.items[0], item);

    ctrl.pickUpItem(item);
    assert.deepEqual(ctrl.items, [item]);
  });
});