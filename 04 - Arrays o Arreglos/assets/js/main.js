'use strict'
/*

 ARREGLOS O ARRAYS

*/

// arreglo Basico unidimencional

var nameList = ['Agustin','Lucas','Lucia','Juanita','Marcos','Mariana','Julio'];
console.log(nameList);

// reccorremos un arreglo y listamos sus elementos
document.write('<ul>');
for(let i=0; i<nameList.length; i++){
    document.write('<li>'+nameList[i]+'</li>');
}
document.write('</ul>');

// otra manera de crear arreglos
var lastnameList = new Array('Spocito','Gonzales','Garcia','Perez','Marino','Gimenez','Galperini');
console.log(lastnameList);

// otra manera de recorrer arreglos
document.write('<h3>Otra manera de listar arreglo</h3><ul>')
lastnameList.forEach(function(elemento, index, original){
    document.write('<li> Posicion '+index+' Contenido '+elemento+'</li>');
});
document.write('</ul>');

// Arreglo Multidimencional
var users = new Array(nameList, lastnameList);
console.log(users[1][3]); //ingreso al arreglo 2 elemento 4

// Pop y Push
nameList.pop(); // elimina ultimo elemento del arreglo
nameList.push('Mar'); // Agrega un elemento al final del arreflo
nameList.splice(1,1); // elimina elemento en la posicion indicada y cuantos despues de la posicion indicada
console.log(nameList);

// Quiero eliminar uno dato que e buscado
var userList = ['user01', 'user02', 'user03', 'user04', 'user05', 'malena_22', 'user07', 'user08'];
console.log(userList);

var position = userList.indexOf('malena_22'); // uuario ingresa elemento que quiere eliminar y buscamos su posicion
userList.splice(position,1); // eliminamos ese dato
console.log(userList);


/* Ordenamos Un Arreglo */
var nombres = ['Agustin','Lucas','Lucia','Juanita','Marcos','Mariana','Julio','Antonalla','Emilio','Pedro'];
console.log(nombres);
nombres.sort().reverse(); // sort ordenamos y reverse le damos la vuelta
console.log(nombres);

// Una manera mas para recorrer el arreglo
for(let numPosition in nombres) {
    console.log(nombres[numPosition]);
}

// Otra manera de buscar utilizando some
var buscado = nombres.some(nombre => nombre == 'Lucia');
console.log(buscado); // Si no esta retorna false y si esta retorna true