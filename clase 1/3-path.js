const path = require("node:path");

//unir rutas
// console.log(path.sep); Barra sparador ad e carpetas segun OS

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath); //Saber el archivo final
console.log(base);

const extension = path.extname(filePath); //Saber la extension
console.log(extension);
