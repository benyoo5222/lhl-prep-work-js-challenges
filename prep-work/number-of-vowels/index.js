const numberOfVowels = function (data) {
  // Put your solution here
  let counter = 0;

  for (let letter of data) {
    switch (letter) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        counter++;
    }
  }

  return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
