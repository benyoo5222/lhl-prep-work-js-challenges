const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // Code here!
  const arrayOfReceipes = [];
  let receipeChecker = {};

  for (let recipe of recipes) {
    for (let ingredient of recipe.ingredients) {
      bakeryA.includes(ingredient) || bakeryB.includes(ingredient)
        ? receipeChecker.counter
          ? receipeChecker.counter++
          : (receipeChecker.counter = 1)
        : null;
    }

    if (receipeChecker.counter === recipe.ingredients.length) {
      arrayOfReceipes.push(recipe.name);
    }
    receipeChecker = {};
  }

  return arrayOfReceipes;
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
