function generateBoard() {
  const board = [];

  for (let index = 0; index < 3; index++) {
    board.push(' '.repeat(3).split(''));
  }

  return board;
}

function botChoice() {
  const choice = [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)];

  if (isInvalidChoice(choice)) {
    return botChoice();
  }

  return choice;
}
function isGameWon(board) {
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return true;
  }

}
function handleUserInput() {
  const input = prompt('enter the row,column (comma, separated):');
  // const row = +input.slice(0, 1);
  // const column = +input.slice(2, 3);
  const coord = input.split(',');
  // console.log(row, column);
  // if ((typeof row) === 'number' && !isNaN(row) && !isNaN(column)) {
  // return [row, column];
  // }
  return [coord[0], coord[1]];

  // return handleUserInput();
}
function gameLoop() {

  const board = generateBoard();
  console.log(board);
  const gameWon = isGameWon(board);
  if (gameWon) {
    console.log(gameWon);
    return gameWon;
  }

  // else gameLoop();
}
console.log(gameLoop());