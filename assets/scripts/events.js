'use strict'

const logic = require('./logic')
const api = require('./auth/api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./auth/ui')
// const config = require('./config')
// const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  document.getElementById('sign-up').reset()
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  document.getElementById('sign-in').reset()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  document.getElementById('change-password').reset()
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const updateGame = {
  data: {
    game: {
      cell: {
        index: logic.pushToArray,
        value: logic.changeTurn
      },
      over: logic.winCondition
    }
  }
}

const addHandlers = () => {
  $('.box').on('click', logic.changeTurn)
  $('.box').on('click', logic.winCondition)
  $('#replay').on('click', logic.playAgain)
  $('#replay').on('click', api.onNewGame)
  $('#replay').on('click', ui.newGameSuccess)
  $('.box').on('click', logic.pushToArray)
  $('.box').on('click', logic.alertCurrentPlayer)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#get-games').on('click', api.onGetGameData)
  $('box').on('click', api.gameUpdate)
  $('box').on('click', updateGame)
}

module.exports = {
  // eventHandlers
  addHandlers,
  // removeHandlers
  // gameLogic
  updateGame
}
