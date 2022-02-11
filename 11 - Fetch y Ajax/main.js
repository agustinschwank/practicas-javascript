'use strict'

// relizamos peticiones a un servidor externo
//https://reqres.in/api/users?per_page=20

var users = [];

const box = document.querySelector('#box');
const box2 = document.querySelector('#box2');
const box3 = document.querySelector('#box3');


/*
fetch('https://reqres.in/api/users?per_page=20') // es una promesa
    .then(function(datos) {
        datos = datos.json(); // convertimos a json usable
        return (datos);
    })
    .then(function(datos) {
        users = datos.data;
        // opcion 1 
        /*
        users.forEach(user => {
            var mos = user;
            console.log(mos.email);
        });
        users.map(user =>{
            var div = document.createElement('div');
            var plantilla = `<h3>Usuario: ${user.first_name} ${user.last_name}</h3><p>Email: ${user.email}</p><img src="${user.avatar}" width="100"/>`;
            div.innerHTML = plantilla;
            box.append(div);
        });
        var gif = document.querySelector('#gif');
        gif.style.display = 'none';
    });
*/

function petite1(){
    return (fetch('https://reqres.in/api/users?per_page=1'));
};
function petite2(){
    return (fetch('https://jsonplaceholder.typicode.com/users'));
};
function petite3(){
    return (fetch('https://jsonplaceholder.typicode.com/photos'));
};

petite1()
    .then (datos=>datos.json())
    .then (datos =>{
        listarDatos(datos.data);
        return(petite2());
    })
    .then (datos=>datos.json())
    .then (datos =>{
        listarDatos2(datos);
        return(petite3());
    })
    .then (datos=>datos.json())
    .then (datos =>{
        listarDatos3(datos);
    })

function listarDatos(x){
    x.map(d =>{
        var div = document.createElement('div');
        var plantilla = `<h3>Usuario: ${d.first_name} ${d.last_name}</h3><p>Email: ${d.email}</p><img src="${d.avatar}" width="100"/>`;
        div.innerHTML = plantilla;
        box.append(div);
    });
    var gif = document.querySelector('#gif');
    gif.style.display = 'none';
}

function listarDatos2(r){
    r.map(ch =>{
        var div = document.createElement('div');
        var plantilla = `<h3>Usuario: ${ch.name}</h3><p>Email: ${ch.email}</p>`;
        div.innerHTML = plantilla;
        box2.append(div);
    });
    var gif = document.querySelector('#gif2');
    gif.style.display = 'none';
}

function listarDatos3(px){
    px.map(pd =>{
        var div = document.createElement('div');
        var plantilla = `<img loading="lazy" src="${pd.url}" width="100"/>`;
        div.innerHTML = plantilla;
        box3.append(div);
    });
    var gif = document.querySelector('#gif3');
    gif.style.display = 'none';
}