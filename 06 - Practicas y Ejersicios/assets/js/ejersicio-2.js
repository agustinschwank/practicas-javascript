/*

    Los teléfonos de una empresa tienen el siguiente formato prefijo-número-extension donde el prefijo es el código 
    del país +34, y la extensión tiene dos dígitos (por ejemplo +34-913724710-56). 
    Escribir un programa que pregunte por un número de teléfono con este formato y muestre por pantalla el número 
    de teléfono sin el prefijo y la extensión.

*/

'use strict'
var _tel = prompt('Ingrese Numero de telefono, por ejemplo +34-913724710-56');
console.log('El numero de telefono es: '+_tel.substring(4,13));

// Nota se dejo de utilizar substr, sub