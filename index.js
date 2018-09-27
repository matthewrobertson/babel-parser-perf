var parser = require("@babel/parser");
var fs = require("fs");

var filename = process.argv[2];
if (!filename) {
  console.error("no filename specified");
  process.exit(0);
}

var file = fs.readFileSync(filename, "utf8");

console.time('Normal parse');
parser.parse(file);
console.timeEnd('Normal parse');

console.time('Typescript parse');
parser.parse(file, {plugins: ['typescript']});
console.timeEnd('Typescript parse');
