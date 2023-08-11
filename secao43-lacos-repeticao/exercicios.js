/*
Para esta tarefa reescreva o código da aula anterior, mas inserindo uma linha divisória sempre que mudar a dezena. Ou seja, entre o 10 e o 11, entre o 20 e o 21 e assim por diante.
*/

var numero = parseInt(prompt("Digite um número"));

var indice = 0;

while(indice <= 1000) {
    document.write(numero + " x " + indice + " = " + (numero * indice) + " <br>");
    if(indice % 10 === 0 && indice > 0){
        document.write("<hr>");
    }
    indice++;
}

/*
 Mostre na tela todos os anos a partir de 1004 até o ano 2017, pulando de quatro em quatro anos.
*/

var ano = 1004;
var anoMaximo = 2017;

while(ano <= anoMaximo) {
    document.write(ano + "<br>");
    ano += 4;
}

/*
Para este exercicio aplique a lógica necessário para mostrar os anos que são realmente bissextos, respeitando a regra: Os anos bissextos são múltiplos de 4, não múltiplos de 100 (1900 não é bissexto) e múltiplos de 400 (2000 é bissexto).
*/

var anoInicial = 1000;
var anoFinal = 2025;

while(anoInicial <= 2025){
    if(!(ano % 100 == 0 || (ano % 400 == 0))){
        document.write(ano + "<br>");
    } else {
        document.write(ano + " não é bissexto <br>");
    }
    anoInicial += 4;
}
