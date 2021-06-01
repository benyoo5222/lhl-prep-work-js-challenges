const judgeVegetable = (arrOfVegetables, metric) => {
  const sortedArr = arrOfVegetables.sort((a, b) => {
    return b[metric] - a[metric];
  });

  return sortedArr[0].submitter;
};

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

console.log(judgeVegetable(vegetables, metric));
