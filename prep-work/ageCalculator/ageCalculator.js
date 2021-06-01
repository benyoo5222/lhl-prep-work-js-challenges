// Takes in three parameters: name, year of birth, current year
// returns a string

const ageCalculator = (name, yearOfBirth, currentYear) => {
  return `${name} is ${currentYear - yearOfBirth}.`;
};

console.log(ageCalculator("Suzie", 1983, 2015));
