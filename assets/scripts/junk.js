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
    // return key.join('') === 'XXX'
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
