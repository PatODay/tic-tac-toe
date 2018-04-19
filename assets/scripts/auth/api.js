'use strict'

const config = require('../config')
const store = require('../store')
const events = require('../events')
const logic = require('../logic')
// const getFormFields = require('./../../lib/get-form-fields')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const onGetGameData = function (data) {
//   $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
//     .then(function (data) {
//       console.log('data is', data)
//     })
// }

const gameIndex = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    }
  })
    .then(function (data) {
      console.log('data is', data)
      const length = data.games.length
      $('#index-message').text('game length is ' + length)
    })
}

const gameStart = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    },
    data: {}
  })
}

// const gameUpdate = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + store.game.id,
//     method: 'PATCH',
//     headers: {
//       contentType: 'application/json',
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
//     .then(function (data) {
//       console.log('game update data is', data)
//     })
// }

// const turn = logic.turn

const gameUpdate = function (data, turn, isOver) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      game: {
        cell: {
          index: data,
          value: turn
        },
        over: isOver
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  gameIndex,
  gameStart,
  gameUpdate
}
