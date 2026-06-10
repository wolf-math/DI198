const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

function checkWinner() {
  winCombos.forEach((combo) => {
    [a, b, c] = combo;
    if (a.trim() === '') return false;

    if (a === b && b === c) {
      return true;
    }

    return false;
  });
}

let userChoice;
