const mergeAndSort = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a - b);
};

console.log(mergeAndSort([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(mergeAndSort([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(mergeAndSort([1, 2, 6], []), "=?", [1, 2, 6]);
