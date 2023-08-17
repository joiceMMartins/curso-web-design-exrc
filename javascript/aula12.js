let numInicial = 10;
let calculo = 0;

while(numInicial <= 30) {
    if(numInicial % 2 == 0){
        calculo += numInicial;
     }
     numInicial++;
}
console.log(calculo);

calculo = 0;
numInicial = 10;

while(numInicial <= 30) {
    if(numInicial % 2 !== 0){
        calculo += numInicial;
    }
    numInicial++;
}
console.log(calculo);