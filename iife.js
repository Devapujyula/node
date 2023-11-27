// with iife each function has it's private scope
// node js also uses the same pattern

(function(){
    const superHero = "Batman"
    console.log(superHero)
})('Hello');

(function(){
    const superHero = "Superman"
    console.log(superHero)
})('Hey');