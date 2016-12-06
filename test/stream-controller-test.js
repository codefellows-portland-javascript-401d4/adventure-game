// const {assert} = chai;

describe('stream controller', () => {
  beforeEach(angular.mock.module('controllers'));
  let $controller;

  beforeEach(angular.mock.inject(_$controller_ => {
    $controller = _$controller_;
  }));

  it('should pass', () => {
    assert.equal(1, 1);
  });

});