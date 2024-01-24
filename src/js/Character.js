const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  attack;

  defence;

  constructor(name, type) {
    this.name = this.setName(name);
    this.type = this.setType(type);
    this.health = 100;
    this.level = 1;
  }

  setName(name) {
    if (!(typeof (name) === 'string')) {
      throw new Error('Необходимо передать имя в виде строки');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Длина имени должна быть от 2 до 10 символов');
    }
    this.name = name;
    return name;
  }

  setType(type) {
    if (typeof (type) !== 'string') {
      throw new Error('Необходимо передать тип в виде строки');
    }
    if (types.includes(type) === false) {
      throw new Error('Такого типа не существует');
    }
    this.type = type;
    return type;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health > 0) {
      const health = this.health - points * (1 - this.defence / 100);
      if (health > 0) {
        this.health = health;
      } else { this.health = 0; }
    } else {
      throw new Error('Нельзя нанести урон умершему');
    }
  }
}
