const http = require("node:http");

const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  if (req.url === "/") {
    res.end("Hola mundo");
  } else if (req.url === "/contacto") {
    res.end("Contacto");
  } else {
    res.statusCode = 404;
    res.end("404 ERROR");
  }
};

const server = http.createServer(processRequest);

server.listen(3000, () => {
  console.log("Servidor corriendo en el puerto http://localhost:3000");
});
