const {assert} = chai;

describe('App controller', () => {


    it('Checks the game state is set and playable', () => {
        assert.equal($scope.nationName, 'Cocomo');
        assert.equal($scope.rivalNation, 'Shaftistan');
    });

})