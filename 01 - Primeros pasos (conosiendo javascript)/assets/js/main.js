// use strict para trabajar en modo estricto
'use strict'

// Creamos primer programa Hola Mundo
alert('Hola Mundo');

// Ingresamos Valor utilizando prompt
prompt('Ingrese un valor:');

// Como mostramos en el documento
document.write('Hola Mundo');
document.write('<h2>Mensaje con etiqueta h2</h2>');

/* Declaracion de Variables (var, let, const)
    const: no cambia su valor en ningun momento
    var: si puede cambiar su valor y su scope es local
    let: si puede cambiar su valor, pero unicamente dentro de un bloque
*/

const _name = 'Agustin'; const lastname = 'Schwank';
//alert(_name+' '+lastname);
document.write(_name +' '+ lastname);

// actualmente se utilizan plantillas, veamos ejemplo 
var plantilla = `<hr> Mi nombre es: <b>${_name}</b> y mi apellido <span style="color:red;"><b>${lastname}</b></span>`;
document.write(plantilla);

// operadores basicos (+, -, *, /, % :modulo)

// Para mostrar en consola utilizamos
console.log('hola mundo');