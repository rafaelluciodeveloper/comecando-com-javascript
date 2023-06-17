var nomes = "rafael,rodrigo,israel,amanda,yasmin,alicia".split(",");
console.log(nomes);
console.log(nomes.toString());
console.log(nomes.join("-"))

nomes.push("israel");
nomes.unshift("rodrigo");

var t = nomes.push("israel");
var u = nomes.unshift("rodrigo")
var g = nomes.shift();

nomes[0] = "thiago";

var splice =  nomes.splice(1,2);
console.log(splice);

var slice = nomes.slice(3,1)
console.log(slice);

var concat = nomes.concat(slice);

console.log(concat);

