const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 20,
});

const writtableStream = fs.WriteStream("./file2.txt");

// usage of data event
readableStream.on("data", (chunk) => {
  console.log(chunk);
  writtableStream.write(chunk);
});
