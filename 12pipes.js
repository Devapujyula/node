const fs = require("node:fs");
const zlib = require("node:zlib");
// zlib has built in transform stream

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 20,
});

readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

const writtableStream = fs.WriteStream("./file2.txt");

readableStream.pipe(writtableStream);
