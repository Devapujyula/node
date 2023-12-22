const http = require("node:http");

const server = http.createServer((request, response) => {
  const superHero = {
    firstName: "Prakash",
    lastName: "Sowmya",
  };

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(superHero));
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
