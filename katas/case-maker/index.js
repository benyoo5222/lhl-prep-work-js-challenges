const camelCase = function (input) {
  // Your code here
  const arrayOfWords = input.split(" ");

  let camelCaseString = "";
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (i === 0) {
      camelCaseString += arrayOfWords[i];
      continue;
    }
    for (let j = 0; j < arrayOfWords[i].length; j++) {
      if (j === 0) {
        camelCaseString += arrayOfWords[i][j].toUpperCase();
        continue;
      }

      camelCaseString += arrayOfWords[i][j];
    }
  }

  return camelCaseString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
