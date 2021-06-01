const urlEncode = function (text) {
  // Put your solution here
  let newEncodedString = "";
  for (let i = 0; i < text.length; i++) {
    if (i === text.length - 1 && text[i] === " ") {
      return newEncodedString;
    }

    if (i === 0 && text[i] === " ") {
      continue;
    }

    if (text[i] === " ") {
      newEncodedString += "%20";
      continue;
    }

    newEncodedString += text[i];
  }

  return newEncodedString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
