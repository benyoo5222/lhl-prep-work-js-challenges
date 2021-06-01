const repeatNumbers = function (data) {
  // Put your solution here
  const holdArrayOfRepeatedNumbers = [];

  let tempString = "";
  for (let arr of data) {
    for (let i = 0; i < arr[1]; i++) {
      tempString += arr[0];
    }
    holdArrayOfRepeatedNumbers.push(tempString);
    tempString = "";
  }

  return holdArrayOfRepeatedNumbers.join(", ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
