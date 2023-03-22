const entrada4 = require("readline-sync");

let mat: number = parseFloat(entrada4.question("Digite um numero: "));

if (mat>0){
console. log(mat +" é positivo");
}
if (mat<0){ 
console.log(mat + " é negativo");
}
if (mat==0){
console. log(mat + " é zero");
}