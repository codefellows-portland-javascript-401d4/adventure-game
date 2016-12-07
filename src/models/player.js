
// let player = {
//   life: 20,
//   room: 12,
//   item: {name: null, strength: null, text: null}
// };

// module.exports = player;

export default class Player {
  constructor () {
    this.life = 20;
    this.progress =[12];
    this.room = 12;
    this.item = { name: null, strength: null, text: null };
  }

  setLocation(loc) {
    this.room = loc;
  }
}