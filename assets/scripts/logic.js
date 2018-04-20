'use strict'

// const events = require('./events')
// const store = require('./store')
const api = require('./auth/api')
const ui = require('./auth/ui')
// const getFormFields = require('../../lib/get-form-fields')

// Board as an array of 9 empty strings
let board = ['', '', '', '', '', '', '', '', '']
const player1 = 'X'
const player2 = 'O'
let turn = ''
let isOver = false

// Change turn function will change player turn, add either an 'X' or an 'O'
// to a space on click, and check to see if a space has been taken
const changeTurn = function () {
  if (this.innerText !== 'X' && this.innerText !== 'O') {
    if (turn === player1) {
      turn = player2
    } else {
      turn = player1
    }
    this.innerHTML = turn
  } else {
    $('#invalid-message').text('This is an invalid space')
    setTimeout(() => {
      $('#invalid-message').html('')
    }, 2500
    )
  }
  return turn
}

// Alerts player currently up
const alertCurrentPlayer = () => {
  if (turn === 'O') {
    $('#player-message').text('Player X it is your turn')
  } else if (turn === 'X') {
    $('#player-message').text('Player O it is your turn')
  }
  return turn
}

// const pushToArray = function () {
//   board[0] = $('#0').text()
//   board[1] = $('#1').text()
//   board[2] = $('#2').text()
//   board[3] = $('#3').text()
//   board[4] = $('#4').text()
//   board[5] = $('#5').text()
//   board[6] = $('#6').text()
//   board[7] = $('#7').text()
//   board[8] = $('#8').text()
//   // board[event.target] = event.target.text
//
//   console.log('board is', board)
//   return board
// }

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

  if ((board[0].innerHTML === 'X' && board[1].innerHTML === 'X' && board[2].innerHTML === 'X') ||
      // or x wins middle row
      (board[3].innerHTML === 'X' && board[4].innerHTML === 'X' && board[5].innerHTML === 'X') ||
      // or x wins bottom row
      (board[6].innerHTML === 'X' && board[7].innerHTML === 'X' && board[8].innerHTML === 'X') ||
      // or x wins left to right diagnol
      (board[0].innerHTML === 'X' && board[4].innerHTML === 'X' && board[8].innerHTML === 'X') ||
      // or X wins right column
      (board[2].innerHTML === 'X' && board[5].innerHTML === 'X' && board[8].innerHTML === 'X') ||
      // or X wins left column
      (board[0].innerHTML === 'X' && board[3].innerHTML === 'X' && board[6].innerHTML === 'X') ||
      // or X wins middle column
      (board[1].innerHTML === 'X' && board[4].innerHTML === 'X' && board[7].innerHTML === 'X') ||
      // or X wins right to left diagonal
      (board[2].innerHTML === 'X' && board[4].innerHTML === 'X' && board[6].innerHTML === 'X')) {
    // print player one wins
    $('#game-board').hide()
    $('#player-message').addClass('hidden')
    $('#win-message').removeClass()
    $('#win-message').text('X wins')
    isOver = true
    return isOver
    // if O wins top row
  } else if ((board[0].innerHTML === 'O' && board[1].innerHTML === 'O' && board[2].innerHTML === 'O') ||
      // or O wins middle row
      (board[3].innerHTML === 'O' && board[4].innerHTML === 'O' && board[5].innerHTML === 'O') ||
      // or O wins bottom row
      (board[6].innerHTML === 'O' && board[7].innerHTML === 'O' && board[8].innerHTML === 'O') ||
      // or O wins left to right diagonal
      (board[0].innerHTML === 'O' && board[4].innerHTML === 'O' && board[8].innerHTML === 'O') ||
      // or O wins right column
      (board[2].innerHTML === 'O' && board[5].innerHTML === 'O' && board[8].innerHTML === 'O') ||
      // or O wins left column
      (board[0].innerHTML === 'O' && board[3].innerHTML === 'O' && board[6].innerHTML === 'O') ||
      // or O wins middle column
      (board[1].innerHTML === 'O' && board[4].innerHTML === 'O' && board[7].innerHTML === 'O') ||
      // or O wins right to left diagonal
      (board[2].innerHTML === 'O' && board[4].innerHTML === 'O' && board[6].innerHTML === 'O')) {
    // print player two wins
    $('#game-board').hide()
    $('#player-message').addClass('hidden')
    $('#win-message').removeClass()
    $('#win-message').text('O wins')
    isOver = true
    return isOver
  } else if ((board[0].innerHTML !== '' && board[1].innerHTML !== '' && board[2].innerHTML !== '' &&
    board[3].innerHTML !== '' && board[4].innerHTML !== '' && board[5].innerHTML !== '' && board[6].innerHTML !== '' &&
    board[7].innerHTML !== '' && board[8].innerHTML !== '')) {
    // return draw
    $('#game-board').hide()
    $('#player-message').addClass('hidden')
    $('#win-message').removeClass()
    $('#win-message').text('Its a draw')
    isOver = true
    return isOver
  }
}

const playAgain = function (event) {
  event.preventDefault()
  board = ['', '', '', '', '', '', '', '', '']
  turn = player2
  $('#game-board').show()
  $('.box').html('')
  $('#board-hide').removeClass()
  $('#player-message').text('Player X Begin')
  api.gameStart()
    .then(ui.gameStartSuccess)
}

module.exports = {
  changeTurn,
  // pushToArray,
  winCondition,
  player1,
  player2,
  playAgain,
  board,
  turn,
  isOver,
  alertCurrentPlayer
}
