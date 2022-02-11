/*
    Practica de muestra sensilla, hay que validar muchas csosas que veremos mas adelante
    esto fue una muestra
*/


'use strict'

var formulary = document.querySelector('#formulary');
var _name = document.querySelector('#name');
var _lastname = document.querySelector('#lastname');
var _email = document.querySelector('#email');

formulary.addEventListener('submit',function(e){
    e.preventDefault();

    var error = false;

    //validamos nombre
    var nombre = _name.value.trim();
    if(nombre.length>=1){
        nombre = nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();
        _name.style.border = '2px solid lightgreen';
    } else {
        error = true;
        _name.style.border = '2px solid red';
    }

    //validamos apellido
    var apellido = _lastname.value.trim();
    if(apellido.length>=1){
        apellido = apellido[0].toUpperCase() + apellido.slice(1).toLowerCase();
        _lastname.style.border = '2px solid lightgreen';
    } else {
        error = true;
        _lastname.style.border = '2px solid red';
    }

    //validamos email (lo consideramos valido)
    var email = _email.value.trim();
    var expresion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(expresion.test(email)){
        _email.style.border = '2px solid lightgreen';
    } else {
        error = true;
        _email.style.border = '2px solid red';
    }


    // hay error
    if(error != true) {
        var mostrar = document.getElementsByClassName('mostrar');
        mostrar[0].innerHTML = `<p>Nombre: <b>${nombre}</b> <br> Apellido: <b>${apellido}</b> <br> Email: <b>${_email.value}</b></p>`;
        _name.style.border = '';
        _lastname.style.border = '';
        _email.style.border = '';
        _name.value = '';
        _lastname.value = '';
        _email.value = '';
        
    } 

});
