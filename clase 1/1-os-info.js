//Informacion del sistema operativo

const os = require("node:os");

console.log("Información del sistema operativo");

console.log("-----------------------------");

console.log("Nombre del sistema operativo", os.platform());
console.log("Version del sistema", os.release());
console.log("CPUs", os.cpus());
console.log("Memoria Libre", os.freemem() / 1024 / 1024);
console.log("uptime", os.uptime() / 60 / 60 / 24);
