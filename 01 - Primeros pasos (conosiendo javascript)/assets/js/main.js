/*
    Javascript es un lenguaje no tipado (osea que no es necesario declarar tipo de valores que contendra la variable),
    no requeire de compilacion (si TypeScript)
*/


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

// Tipos de datos
var im_string = 'Hola yo soy una cadena de caracteres';
var im_number = 55;
var im_false_number = '55';
var im_boolean = true;

console.log(im_string, im_number, im_false_number, im_boolean);
console.log(im_false_number + 45); // concatena 5545
console.log(parseInt(im_false_number) + 45); // convertimos falso numero, en entero, resultado 55+47=100
console.log(parseInt(im_false_number) + String(45)); // abos son string

// Javascript nos entrega un operador de tipo de datos: llamado typeof, veamos ejemplos
console.log(typeof(im_false_number)); // consola obtenemos string
console.log(typeof(im_boolean)); // nos arroja boolean
console.log(typeof(im_number)); //number

// analizamos los siguiente (NaN, Null, undefined)
var contenido;
console.log(contenido); // contenido no esta definido, ojo no esta vacio
contenido = 55;
console.log(contenido); // nos informara el contenido de la variable que es 55
contenido = null;
console.log(contenido == null); // nos mostrara en consola true

// Operadores logicos (!=, ==, ===, <, >, <=, >=, &&, || (or), )

if(contenido == null) {console.log('contenido de la variable es null');} else {console.log('contenido de la variable no es null')};

/* Material para leer en
    https://jorger.gitbooks.io/javascript-basico/content/
*/


// funciones para los Strings, el mas utilizado (length)
console.log(im_string.length); // total de caracteres que contiene el string
console.log(im_string.replace('cadena', 'nueva palabra o frase')); // remplaza el contenido
console.log(im_string.toUpperCase()); // convierte todos lo caracteres a mayusculas
console.log(im_string.toLowerCase()); // convierte todos lo caracteres a minusculas

// Otra ventana que tenmos es la de confirmacion de un dato

var confirmation = confirm('Desea continuar o finalizar'); // nos devolvera true o false segun la respuesta del usuario
console.log('Ustede a ingresado aceptar o cancelar: '+confirmation);

// Final de aprendiendo los primeros pasos