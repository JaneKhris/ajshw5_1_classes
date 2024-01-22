import { Bowerman } from "../classes";'../classes';

test('create class test', () => {
    const bo = new Bowerman('Bo','Bowerman');
    const expected = {
        attack: 25,
        defence: 25,
        name: 'Bo',
        type: 'Bowerman',
        health: 100,
        level: 1
      };
    expect(bo).toEqual(expected);
});

