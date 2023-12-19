const fs = require("node:fs")

console.log("First")

// This is the way of reading the file Sychronously
const fileContents = fs.readFileSync("./file.txt", "utf-8")
console.log(fileContents)

console.log("Second")

// This is the way of reading the file Asynchronously
fs.readFile("./file.txt", "utf-8", (error, data) => {
    if(error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

console.log("Third")

// with out adding manually greet.txt file added to the folder
// Synchronous way of writting a file
fs.writeFileSync("./greet.txt", "Hello world")


// Asynchronous way of writting the file
fs.writeFile("./greet.txt", "Hello Sowmya", {flag: "a"},  (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("File written")
    }
})