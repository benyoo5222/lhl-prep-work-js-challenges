// Needs to be either a school or community centre
// Also needs at least 20 people

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

const chooseStations = (arrayOfStations) => {
  return arrayOfStations.reduce((acc, current) => {
    if (
      current[1] >= 20 &&
      (current[2] === "school" || current[2] === "community centre")
    ) {
      return [...acc, current[0]];
    }

    return acc;
  }, []);
};

console.log(chooseStations(stations));
