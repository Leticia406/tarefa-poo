const entrada2 = require ("readline-sync");
let salario:number = parseFloat (entrada2. question ("Digite o seu salario: "));
let vendas: number = parseFloat (entrada2.question ("Digite o total da venda: "));

if (vendas <= 1.500){
let soma = vendas*0.03;
let total = soma+salario;
console. log ("seu salario sera de: " + total);
}
else{
let s = vendas*0.05;
let t = s+salario;
console. log("seu novo salario sera de: "+t);
}