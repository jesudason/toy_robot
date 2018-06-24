var robotPlaced = false;
var robotPosition = [];
var direction;

// put robot on the table
function place(x, y, f) {
  if (x < 5 && x >= 0 && y < 5 && y >= 0) {
    direction = f.toUpperCase();
    robotPosition = [x, y, direction];
    robotPlaced = true;
  } 
}

// check to see if robot has been placed on table. If not, close function with no action. If Robot is on the table, move it forward one space in the direction it's facing if that won't send it off the table.
function move() {
  if (!robotPlaced) {
    return;
  }
  switch(direction) {
    case "NORTH":
      if (robotPosition[1] + 1 < 5 && robotPosition[1] + 1 >= 0) {
        robotPosition[1] = robotPosition[1] + 1;
      }
      break;
    case "EAST":
      if (robotPosition[0] + 1 < 5 && robotPosition[0] + 1 >= 0) {
        robotPosition[0] = robotPosition[0] + 1;
      }
      break;
    case "SOUTH":
      if (robotPosition[1] - 1 < 5 && robotPosition[1] - 1 >= 0) {
        robotPosition[1] = robotPosition[1] - 1
      }
      break;
    case "WEST":
      if (robotPosition[0] - 1 < 5 && robotPosition[0] - 1 >= 0) {
        robotPosition[0] = robotPosition[0] - 1;
      }
      break;    
  } 
}

// turn the robot anti-clockwise 90 degrees and update robot's position
function left() {
  if (!robotPlaced) {
    return;
  }  
  switch(direction) {
    case "NORTH":
      direction = "WEST";
      break;
    case "EAST":
      direction = "NORTH";
      break;
    case "SOUTH":
      direction = "EAST";
      break;
    case "WEST":
      direction = "SOUTH";
      break;            
  }
  robotPosition[2] = direction;
}

// turn the robot clockwise 90 degrees and update robot's position
function right() {
  if (!robotPlaced) {
    return;
  }  
  switch(direction) {
    case "NORTH":
      direction = "EAST";
      break;
    case "EAST":
      direction = "SOUTH";
      break;
    case "SOUTH":
      direction = "WEST";
      break;
    case "WEST":
      direction = "NORTH";
      break;            
  }
  robotPosition[2] = direction;
}

// return the robot's position
function report() {
  return robotPosition;
}

// export functions for testing purposes
module.exports = {
  robotPlaced,
  place,
  move,
  left,
  right,
  report
}