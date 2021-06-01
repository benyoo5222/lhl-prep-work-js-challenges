const blocksAway = function (directions) {
  // Put your solution here

  const buildDirectionObj = {
    currentPosition: [0, 0],
    calc: function (direction, number) {
      if (this.previousMove.length === 0) {
        this.currentPosition[direction === "right" ? 0 : 1] += number;
        this.previousMove = [direction, direction === "right" ? "X" : "Y"];

        return;
      }

      if (this.previousMove[0] === direction) {
        if (this.previousMove[1] === "X") {
          this.currentPosition[1] -= number;
          this.previousMove[0] = direction;
          this.previousMove[1] = "Y";
          return;
        }

        if (this.previousMove[1] === "Y") {
          this.currentPosition[0] -= number;
          this.previousMove[0] = direction;
          this.previousMove[1] = "X";
          return;
        }
      }

      if (this.previousMove[0] !== direction) {
        if (this.previousMove[1] === "X") {
          this.currentPosition[1] += number;
          this.previousMove[0] = direction;
          this.previousMove[1] = "Y";
          return;
        }

        if (this.previousMove[1] === "Y") {
          this.currentPosition[0] += number;
          this.previousMove[0] = direction;
          this.previousMove[1] = "X";
          return;
        }
      }
    },
    previousMove: [],
  };
  let counter = 0;

  while (counter < directions.length) {
    if (counter + 1 === directions.length) {
      counter++;
      break;
    }

    buildDirectionObj.calc(directions[counter], directions[counter + 1]);
    counter += 2;
  }

  return {
    east: buildDirectionObj.currentPosition[0],
    north: buildDirectionObj.currentPosition[1],
  };
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
