const calculateChange = function (total, cash) {
  // Your code here
  const billObj = {
    runningTotal: cash - total,
    change: {},
    twenty: function () {
      let numberOfTwenties = Math.floor(String(runningTotal)[0] / 2);
      this.runningTotal -= numberOfTwenties * 1000;
      this.change.twenty = numberOfTwenties;
      return;
    },
    ten: function () {
      this.runningTotal -= 1000;
      this.change.tens = 1;
      return;
    },
    five: function () {
      this.runningTotal -= 500;
      this.change.five = 1;
      return;
    },
    two: function () {
      let numberOfTwoonies = Math.floor(String(this.runningTotal)[0] / 2);
      this.runningTotal -= numberOfTwoonies * 200;
      this.change.twoonies = numberOfTwoonies;
      return;
    },
    one: function () {
      this.runningTotal -= 100;
      this.change.looney = 1;
    },
    quarter: function () {
      let numberOfQuarters = Math.floor(this.runningTotal / 25);
      this.runningTotal -= numberOfQuarters * 25;
      this.change.quarters = numberOfQuarters;
      return;
    },
    dime: function () {
      let numberOfDimes = Math.floor(this.runningTotal / 10);
      this.runningTotal -= numberOfDimes * 10;
      this.change.dimes = numberOfDimes;
      return;
    },
    nickel: function () {
      let numberOfNickels = Math.floor(this.runningTotal / 5);
      this.runningTotal -= numberOfNickels * 5;
      this.change.nickels = numberOfNickels;
      return;
    },
    pennies: function () {
      this.change.pennies = this.runningTotal;
      this.runningTotal -= this.runningTotal;
      return;
    },
  };

  while (billObj.runningTotal > 0) {
    // console.log("check bill total", billObj.runningTotal.length);
    if (String(billObj.runningTotal).length >= 4) {
      billObj.runningTotal[0] >= 2 ? billObj.twenty() : billObj.ten();
      continue;
    }

    if (String(billObj.runningTotal).length === 3) {
      if (String(billObj.runningTotal)[0] >= 5) {
        billObj.five();
        continue;
      }

      if (String(billObj.runningTotal)[0] >= 2) {
        billObj.two();
        continue;
      }

      billObj.one();
      continue;
    }

    if (String(billObj.runningTotal).length === 2) {
      if (billObj.runningTotal >= 25) {
        billObj.quarter();
        continue;
      }

      if (billObj.runningTotal >= 10) {
        billObj.dime();
        continue;
      }

      billObj.nickel();
      continue;
    }

    if (String(billObj.runningTotal).length === 1) {
      billObj.pennies();
      continue;
    }
  }

  return billObj.change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
