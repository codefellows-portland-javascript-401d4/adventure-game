const fs = require('fs');

let Zero = {
  description: '  a pristine alchemy lab, full of glassware coursing with solutions of every color.  Books, balances, and quills litter the floor.  It has reddish cherry wood doors on the south and east sides.',
  item: {name: null, strength: null, text: null},
  monster: {name: 'alchemist', strength: 6, alive: true, text: '  a wizened alchemist with a great grey beard is sitting at a lab bench, making notes with a quill in a parchment.',  defeat:'The alchemist\'s bloody body lives slumped over his lab bench.' , item:{name: 'clear potion', strength: '1', text: '  A flask containing a clear potion, or water, is sticking out of the dead alchemists\'s pocket.'}},
  N: null,
  E: 1,
  S: 4,
  W: null
};

let One = {
  description: '  a very decrepit alchemy lab, full of broken flasks, beakers, and alembics.  A corrosive substance is dripping out of a broken flask and smoking every time a drop hits the stone floor.  It has oaken doors on ever side but to the north.',
  item: {name: 'red potion', strength: '1', text: '  A red potion in a vial sits on a marble pedestal.'},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, response:null, wants:null, item:{name: null, strength: null, text: null}},
  E: 2,
  S: 5,
  W: 0
};

let Two = {
  description: '  a dark forge, lit only by the orange and red glow of the giant furnace, full of liquid ore.  You seer large iron doors to the east and west.  A large, worn anvil stands in the center of the room.  The body of an armored knigh lies dead on the floor by the anvil.',
  item: {name: null, strength: null, text: null},
  monster: {name: 'Troll', strength: 65, alive: true, text: '  A huge, ferocious troll stands in the back of the room wielding a giant warhammer, terryfying expression on his (her?) face.',  defeat:' The huge body of the troll lies across the anvil in the center of the room.  His hammer is too big for you to carry.', item:{name: null, strength: null, text: null}},
  N: null,
  E: 3,
  S:  null,
  W: 1
};

let Three = {
  description: '  a simple dining room with white painted doors to the south and west. A table, littered with food and wine stands against the eastern wall.',
  item: {name: null, strength: null, text: null},
  monster: {name: 'white knight', strength: 30, alive: true, text: '  A knight, in bright, silvery armor stands up from the table as you enter, his gauntleted hand resting on the hilt of his longsword.', defeat: '  A knight in dented armor lies dead on teh floor by the table.', item:{name: 'long sword', strength: 20, text: ' The knights deadly-looking long sword lies on the ground next to his body.'}},
  N: null,
  E: null,
  S:  7,
  W: 2
};

let Four = {
  description: '  a totally unadorned room with simple wooden doors on the north and east walls.  How boring!',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, response:null, wants:null, item:{name: null, strength: null, text: null}},
  N: 0,
  E: 5,
  S:  null,
  W: null
};

let Five = {
  description: ' a bright entryway with doors on all four sides.  Dusty light streams down from the stained glass dome, illuminating a spinning wheel sitting on a large intricate carpet.  ',
  item: {name: null, strength: null, text: null},
  monster: {name: 'maiden', strength: 8, alive: true, text: '  A beautiful maiden is standing in the center of the room.  She backs away from you with a terrified expression.', defeat: '  The formerly beautiful dead maiden lays face down on the blood-stained carpet.', item:{name: 'pearl-handled dagger', strength: 8, text: '  A glittering dagger with a large pearl on the pommel lays on the carpet several feet from the dead maiden.'}},
  N: 1,
  E: 6,
  S:  9,
  W: 4
};

let Six = {
  description: '  a large room, with only one door.  The floor is covered in straw and huge piles of dung and ',
  item: {name: null, strength: null, text: null},
  monster: {name: 'elephant', strength: 35, alive: true, text: ' a huge bull elephant!', defeat: '  the remains of the majestic creature lie on the ground.  You feel deeply ashamed.  There is nothing work taking.  Too late do you realize this wasn not the best way to acknowledge the elephant in the room.', item:{name: null, strength: null, text: null}},
  N: null,
  E: null,
  S:  null,
  W: 5
};

let Seven = {
  description: '',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, response:null, wants:null, item:{name: null, strength: null, text: null}},
  N: 3,
  E: null,
  S:  11,
  W: null
};

let Eight = {
  description: ' a suprisingly well-kept study with only one door, the one you came from. There are two chairs facing a stone hearth on the North wall of the room.  The fire in the hearth appears to have recently gone out, although nothing but warm ashes remain.',
  item: {name: 'turkey drumstick', strength: 1, text: '  A delicious-smelling turkey drumstick sits on a plate on one of the chairs.'},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, response:null, wants:null, item:{name: null, strength: null, text: null}},
  N: null,
  E: null,
  S: 12,
  W: null
};

let Nine = {
  description: ' a bare room with a ragged indecipherable tapestry on the west wall and doors on the north and south sides.',
  item: {name: null, strength: null, text: null},
  monster: {name: 'Orc', strength: 16, alive: true, text: '  A savage orc warrior is standing in a threatening position at the center of the room with an axe in each hand. ', defeat:'  The newly-dead body of the orc warrior lies face-up on the floor, his eyes open but unseeing.', response:'Feeeeeble one, i are orc. I are too hungry to talk to you! What doo youuuu wantt?!?', wants:'turkey drumstick', item:{name: 'sharp axe', strength: 10, text: '  A sharp and savage-looking orcish hand axe lies besides the orcs\'s outstretched hand.'}},
  N: 5,
  E: null,
  S: 13,
  W: null
};

let Ten = {
  description: '',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, response:null, wants:null, item:{name: null, strength: null, text: null}},
  N: null,
  E: 11,
  S:  14,
  W: null
};

let Eleven = {
  description: '',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null}},
  N: 7,
  E: null,
  S:  15,
  W: 10
};

let Twelve = {
  description: ' a dark and foul-smelling room.  The source of the smell is a bloated corpse, decomposing in the Northwest corner of the room.  There are doors on  the North and East sides of the room.',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, response:null, wants:null, item:{name: null, strength: null, text: null}},
  N: 8,
  E: 13,
  S: null,
  W: null
};

let Thirteen = {
  description: ' a room filled with ancient implements of battle.  Old oxidized axes and swords, long ago rusted to obscure orange shapes line the walls of the chamber.  Old, notched wooden doors are found on the north and west walls.  Several mildewy practice dummies stand halfway erect in the center of the room, leaking straw.',
  item: {name: 'rusty sword', strength: 5, text: '  A rusty, but functional, iron short sword is sticking out of one of the practice dummies.'},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, response:null, wants:null, item:{name: null, strength: null, text: null}},
  N: 9,
  E: null,
  S: null,
  W: 12
};

let Fourteen = {
  description: '',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, response:null, wants:null, item:{name: null, strength: null, text: null}},
  N: 10,
  E: null,
  S:  null,
  W: null
};

let Fifteen = {
  description: '',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, response:null, wants:null, item:{name: null, strength: null, text: null}},
  N: 11,
  E: null,
  S:  null,
  W: null
};

let rooms = [Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve, Thirteen, Fourteen, Fifteen];

fs.writeFileSync('rooms.json', JSON.stringify(rooms));