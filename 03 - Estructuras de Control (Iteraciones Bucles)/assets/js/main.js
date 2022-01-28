'use strict'

/*
    Las esructuras de Iteraciones o Bucles, nos permiten ejecutar una seccion de codigo, tantas veces como querramos
    tenermos: for, while, do-while
    es una bucle lo podremos cortar la ejecucion en cualquier momento con "break"
*/

// Sentencia For

//incremento
for(let i=0; i<=4; i++) {
    console.log(i); // nos mostrara de forma consecutiva e incremental hasta que se cumpla la condicion (resultado: 0,1,2,3,4)
}

//decremento
for(let i=4; i>=0; i--) {
    console.log(i); // nos mostrara de forma consecutiva e descendente hasta que se cumpla la condicion (resultado 4,3,2,1,0)
}


// While

var text = 'Hola Mundo';
var i = 0;
while((text.length !=0) && (i<5)) {
    console.log(i++ +' '+ text);
}

// en el programita anterior se repite e incrementa hasta que cumpla la condicion, mientras no la cumple seguira repitiendo
// Nota: la sentencia while puede que no se ejecute nunca, una o mas de una veces

// do-while
// Nota: la sentencia do-while como minimo se ejecuta una vez

var num = 0;
do {
    //num = num + 1;
    num += 1;
    console.log(num);
} while(num != 5);
