'use strict'

// creando un OBJETO JSON
const usuario = {
    name: 'Agustin',
    lastname: 'Garcia',
    year: 15,
    city: 'Barcelona',
    country: 'España'
}

console.log(typeof(usuario)); // nos informa que es un objeto
console.log(usuario); // nos muestra el objeto con sus campos
console.log(usuario.city); // accedemos al valor de dicho campo (forma 1)
console.log(usuario['city']); // tambien no entrega el valor del campo (forma 2)

// arreglo de JSON
const listUsers = [{
    name: 'Agustin',
    lastname: 'Garcia',
    year: 15,
    city: 'Barcelona',
    country: 'España'
    },
    {
        name: 'Marcos',
        lastname: 'Perez',
        year: 32,
        city: 'Buenos Aires',
        country: 'Argentina'
    },
    {
        name: 'Lucas',
        lastname: 'Prato',
        year: 16,
        city: 'Miami',
        country: 'Estados Unidos'
    }

];

console.log(listUsers[1].name+' '+listUsers[1].lastname); // accedemos al usuario 2 y vemos su nombre y apellido


const listFilms = {
    name: 'Harry Potter',
    active: true,
    sagas: [
        {
            name: 'La piedra filosofal'
        },
        {
            name: 'La cámara secreta'
        },
        {
            name: 'El prisionero de Azkaban'
        },
        {
            name: 'El cáliz de fuego'
        }
    ]
}

// listamos las sagas de harry poter
listFilms.sagas.forEach((saga)=>{
    console.log(listFilms.name+' y '+saga.name);
});