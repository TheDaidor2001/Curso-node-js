const http = require("node:http");

const desiredPort = process.env.PORT || 3000;
const processRequest = (req, res) => {
  const { method, url } = req;
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(
    `Servidor corriendo en el puerto http://localhost:${desiredPort}`
  );
});
