export default class Room {
  constructor (description, item, monster, n, e, s, w) {
    this.description = description;
    this.item = item;
    this.monster = monster;
    this.N = n;
    this.E = e;
    this.S = s;
    this.W = w;
  }
}