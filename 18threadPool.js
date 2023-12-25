const fs = require("node:fs");

console.log("First");

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Content");
});

console.log("Last");
