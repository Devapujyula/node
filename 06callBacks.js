// Any function calling as an arugument to another function is said to be an CALLBACK IN JAVASCRIPT
// A function which accepts a function as its argument or return a function is called HIGHER ORDER FUNCTION 

// This ia an example of SYCHRONOUS CALlBACK FUNCTION
function greet(name) {
    console.log(`Hello ${name}`)
}

// Function accepting other function as an argument

// function greetPrakash(greetFn) {
//     const name = "Prakash";
//     greetFn(name);
// }

function higherOrderFunction(callback) {
    const name = "Sowmya";
    callback(name)
}

// greetPrakash(greet)
higherOrderFunction(greet)

