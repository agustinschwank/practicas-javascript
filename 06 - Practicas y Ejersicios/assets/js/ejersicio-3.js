/*

    Escribir un programa que almacene la cadena de caracteres contraseña en una variable, luego pregunte al usuario 
    por la contraseña e imprima por consola si la contraseña introducida por el usuario coincide con la guardada 
    en la variable sin tener en cuenta mayúsculas y minúsculas.

*/

var _pass = prompt('Ingrese una Contraseña');
if(_pass == prompt('Recuerda esa Contraseña?')) {
    console.log(_pass);
} else {
    console.log('Contraseña No Coinsiden');
}