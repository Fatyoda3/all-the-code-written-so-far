const CHOICES = ['scissor', 'rock', 'paper', 'scissor', 'rock'];
function botChoice() {
  return Math.floor(Math.random() * 3);
}

function playerInput() {
  console.log(CHOICES.join('-'), 'enter the count');
  const choice = +(prompt('enter the number for choice:').slice(0, 1)) - 1;
  if ((typeof choice) === "number" && choice >= 0 && choice < 3) {
    return choice;
  }
  console.log('enter valid choice please -_-');
  return playerInput();
}

function howManyTimes() {
  const times = +(prompt('enter rounds to play:').slice(0, 2));

  if ((typeof times) === "number" && times >= 1 && times < 20) {
    return times;
  }

  console.log('enter valid rounds -_-');
  return howManyTimes();
}

function gameLoop(round, rounds) {
  if (round === rounds) {
    return 'message';
  }

  const input = playerInput();
  const rng = botChoice();

  const validation = CHOICES[input] === CHOICES[rng];
  console.log(CHOICES[rng], (rng + 1) % 3, input);
  if (input === rng) {
    return gameLoop(round + 1, rounds)
  }
  if (validation) {
    console.log('tie');
    return gameLoop(round + 1, rounds);
  }


  return gameLoop(round + 1, rounds);
}

console.log(gameLoop(0, howManyTimes()));