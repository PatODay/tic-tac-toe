// const objects = require('./objects')
//
// // creating the board as an array of 9 empty strings
// const board = ['', '', '', '', '', '', '', '', '']
// let turn = ''
//
// // track and alternate player turn
//
// // const changeTurn = function (player) {
// //   // if (element.innerHTML !== '') return
// //   if (turn === objects.player1) {
// //     turn = objects.player2
// //   } else if (turn === objects.player1) {
// //     turn = objects.player2
// //   }
// //   console.log(turn)
// //   return turn
// // }
//
// // Winning combinations based on array index
// const winCombo = [
//   [board[0], board[1], board[2]],
//   [board[3], board[4], board[5]],
//   [board[6], board[7], board[8]],
//   [board[0], board[3], board[6]],
//   [board[1], board[4], board[7]],
//   [board[2], board[5], board[8]],
//   [board[0], board[4], board[8]],
//   [board[2], board[4], board[6]]
// ]
//
// const win = () => {
//   if (winCombo.some((key) => {
// <<<<<<< HEAD
// return key.join('') === ''
// =======
// return key.join('') === ''
// >>>>>>> master
//   })) {
//     playerXWon()
//   } else if (winCombo.some((key) => {
//     return key.join('') === 'OOO'
//   })) {
//     playerOWon()
//   } else if (board.join('').length === 9) {
//     tie()
//   }
// }
// win()
// //
// // const gameLogic = (num) => {
// //   const game = () => {
// //     while ($('#' + num).text() === '') {
// //       $('#' + num).text(turnValue())
// //     }
// //     board[num] = turn
// //     checkForMatch()
// //   }
// //   return game
// // }
// //
// // const eventHandlers = () => {
// //   for (let i = 0; i <= board.length; i++) {
// //     $('#' + i).on('click', changeTurn(i))
// //   }
// // }
// //
//
// module.exports = {
//   // changeTurn
//   // eventHandlers
// //   gameLogic
// }

//   if (board[0].innerHTML !== '' && board[0].innerHTML === board[1].innerHTML && board[1].innerHTML === board[2].innerHTML) {
//     console.log('You Have Won!')
//   } else if (board[3].innerHTML !== '' && board[3].innerHTML === board[4].innerHTML && board[3].innerHTML === board[5].innerHTML) {
//     console.log('You Have Won!')
//   } else if (board[6].innerHTML !== '' && board[6].innerHTML === board[7].innerHTML && board[6].innerHTML === board[8].innerHTML) {
//     console.log('You Have Won!')
//   } else if (board[0].innerHTML !== '' && board[0].innerHTML === board[3].innerHTML && board[0].innerHTML === board[6].innerHTML) {
//     console.log('You Have Won!')
//   } else if (board[1].innerHTML !== '' && board[1].innerHTML === board[4].innerHTML && board[1].innerHTML === board[7].innerHTML) {
//     console.log('You Have Won!')
//   } else if (board[2].innerHTML !== '' && board[2].innerHTML === board[5].innerHTML && board[2].innerHTML === board[8].innerHTML) {
//     console.log('You Have Won!')
//   } else if (board[0].innerHTML !== '' && board[0].innerHTML === board[4].innerHTML && board[0].innerHTML === board[8].innerHTML) {
//     console.log('You Have Won!')
//   } else if (board[2].innerHTML !== '' && board[2].innerHTML === board[4].innerHTML && board[2].innerHTML === board[6].innerHTML) {
//     console.log('You Have Won!')
//   }
// }

// <<<<<<< HEAD

// if (board[0].innerHTML === 'X' && board[0].innerHTML === board[1].innerHTML && board[1].innerHTML === board[2].innerHTML) {
//   console.log('X wins!')
// } else if (board[3].innerHTML === 'X' && board[3].innerHTML === board[4].innerHTML && board[3].innerHTML === board[5].innerHTML) {
//   console.log('X wins!')
// } else if (board[6].innerHTML === 'X' && board[6].innerHTML === board[7].innerHTML && board[6].innerHTML === board[8].innerHTML) {
//   console.log('X wins!')
// } else if (board[0].innerHTML === 'X' && board[0].innerHTML === board[3].innerHTML && board[0].innerHTML === board[6].innerHTML) {
//   console.log('X wins!')
// } else if (board[1].innerHTML === 'X' && board[1].innerHTML === board[4].innerHTML && board[1].innerHTML === board[7].innerHTML) {
//   console.log('X wins!')
// } else if (board[2].innerHTML === 'X' && board[2].innerHTML === board[5].innerHTML && board[2].innerHTML === board[8].innerHTML) {
//   console.log('X wins!')
// } else if (board[0].innerHTML === 'X' && board[0].innerHTML === board[4].innerHTML && board[0].innerHTML === board[8].innerHTML) {
//   console.log('X wins!')
// } else if (board[2].innerHTML === 'X' && board[2].innerHTML === board[4].innerHTML && board[2].innerHTML === board[6].innerHTML) {
//   console.log('X wins!')
// } else if (board[0].innerHTML === 'O' && board[0].innerHTML === board[1].innerHTML && board[1].innerHTML === board[2].innerHTML) {
//   console.log('O wins!')
// } else if (board[3].innerHTML === 'O' && board[3].innerHTML === board[4].innerHTML && board[3].innerHTML === board[5].innerHTML) {
//   console.log('O wins!')
// } else if (board[6].innerHTML === 'O' && board[6].innerHTML === board[7].innerHTML && board[6].innerHTML === board[8].innerHTML) {
//   console.log('O wins!')
// } else if (board[0].innerHTML === 'O' && board[0].innerHTML === board[3].innerHTML && board[0].innerHTML === board[6].innerHTML) {
//   console.log('O wins!')
// } else if (board[1].innerHTML === 'O' && board[1].innerHTML === board[4].innerHTML && board[1].innerHTML === board[7].innerHTML) {
//   console.log('O wins!')
// } else if (board[2].innerHTML === 'O' && board[2].innerHTML === board[5].innerHTML && board[2].innerHTML === board[8].innerHTML) {
//   console.log('O wins!')
// } else if (board[0].innerHTML === 'O' && board[0].innerHTML === board[4].innerHTML && board[0].innerHTML === board[8].innerHTML) {
//   console.log('O wins!')
// } else if (board[2].innerHTML === 'O' && board[2].innerHTML === board[4].innerHTML && board[2].innerHTML === board[6].innerHTML) {
//   console.log('O wins!')
// }
// }
// =======
// if (board[0].innerHTML === 'X' && board[0].innerHTML === board[1].innerHTML && board[1].innerHTML === board[2].innerHTML) {
//   console.log('X wins!')
// } else if (board[3].innerHTML === 'X' && board[3].innerHTML === board[4].innerHTML && board[3].innerHTML === board[5].innerHTML) {
//   console.log('X wins!')
// } else if (board[6].innerHTML === 'X' && board[6].innerHTML === board[7].innerHTML && board[6].innerHTML === board[8].innerHTML) {
//   console.log('X wins!')
// } else if (board[0].innerHTML === 'X' && board[0].innerHTML === board[3].innerHTML && board[0].innerHTML === board[6].innerHTML) {
//   console.log('X wins!')
// } else if (board[1].innerHTML === 'X' && board[1].innerHTML === board[4].innerHTML && board[1].innerHTML === board[7].innerHTML) {
//   console.log('X wins!')
// } else if (board[2].innerHTML === 'X' && board[2].innerHTML === board[5].innerHTML && board[2].innerHTML === board[8].innerHTML) {
//   console.log('X wins!')
// } else if (board[0].innerHTML === 'X' && board[0].innerHTML === board[4].innerHTML && board[0].innerHTML === board[8].innerHTML) {
//   console.log('X wins!')
// } else if (board[2].innerHTML === 'X' && board[2].innerHTML === board[4].innerHTML && board[2].innerHTML === board[6].innerHTML) {
//   console.log('X wins!')
// } else if (board[0].innerHTML === 'O' && board[0].innerHTML === board[1].innerHTML && board[1].innerHTML === board[2].innerHTML) {
//   console.log('O wins!')
// } else if (board[3].innerHTML === 'O' && board[3].innerHTML === board[4].innerHTML && board[3].innerHTML === board[5].innerHTML) {
//   console.log('O wins!')
// } else if (board[6].innerHTML === 'O' && board[6].innerHTML === board[7].innerHTML && board[6].innerHTML === board[8].innerHTML) {
//   console.log('O wins!')
// } else if (board[0].innerHTML === 'O' && board[0].innerHTML === board[3].innerHTML && board[0].innerHTML === board[6].innerHTML) {
//   console.log('O wins!')
// } else if (board[1].innerHTML === 'O' && board[1].innerHTML === board[4].innerHTML && board[1].innerHTML === board[7].innerHTML) {
//   console.log('O wins!')
// } else if (board[2].innerHTML === 'O' && board[2].innerHTML === board[5].innerHTML && board[2].innerHTML === board[8].innerHTML) {
//   console.log('O wins!')
// } else if (board[0].innerHTML === 'O' && board[0].innerHTML === board[4].innerHTML && board[0].innerHTML === board[8].innerHTML) {
//   console.log('O wins!')
// } else if (board[2].innerHTML === 'O' && board[2].innerHTML === board[4].innerHTML && board[2].innerHTML === board[6].innerHTML) {
//   console.log('O wins!')
// }
// }

// const events = require('./events')
// Assigning 'x' and 'o' to players
// const player1 = 'X'
// const player2 = 'O'
// const players = ['X', 'O']
// const markers = ['X', 'O']

// const changeTurn = function () {
//   if (turn === player1) {
//     turn = player2
//   } else (turn = player1)
//   console.log(turn)
// }

// const play = function (div) {
//   return changeTurn
// }
// check open tiles on game board
// if active player clicks on unoccupied tile place player icon there
// reset game
// show user games played

// Winning combinations based on array index
// const wins = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

// const blockTile = function () {
//   this.off()
// }

// const paintSquare = function (event) {
//   this.innerHTML = objects.turn
// }

// // check for draw
// const isEmpty = function (element) {
//   return element === ('')
// }
// const checkDraw = function () {
//   const result = board.some(isEmpty)
//   console.log(result)
//   if (result === false) {
//     $('#message').text('Game is a draw')
//     $('#message').css('background-color', 'green')
//   }
// }

module.exports = {
  // player1,
  // player2
}
// >>>>>>> master
