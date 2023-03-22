const entrada3 = require ("readline-sync");

let number: number = parseFloat(entrada3. question("Digite o numero da conta: "));
let saldo: number = parseFloat(entrada3.question("Digite o saldo da sua conta: "));
let debito: number = parseFloat(entrada3.question("Qual o valor do debito: "));
let credito: number = parseFloat( entrada3.question("Qual o valor do credito: "));
let total = saldo+credito-debito

if (total>0){
console.log("Seu saldo atual é de: " +total);
}

else{
console.log("Seu saldo negativo é de: " +total);
}