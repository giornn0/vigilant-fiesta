//Modules
//Every file is module by default => CommonJS
//Modules => encapsulated code (only share minimum)
const names = require('./names');
const salute = require('./salute');
const data = require('./alternative-flavior')

console.log(data)

salute(names.ali)
salute(names.luz)
salute('Tito')

// Built in Modules

// OS
// PATH
// FS
// HTTP
