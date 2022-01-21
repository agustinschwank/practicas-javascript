/*

 Crear un programa donde el usuario ingrese sus datos (nombre, apellido, edad).
 Luego calcular en que año nacio.
 Debera utilizar una plantilla para mostrar los datos en el documento, resaltando su nombre, apellido y año de nacimiento

*/

'use strict'

// Infromamos a usuario para que ingrese sus datos
alert ('Bienvenido usuario, a continucion le solicitaremos algunos datos');
var _name = prompt('Ingrese su Nombre');
var _lastname = prompt('Ingrese su Apellido');
var _yearold = parseInt(prompt('Ingrese su Edad'));

//Usuario nos ingreso en minuscula y queremos acomodar sus datos para posteriormente guardar en base de datos
_name = _name[0].toUpperCase() + _name.slice(1).toLowerCase();
_lastname = _lastname[0].toUpperCase() + _lastname.slice(1).toLowerCase();

// creamos la plantilla y calculamos el año de nacimiento
var plantilla = `
                    <h1>Hola Usuario Bienvenido</h1><hr>
                    <h4>Sus datos ingresados fuero: <b style="color: red; font-size:18px;">${_name} ${_lastname}</b></h4>
                    <h4>Segun su edad usted nacion en el año:  <b style="color: red; font-size:18px;">${2022-_yearold}</b></h4>
                `;

// mostramos sus datos en documento
document.write(plantilla);