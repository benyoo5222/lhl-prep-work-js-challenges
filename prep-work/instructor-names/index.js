const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let indexTracker = {};

  for (let info of instructors) {
    indexTracker.length
      ? indexTracker.length < info.name.length
        ? (indexTracker = {
            length: info.name.length,
            item: info,
          })
        : null
      : (indexTracker = {
          length: info.name.length,
          item: info,
        });
  }

  return indexTracker.item;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
