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

// Export and import how to do execution here

const importExport = require('./importExport.js')

// destructuring method

const {add, subtract} = require('./importExport.js')

console.log(add(2,4))

// if we want to execute more than 2 functions from a module
console.log(importExport.add(3,4))
console.log(importExport.subtract(3,4))

console.log(add(2,4))
console.log(subtract(9,7))