const moment = require("moment")
// OR
// import moment from "moment";
const _ = require("lodash")

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
console.log(moment().format('dddd'))
console.log(moment().format('MMM Do YY'))

// Is the date valid or not. So moment's valid function is used.
console.log(moment().isValid('2020-01-01'))
console.log(moment().isValid('2020-14-01'))
console.log(moment().isValid('01-01'))

// Manipulating Dates
console.log(moment().calendar())
// Add 7 to the current date
console.log(moment().add(7,'days').calendar())
// Add 7 months to the current date
console.log(moment().add(7,'months').calendar())
// Add 7 years to the current date
console.log(moment().add(7,'years').calendar())

console.log(`-----------`)
// subtracts 7 days to current date
console.log(moment().subtract(7,'days').calendar())
console.log(moment().subtract(7,'months').calendar())
console.log(moment().subtract(7,'years').calendar())

console.log(`-----------`)

var a = moment([2014,11,11]);
var b = moment([2015,09,11]);
console.log(b.diff(a,"days"))

// Check if moment is After another moment
console.log(moment('2020-01-01').isAfter('2018-01-01', 'year'))
console.log(moment('2010-01-01').isAfter('2018-01-01', 'year'))

console.log(`Is year a leap year`)
console.log(moment([2019]).isLeapYear())
console.log(moment([2020]).isLeapYear())



