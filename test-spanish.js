const assert = require("assert")
const { hola } = require("./src/spanish")

assert.strictEqual(hola("Ana"), "¡Hola, Ana!")
console.log("1 passing")
