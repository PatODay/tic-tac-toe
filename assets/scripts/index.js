'use strict'

const events = require('./events')
// const logic = require('./logic')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  events.addHandlers()
  // logic.eventHandlers()
})
