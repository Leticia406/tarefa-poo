const entrada7 = require("readline-sync");

let homem1:number = parseFloat(entrada7.question("Digite a idade: "));
let homem2:number = parseFloat(entrada7.question("Digite outra idade : "));
let mulher1:number = parseFloat (entrada7.question("Digite mais uma idade : "));
let mulher2:number = parseFloat (entrada7.question("Digite outra idade: "));

 if(homem1>homem2 && mulher1>mulher2){
let socorro = homem1+mulher2;
let idadex = homem2*mulher1;
console.log("a soma é: " +socorro + " e a multiplicação é: " +idadex);
}

if (homem1>homem2 && mulher2>mulher1) {
let socorro = homem1+mulher1;
let idadex = homem2*mulher2;
console. log("a soma é: " +socorro + " e a multiplicação é: " +idadex);
}

if (homem2>homem1 && mulher1>mulher2) {
let socorro = homem2+mulher2;
let idadex = homem1*mulher1;
console.log("a soma é:" +socorro + " e a multiplicação é: " +idadex);
}
if (homem2>homem1 && mulher2>mulher1){
let socorro = homem2+mulher1;
let idadex = homem1*mulher2;
console.log("a soma é: " +socorro + " e a multiplicação é: " +idadex);
}