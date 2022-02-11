'use strict'

// leemos el archivo json provincias
//console.log(typeof(provincias)); // es un objeto que esta en otro archivo
//console.log(provincias[0].provincias[14].id); // identificador de provicia san luis
//console.log(localidades[0].localidades);

/*
console.log(localidades[0]);
var numero = 5;

var buscarLocalidads = provincias[0].provincias[numero].id;
var citis = []; var i=0;
localidades[0].localidades.forEach((loc)=>{
    if(loc.provincia.id === buscarLocalidads){
        citis[i++] = {localidad: loc.municipio.nombre, departamento: loc.departamento.nombre, categoria: loc.categoria}
    }
});

console.log(citis);
document.write(`<h3>${provincias[0].provincias[numero].nombre} Posee: <b style="color:red;">${citis.length}</b> localidades en total</h3>`);
document.write('<ul>');
var anterior =''; var total = 0;
citis.forEach((citi)=>{
    document.write(`<li>${citi.departamento}   (  ${citi.localidad}   )</li>`);
    if(citi.departamento != anterior){
        anterior = citi.departamento;
        total = total + 1;
    }
})
document.write('</ul>');
document.write ('departamentos: '+total);*/

const search =  document.getElementById('search');
const box = document.getElementsByClassName('box')[0];
var ul = document.createElement('ul');


provincias[0].provincias.forEach((provincia)=>{
    var li = document.createElement('li');
    li.textContent = provincia.nombre;
    ul.append(li);
    box.append(ul);
});

console.log(document.querySelector('#resultado'));
