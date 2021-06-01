const range = (start, end, step) => {
  if (!start || !end || !step) {
    return [];
  }

  if (start > end) {
    return [];
  }

  if (step < 0) {
    return [];
  }

  const newArr = [];

  for (let i = start; i <= end; i = i + step) {
    newArr.push(i);
  }

  return newArr;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
