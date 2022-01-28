// Estructura de control CONDICIONALES
// CONDICIONAL IF (condicion): retorna un boolean

if (true) {
    console.log('Exprecion condicional es verdadera');
} else {
    console.log('Exprecion condicional es falsa');
}


// le solicitamos a usuario si es mayor de edad para continuar

var respuesta = confirm('Usted es mayor de 18 años'); //recordar nos retorna true o false segun indique el usuario

if (respuesta) {
    document.write('<h2>Bienvenido Usuario, usted es mayor de edad, puede navegar en el sitio</h2>');
} else {
    document.write('<h2>Disculpe, al se menor de edad no puede ingresar</h2>');
}


// si le solicitaramos la edad a usuario tambien podriamos identificarlo
// recordemos Operadores logicos (!=, ==, ===, <, >, <=, >=, &&, || (or), )

var _year = parseInt(prompt('Ingrese su edad',0));

if (_year >= 18) {
    document.write('<h2>Bienvenido Usuario, es mayor de 18 AÑOS</h2><p>Edad ingresada es: '+_year+'</p>');
} else {
    document.write('<h2>Disculpe, es menor de 18 AÑOS</h2><p>Edad ingresada es: '+_year+'</p>');
}

// ejecutamos un separador en documento
document.write('<hr>');
/********** ***********/

// CONDICIONAL SWITCH(); 

var contenido = parseInt(prompt('Ingrese un valor entre 1 a 5'));
var valor;

switch (contenido) {
    case 1 : valor = 'Contenido en Case 1';
    break;
    case 2 : valor = 'Contenido en Case 2';
    break;
    case 3 : valor = 'Contenido en Case 3';
    break;
    case 4 : valor = 'Contenido en Case 4';
    break;
    case 5 : valor = 'Contenido en Case 5';
    break;
    default : valor = 'Numero ingresado fue '+contenido+' esta fuera de rango';
} 

document.write('<h3>'+valor+'<h3>');