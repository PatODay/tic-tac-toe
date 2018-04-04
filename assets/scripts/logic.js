'use strict'

// Board as an array of 9 empty strings
let board = ['', '', '', '', '', '', '', '', '']
console.log(board)
const player1 = 'X'
const player2 = 'O'
let turn = ''

// Change turn function will change player turn, add either an 'X' or an 'O'
// to a space on click, and check to see if a space has been taken
const changeTurn = function () {
  if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
    if (turn === player1) {
      turn = player2
    } else {
      turn = player1
    }
    this.innerHTML = turn
    console.log(turn)
  } else {
    console.log('This is an invalid space')
  }
  return turn
}

const alertCurrentPlayer = () => {
  if (turn === 'O') {
    $('#message').text('Player X it is your turn')
  } else if (turn === 'X') {
    $('#message').text('Player O it is your turn')
  }
  return turn
}
alertCurrentPlayer()

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
    console.log('X wins')
    $('#message').text('X wins')
    $('#message').css('background-color', 'green')
    $('#game-board').hide()
    $('#message').hide()
    return true
    // if O wins top row
  } else if ((board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
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
    console.log('O wins')
    $('#message').text('O wins')
    $('#message').css('background-color', 'purple')
    $('#game-board').hide()
    $('#message').hide()
    return true
  } else if ((board[0].innerHTML !== '' && board[1].innerHTML !== '' && board[2].innerHTML !== '' &&
    board[3].innerHTML !== '' && board[4].innerHTML !== '' && board[5].innerHTML !== '' && board[6].innerHTML !== '' &&
    board[7].innerHTML !== '' && board[8].innerHTML !== '')) {
    // return draw
    console.log('Its a draw')
    $('#message').text('Its a draw')
    $('#message').css('background-color', 'purple')
    $('#game-board').hide()
    $('#message').hide()
    return true
  }
}

const playAgain = function (event) {
  event.preventDefault()
  $('#game-board').show()
  $('.box').html('')
  board = ['', '', '', '', '', '', '', '', '']
  turn = player2
}

module.exports = {
  changeTurn,
  pushToArray,
  winCondition,
  player1,
  player2,
  playAgain
}
