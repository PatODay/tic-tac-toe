
// Assigning 'x' and 'o' to players
// const player1 = 'x'
// const player2 = 'o'
const players = ['X', 'O']
// const markers = ['X', 'O']

// creating the board as an array of 9 empty strings
const board = ['', '', '', '', '', '', '', '', '']

// track and alternate player turn
let turn = 0

const changeTurn = function () {
  if (turn === 0) turn = 1
  else turn = 0
}

const play = function (div) {
  return players[turn]
}
// check open tiles on game board
// if active player clicks on unoccupied tile place player icon there
// reset game
// show user games played

// Winning combinations based on array index
const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

module.exports = {
  players,
  play,
  board,
  wins,
  turn,
  changeTurn
}
