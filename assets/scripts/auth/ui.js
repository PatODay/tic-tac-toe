'use strict'

const store = ('../store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
  $('#sign-up-modal').hide()
  $('#sign-in-modal').hide()
  $('#change-password-modal').show()
  $('#sign-out').show()
}

const signUpFailure = function () {
  $('#message').text('Failed to sign up')
  $('#message').css('background-color', 'red')
}

const signInSuccess = function (data) {
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
  $('#sign-up-modal').hide()
  $('#sign-in-modal').hide()
  $('#change-password-modal').show()
  $('#sign-out').show()
  console.log(data)
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('Failed to sign in')
  $('#message').css('background-color', 'red')
}

const changePasswordSuccess = function () {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
}

const changePasswordFailure = function () {
  $('#message').text('Failed to change password')
  $('#message').css('background-color', 'red')
}

const signOutSuccess = function () {
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', 'green')
  store.user = null
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
}
