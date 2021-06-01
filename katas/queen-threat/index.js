const generateBoard = (whiteArr, blackArr) => {
  const finalArray = [];
  for (let i = 0; i < 8; i++) {
    let tempArr = [];
    for (let j = 0; j < 8; j++) {
      if (
        (whiteArr[0] === i && whiteArr[1] === j) ||
        (blackArr[0] === i && blackArr[1] === j)
      ) {
        tempArr.push(1);
        continue;
      }
      tempArr.push(0);
    }
    finalArray.push(tempArr);
  }

  return finalArray;
};

const queenThreat = (generatedBoard) => {
  // find position
  // subtract current row vs postion[0]
  // three possible equals minus 1, equal, plus 1 for column
  // [0, 5], [3, 2]
  const positions = {};

  for (let i = 0; i < generatedBoard.length; i++) {
    for (let j = 0; j < generatedBoard[i].length; j++) {
      if (generatedBoard[i][j] === 1) {
        positions.first
          ? positions.second
            ? null
            : (positions.second = [i, j])
          : (positions.first = [i, j]);
      }
    }
  }

  console.log(positions);

  if (positions.second[1] === positions.first[1]) {
    return true;
  }

  if (
    positions.first[1] + (positions.second[0] - positions.first[0]) ===
    positions.second[1]
  ) {
    return true;
  }

  if (
    positions.first[1] - (positions.second[0] - positions.first[0]) ===
    positions.second[1]
  ) {
    return true;
  }

  return false;
};

let whiteQueen = [0, 5];
let blackQueen = [2, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
