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
  $('#signUpModal').modal('hide')
  $('#sign-message').text('Failed to sign up')
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
}

const changePasswordSuccess = function () {
  $('#password-message').text('Successfully changed password')
  $('#password-message').removeClass()
  $('#sign-out').removeClass()
  setTimeout(() => {
    $('#password-message').addClass('hidden')
  }, 3000
  )
  $('#changePasswordModal').modal('toggle')
}

const changePasswordFailure = function () {
  $('#changePasswordModal').modal('toggle')
  $('#password-message').removeClass()
  $('#password-message').text('Failed to change password')
  setTimeout(() => {
    $('#password-message').addClass('hidden')
  }, 3000
  )
}

const signOutSuccess = function () {
  $('#replay').addClass('hidden')
  $('#get-games').addClass('hidden')
  $('#board-hide').addClass('hidden')
  $('#replay').addClass('hidden')
  $('#get-games').addClass('hidden')
  $('#sign-up-modal').removeClass('hidden')
  $('#sign-in-modal').removeClass('hidden')
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
