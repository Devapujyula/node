Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
process.nextTick(() => console.log("This is process.nextTick 1"));

// console.log("console.log 1");
// process.nextTick(() => {
//   console.log("this is process.next 1");
// });

// console.log("console.log 2");
