'use strict'

const store = ('../store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
}

const signUpFailure = function () {
  $('#message').text('Failed to sign up')
  $('#message').css('background-color', 'red')
}

const signInSuccess = function (data) {
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
  console.log(data)
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('Failed to sign in')
  $('#message').css('background-color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
