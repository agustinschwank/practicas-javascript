/*
    Crear un programa donde se le solicita al usuario sus datos (Nombre, Apellido, Año de nacimiento).
    Se debera determinar si el usuario es menor o mayor de edad. Si es mayor, se debera ejecutar un programa de calculo,
    donde el usuario debera ingresar dos numero e indicar una operacion matematica ya sea (suma, resta, multiplicacion, divicion),
    cualquier otro carecter, se le informara ala usuario que no es una operacion valida.
    Monstrar los resultados en documento. Muestre tambien, nombre y apellido y edad.
    (Usar Plantillas para mostrar la informacion en documento)

*/

//informamos y solisitamos ingreso de datos
alert('Estamos ejecutando el Ejersicio 1');
var _year = parseInt(prompt('Ingrese su Año de naciemiento',0));
var _name = prompt('Ingrese su Nombre');
var _lastname = prompt('Ingrese su Apellido');
var plantilla;

//determinamos usuario es mayor de edad
var _date = 2022 - _year;
if((_date>=18) && (_year != 0)) {
    //usuario es mayor de edad
    var _operation = prompt('Ingrese el tipo de operacion a realizar (para suma: "+", resta: "-", multipliacion: "*", division: "/"');
    var num1 = Number(prompt('Ingrese El Primer Numero',0));
    var num2 = Number(prompt('Ingrese El Segundo Numero',0));
    var result;

    //validamos operacion seleccionada
    switch (_operation) {
        case "+" : result = num1 + num2; break;
        case "-" : result = num1 - num2; break;
        case "*" : result = num1 * num2; break;
        case "/" : result = num1 / num2; break;
        default : result = 0; break;
    }

    if(result != 0) {
        document.write(`
                        <p>Hola <b>${_name+' '+_lastname+'</b> usted tiene <b>'+_date} años </b> por lo que procedemos a mostrar el resultado de su operacion </h3>
                        <p>${num1+' '+_operation+' '+num2+' = '+result}</p>
                    `);
    } else {
        document.write(`<h3>Hola ${_name+' '+_lastname }</h3>
                        <p>No su pudo realizar la operacion, caracter ingresado no es valido</p>
                    `);
    }

} else {
    //usuario es menor de edad
    document.write(`<p>Hola <b>${_name+' '+_lastname }</b> usted tiene <b>${_date} años</b> por lo que es menor y no puede ejecutar nuestro programa de calculo</p>`);
}

// Es cierto que habra muchos fallos ya que mas adelante aprenderemos sobre validaciones para usuarios al dar bucles