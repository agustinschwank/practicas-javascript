/*
    Desarrollar un programita simple, donde se le solicite al usuario ingresar un numero entre 10 y 20.
    Validar que el usuario ingrese correctamente un valor, y en el coso de no ingresarlo, solicitarle nuevamente (Hasta ser Correcto).
    Luego mostrar al usuaria las veces que realizo el intento.
*/

// Veamos el metodo 1

var num = Number(prompt('Ingrese un numero entre 10 y 20'));
var cont = 1;
while ((num<10)||(num>20)){
    cont += 1;
    num = Number(prompt('Debe ser un numero entre 10 y 20'));
}
console.log('Numero de Interntos: '+cont);


//Veamos otro metodo
var cont2 = 0;
do {
    cont2 += 1; 
    var num2 = Number(prompt('Ingrese un numero entre 10 y 20'));
} while ((num2<10)||(num2>20));
console.log('Numero de Interntos: '+cont2);


// Ahora limitemos en numero de intentos (max 3)
// se puede hacer con for ? (Ojo no es recoemndado, lo logico es utilizar mayormente do-while)

var cont3 = 0;
for(var i=3; i>=1; i--) {
    cont3 += 1;
    var num3 = Number(prompt(`Ingrese un numero entre 10 y 20, Le quedan ${i} intentos `));
    if ((num3>10)&&(num3<20)) {break;} // forzamos una salida 
}
console.log('Numero de Interntos: '+cont3);