const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "html" });
  fs.createReadStream("./index.html").pipe(response);
  //  const html = fs.readFileSync("./index.html", "utf-8");
  // response.end(html);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
