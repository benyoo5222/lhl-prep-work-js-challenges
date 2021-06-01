const urlDecode = function (text) {
  // Put your solution here
  const objOfURLInfo = {};

  const arrayOfInfo = text.split("&");

  for (let stringPair of arrayOfInfo) {
    const tempPair = stringPair.split("=");

    objOfURLInfo[tempPair[0]] = tempPair[1].replaceAll("%20", " ");
  }

  return objOfURLInfo;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
