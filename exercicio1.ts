const entrada1= require("readline-sync");
let semana = 40;
let mes = 4*semana;


let horas: number = parseFloat(entrada1.question("Digite quanto vale sua hora de servico: "));
let valor: number = parseFloat(entrada1.question("Digite quantas horas voce trabalha por mes: "));
let soma = horas * mes;

if(valor>mes){
    let sx =  (((valor - mes) * horas)* 1.5) + soma;
console.log("Seu salario do mês é: " + sx);
}
else if(valor == mes){
    console.log("Seu salario do mês é:" + soma);
}