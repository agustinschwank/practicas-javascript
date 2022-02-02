/*
    Escribir un programa que pregunte el nombre completo del usuario en la consola y después muestre por pantalla 
    el nombre completo del usuario tres veces, una con todas las letras minúsculas, otra con todas las letras mayúsculas 
    y otra solo con la primera letra del nombre y de los apellidos en mayúscula. El usuario puede introducir su nombre 
    combinando mayúsculas y minúsculas como quiera.
*/

'use strict'
var _user = prompt('Ingrese Nombre y Apellido');
console.log(_user.trim().toLowerCase());
console.log(_user.trim().toUpperCase());
console.log(_user.trim().replace(/\b\w/g, l => l.toUpperCase())); // Exprecion Regulares entre //
