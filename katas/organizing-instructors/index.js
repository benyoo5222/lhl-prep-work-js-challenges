const organizeInstructors = function (instructors) {
  // Put your solution here
  const organizedObj = {};

  for (let instructorObj of instructors) {
    organizedObj[instructorObj.course]
      ? organizedObj[instructorObj.course].push(instructorObj.name)
      : (organizedObj[instructorObj.course] = [instructorObj.name]);
  }

  return organizedObj;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
