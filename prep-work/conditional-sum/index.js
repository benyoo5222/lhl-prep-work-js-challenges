const conditionalSum = function (values, condition) {
  // Your code here
  const conditionalLeftOver = {
    even: 0,
    odd: 1,
  };

  let total = 0;

  if (values.length === 0) {
    return 0;
  }

  for (let value of values) {
    value % 2 === conditionalLeftOver[condition] ? (total += value) : null;
  }

  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
