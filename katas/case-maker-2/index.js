const makeCase = function (input, caseCondition) {
  // Put your solution here

  const conditions = {
    finalString: input,
    camel: function () {
      const wordsArr = this.finalString.split(" ");
      let tempString = "";
      for (let i = 0; i < wordsArr.length; i++) {
        if (i === 0) {
          tempString += wordsArr[i];
          continue;
        }
        let tempFirstLetter = wordsArr[i][0];
        let restOfLetters = wordsArr[i].replace(tempFirstLetter, "");

        tempString += tempFirstLetter.toUpperCase() + restOfLetters;
      }
      this.finalString = tempString;
      return;
    },
    pascal: function () {
      const wordsArr = this.finalString.split(" ");
      let tempString = "";
      for (let i = 0; i < wordsArr.length; i++) {
        let tempFirstLetter = wordsArr[i][0];
        let restOfLetters = wordsArr[i].replace(tempFirstLetter, "");

        tempString += tempFirstLetter.toUpperCase() + restOfLetters;
      }
      this.finalString = tempString;
      return;
    },
    snake: function () {
      this.finalString = this.finalString.split(" ").join("_");
      return;
    },
    kebab: function () {
      this.finalString = this.finalString.split(" ").join("-");
      return;
    },
    title: function () {
      let tempString = "";
      for (let i = 0; i < this.finalString.length; i++) {
        if (i === 0) {
          tempString += this.finalString[i].toUpperCase();
          continue;
        }

        if (this.finalString[i - 1] === " ") {
          tempString += this.finalString[i].toUpperCase();
          continue;
        }

        tempString += this.finalString[i];
      }
      this.finalString = tempString;
      return;
    },
    vowel: function () {
      let tempString = "";
      for (let letter of this.finalString) {
        if (this.listOfVowels.includes(letter)) {
          tempString += letter.toUpperCase();
          continue;
        }

        tempString += letter;
      }

      this.finalString = tempString;
    },
    consonant: function () {
      let tempString = "";
      for (let letter of this.finalString) {
        if (!this.listOfVowels.includes(letter) && letter !== " ") {
          tempString += letter.toUpperCase();
          continue;
        }

        tempString += letter;
      }

      this.finalString = tempString;
    },
    upper: function () {
      this.finalString = this.finalString.toUpperCase();
    },
    listOfVowels: ["a", "e", "i", "o", "u"],
  };

  for (let casing of Array.isArray(caseCondition)
    ? [...caseCondition]
    : [caseCondition]) {
    conditions[casing]();
  }

  return conditions.finalString;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
