/*

    Crear un programa donde se listen Algunos lenguajes de programacion, que estan almacenados en un arreglo,
    permitiendole al usuario agregar nuevos, o bien en caso de aver algun error en la lista, que este pueda ser eliminado.

*/

'use strict'


// ficcionamos un caso
var lenguajes = ['PHP','PYTHON','JAVASCRIPT','C++','HTML','JAVA','C#','PASCAL', 'CSS3'];
// le mostramos la lista al usuario
lenguajes.forEach((lenguaje, index) => {
    console.log('Posicion: '+index+' lenguaje: '+lenguaje);
});
// usuario detecta que HTML Y CSS3 No es lenguaje como tal y procede a eliminarlo ingresando por teclado (Ficcionamos ese ingreso en un arreglo)
var datoIngresado = ['HTML','CSS3'];
for(let i=0; i<datoIngresado.length; i++){
    for(let j=0; j<lenguajes.length; j++){
        if(lenguajes[j] == datoIngresado[i]){
            lenguajes.splice(j,1);
        }
    }
};
console.log(lenguajes); // le mostramos esa eliminacion de datos
var nuevosLenguaje = ['SQL','RUBY','KOTLIN', 'POSTSCRIPT'];
for(let position in nuevosLenguaje) {
    lenguajes.push(nuevosLenguaje[position]);
}
console.log(lenguajes.sort());
// lo agregamos al arreglo y ordenamos

