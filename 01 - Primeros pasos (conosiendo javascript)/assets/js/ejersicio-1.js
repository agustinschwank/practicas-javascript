'use strict'

// Crea un programa donde el usuario ingrese su nombre, luego dos numeros, sumarlos y mostrarlos en documento
// !nota prompt entraga siempre string, podemos usar Number(), parseInt(): entero, parseFloat(): flotante;

var _name = prompt('Ingrese su nombre: ');
alert('A continuacion ingrese dos numeros para sumarlos');
var n1 = Number(prompt('Ingrese primer numero', 0));
var n2 = Number(prompt ('Ingrese segundo numero', 0));
document.write(`<h3>Hola ${_name}, la suma de sus numero es: ${n1+n2}</h3>`);