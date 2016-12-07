export default class Monster {
  constructor (name, strength, text, defeat, response, item, wants) {
    this.name = name;
    this.strength = strength;
    this.text = text;
    this.defeat = defeat;
    this.response = response;
    this.item = item;
    this.wants = wants;
    this.alive = true;
  }
}