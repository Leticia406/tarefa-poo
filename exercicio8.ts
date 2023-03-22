const entrada8 = require ("readline-sync");

let nome = entrada8.question ("Digite seu nome: ")
let qganha: number = parseFloat (entrada8.question ("Digite seu salario atual: "));
let work: number = parseFloat(entrada8.question("Digite seus anos de trabalho na empresa: "));

if (work<=3) {
let soma = qganha*1.03;
console.log ("Seu novo salario é: "+ soma);
}

if(work>3 && work<10){
let conta1= qganha*1.125;
console. log("Seu novo salario é: " + conta1);
}

if (qganha>=10){
let conta2 = qganha*1.2;
console.log("Seu novo salario é: " +conta2);
}