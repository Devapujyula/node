(function(message){
    const superHero = "Batman"
    console.log(message, superHero)
})('Hello');

(function(message){
    const superHero = "Superman"
    console.log(message, superHero)
})('Hey');

// Before modules code is executed node js will wrape it with function that contains 5 parameters namely
// 1. exports
// 2. require
// 3. module
// 4. __filename
// 5. __dirname

// These are vailable for every module everytime for usage