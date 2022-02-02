/*

    Función que elimine los espacios en blanco a izquierda y derecha de una cadena.

*/

'use strict'

// Opcion 1
function clear(cadena) {
    if (cadena.length>=1) {
        return (cadena.trim());
    } else {
        return ('Cadena Ingresada esta Basia');
    }
}


console.log(clear(prompt('Ingrese una cadena con espacios delante y detras para limpiarla')));
