const multiplicationTable = function (maxValue) {
  // Your code here
  let multiplcationTable = "";
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      multiplcationTable += j * i;

      if (j === maxValue) {
        multiplcationTable += "\n";
      }
    }
  }

  return multiplcationTable;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
