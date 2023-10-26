const express = require("express");
const PORT = process.env.PORT || 1234;

const app = express();

app.disable("x-powered-by"); //Quitar la cabecera que indica que uso express

app.get("/", (req, res) => {
  res.json({ msg: "Hola mundo" });
});

app.use((req, res) => {
  res.status(404).json({ msg: "<h1>Not found</h1>" });
});

app.listen(PORT, () => {
  console.log(`Server runing in http://localhost:${PORT}`);
});
