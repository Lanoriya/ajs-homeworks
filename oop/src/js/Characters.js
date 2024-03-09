export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name === "string" && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error("Ошибка длинны имени");
    }
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error("Нет такого типа");
    }
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
