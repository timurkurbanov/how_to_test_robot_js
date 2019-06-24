const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
testRobot = newRobot(true, true, false);
  // act
result = station(testRobot);
  // assert
  expect(result).toEqual(1);
});


test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
testRobot = newRobot(true, false, true);

  // act
result = station(testRobot);

  // assert
  expect(result).toEqual(2);
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  testRobot = newRobot(true, false, false);

  // act
  result = station(testRobot);

  // assert
  expect(result).toEqual(3);
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  testRobot = newRobot(false, false, false);

  // act
  result = station(testRobot);

  // assert
  expect(result).toEqual(4);
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  testRobot = newRobot(false, false, false);
  // act
  result = prioritizeTasks(testRobot);
  // assert
  expect(result).toEqual(-1);
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  testRobot = newRobot(false,false,false);
  testRobot['todos'].push(1);
  testRobot['todos'].push(42);
  testRobot['todos'].push(4);
  testRobot['todos'].push(17);
  // act
  result = prioritizeTasks(testRobot);
  // assert
  expect(result).toEqual(42);
});

test('test_workday_on_day_off_returns_false', () => {
 
  myRobot = newRobot(true, true, true);
  myRobot.dayOff = false;

  // act
  result = isWorkday(myRobot, false);

  // assert
  expect(result).toBe(false);
});

test('test_workday_not_day_off_returns_true', () => {
  myRobot = newRobot(true, true, true);
  myRobot.dayOff = false;

  // act
  result = isWorkday(myRobot, false);

  // assert
  expect(result).toBe(false);
});
