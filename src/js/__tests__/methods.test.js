import Bowerman from '../Bowerman';

test('test levelUp method', () => {
  const char = new Bowerman('Bo', 'Bowerman');
  char.levelUp();
  const expected = {
    attack: 30,
    defence: 30,
    name: 'Bo',
    type: 'Bowerman',
    health: 100,
    level: 2,
  };
  expect(char).toEqual(expected);
});

test('test levelUp method error', () => {
  const char = new Bowerman('Bo', 'Bowerman');
  char.health = 0;
  expect(() => char.levelUp()).toThrow(Error);
});

test.each([
  ['Bo1', 'Bowerman', 100, 10, 92.5],
  ['Bo2', 'Bowerman', 2, 10, 0],
])('test demage method', (name, type, health, points, expectedHealth) => {
  const char = new Bowerman(name, type);
  char.health = health;
  char.damage(points);
  expect(char.health).toEqual(expectedHealth);
});

test('test demage method error', () => {
  const char = new Bowerman('Bo', 'Bowerman');
  char.health = 0;
  expect(() => char.damage(1)).toThrow(Error);
});
