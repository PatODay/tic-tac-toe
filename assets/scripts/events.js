'use strict'

const logic = require('./logic')

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

const playAgain = function (event) {
  event.preventDefault()
  $('.game-board').show()
  $('.box').html('')
  logic.board = ['', '', '', '', '', '', '', '', '']
}

const addHandlers = () => {
  $('.box').on('click', logic.changeTurn)
  $('.box').on('click', logic.winCondition)
  $('#replay').on('click', playAgain)
  $('.box').on('click', logic.pushToArray)
  $('.box').on('click', logic.alertCurrentPlayer)
}

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
// }

module.exports = {
  // eventHandlers
  addHandlers
  // removeHandlers
  // gameLogic
}
