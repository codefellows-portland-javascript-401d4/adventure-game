// const {assert} = chai;

describe('location controller', () => {
  beforeEach(angular.mock.module('controllers'));
  let $controller;

  beforeEach(angular.mock.inject(_$controller_ => {
    $controller = _$controller_;
  }));

  it('generates random items', () => {
    const ctrl = $controller('locationController');
    // generate 3 random numbers and push into array
    var originalItems = [];
    ctrl.possibleItems.forEach(item => originalItems.push(item));
    var indexArr = [];
    for (let i = 0; i < 3; i ++) {
      indexArr.push(Math.floor(Math.random() * (ctrl.possibleItems.length - i)));
    }
    var randomItems = ctrl.generateRandomItems(3, indexArr);

    assert.equal(randomItems.length, 4);
    randomItems.forEach( item => {
        if (item !== 'crystal') {
            assert.isOk(originalItems.indexOf(item) !== -1);
        }
    });
    randomItems.forEach( item => {
        assert.isOk(ctrl.possibleItems.indexOf(item) === -1);
    });
    assert.include(randomItems, 'crystal');

    //TODO: write test to check if items were taken from the correct index;
  });
});