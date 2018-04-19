'use strict'

const store = require('../store')
const logic = require('../logic')

const signUpSuccess = function () {
  $('#sign-message').text('Successfully signed up')
  // $('#sign-message').css('background-color', 'green')
  $('#signUpModal').modal('hide')
  setTimeout(() => {
    $('#sign-message').html('')
  }, 3000
  )
  // $('#signUpButton').modal('hide')
  // $('#signInButton').modal('hide')
  // $('#signInModal').modal('hide')
}

const signUpFailure = function () {
  $('#message').text('Failed to sign up')
  $('#message').css('background-color', 'red')
}

const signInSuccess = function (data) {
  $('#sign-message').text('Successfully signed in')
  // $('#player-message').css('background-color', 'green')
  $('#signUpModal').modal('hide')
  $('#signInModal').modal('hide')
  $('#signUpButton').hide()
  $('#signInButton').hide()
  $('#changePasswordButton').removeClass()
  $('#sign-out').removeClass()
  $('#replay').removeClass()
  $('#get-games').removeClass()
  setTimeout(() => {
    $('#sign-message').html('')
  }, 3000
  )
  console.log(data)
  store.user = data.user
}

const signInFailure = function () {
  $('#player-message').text('Failed to sign in')
  $('#player-message').css('background-color', 'red')
}

const changePasswordSuccess = function () {
  $('#player-message').text('Successfully changed password')
  // $('#player-message').css('background-color', 'green')
  $('#sign-out').removeClass()
  setTimeout(() => {
    $('#sign-message').html('')
  }, 3000
  )
  $('#changePasswordModal').modal('toggle')
}

const changePasswordFailure = function () {
  $('#player-message').text('Failed to change password')
  $('#player-message').css('background-color', 'red')
}

const signOutSuccess = function () {
  // $('#player-message').text('Successfully signed out')
  // $('#player-message').css('background-color', 'green')
  $('#replay').addClass('hidden')
  $('#get-games').addClass('hidden')
  $('#board-hide').addClass('hidden')
  $('#replay').addClass('hidden')
  $('#get-games').addClass('hidden')
  $('#signUpButton').addClass('show')
  $('#signInButton').addClass('show')
  $('#changePasswordButton').addClass('hidden')
  $('#sign-out').addClass('hidden')
  store.user = null
}

const gameStartSuccess = function (data) {
  console.log('store is', store)
  store.game = data.game
}

const gameIndexSuccess = function (data) {
  // console.log('data is', data)
}

const gamePatchSuccess = function (data) {
  console.log('game patch success data is', data)
  store.game = data.game
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  gameStartSuccess,
  gameIndexSuccess,
  gamePatchSuccess
}
