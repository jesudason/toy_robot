const toyRobot = require('./toy_robot');

test('move forward from 0, 0, north and report', () => {
  toyRobot.place(0, 0, 'north');
  toyRobot.move();
  expect(toyRobot.report()).toEqual([0, 1, 'NORTH']);
});

test('move forward from 0, 0, west and report', () => {
  toyRobot.place(0, 0, 'west');
  toyRobot.move();
  expect(toyRobot.report()).toEqual([0, 0, 'WEST']);
});

test('move left from 0, 0 and report', () => {
  toyRobot.place(0, 0, 'north');
  toyRobot.left();
  expect(toyRobot.report()).toEqual([0, 0, 'WEST']);
});

test('move, move, left, move from 1, 2, east', () => {
  toyRobot.place(1, 2, 'East');
  toyRobot.move();
  toyRobot.move();
  toyRobot.left();
  toyRobot.move();
  expect(toyRobot.report()).toEqual([3, 3, 'NORTH']);
});

test('attempt to put robot outside of table dimensions', () => {
  toyRobot.place(7, 1, 'WEST');
  expect(toyRobot.robotPlaced).toBeFalsy();
});