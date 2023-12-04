const add = (a, b) => {
  return a + b;
};

// with the this module.export we are using only the add functionality of which if we want only one functiona;ity from the entire module
module.exports = add;

// console.log(add(9,6))
