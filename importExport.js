// 2nd way of exporting
// module.exports = (a,b) => {
//     return a + b
// }

// 1st way of exporting
// module.export = add;

// 3rd way if we want to export 2 or more functions

const add = (a,b) => {
    return a + b
}

// 4th way of exporting the modules
exports.subtract = (a,b) => {
    return a - b
}

// module.exports.add = (a,b) => {
//     return a + b
// }

// module.export.subtract = (a,b) => {
//     return a - b
// }

const multiply = (a,b) => {
    return a * b
}

module.exports = {
    add: add,
    subtract : subtract
}