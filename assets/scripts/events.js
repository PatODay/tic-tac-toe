'use strict'

const logic = require('./logic')
const api = require('./auth/api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./auth/ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onGetGameIndex = function () {
  $('#index-message').removeClass('hidden')
  api.gameIndex()
  setTimeout(() => {
    $('#index-message').text('')
    $('#index-message').addClass('hidden')
  }, 3000
  )
}

const gamePatch = function (event) {
  event.preventDefault()
  const data = event.target.id
  const turn = event.target.innerText
  const isOver = logic.winCondition()
  api.gameUpdate(data, turn, isOver)
    .then(ui.gamePatchSuccess)
    .catch()
}

const addHandlers = () => {
  $('.box').on('click', logic.changeTurn)
  $('.box').on('click', logic.winCondition)
  $('.box').on('click', logic.alertCurrentPlayer)
  $('.box').on('click', gamePatch)
  $('#replay').on('click', logic.playAgain)
  $('#replay').on('click', ui.newGameSuccess)
  $('.box').on('click', logic.alertCurrentPlayer)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#get-games').on('click', onGetGameIndex)
}

module.exports = {
  addHandlers
}
