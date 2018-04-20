'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#sign-message').text('Successfully signed up')
  $('#signUpModal').modal('hide')
  setTimeout(() => {
    $('#sign-message').html('')
  }, 3000
  )
}

const signUpFailure = function () {
  $('#message').text('Failed to sign up')
  $('#message').css('background-color', 'red')
}

const signInSuccess = function (data) {
  $('#sign-message').text('Successfully signed in')
  $('#signUpModal').modal('hide')
  $('#signInModal').modal('hide')
  $('#sign-up-modal').addClass('hidden')
  $('#sign-in-modal').addClass('hidden')
  $('#changePasswordButton').removeClass()
  $('#sign-out').removeClass()
  $('#replay').removeClass()
  $('#get-games').removeClass()
  setTimeout(() => {
    $('#sign-message').html('')
  }, 3000
  )
  store.user = data.user
}

const signInFailure = function () {
  $('#player-message').text('Failed to sign in')
  $('#player-message').css('background-color', 'red')
}

const changePasswordSuccess = function () {
  $('#player-message').text('Successfully changed password')
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
  $('#replay').addClass('hidden')
  $('#get-games').addClass('hidden')
  $('#board-hide').addClass('hidden')
  $('#replay').addClass('hidden')
  $('#get-games').addClass('hidden')
  $('#signUpButton').removeClass('hidden')
  $('#signInButton').removeClass('hidden')
  $('#changePasswordButton').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#index-message').addClass('hidden')
  $('#win-message').addClass('hidden')
  $('#player-message').addClass('hidden')
  store.user = null
}

const gameStartSuccess = function (data) {
  $('#player-message').removeClass('hidden')
  $('#win-message').addClass('hidden')
  $('#index-message').addClass('hidden')
  store.game = data.game
}

const gameIndexSuccess = function (data) {
  // console.log('data is', data)
}

const gamePatchSuccess = function (data) {
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
