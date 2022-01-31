'use strict'
/*

    FUNCIONES

*/

// Nota funciones son como sub-programas donde podemos ejecutarlo tantas veces como necesitemos

//funcion simple o clasica
function writeText(){
    document.write('Hola soy una funcion<br>');
}

// llamamos a la funcion
writeText();writeText();

// Funcion Anonima
var writeDoc = function () {document.write('Hola soy una funcion Anonima<br>');} // manera 1
//var writeDoc = () => {document.write('Hola soy una funcion Anonima Flecha<br>');} // manera 2

writeDoc();


// Funciones con PARAMETROS
function sumar (num1, num2, num3=[]) {
    return (num1+num2+num3);
}

document.write('<br>Resultado de la suma: '+sumar(5,15));
document.write('<br>Resultado de la suma: '+sumar(10,5,1));
document.write('<br>Resultado de la suma: '+sumar(25,25));


// Funcion de Funciones

function docWrite (texto,sum) {
    document.write('<br>'+texto+' Suma: '+sum);
}

function muestra (texto, numero1, numero2) {
    var sum = numero1 + numero2;
    docWrite(texto, sum);
}

muestra('Hola soy un texto ingresado', 25, 25);

// Funciones CALLBACK
function restarNum(res1, res2, escribe) {
    var res = res1 - res2;
    escribe(res*2);
    return(res);
}

document.write('<br>'+restarNum(20,5, function(dato){document.write('<br>hola soy callback '+dato)}));


// Realizaremos ejersicios completos con todo lo aprendido