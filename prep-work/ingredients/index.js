const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

let counter = 0;
while (counter < ingredients.length) {
  console.log(ingredients[counter]);
  counter++;
}

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

let reverseCounter = ingredients.length - 1;
while (reverseCounter >= 0) {
  console.log(ingredients[reverseCounter]);
  reverseCounter--;
}
