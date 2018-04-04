'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
  $('#signUpModal').modal('hide')
  $('#signUpButton').modal('hide')
  $('#signInButton').modal('hide')
  $('#signInModal').modal('hide')
  $('#changePasswordButton').removeClass()
  $('#sign-out').removeClass()
}

const signUpFailure = function () {
  $('#message').text('Failed to sign up')
  $('#message').css('background-color', 'red')
}

const signInSuccess = function (data) {
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
  $('#signUpModal').modal('hide')
  $('#signInModal').modal('hide')
  $('#signUpButton').hide()
  $('#signInButton').hide()
  $('#changePasswordButton').removeClass()
  $('#sign-out').removeClass()
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
