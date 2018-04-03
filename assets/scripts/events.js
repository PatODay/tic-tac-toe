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
console.log(board)
let turn = ''

// Change turn function will change player turn, add either an 'X' or an 'O'
// to a space on click, and check to see if a space has been taken
const changeTurn = function () {
  if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
    if (turn === objects.player1) {
      turn = objects.player2
    } else {
      turn = objects.player1
    }
    this.innerHTML = turn
    console.log(turn)
  } else {
    console.log('This is an invalid space')
  }
  return turn
}

// Push player token, either 'X' or 'O' to the board array
const pushToArray = () => {
  board[0] = $('#0').text()
  board[1] = $('#1').text()
  board[2] = $('#2').text()
  board[3] = $('#3').text()
  board[4] = $('#4').text()
  board[5] = $('#5').text()
  board[6] = $('#6').text()
  board[7] = $('#7').text()
  board[8] = $('#8').text()
  console.log(board)
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

const playAgain = function (event) {
  board.innertext = ''
  console.log(playAgain)
}

const addHandlers = () => {
  $('.box').on('click', changeTurn)
  $('.box').on('click', winCondition)
  $('#replay').on('click', playAgain)
  $('.box').on('click', pushToArray)

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
  addHandlers,
  board
  // removeHandlers
  // gameLogic
}
