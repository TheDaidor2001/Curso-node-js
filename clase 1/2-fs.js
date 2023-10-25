const fs = require("node:fs");
const fs2 = require("node:fs/promises");
const stats = fs.statSync("./archivo.txt");

// Leer archivo

// Forma asincrona de leer archivos
const firstText = fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  //   console.log("primero", text);
});

const secondText = fs.readFile("./archivo2.text", "utf-8", (err, text) => {
  //   console.log(text);
});

// Pasar a promesas el codigo
const Text = fs2
  .readFile("./archivo.txt", "utf-8")
  .then((text) => console.log(text));

const second = fs2
  .readFile("./archivo2.text", "utf-8")
  .then((text2) => console.log(text2));
