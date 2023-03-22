const entrada6 = require ("readline-sync");

let time1: string = (entrada6.question("Digite o time da casa: "));
let time2: string = (entrada6.question ("Digite o time visitante: "));
let gols1: number = parseFloat (entrada6.question("Quantos gols o time da casa fez: "));
let gols2: number = parseFloat (entrada6.question("Quantos gols o time visitante fez: "));

if (gols1>gols2){
console.log(time1+ " ganhou de " +gols1 + " a " + gols2);
}

if (gols2>gols1){
console.log(time2+ " ganhou de " +gols2 + " a " + gols1);
}

if(gols1==gols2){
console. log("A partida ficou empatada!!")
}