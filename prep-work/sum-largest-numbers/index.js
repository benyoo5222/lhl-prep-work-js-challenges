const sumLargestNumbers = (data) => {
  // Put your solution here
  const rankedNumbers = {};

  for (let item of data) {
    if (rankedNumbers.first && rankedNumbers.first < item) {
      rankedNumbers.second = rankedNumbers.first;
      rankedNumbers.first = item;
      continue;
    }

    if (rankedNumbers.second && rankedNumbers.second < item) {
      rankedNumbers.second = item;
      continue;
    }

    !rankedNumbers.first || !rankedNumbers.second
      ? rankedNumbers.first
        ? rankedNumbers.second
          ? null
          : (rankedNumbers.second = item)
        : (rankedNumbers.first = item)
      : null;
  }
  return rankedNumbers.first + rankedNumbers.second;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
