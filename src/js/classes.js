const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export class Character {
        attack
        defence

    constructor(name, type) {
        this.name = this.setName(name);
        this.type = this.setType(type);
        this.health = 100;
        this.level = 1;
    }

    setName(name) {
        if (!(typeof(name) === 'string')) {
            throw new Error('Необходимо передать имя в виде строки');
        }
        if (name.length < 2 || name.length > 10) {
            throw new Error('Длина имени должна быть от 2 до 10 символов');
        }
        return name
    }

    setType(type) {
        if (typeof(type) !== 'string') {
            throw new Error('Необходимо передать тип в виде строки');
    }
        if (types.includes(type) === false) {
            throw new Error('Такого типа не существует');
        }
        return type;
    }
 
    levelUp()  {
        if (this.health > 0) {
            this.level++;
            this.attack = this.attack * 1.2;
            this.defence = this.defence * 1.2;
            this.health = 100;
        } else {
            throw new Error('Нельзя повысить левел умершего');
        }
    }


   damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        } else {
            throw new Error('Нельзя нанести урон умершему');
        }
   }
}

export class Bowerman extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Swordsman extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        this.attack = 10;
        this.defence = 40;
    }
}

export class Daemon extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        this.attack = 10;
        this.defence = 40;
    }
}

export class Undead extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Zombie extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        this.attack = 40;
        this.defence = 10;
    }
}