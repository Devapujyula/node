// If we want to load or want another file in this file we have to use require word here
// Here we said that the code which is executing the the add module to execute here


// Here it is not required to always use the same name which is exported from the other module we can use what ever name we want to as a function name
const add = require('./add.js')

console.log("Hello from index.js")
 const sum = add(1,2)
 console.log(sum)

// executing moduleCashing code here

const moduleCashing = require('./moduleCashing')
console.log(moduleCashing.getName())

moduleCashing.setName("Superman")
console.log(moduleCashing.getName())

const newSuperHero = require('./moduleCashing.js')

console.log(newSuperHero.getName())
