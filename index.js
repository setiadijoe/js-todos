'use strict'

let Controller = require('./controller')

let command = process.argv.slice(2)

Controller.help(command)

// console.log(command)
