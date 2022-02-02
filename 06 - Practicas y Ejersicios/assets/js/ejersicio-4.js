/*
    Escribir un programa que pida al usuario un número entero y muestre en documento un triángulo rectángulo 
    como el de más abajo, cuya altura es el número introducido.

    *
    **
    ***
    ****
    *****

*/

var _alt = parseInt(prompt('Ingrese un numero',0));
for (let i=0; i<_alt; i++){
    document.write('*');
    for(let j=0; j<i; j++){
        document.write('*');
    }
    document.write('<br>');
}