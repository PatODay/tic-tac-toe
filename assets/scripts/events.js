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

const onGetGameIndex = function () {
  api.gameIndex()
  // .then(ui.gameIndexSuccess)
}

const gamePatch = function (event) {
  event.preventDefault()
  const data = event.target.id
  const turn = event.target.innerText
  const isOver = logic.winCondition()
  console.log('gamePatch data is', data)
  console.log('gamePatch turn is', turn)
  console.log('isOver is', isOver)
  api.gameUpdate(data, turn, isOver)
    .then(ui.gamePatchSuccess)
    .catch()
}

const addHandlers = () => {
  $('.box').on('click', logic.changeTurn)
  $('.box').on('click', logic.winCondition)
  $('.box').on('click', logic.alertCurrentPlayer)
  $('.box').on('click', gamePatch)
  // $('.box').on('click', logic.gamePost)
  $('#replay').on('click', logic.playAgain)
  // $('#replay').on('click', api.gameStart)
  $('#replay').on('click', ui.newGameSuccess)
  $('.box').on('click', logic.alertCurrentPlayer)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#get-games').on('click', onGetGameIndex)
  // $('box').on('click', api.gameUpdate)
}

module.exports = {
  // eventHandlers
  addHandlers
  // removeHandlers
  // gameLogic
  // gamePatch
}
