'use strict'

const logic = require('./logic')
const api = require('./auth/api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./auth/ui')

// const onSignUp = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data)
//   api.signUp(data)
//     .then(ui.signUpSuccess)
//     .catch(ui.signUpFailure)
// }
//
// const onSignIn = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data)
//   api.signIn(data)
//     .then(ui.signInSuccess)
//     .catch(ui.signInFailure)
// }
//
// const onChangePassword = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data)
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }
//
// const onSignOut = function (event) {
//   event.preventDefault()
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }

const addHandlers = () => {
  $('.box').on('click', logic.changeTurn)
  $('.box').on('click', logic.winCondition)
  $('#replay').on('click', logic.playAgain)
  $('.box').on('click', logic.pushToArray)
  $('.box').on('click', logic.alertCurrentPlayer)
  // $('#sign-up-id').on('submit', onSignUp)
  // $('#sign-in-id').on('submit', onSignIn)
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
