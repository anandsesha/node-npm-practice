const moment = require("moment")
const lodash = require("lodash")

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
console.log(moment().format('dddd'))
console.log(moment().format('MMM Do YY'))


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

console.log(lodash.difference(['2014-11-11'],['2015-09-11']))




