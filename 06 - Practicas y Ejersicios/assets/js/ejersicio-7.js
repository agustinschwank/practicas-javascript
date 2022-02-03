/*

    Implementa una función que pase de decimal a binario.

    Nota:   Para convertir un número decimal a binario, debemos dividirlo entre 2 tantas veces como sea necesario 
            hasta que tengamos de cociente un 1 o un 0. Además, debemos ir anotando el resto que obtenemos 
            en cada una de las divisiones.

            Ej: 8 a binario  

                10/2= 5 => 0
                5/2= 2 => 1
                2/2= 1 => 0

                Binario: 1000

*/

'use strict'

/*
function toBinari(number) {
    return (number.toString(2));
}

console.log('En binario es: '+toBinari(parseInt(prompt('Ingrese numero decimal'))));
*/



var binNum = [], send='';

function toBinari(num){
    while (num!=0 && num!=1){
        binNum.push(num%2);
        num = parseInt(num/2);
    }
    binNum.push(num);
    //binNum.reverse();
    for (let i=0; i<parseInt(binNum.length/2); i++){
        let aux = binNum[i];
        binNum[i] = binNum[binNum.length-i-1];
        binNum[binNum.length-i-1] = aux;
    }
    for(let i=0; i<binNum.length; i++){
        send = send + binNum[i].toString();
    }
    return(Number(send));
}

console.log('En binario es: '+toBinari(parseInt(prompt('Ingrese numero decimal'))));
