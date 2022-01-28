/*
    Desarrollemos un programa donde el usuario ingrese un texto, el mismo no devera ser mayor a 50 catacteres. En caso
    de no superar ese maximo de caracteres, convierte el mismo todo a mayusculas. Informe todo por consola.
*/

var texto = prompt('Ingrese un texto menor a 50 caracteres');

//validamos que el usuario no ingrese un numero
if(texto.length != 0) {
    if ((isNaN(texto)) && (texto.length < 10)){
        //texto = texto.toUpperCase(); // devuelve una nueva cadena de caracteres
        console.log('Texto Convertido: '+texto.toUpperCase());
        console.log('Texto Original: '+texto);
    } else {
        console.log('No es posible ingresar unicamente un numero y el texto deve ser menor a 50 caracteres.');
    }
} else {
    console.log('Es necesarioingresar un texto');
}
