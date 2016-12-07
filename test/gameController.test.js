/* globals angular, chai */
const { assert } = chai;
import Player from '../src/models/player';
import Room from '../src/models/room';
import Item from '../src/models/item';
import Monster from '../src/models/monster';

describe ('gameController', () => {

  beforeEach(angular.mock.module('orcSlayer'));

  let $controller, gc;

  class SingleRoom {
    constructor() {
      this.rooms = [
        new Room('Room 0', null, null, null, null, null, null)
      ];
      this.startLocation = 0;
    }
  }

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it ('should move player from room to room', () => {
    let map = {
      rooms: [
        new Room('Room 0', null, null, 1, null, null, null),
        new Room('Room 1', null, null, null, null, 0, null)
      ],
      startLocation: 0
    };
    let player = new Player();

    gc = $controller('gameController', { 'GameSpace': map, 'Player': player });
    gc.move('N');
    assert.equal(player.room, 1);
  });

  it ('should equip player with item', () => {
    let map = new SingleRoom();
    map.rooms[0].item = new Item('thing', 0, 'this is a thing');
    let player = new Player();
    gc = $controller('gameController', { 'GameSpace': map, 'Player': player });
    gc.equip();
    assert.equal(player.item.name, 'thing');
  });

  it ('should leave item in room when player drops it', () => {
    let map = new SingleRoom();
    map.rooms[0].item = new Item('thing2', 0, 'this is a thing2');
    let player = new Player();
    player.item = new Item('thing1', 0, 'this is thing1');
    gc = $controller('gameController', { 'GameSpace': map, 'Player': player });
    gc.equip();
    assert.equal(player.item.name, 'thing2');
    assert.equal(map.rooms[0].item.name, 'thing1');
  });

  it ('player should win if strength is greater than monsters\'...', () => {
    let map = new SingleRoom();
    let monster = new Monster(
      'Teddy Bear', 
      5, 
      'A fuzzy teddy bear stands there with open arms.', 
      'A teddy bear lies on the floor with stuffing strewn all over the room.', 
      'I love you!', 
      new Item('blanket', 0, 'security blanket'), 
      'hugs'
    );
    map.rooms[0].monster = monster;
    let player = new Player();
    player.item = new Item('pillow', 10, 'this is a pillow');
    gc = $controller('gameController', { 'GameSpace': map, 'Player': player });
    gc.fight();
    assert(!map.rooms[0].monster.alive);
  });

});