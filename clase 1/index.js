const http = require("node:http");
const { findAvaliablePort } = require("./10-free-port");

const server = http.createServer((req, res) => {
  console.log("request recivied");
  res.end("hello world");
});

findAvaliablePort(3000).then((port) => {
  server.listen(port, () => {
    console.log(`Server running in server http://localhost:${port}`);
  });
});
