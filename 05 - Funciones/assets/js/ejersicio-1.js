/*

    Realizar un programa, donde no se sabe el numero de usuarios e solicite (nombres y apellidos "string"), junto a la edad de la persona.
    Guardar los datos ingresados, crear una funcion para ordenarlos por edad (meno a mayor) y luego mostrarlos E informe el año de nacimiento.

*/

// Funcion Ordenar Datos
function ordenar(usuarios) {
    for(let i=0; i<usuarios.length; i++){
        for (let j=0; j<usuarios.length; j++){
            if(usuarios[i][1]<usuarios[j][1]){
                var aux = usuarios[i];
                usuarios[i] = usuarios[j];
                usuarios[j] = aux;
            }
        }
    }
}

// Funcion cargar Datos
function cargador () {
    user = prompt('Ingrese nombre y Apellido de Usuario. Para finalizar Ingrese NONE');
    if (user != 'NONE') {
        edad = parseInt(prompt('Ingrese la Edad'));
    }
}



// PROGRAMA PRINCIPAL
var users = [], user, edad;
cargador();
while (user != 'NONE') {
    users.push([user,edad]);
    cargador();
}
// ordenamos
ordenar(users);
// Mostramos
users.forEach(u => {
    var date = 2022-u[1];
    console.log('Usuario: '+u[0]+' Edad: '+u[1]+' Año de Nacimiento: '+date);
});