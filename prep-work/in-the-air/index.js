const checkAir = function (samples, threshold) {
  // Code here!

  const counterObj = {};

  for (let airCondition of samples) {
    counterObj[airCondition]
      ? counterObj[airCondition]++
      : (counterObj[airCondition] = 1);
  }

  return counterObj.dirty / samples.length >= threshold ? "Polluted" : "Clean";
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
