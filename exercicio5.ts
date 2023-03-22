const entrada5 = require("readline-sync");

let number1: number = parseFloat (entrada5. question("Digite um numero: "));
let number2: number = parseFloat (entrada5.question ("Digite outro numero: "));
let number3: number = parseFloat (entrada5.question("Digite mais um numero: "));

if (number1<number2 && number1<number3 && number2<number3) {
console.log("a ordem crescente é: " +number1, +number2, +number3);
}
if (number1<number2 && number1<number3 && number3<number2){
console.log("a ordem crescente é: " +number1, +number3, +number2);
}
if(number2<number1 && number2<number3 && number1<number3) {
console. log("a ordem crescente é: " +number2, +number1, +number3);
}
if (number2<number1 && number2<number3 && number3<number1) {
console. log("a ordem crescente é: " +number2, +number3, +number1);
}
if (number3<number2 && number3<number1 && number2<number1){
console.log("a ordem crescente é: " +number3, +number2, +number1);
}
if (number3<number2 && number3<number1 && number1<number2) {
console.log("a ordem crescente e: " +number3, +number1, +number2);
}