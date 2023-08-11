//Pedir para o usuário digitar dois números e mostrar a soma:
var primeiroNumero = parseInt(prompt("Digite um número: "));
var segundoNumero = parseInt(prompt("Digite um número: "));

alert("A soma dos dois números é igual a " + primeiroNumero + segundoNumero);


//Pedir para o usuário digitar dois números e mostrar uma mensagem informando de foi aprovado ou não. A nota de corte é 5:
var num1 = parseInt(prompt("Digite um número"));
var num2 = parseInt(prompt("Digite outro número"));

int (media = num1 + num2) / 2;
if(media < 5) {
	alert("Não aprovado!");
} else {
		alert("Aprovado!");
}

/*
Pedir para o usuário digitar um número de 1 a 6.
Mostrar na tela uma mensagem diferente para cada número
*/

var numero = parserInt(prompt("Digite um número"));

switch(numero) {
    case 1:
        alert("Você escolheu o número um.");
        break;
    case 2:
        alert("Você escolheu o número dois.");
        break;
    case 3:
        alert("Você escolheu o número três.");
        break;
    default:
        alert("Você escolheu um número maior que três!");
}