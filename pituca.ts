const abobora = require("readline-sync");

let media = 0;
let valores: number[] = [];

for(let i = 0; i < 5; i++){
    let valor = parseFloat(abobora.question('Digite 5 numeros: '));
    valores.push(valor);
    media = media + valor;
}

console.log(media/5)
console.log(Math.max(...valores))
console.log(Math.min(...valores))