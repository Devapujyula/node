const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("This is read file : 1");
});

process.nextTick(() => console.log("This is process.nextTick 1"));
Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
setTimeout(() => console.log("This is setTimeout 1"), 0);

// setTimeout(() => console.log("This is setTimeout 1"), 0);

// fs.readFile(__filename, () => {
//   console.log("This is read file : 1");
// });

// fs.readFile(__filename, () => {
//   console.log("This is read file : 1");
// });

// process.nextTick(() => console.log("This is process.nextTick 1"));
// Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
