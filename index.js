const isPrime = require('./isPrime')
const roundNumber = require('./roundNumber')
const uniqueArray = require('./uniqueArray')
const isOdd = require('./isOdd')

module.exports = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }