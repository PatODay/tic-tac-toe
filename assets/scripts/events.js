'use strict'

const objects = require('./objects')
const logic = require('./logic')

// const blockTile = function () {
//   this.off()
// }

// const paintSquare = function (event) {
//   this.innerHTML = objects.turn
// }

// Board as an array of 9 empty strings

const board = ['', '', '', '', '', '', '', '', '']
let turn = ''

// Change turn function will change player turn, add either an 'X' or an 'O'
// to a space on click, and check to see if a space has been taken
const changeTurn = function () {
  // if (element.innerHTML !== '') return
  if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
    if (turn === objects.player1) {
      turn = objects.player2
    } else {
      turn = objects.player1
      // board.forEach(changeTurn())
    }
    // for (let i = 0; i < board.length; i++) {
    //   board[i] = turn
    // }
    this.innerHTML = turn
    console.log(turn)
  }
  else {
    console.log('This is an invalid space')
  }
  return turn
}

// Function to check for win based on board index
const winCondition = () => {
  board[0] = document.getElementById('0')
  board[1] = document.getElementById('1')
  board[2] = document.getElementById('2')
  board[3] = document.getElementById('3')
  board[4] = document.getElementById('4')
  board[5] = document.getElementById('5')
  board[6] = document.getElementById('6')
  board[7] = document.getElementById('7')
  board[8] = document.getElementById('8')

  if (board[0].innerHTML !== '' && board[0].innerHTML === board[1].innerHTML && board[1].innerHTML === board[2].innerHTML) {
    console.log('You Have Won!')
  } else if (board[3].innerHTML !== '' && board[3].innerHTML === board[4].innerHTML && board[3].innerHTML === board[5].innerHTML) {
    console.log('You Have Won!')
  } else if (board[6].innerHTML !== '' && board[6].innerHTML === board[7].innerHTML && board[6].innerHTML === board[8].innerHTML) {
    console.log('You Have Won!')
  } else if (board[0].innerHTML !== '' && board[0].innerHTML === board[3].innerHTML && board[0].innerHTML === board[6].innerHTML) {
    console.log('You Have Won!')
  } else if (board[1].innerHTML !== '' && board[1].innerHTML === board[4].innerHTML && board[1].innerHTML === board[7].innerHTML) {
    console.log('You Have Won!')
  } else if (board[2].innerHTML !== '' && board[2].innerHTML === board[5].innerHTML && board[2].innerHTML === board[8].innerHTML) {
    console.log('You Have Won!')
  } else if (board[0].innerHTML !== '' && board[0].innerHTML === board[4].innerHTML && board[0].innerHTML === board[8].innerHTML) {
    console.log('You Have Won!')
  } else if (board[2].innerHTML !== '' && board[2].innerHTML === board[4].innerHTML && board[2].innerHTML === board[6].innerHTML) {
    console.log('You Have Won!')
  }
}
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

const playAgain = function () {
  for (let i = 0; i < board.length; i++) {
    board[i].innerHTML = []
  }
}

// const winCheck = function () {
//   if( board[0].textContent === "X" &&
//       board[1].textContent === "X" &&
//       board[2].textContent === "X"
//   ) {}
//   else if (
//       board[3].textContent === "X" &&
//       board[4].textContent === "X" &&
//       board[5].textContent === "X"
//   ) {}
//   else if (
//       board[6].textContent === "X" &&
//       board[7].textContent === "X" &&
//       board[8].textContent === "X"
//   ) {}

// const addToBoard = function () {
//   for (let i = 0; i < board.length; i++) {
//     board[i] = turn
//   }
// }

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

// const tileCheck = function () {
//   if (this.innerHTML === '') {
//     this.innerHTML = turn
//   }
// }

// const gameTokens = function (element) {
//   if (objects.turn === objects.player1) {
//     $(element.target).innerText = ('X')
//   } else {
//     $(element.target).text('O')
//   }
// }

// const paintTile = function () {
//   if ($('#0').innerHTML === '') {
//     $('#0').innerHTML = turn
//   }
// }

const addHandlers = () => {
  $('.box').on('click', changeTurn)
  $('.box').on('click', winCondition)
  $('.button').on('click', playAgain)

// $('#0').on('mouseup')
// $('#1').off('click', changeTurn)
// $('#2').off('click', changeTurn)
// $('#3').off('click', changeTurn)
// $('#4').off('click', changeTurn)
// $('#5').off('click', changeTurn)
// $('#6').off('click', changeTurn)
// $('#7').off('click', changeTurn)
// $('#8').off('click', changeTurn)
// }
//
// const removeHandlers = () => {
//   $('#0').on('mouseup', changeTurn)
//   $('#1').on('mouseup', changeTurn)
//   $('#2').on('mouseup', changeTurn)
//   $('#3').on('mouseup', changeTurn)
//   $('#4').on('mouseup', changeTurn)
//   $('#5').on('mouseup', changeTurn)
//   $('#6').on('mouseup', changeTurn)
//   $('#7').on('mouseup', changeTurn)
//   $('#8').on('mouseup', changeTurn)
}

module.exports = {
  // eventHandlers
  addHandlers
  // removeHandlers
  // gameLogic
}
