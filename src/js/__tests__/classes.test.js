import Bowerman from '../Bowerman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('create class test', () => {
  const bo = new Bowerman('Bo', 'Bowerman');
  const expected = {
    attack: 25,
    defence: 25,
    name: 'Bo',
    type: 'Bowerman',
    health: 100,
    level: 1,
  };
  expect(bo).toEqual(expected);
});

test.each([
  [17, 'Bowerman'],
  ['a', 'Bowerman'],
  ['BowermanBowerman', 'Bowerman'],
  ['Bowerman', 1000],
  ['Bowerman', 'Bowerma'],
])('test error', (name, type) => {
  expect(() => new Bowerman(name, type)).toThrow(Error);
});

test.each([
  ['Bo', 'Bowerman', Bowerman, {
    attack: 25,
    defence: 25,
    name: 'Bo',
    type: 'Bowerman',
    health: 100,
    level: 1,
  }],
  ['Sw', 'Swordsman', Swordsman, {
    attack: 40,
    defence: 10,
    name: 'Sw',
    type: 'Swordsman',
    health: 100,
    level: 1,
  }],
  ['Ma', 'Magician', Magician, {
    attack: 10,
    defence: 40,
    name: 'Ma',
    type: 'Magician',
    health: 100,
    level: 1,
  }],
  ['Da', 'Daemon', Daemon, {
    attack: 10,
    defence: 40,
    name: 'Da',
    type: 'Daemon',
    health: 100,
    level: 1,
  }],
  ['Un', 'Undead', Undead, {
    attack: 25,
    defence: 25,
    name: 'Un',
    type: 'Undead',
    health: 100,
    level: 1,
  }],
  ['Zo', 'Zombie', Zombie, {
    attack: 40,
    defence: 10,
    name: 'Zo',
    type: 'Zombie',
    health: 100,
    level: 1,
  }],
])('test class', (name, type, Class_, expected) => {
  const a = new Class_(name, type);
  expect(a).toEqual(expected);
});
