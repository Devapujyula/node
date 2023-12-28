const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("This is read file : 1");
});

process.nextTick(() => console.log("This is process.nextTick 1"));
Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
setTimeout(() => console.log("This is setTimeout 1"), 0);
setImmediate(() => console.log("This is set Immediate 1"));

for (let i = 0; i < 2000000000; i++) {}
