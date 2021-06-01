const squareCode = function (message) {
  // Put your solution here
  let finalString = "";
  const numberOfColumns = Math.ceil(
    Math.sqrt(message.replaceAll(" ", "").length)
  );

  for (let i = 0; i < numberOfColumns; i++) {
    let counter = i;
    for (let j = 0; j < numberOfColumns; j++) {
      if (counter >= message.replaceAll(" ", "").length) {
        break;
      }
      finalString += message.replaceAll(" ", "")[counter];
      counter += numberOfColumns;
    }
    finalString += " ";
  }

  return finalString;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
