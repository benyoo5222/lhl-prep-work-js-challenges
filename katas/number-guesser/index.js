let prompt = require("prompt-sync")();

// code below (replace this example)
let matchStatus = false;
const randomNumber = Math.floor(Math.random() * 100) + 1;

const createClosure = () => {
  const object = {
    counter: 0,
  };

  return (passedRandom, answer) => {
    object.counter++;

    if (passedRandom === answer) {
      return {
        match: true,
        prompt: `You got it on the ${object.counter} attempts!`,
      };
    }

    if (object[answer]) {
      return {
        match: false,
        prompt: `Already Guessed!`,
      };
    }

    object[answer] = true;

    return answer > passedRandom
      ? {
          match: false,
          prompt: "Too High!",
        }
      : {
          match: false,
          prompt: "Too Low!",
        };
  };
};

const checkAnswerFunc = createClosure();

while (!matchStatus) {
  let answer = prompt("Guess a number: ");
  const results = checkAnswerFunc(randomNumber, Number(answer));

  if (!results.match) {
    console.log(results.prompt);
    continue;
  }

  console.log(results.prompt);
  matchStatus = true;
}
